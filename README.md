# Pixel Soul Studio

Pixel Soul Studio 是 Windows 上的本機像素美術工具，支援圖片像素化、固定調色盤、像素編輯與圖層、批次轉換、背景移除，以及整數倍率 PNG 匯出。

## 下載綠色版

從 [GitHub Releases](https://github.com/IllumiLove/PixelSoulStudio/releases/latest) 下載 `PixelSoulStudio-Windows-x64.exe`，在 Windows 10 或 11（x64）直接執行。程式可離線使用。若電腦缺少 WebView2 Runtime，可由 [Microsoft](https://developer.microsoft.com/microsoft-edge/webview2/#download) 安裝。

## 使用方式

- **像素化**：開啟或拖入 PNG、JPG、WebP，調整像素尺寸與調色盤，按「生成預覽」比較原圖和結果。接著點「編輯結果」，或直接匯出 PNG。
- **像素編輯**：開啟圖片或接續編輯像素化結果。可以繪圖、去背、調整圖層，或用復原與重做修正操作。匯出 PNG 時會合成可見圖層。
- **批次處理**：選擇來源與輸出資料夾，確認待處理檔案，再設定共同的像素化參數和輸出倍率。處理進度顯示在同一頁。
- **尺寸與色彩轉換**：設定尺寸、適配方式、色深與調色盤，畫布會即時更新預覽，可從上方匯出 PNG。

## 開發與建置

需要 Windows x64、Rust MSVC 工具鏈、Visual Studio Build Tools 的「使用 C++ 的桌面開發」工作負載、WebView2 Runtime、PowerShell 7 與 Node.js 20 以上。

```powershell
node --check frontend/assets/app.js
cargo test --locked --manifest-path desktop/Cargo.toml
cargo run --locked --manifest-path desktop/Cargo.toml
```

執行 `pwsh -File scripts/build-portable.ps1` 可在 `dist/` 產生單檔 EXE。`frontend/` 放的是桌面程式直接載入的 HTML、CSS 與 JavaScript，`desktop/` 是 Tauri 2 和 Rust 圖片處理介面，`third_party/` 保留內建的像素處理核心。

## 授權

自有程式碼採用 [0BSD](LICENSE)，可自由使用、二改、二次開發及再散布，包括商業用途。第三方元件依各自的授權條款提供，完整文字在 [第三方授權](frontend/third-party-notices.txt)，也可在程式的「設定」中閱讀。
