#!/bin/bash

echo "========================================"
echo "کلینیک محمدی - راه‌اندازی سرور"
echo "========================================"

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    echo "این اسکریپت باید با دسترسی root اجرا شود"
    echo "لطفاً از sudo استفاده کنید:"
    echo "sudo ./setup-server.sh"
    exit 1
fi

echo ""
echo "بررسی و نصب پیش‌نیازها..."

# Update system
apt-get update

# Install essential packages
apt-get install -y curl wget git unzip

# Install Docker
if ! command -v docker &> /dev/null; then
    echo "نصب Docker..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    rm get-docker.sh
fi

# Install Docker Compose
if ! command -v docker-compose &> /dev/null; then
    echo "نصب Docker Compose..."
    curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
fi

# Create clinic user
echo "ایجاد کاربر clinic..."
useradd -m -s /bin/bash clinic
usermod -aG docker clinic

# Create application directory
echo "ایجاد دایرکتوری برنامه..."
mkdir -p /opt/clinic-mohammadi
chown clinic:clinic /opt/clinic-mohammadi

# Copy service file
echo "تنظیم systemd service..."
cp clinic-mohammadi.service /etc/systemd/system/
systemctl daemon-reload
systemctl enable clinic-mohammadi.service

# Configure firewall
echo "تنظیم firewall..."
ufw allow 80/tcp
ufw allow 443/tcp
ufw allow 22/tcp

echo ""
echo "========================================"
echo "راه‌اندازی سرور کامل شد!"
echo "========================================"
echo ""
echo "دستورات مفید:"
echo "- شروع سرویس: sudo systemctl start clinic-mohammadi"
echo "- توقف سرویس: sudo systemctl stop clinic-mohammadi"
echo "- وضعیت سرویس: sudo systemctl status clinic-mohammadi"
echo "- مشاهده لاگ‌ها: sudo journalctl -u clinic-mohammadi -f"
echo ""
echo "نکات مهم:"
echo "1. پروژه را در /opt/clinic-mohammadi کپی کنید"
echo "2. مجوزهای فایل‌ها را تنظیم کنید: chmod +x *.sh"
echo "3. سرویس را شروع کنید: sudo systemctl start clinic-mohammadi"
echo "" 