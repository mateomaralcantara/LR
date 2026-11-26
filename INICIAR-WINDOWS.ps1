$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot
Write-Host '=== LIDERAZGO RESPONSABLE OS ===' -ForegroundColor Cyan
if (-not (Get-Command node -ErrorAction SilentlyContinue)) { throw 'Instala Node.js 20.9 o superior.' }
if (-not (Test-Path '.env.local')) { Copy-Item '.env.example' '.env.local'; Write-Host 'Archivo .env.local creado (IA opcional).' -ForegroundColor Yellow }
if (-not (Test-Path 'node_modules')) { Write-Host 'Instalando dependencias...' -ForegroundColor Cyan; npm install; if ($LASTEXITCODE -ne 0) { throw 'Error en npm install' } }
Write-Host 'Abre http://localhost:3010 en tu navegador.' -ForegroundColor Green
npm run dev
