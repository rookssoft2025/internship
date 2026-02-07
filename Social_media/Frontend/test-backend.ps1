# Backend API Test Script
# This script tests the deployed backend API endpoints

$BackendUrl = "https://social-media-backend-production-8924.up.railway.app/api"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Social Media Backend API Test" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Backend URL: $BackendUrl" -ForegroundColor Yellow
Write-Host ""

# Test 1: Basic Connection
Write-Host "[Test 1] Testing basic connectivity..." -ForegroundColor Green
try {
    $testUrl = "$BackendUrl/auth/signup"
    Write-Host "Testing URL: $testUrl" -ForegroundColor Gray
    
    $headers = @{
        "Content-Type" = "application/json"
    }
    
    $testUser = @{
        name = "Test User"
        email = "test$(Get-Date -Format 'yyyyMMddHHmmss')@example.com"
        password = "test123456"
    } | ConvertTo-Json
    
    $response = Invoke-WebRequest -Uri $testUrl -Method POST -Headers $headers -Body $testUser -UseBasicParsing -ErrorAction Stop
    
    Write-Host "✅ SUCCESS!" -ForegroundColor Green
    Write-Host "Status Code: $($response.StatusCode)" -ForegroundColor Green
    Write-Host "Response:" -ForegroundColor Gray
    Write-Host ($response.Content | ConvertFrom-Json | ConvertTo-Json -Depth 10) -ForegroundColor Gray
    
} catch {
    Write-Host "❌ FAILED!" -ForegroundColor Red
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    
    if ($_.Exception.Response) {
        $statusCode = $_.Exception.Response.StatusCode.value__
        Write-Host "Status Code: $statusCode" -ForegroundColor Red
        
        try {
            $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
            $responseBody = $reader.ReadToEnd()
            Write-Host "Response Body: $responseBody" -ForegroundColor Red
        } catch {
            Write-Host "Could not read response body" -ForegroundColor Red
        }
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan

# Test 2: Login Test
Write-Host "[Test 2] Testing login endpoint..." -ForegroundColor Green
try {
    # First create a user
    $signupUrl = "$BackendUrl/auth/signup"
    $testEmail = "logintest@example.com"
    
    $signupData = @{
        name = "Login Test User"
        email = $testEmail
        password = "test123456"
    } | ConvertTo-Json
    
    # Try to create user (ignore if exists)
    try {
        Invoke-WebRequest -Uri $signupUrl -Method POST -Headers $headers -Body $signupData -UseBasicParsing -ErrorAction SilentlyContinue | Out-Null
    } catch {
        # Ignore errors (user might already exist)
    }
    
    Start-Sleep -Seconds 1
    
    # Now try to login
    $loginUrl = "$BackendUrl/auth/login"
    $loginData = @{
        email = $testEmail
        password = "test123456"
    } | ConvertTo-Json
    
    Write-Host "Testing URL: $loginUrl" -ForegroundColor Gray
    $loginResponse = Invoke-WebRequest -Uri $loginUrl -Method POST -Headers $headers -Body $loginData -UseBasicParsing -ErrorAction Stop
    
    Write-Host "✅ SUCCESS!" -ForegroundColor Green
    Write-Host "Status Code: $($loginResponse.StatusCode)" -ForegroundColor Green
    
    $loginResult = $loginResponse.Content | ConvertFrom-Json
    if ($loginResult.token) {
        Write-Host "Token received: $($loginResult.token.Substring(0, [Math]::Min(50, $loginResult.token.Length)))..." -ForegroundColor Green
        Write-Host "User: $($loginResult.user.name) ($($loginResult.user.email))" -ForegroundColor Green
    }
    
} catch {
    Write-Host "❌ FAILED!" -ForegroundColor Red
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Test Complete!" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host "1. Run 'npm install' to install dependencies" -ForegroundColor White
Write-Host "2. Run 'npm run dev' to start the development server" -ForegroundColor White
Write-Host "3. Open http://localhost:5173 in your browser" -ForegroundColor White
Write-Host "4. Try signing up and creating posts!" -ForegroundColor White
Write-Host ""
