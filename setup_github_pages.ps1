# setup_github_pages.ps1
# Lance ce script depuis le dossier dashboard/
# Prerequis : GitHub CLI installe (gh auth login)

$RepoName   = "cla-sport-dashboard"
$GithubUser = "colahaye"
$DashboardDir = Split-Path -Parent $MyInvocation.MyCommand.Path

Write-Host ""
Write-Host "=== Setup GitHub Pages - CLA Sport Dashboard ===" -ForegroundColor Cyan
Write-Host "Repo : github.com/$GithubUser/$RepoName"
Write-Host "Dossier : $DashboardDir"
Write-Host ""

# Verifications
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "ERREUR : Git introuvable. Installe Git : https://git-scm.com/" -ForegroundColor Red
    pause
    exit 1
}
if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    Write-Host "ERREUR : GitHub CLI introuvable. Installe-le : https://cli.github.com/" -ForegroundColor Red
    pause
    exit 1
}

Set-Location $DashboardDir

# Init git
if (-not (Test-Path ".git")) {
    Write-Host "Initialisation git..." -ForegroundColor Yellow
    git init
    git branch -M main
} else {
    Write-Host "Repo git deja initialise" -ForegroundColor Green
}

# Premier commit
git add -A
$gitStatus = git status --porcelain
if ($gitStatus) {
    Write-Host "Commit initial..." -ForegroundColor Yellow
    git commit -m "init: CLA Sport Dashboard"
} else {
    Write-Host "Rien a committer" -ForegroundColor Green
}

# Creer le repo GitHub et pousser
$repoCheck = gh repo view "$GithubUser/$RepoName" 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "Creation du repo github.com/$GithubUser/$RepoName..." -ForegroundColor Yellow
    gh repo create "$GithubUser/$RepoName" --public --source=. --remote=origin --push
} else {
    Write-Host "Repo deja existant, push en cours..." -ForegroundColor Green
    git remote set-url origin "https://github.com/$GithubUser/$RepoName.git" 2>$null
    if ($LASTEXITCODE -ne 0) {
        git remote add origin "https://github.com/$GithubUser/$RepoName.git"
    }
    git push -u origin main
}

# Activer GitHub Pages
Write-Host "Activation de GitHub Pages..." -ForegroundColor Yellow
gh api "repos/$GithubUser/$RepoName/pages" --method POST --field build_type=workflow 2>$null
if ($LASTEXITCODE -eq 0) {
    Write-Host "GitHub Pages active" -ForegroundColor Green
} else {
    Write-Host "GitHub Pages deja actif ou a activer manuellement dans Settings > Pages > Source: GitHub Actions" -ForegroundColor Yellow
}

# Ajouter les secrets
Write-Host "Ajout des secrets Intervals.icu..." -ForegroundColor Yellow
gh secret set INTERVALS_ATHLETE_ID --repo "$GithubUser/$RepoName" --body "i607356"
gh secret set INTERVALS_API_KEY    --repo "$GithubUser/$RepoName" --body "16t4zomni8ce9jt6xevei3afj"

# Lancer le premier workflow
Write-Host "Lancement du premier deploiement..." -ForegroundColor Yellow
gh workflow run "sync-and-deploy.yml" --repo "$GithubUser/$RepoName"

Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "Tout est en place !" -ForegroundColor Green
Write-Host ""
Write-Host "Dashboard disponible dans ~2 min :"
Write-Host "https://$GithubUser.github.io/$RepoName/" -ForegroundColor Green
Write-Host ""
Write-Host "Suivi du deploiement :"
Write-Host "https://github.com/$GithubUser/$RepoName/actions" -ForegroundColor Cyan
Write-Host ""
pause
