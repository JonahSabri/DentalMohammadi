#!/bin/bash

echo "========================================"
echo "کلینیک محمدی - مشاهده لاگ‌ها"
echo "========================================"

echo ""
echo "انتخاب کنید:"
echo "1. لاگ‌های تمام سرویس‌ها"
echo "2. لاگ‌های Backend (Django)"
echo "3. لاگ‌های Frontend (React)"
echo "4. لاگ‌های زنده (Live)"
echo ""

read -p "انتخاب شما (1-4): " choice

case $choice in
    1)
        echo "مشاهده لاگ‌های تمام سرویس‌ها..."
        docker-compose -f docker-compose-simple.yml logs
        docker-compose logs
        ;;
    2)
        echo "مشاهده لاگ‌های Backend..."
        docker-compose -f docker-compose-simple.yml logs backend
        docker-compose logs backend
        ;;
    3)
        echo "مشاهده لاگ‌های Frontend..."
        docker-compose -f docker-compose-simple.yml logs frontend
        docker-compose logs frontend
        ;;
    4)
        echo "مشاهده لاگ‌های زنده..."
        docker-compose -f docker-compose-simple.yml logs -f
        docker-compose logs -f
        ;;
    *)
        echo "انتخاب نامعتبر!"
        ;;
esac

echo "" 