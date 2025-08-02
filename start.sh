#!/bin/bash

echo "========================================"
echo "کلینیک محمدی - راه‌اندازی Development"
echo "========================================"

echo ""
echo "بررسی پیش‌نیازها..."

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "ایجاد محیط مجازی Python..."
    python3 -m venv venv
fi

# Activate virtual environment
echo "فعال‌سازی محیط مجازی..."
source venv/bin/activate

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "نصب وابستگی‌های Node.js..."
    npm install
fi

# Run migrations
echo "اجرای مایگریشن‌ها..."
python manage.py migrate

echo ""
echo "راه‌اندازی سرورها..."

# Start Django backend
echo "راه‌اندازی Django Backend..."
python manage.py runserver &
DJANGO_PID=$!

# Wait a moment for Django to start
sleep 3

# Start React frontend
echo "راه‌اندازی React Frontend..."
npm start &
REACT_PID=$!

echo ""
echo "========================================"
echo "سرورها راه‌اندازی شدند!"
echo "========================================"
echo ""
echo "دسترسی‌ها:"
echo "- Frontend: http://localhost:3000"
echo "- Backend API: http://localhost:8000/api/"
echo "- Admin Panel: http://localhost:8000/admin"
echo "  نام کاربری: admin"
echo "  رمز عبور: admin123"
echo ""
echo "برای توقف: Ctrl+C"
echo ""

# Wait for both processes
wait $DJANGO_PID $REACT_PID 