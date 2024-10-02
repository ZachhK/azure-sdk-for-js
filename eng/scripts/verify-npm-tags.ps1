param (
  [Parameter(mandatory = $true)]
  $packageArtifact,
  [Parameter(mandatory = $true)]
  $workingDirectory
)

$HelpersPath = Join-Path $PSScriptRoot "helpers"
. (Join-Path $HelpersPath npm-helpers.ps1)

$pkgProps = Get-javascript-PackageInfoFromPackageFile -pkg $packageArtifact -workingDirectory $workingDirectory
if (!$pkgProps)
{
  Write-Error "Failed to parse package artifact $packageArtifact to get package name"
  exit 1
}

$packageName = $pkgProps.PackageId
# TODO: delete testing comments below
#'@azure/eventhubs-checkpointstore-table' alpha, no beta, no GA
#'@azure/openai' alpha, beta, no GA
#'@azure/video-indexer-widgets' no alpha, no beta, GA
#'@azure/template' alpha, beta, GA
#$pkgProps.PackageId
Write-Host "Verify npm tag versions for package $packageName"
$packageVersions = npm view $packageName versions --json | ConvertFrom-Json
$validDev = $packageVersions | ? { $_ -match "alpha" } | Select-Object -Last 1
$validNext = $packageVersions | ? { $_ -match "beta" } | Select-Object -Last 1
$validLatest = $packageVersions | ? { !($_ -match "alpha") -and !($_ -match "beta") } | Select-Object -Last 1
if (!$validLatest) {
  Write-Host "No GA package found"
  $validLatest = $packageVersions | ? { $_ -match "beta" } | Select-Object -Last 1
}
if (!$validLatest) {
  Write-Host "No beta package found"
  $validLatest = $packageVersions | ? { $_ -match "alpha" } | Select-Object -Last 1
}

$currentDev = npm view $packageName@dev version --silent
$currentNext = npm view $packageName@next version --silent
$currentLatest = npm view $packageName@latest version --silent

if ($validDev) {
  Write-Host "Dev version should be: $validDev, current dev version: $currentDev"
  if ($validDev -ne $currentDev) {
    Write-Host "Changing dev version from $currentDev to $validDev"
    # TODO: add npm command for tag change
  }
}

if ($validNext) {
  Write-Host "Next version should be: $validNext, current next version: $currentNext"
  if ($validNext -ne $currentNext) {
    Write-Host "Changing next version from $currentNext to $validNext"
    # TODO: add npm command for tag change
  }
}

if ($validLatest) {
  Write-Host "Latest version should be: $validLatest, current latest version: $currentLatest"
  if ($validLatest -ne $currentLatest) {
    Write-Host "Changing latest version from $currentLatest to $validLatest"
    # TODO: add npm command for tag change
  }
}
