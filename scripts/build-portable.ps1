param(
    [string]$Destination = (Join-Path (Split-Path -Parent $PSScriptRoot) 'dist')
)

$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$manifest = Join-Path $projectRoot 'desktop/Cargo.toml'
$target = 'x86_64-pc-windows-msvc'

node --check (Join-Path $projectRoot 'frontend/assets/app.js')
if ($LASTEXITCODE -ne 0) { throw 'JavaScript syntax check failed.' }

$metadata = cargo metadata --no-deps --locked --format-version 1 --manifest-path $manifest
if ($LASTEXITCODE -ne 0) { throw 'Unable to find the Rust build output directory.' }
$targetDirectory = ($metadata | ConvertFrom-Json).target_directory

$cargoDirectory = if ($env:CARGO_HOME) {
    [IO.Path]::GetFullPath($env:CARGO_HOME)
} else {
    Join-Path ([Environment]::GetFolderPath('UserProfile')) '.cargo'
}
$separator = [char]0x1f
$previousFlags = [Environment]::GetEnvironmentVariable('CARGO_ENCODED_RUSTFLAGS')
$flags = if ($null -ne $previousFlags) {
    $previousFlags -split $separator
} elseif ($env:RUSTFLAGS) {
    $env:RUSTFLAGS.Trim() -split '\s+'
}
$remapFlags = @(
    "--remap-path-prefix=$projectRoot=/pixel-soul-studio"
    "--remap-path-prefix=$cargoDirectory=/cargo"
)

# Rust panic messages and object files can otherwise embed workstation paths.
try {
    $env:CARGO_ENCODED_RUSTFLAGS = (@($flags | Where-Object { $_ }) + $remapFlags) -join $separator
    cargo test --locked --release --lib --target $target --manifest-path $manifest
    if ($LASTEXITCODE -ne 0) { throw 'Rust tests failed.' }

    cargo build --locked --release --target $target --manifest-path $manifest
    if ($LASTEXITCODE -ne 0) { throw 'The portable executable failed to build.' }
} finally {
    [Environment]::SetEnvironmentVariable('CARGO_ENCODED_RUSTFLAGS', $previousFlags)
}

New-Item -ItemType Directory -Path $Destination -Force | Out-Null
$executable = Join-Path $Destination 'PixelSoulStudio-Windows-x64.exe'
Copy-Item -LiteralPath (Join-Path $targetDirectory "$target/release/PixelSoulStudio.exe") -Destination $executable
Get-FileHash -Algorithm SHA256 -LiteralPath $executable
