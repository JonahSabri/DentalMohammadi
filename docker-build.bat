@echo off
echo ========================================
echo کلینیک محمدی - راه‌اندازی Docker
echo ========================================

echo.
echo بررسی Docker...
docker --version >nul 2>&1
if %errorlevel% neq 0 (
    echo خطا: Docker نصب نیست!
    echo لطفاً Docker Desktop را نصب کنید
    echo https://docs.docker.com/desktop/install/windows-install/
    pause
    exit /b 1
)

echo Docker موجود است.
echo.

echo ساخت و اجرای کانتینرها...
echo تلاش با فایل ساده...
docker-compose -f docker-compose-simple.yml up --build
if %errorlevel% neq 0 (
    echo تلاش با فایل اصلی...
    docker-compose up --build
)

echo.
echo ========================================
echo راه‌اندازی کامل شد!
echo ========================================
echo.
echo دسترسی‌ها:
echo - وبسایت: http://localhost
echo - پنل ادمین: http://localhost/admin
echo   نام کاربری: admin
echo   رمز عبور: admin123
echo.
pause 