#!/bin/bash

echo "========================================"
echo "کلینیک محمدی - راه‌اندازی Docker"
echo "========================================"

echo ""
echo "بررسی Docker..."

if ! command -v docker &> /dev/null; then
    echo "خطا: Docker نصب نیست!"
    echo "لطفاً Docker را نصب کنید:"
    echo "https://docs.docker.com/engine/install/"
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "خطا: Docker Compose نصب نیست!"
    echo "لطفاً Docker Compose را نصب کنید:"
    echo "sudo apt-get install docker-compose"
    exit 1
fi

echo "Docker موجود است."
echo ""

echo "ساخت و اجرای کانتینرها..."
# Try the simple version first
if docker-compose -f docker-compose-simple.yml up --build; then
    echo "راه‌اندازی با فایل ساده موفق بود!"
else
    echo "تلاش با فایل اصلی..."
    docker-compose up --build
fi

echo ""
echo "========================================"
echo "راه‌اندازی کامل شد!"
echo "========================================"
echo ""
echo "دسترسی‌ها:"
echo "- وبسایت: http://localhost"
echo "- پنل ادمین: http://localhost/admin"
echo "  نام کاربری: admin"
echo "  رمز عبور: admin123"
echo "" 