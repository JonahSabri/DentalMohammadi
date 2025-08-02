@echo off
echo ========================================
echo کلینیک محمدی - مشاهده لاگ‌ها
echo ========================================

echo.
echo انتخاب کنید:
echo 1. لاگ‌های تمام سرویس‌ها
echo 2. لاگ‌های Backend (Django)
echo 3. لاگ‌های Frontend (React)
echo 4. لاگ‌های زنده (Live)
echo.

set /p choice="انتخاب شما (1-4): "

if "%choice%"=="1" (
    echo مشاهده لاگ‌های تمام سرویس‌ها...
    docker-compose logs
) else if "%choice%"=="2" (
    echo مشاهده لاگ‌های Backend...
    docker-compose logs backend
) else if "%choice%"=="3" (
    echo مشاهده لاگ‌های Frontend...
    docker-compose logs frontend
) else if "%choice%"=="4" (
    echo مشاهده لاگ‌های زنده...
    docker-compose logs -f
) else (
    echo انتخاب نامعتبر!
)

echo.
pause 