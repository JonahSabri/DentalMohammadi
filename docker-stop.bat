@echo off
echo ========================================
echo کلینیک محمدی - توقف Docker
echo ========================================

echo.
echo توقف کانتینرها...
docker-compose -f docker-compose-minimal.yml down
docker-compose -f docker-compose-simple.yml down
docker-compose down

echo.
echo پاک کردن کانتینرهای غیرفعال...
docker system prune -f

echo.
echo ========================================
echo توقف کامل شد!
echo ========================================
echo.
pause 