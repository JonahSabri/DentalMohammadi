#!/bin/bash

echo "========================================"
echo "کلینیک محمدی - نصب و راه‌اندازی"
echo "========================================"

echo ""
echo "بررسی پیش‌نیازها..."

# Check Python
if ! command -v python3 &> /dev/null; then
    echo "نصب Python3..."
    sudo apt-get update
    sudo apt-get install -y python3 python3-pip python3-venv
fi

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "نصب Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# Check Docker
if ! command -v docker &> /dev/null; then
    echo "نصب Docker..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh
    sudo usermod -aG docker $USER
    rm get-docker.sh
fi

# Check Docker Compose
if ! command -v docker-compose &> /dev/null; then
    echo "نصب Docker Compose..."
    sudo apt-get install -y docker-compose
fi

echo "پیش‌نیازها نصب شدند."
echo ""

# Create virtual environment
echo "ایجاد محیط مجازی Python..."
python3 -m venv venv
source venv/bin/activate

# Install Python dependencies
echo "نصب وابستگی‌های Python..."
pip install -r requirements.txt

# Install Node.js dependencies
echo "نصب وابستگی‌های Node.js..."
npm install

# Make scripts executable
echo "تنظیم مجوزهای اجرا..."
chmod +x docker-build.sh
chmod +x docker-stop.sh
chmod +x docker-logs.sh
chmod +x docker-start.sh

# Run initial setup
echo "راه‌اندازی اولیه Django..."
python setup.py

echo ""
echo "========================================"
echo "نصب کامل شد!"
echo "========================================"
echo ""
echo "دستورات مفید:"
echo "- راه‌اندازی Docker: ./docker-build.sh"
echo "- توقف Docker: ./docker-stop.sh"
echo "- مشاهده لاگ‌ها: ./docker-logs.sh"
echo "- راه‌اندازی Development: ./start.sh"
echo ""
echo "دسترسی‌ها:"
echo "- Development: http://localhost:3000"
echo "- Production: http://localhost"
echo "- پنل ادمین: http://localhost:8000/admin"
echo "  نام کاربری: admin"
echo "  رمز عبور: admin123"
echo "" 