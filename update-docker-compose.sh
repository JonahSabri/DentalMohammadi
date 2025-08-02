#!/bin/bash

echo "========================================"
echo "به‌روزرسانی Docker Compose"
echo "========================================"

echo ""
echo "بررسی نسخه فعلی..."
docker-compose --version

echo ""
echo "حذف نسخه قدیمی..."

# Remove old version
if command -v apt-get &> /dev/null; then
    # Ubuntu/Debian
    sudo apt-get remove -y docker-compose
elif command -v yum &> /dev/null; then
    # CentOS/RHEL
    sudo yum remove -y docker-compose
elif command -v dnf &> /dev/null; then
    # Fedora
    sudo dnf remove -y docker-compose
fi

echo ""
echo "دانلود نسخه جدید..."

# Download latest version
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

echo ""
echo "تنظیم مجوزهای اجرا..."
sudo chmod +x /usr/local/bin/docker-compose

echo ""
echo "بررسی نسخه جدید..."
docker-compose --version

echo ""
echo "========================================"
echo "به‌روزرسانی کامل شد!"
echo "========================================"
echo ""
echo "حالا می‌توانید از فایل اصلی استفاده کنید:"
echo "docker-compose up --build"
echo "" 