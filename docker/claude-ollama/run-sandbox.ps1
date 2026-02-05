# Claude-Ollama Sandbox: Start from WSL to avoid Windows virtiofs path issues.
# Requires: Docker Desktop (WSL2), Ollama on host (localhost:11434).

$ProjectRoot = (Resolve-Path (Join-Path $PSScriptRoot "..\..")).Path
$drive = $ProjectRoot.Substring(0, 1).ToLower()
$rest = $ProjectRoot.Substring(2).Replace('\', '/')
$ProjectRootWsl = "/mnt/$drive$rest"

Write-Host "Project (Windows): $ProjectRoot"
Write-Host "Project (WSL):     $ProjectRootWsl"
Write-Host ""

# Build image from project root so Dockerfile context is correct
Push-Location $ProjectRoot
try {
    docker build -t claude-ollama-template:v1 -f docker/claude-ollama/Dockerfile .
    if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
} finally { Pop-Location }

# Run sandbox from WSL with Linux path (avoids virtiofs EINVAL on Windows paths).
# --name avoids "invalid VM name" when path contains slashes/dots.
$wslCmd = @"
cd '$ProjectRootWsl' && docker sandbox run --load-local-template -t claude-ollama-template:v1 --name claude-ollama claude '$ProjectRootWsl'
"@
wsl -e bash -c $wslCmd
