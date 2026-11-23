use base64::{engine::general_purpose::STANDARD as BASE64, Engine as _};
use image::{ImageFormat, Rgba, RgbaImage};
use serde::Deserialize;
use serde_json::{json, Value};
use std::{
    collections::{HashMap, VecDeque},
    fs,
    io::Cursor,
    path::{Path, PathBuf},
};
use tauri::AppHandle;
use tauri_plugin_opener::OpenerExt;

#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
struct ProcessOptions {
    input: String,
    color_count: Option<usize>,
    pixel_size: Option<f64>,
    palette: Option<String>,
}

#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
struct UniformCanvasOptions {
    width: u32,
    height: u32,
    anchor: Option<String>,
    background: Option<String>,
}

fn mime_for(path: &Path) -> &'static str {
    match path
        .extension()
        .and_then(|value| value.to_str())
        .unwrap_or_default()
        .to_ascii_lowercase()
        .as_str()
    {
        "jpg" | "jpeg" => "image/jpeg",
        "webp" => "image/webp",
        _ => "image/png",
    }
}

fn encode_data_url(bytes: &[u8], mime: &str) -> String {
    format!("data:{mime};base64,{}", BASE64.encode(bytes))
}

fn decode_data_url(value: &str) -> Result<Vec<u8>, String> {
    let (_, payload) = value
        .split_once(',')
        .ok_or_else(|| "Invalid data URL".to_string())?;
    BASE64.decode(payload).map_err(|error| error.to_string())
}

fn process_image(options: &ProcessOptions) -> Result<Vec<u8>, String> {
    let input = fs::read(&options.input).map_err(|error| error.to_string())?;
    let input = if matches!(image::guess_format(&input), Ok(ImageFormat::WebP)) {
        let image = image::load_from_memory_with_format(&input, ImageFormat::WebP)
            .map_err(|error| error.to_string())?
            .into_rgba8();
        encode_png(&image)?
    } else {
        input
    };
    spritefusion_pixel_snapper::process_image_bytes(
        &input,
        Some(options.color_count.unwrap_or(16).clamp(2, 256) as u32),
        options.pixel_size,
        options.palette.as_deref().filter(|value| !value.is_empty()),
    )
    .map_err(|error| error.to_string())
}

async fn run_image_job<T: Send + 'static>(
    job: impl FnOnce() -> Result<T, String> + Send + 'static,
) -> Result<T, String> {
    tauri::async_runtime::spawn_blocking(job)
        .await
        .map_err(|error| error.to_string())?
}

fn write_image(path: &Path, bytes: &[u8]) -> Result<(), String> {
    if let Some(parent) = path.parent() {
        fs::create_dir_all(parent).map_err(|error| error.to_string())?;
    }
    fs::write(path, bytes).map_err(|error| error.to_string())
}

#[tauri::command]
fn read_image(path: String) -> Result<String, String> {
    let path = PathBuf::from(path);
    let bytes = fs::read(&path).map_err(|error| error.to_string())?;
    Ok(encode_data_url(&bytes, mime_for(&path)))
}

#[tauri::command]
fn image_dimensions_file(path: String) -> Result<(u32, u32), String> {
    image::ImageReader::open(path)
        .map_err(|error| error.to_string())?
        .with_guessed_format()
        .map_err(|error| error.to_string())?
        .into_dimensions()
        .map_err(|error| error.to_string())
}

#[tauri::command]
fn save_data_url(data_url: String, path: String) -> Result<(), String> {
    write_image(Path::new(&path), &decode_data_url(&data_url)?)
}

#[tauri::command]
fn save_clipboard_image(data_url: String) -> Result<String, String> {
    let path =
        std::env::temp_dir().join(format!("pixel-soul-clipboard-{}.png", std::process::id()));
    fs::write(&path, decode_data_url(&data_url)?).map_err(|error| error.to_string())?;
    Ok(path.to_string_lossy().into_owned())
}

#[tauri::command]
fn list_batch_images(path: String) -> Result<Vec<String>, String> {
    let mut images = Vec::new();
    for entry in fs::read_dir(path).map_err(|error| error.to_string())? {
        let entry = entry.map_err(|error| error.to_string())?;
        let path = entry.path();
        let supported = path
            .extension()
            .and_then(|value| value.to_str())
            .map(|value| {
                matches!(
                    value.to_ascii_lowercase().as_str(),
                    "png" | "jpg" | "jpeg" | "webp"
                )
            })
            .unwrap_or(false);
        if path.is_file() && supported {
            images.push(path.to_string_lossy().into_owned());
        }
    }
    images.sort();
    Ok(images)
}

#[tauri::command]
async fn process_preview(options: ProcessOptions) -> Result<Value, String> {
    run_image_job(move || {
        let bytes = process_image(&options)?;
        Ok(json!({ "dataUrl": encode_data_url(&bytes, "image/png") }))
    })
    .await
}

#[tauri::command]
async fn process_batch_image(
    options: ProcessOptions,
    output: String,
    scale: Option<u32>,
) -> Result<(), String> {
    run_image_job(move || {
        let output = Path::new(&output);
        let bytes = process_image(&options)?;
        let scale = scale.unwrap_or(1);
        if scale <= 1 {
            return write_image(output, &bytes);
        }
        let image = image::load_from_memory(&bytes).map_err(|error| error.to_string())?;
        let resized = image.resize_exact(
            image.width().saturating_mul(scale),
            image.height().saturating_mul(scale),
            image::imageops::FilterType::Nearest,
        );
        let mut encoded = Cursor::new(Vec::new());
        resized
            .write_to(&mut encoded, ImageFormat::Png)
            .map_err(|error| error.to_string())?;
        write_image(output, &encoded.into_inner())
    })
    .await
}

fn parse_background(value: Option<&str>) -> Rgba<u8> {
    let value = value.unwrap_or("#00000000").trim_start_matches('#');
    let parse = |range| u8::from_str_radix(&value[range], 16).unwrap_or(0);
    match value.len() {
        6 => Rgba([parse(0..2), parse(2..4), parse(4..6), 255]),
        8 => Rgba([parse(0..2), parse(2..4), parse(4..6), parse(6..8)]),
        _ => Rgba([0, 0, 0, 0]),
    }
}

fn anchor_offset(anchor: Option<&str>, canvas: (u32, u32), image: (u32, u32)) -> (i64, i64) {
    let horizontal = canvas.0.saturating_sub(image.0);
    let vertical = canvas.1.saturating_sub(image.1);
    let anchor = anchor.unwrap_or("center").to_ascii_lowercase();
    let x = if anchor.contains("left") {
        0
    } else if anchor.contains("right") {
        horizontal
    } else {
        horizontal / 2
    };
    let y = if anchor.contains("top") {
        0
    } else if anchor.contains("bottom") {
        vertical
    } else {
        vertical / 2
    };
    (x as i64, y as i64)
}

fn uniform_canvas_bytes(bytes: &[u8], options: &UniformCanvasOptions) -> Result<Vec<u8>, String> {
    let image = image::load_from_memory(bytes)
        .map_err(|error| error.to_string())?
        .to_rgba8();
    let mut canvas = RgbaImage::from_pixel(
        options.width.max(image.width()),
        options.height.max(image.height()),
        parse_background(options.background.as_deref()),
    );
    let offset = anchor_offset(
        options.anchor.as_deref(),
        (canvas.width(), canvas.height()),
        (image.width(), image.height()),
    );
    image::imageops::overlay(&mut canvas, &image, offset.0, offset.1);
    let mut encoded = Cursor::new(Vec::new());
    canvas
        .write_to(&mut encoded, ImageFormat::Png)
        .map_err(|error| error.to_string())?;
    Ok(encoded.into_inner())
}

fn encode_png(image: &RgbaImage) -> Result<Vec<u8>, String> {
    let mut encoded = Cursor::new(Vec::new());
    image
        .write_to(&mut encoded, ImageFormat::Png)
        .map_err(|error| error.to_string())?;
    Ok(encoded.into_inner())
}

fn color_distance_squared(left: Rgba<u8>, right: Rgba<u8>) -> u32 {
    let red = left[0] as i32 - right[0] as i32;
    let green = left[1] as i32 - right[1] as i32;
    let blue = left[2] as i32 - right[2] as i32;
    (red * red + green * green + blue * blue) as u32
}

fn flood_clear(
    image: &mut RgbaImage,
    seeds: impl IntoIterator<Item = (u32, u32)>,
    reference: Rgba<u8>,
    tolerance: u8,
) -> u64 {
    let width = image.width();
    let height = image.height();
    if width == 0 || height == 0 {
        return 0;
    }

    let threshold = 3 * u32::from(tolerance).pow(2);
    let mut visited = vec![false; width as usize * height as usize];
    let mut queue = VecDeque::new();
    for (x, y) in seeds {
        if x < width && y < height {
            queue.push_back((x, y));
        }
    }

    let mut removed = 0;
    while let Some((x, y)) = queue.pop_front() {
        let index = y as usize * width as usize + x as usize;
        if visited[index] {
            continue;
        }
        visited[index] = true;

        let pixel = *image.get_pixel(x, y);
        if pixel[3] == 0 || color_distance_squared(pixel, reference) > threshold {
            continue;
        }

        image.put_pixel(x, y, Rgba([pixel[0], pixel[1], pixel[2], 0]));
        removed += 1;
        if x > 0 {
            queue.push_back((x - 1, y));
        }
        if x + 1 < width {
            queue.push_back((x + 1, y));
        }
        if y > 0 {
            queue.push_back((x, y - 1));
        }
        if y + 1 < height {
            queue.push_back((x, y + 1));
        }
    }
    removed
}

fn remove_picked_bytes(
    bytes: &[u8],
    x: u32,
    y: u32,
    tolerance: u8,
) -> Result<(Vec<u8>, u64), String> {
    let mut image = image::load_from_memory(bytes)
        .map_err(|error| error.to_string())?
        .to_rgba8();
    if x >= image.width() || y >= image.height() {
        return Err(format!(
            "背景選取座標超出圖片範圍：({x}, {y}) / {}x{}",
            image.width(),
            image.height()
        ));
    }
    let reference = *image.get_pixel(x, y);
    let removed = flood_clear(&mut image, [(x, y)], reference, tolerance.min(96));
    Ok((encode_png(&image)?, removed))
}

fn remove_background_bytes(bytes: &[u8], tolerance: u8) -> Result<(Vec<u8>, u64), String> {
    let mut image = image::load_from_memory(bytes)
        .map_err(|error| error.to_string())?
        .to_rgba8();
    let width = image.width();
    let height = image.height();
    if width == 0 || height == 0 {
        return Err("圖片尺寸不可為 0".into());
    }

    let mut border = Vec::new();
    for x in 0..width {
        border.push((x, 0));
        if height > 1 {
            border.push((x, height - 1));
        }
    }
    for y in 1..height.saturating_sub(1) {
        border.push((0, y));
        if width > 1 {
            border.push((width - 1, y));
        }
    }

    let mut histogram: HashMap<(u8, u8, u8), usize> = HashMap::new();
    for &(x, y) in &border {
        let pixel = image.get_pixel(x, y);
        if pixel[3] > 0 {
            let bucket = (pixel[0] / 16, pixel[1] / 16, pixel[2] / 16);
            *histogram.entry(bucket).or_default() += 1;
        }
    }
    let dominant = histogram
        .into_iter()
        .max_by_key(|(_, count)| *count)
        .map(|(bucket, _)| bucket)
        .ok_or_else(|| "圖片邊緣已經是透明背景".to_string())?;

    let mut sums = [0u64; 3];
    let mut count = 0u64;
    for &(x, y) in &border {
        let pixel = image.get_pixel(x, y);
        if pixel[3] > 0 && (pixel[0] / 16, pixel[1] / 16, pixel[2] / 16) == dominant {
            sums[0] += u64::from(pixel[0]);
            sums[1] += u64::from(pixel[1]);
            sums[2] += u64::from(pixel[2]);
            count += 1;
        }
    }
    let reference = Rgba([
        (sums[0] / count) as u8,
        (sums[1] / count) as u8,
        (sums[2] / count) as u8,
        255,
    ]);
    let threshold = tolerance.clamp(8, 96);
    let seed_limit = 3 * u32::from(threshold).pow(2);
    let seeds: Vec<_> = border
        .into_iter()
        .filter(|&(x, y)| {
            let pixel = *image.get_pixel(x, y);
            pixel[3] > 0 && color_distance_squared(pixel, reference) <= seed_limit
        })
        .collect();
    let removed = flood_clear(&mut image, seeds, reference, threshold);
    Ok((encode_png(&image)?, removed))
}

#[tauri::command]
async fn remove_picked(
    data_url: String,
    x: u32,
    y: u32,
    tolerance: Option<u8>,
) -> Result<Value, String> {
    run_image_job(move || {
        let (output, removed) =
            remove_picked_bytes(&decode_data_url(&data_url)?, x, y, tolerance.unwrap_or(12))?;
        Ok(json!({
            "dataUrl": encode_data_url(&output, "image/png"),
            "removed": removed
        }))
    })
    .await
}

#[tauri::command]
async fn remove_background(data_url: String, tolerance: Option<u8>) -> Result<Value, String> {
    run_image_job(move || {
        let (output, removed) =
            remove_background_bytes(&decode_data_url(&data_url)?, tolerance.unwrap_or(28))?;
        Ok(json!({
            "dataUrl": encode_data_url(&output, "image/png"),
            "removed": removed
        }))
    })
    .await
}

#[tauri::command]
async fn apply_uniform_canvas(
    data_url: String,
    options: UniformCanvasOptions,
) -> Result<Value, String> {
    run_image_job(move || {
        let output = uniform_canvas_bytes(&decode_data_url(&data_url)?, &options)?;
        Ok(json!({ "dataUrl": encode_data_url(&output, "image/png") }))
    })
    .await
}

#[tauri::command]
async fn apply_uniform_canvas_file(
    path: String,
    options: UniformCanvasOptions,
) -> Result<(), String> {
    run_image_job(move || {
        let bytes = fs::read(&path).map_err(|error| error.to_string())?;
        fs::write(path, uniform_canvas_bytes(&bytes, &options)?).map_err(|error| error.to_string())
    })
    .await
}

#[tauri::command]
fn open_folder(app: AppHandle, path: String) -> Result<(), String> {
    app.opener()
        .open_path(path, None::<&str>)
        .map_err(|error| error.to_string())
}

pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            read_image,
            image_dimensions_file,
            save_data_url,
            save_clipboard_image,
            list_batch_images,
            process_preview,
            process_batch_image,
            apply_uniform_canvas,
            apply_uniform_canvas_file,
            remove_background,
            remove_picked,
            open_folder,
        ])
        .run(tauri::generate_context!())
        .expect("error while running Pixel Soul Studio");
}

#[cfg(test)]
mod tests {
    use super::*;
    use image::GenericImageView;

    #[test]
    fn data_url_round_trip() {
        let bytes = b"pixel-soul";
        let encoded = encode_data_url(bytes, "application/octet-stream");
        assert_eq!(decode_data_url(&encoded).unwrap(), bytes);
    }

    #[test]
    fn anchor_offsets_are_stable() {
        assert_eq!(anchor_offset(Some("top-left"), (100, 80), (20, 10)), (0, 0));
        assert_eq!(anchor_offset(Some("center"), (100, 80), (20, 10)), (40, 35));
        assert_eq!(
            anchor_offset(Some("bottom-right"), (100, 80), (20, 10)),
            (80, 70)
        );
    }

    #[test]
    fn uniform_canvas_is_png() {
        let input = RgbaImage::from_pixel(2, 2, Rgba([255, 0, 0, 255]));
        let mut encoded = Cursor::new(Vec::new());
        input.write_to(&mut encoded, ImageFormat::Png).unwrap();
        let output = uniform_canvas_bytes(
            &encoded.into_inner(),
            &UniformCanvasOptions {
                width: 4,
                height: 5,
                anchor: Some("center".into()),
                background: Some("#00000000".into()),
            },
        )
        .unwrap();
        let image = image::load_from_memory(&output).unwrap();
        assert_eq!(image.dimensions(), (4, 5));
    }

    #[test]
    fn embedded_core_previews_and_scales_a_batch_image() {
        let directory = tempfile::tempdir().unwrap();
        let input = directory.path().join("input.webp");
        let output = directory.path().join("output.png");
        let image = RgbaImage::from_fn(12, 12, |x, y| {
            if (x / 3 + y / 3) % 2 == 0 {
                Rgba([255, 90, 30, 255])
            } else {
                Rgba([20, 30, 60, 255])
            }
        });
        image.save(&input).unwrap();

        let options = || ProcessOptions {
            input: input.to_string_lossy().into_owned(),
            color_count: Some(4),
            pixel_size: Some(3.0),
            palette: None,
        };
        let preview = tauri::async_runtime::block_on(process_preview(options())).unwrap();
        let bytes = decode_data_url(preview["dataUrl"].as_str().unwrap()).unwrap();
        let preview = image::load_from_memory(&bytes).unwrap();
        assert!(preview.width() > 0 && preview.height() > 0);
        assert!(!output.exists());

        tauri::async_runtime::block_on(process_batch_image(
            options(),
            output.to_string_lossy().into_owned(),
            Some(2),
        ))
        .unwrap();
        let batch = image::open(output).unwrap();
        assert_eq!(
            batch.dimensions(),
            (preview.width() * 2, preview.height() * 2)
        );
    }

    #[test]
    fn picked_background_only_clears_connected_region() {
        let mut image = RgbaImage::from_pixel(5, 5, Rgba([255, 255, 255, 255]));
        image.put_pixel(2, 0, Rgba([0, 0, 0, 255]));
        image.put_pixel(2, 1, Rgba([0, 0, 0, 255]));
        image.put_pixel(2, 2, Rgba([0, 0, 0, 255]));
        image.put_pixel(2, 3, Rgba([0, 0, 0, 255]));
        image.put_pixel(2, 4, Rgba([0, 0, 0, 255]));
        let input = encode_png(&image).unwrap();
        let (output, removed) = remove_picked_bytes(&input, 0, 0, 0).unwrap();
        let result = image::load_from_memory(&output).unwrap().to_rgba8();
        assert_eq!(removed, 10);
        assert_eq!(result.get_pixel(0, 0)[3], 0);
        assert_eq!(result.get_pixel(4, 4)[3], 255);
    }

    #[test]
    fn automatic_background_keeps_center_subject() {
        let mut image = RgbaImage::from_pixel(7, 7, Rgba([245, 245, 245, 255]));
        for y in 2..5 {
            for x in 2..5 {
                image.put_pixel(x, y, Rgba([30, 50, 90, 255]));
            }
        }
        let input = encode_png(&image).unwrap();
        let (output, removed) = remove_background_bytes(&input, 28).unwrap();
        let result = image::load_from_memory(&output).unwrap().to_rgba8();
        assert_eq!(removed, 40);
        assert_eq!(result.get_pixel(0, 0)[3], 0);
        assert_eq!(result.get_pixel(3, 3), &Rgba([30, 50, 90, 255]));
    }
}
