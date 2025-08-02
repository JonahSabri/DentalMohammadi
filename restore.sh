#!/bin/bash

echo "========================================"
echo "کلینیک محمدی - Restore"
echo "========================================"

# Set backup directory
BACKUP_DIR="/opt/backups/clinic-mohammadi"

echo ""
echo "فایل‌های backup موجود:"
ls -la $BACKUP_DIR/clinic_backup_* 2>/dev/null || echo "هیچ backup یافت نشد!"

echo ""
read -p "نام فایل backup (بدون پسوند): " BACKUP_NAME

if [ -z "$BACKUP_NAME" ]; then
    echo "نام فایل وارد نشد!"
    exit 1
fi

echo ""
echo "بازگردانی از backup: $BACKUP_NAME"

# Stop services
echo "توقف سرویس‌ها..."
docker-compose down

# Restore database
if [ -f "$BACKUP_DIR/${BACKUP_NAME}_database.json" ]; then
    echo "بازگردانی دیتابیس..."
    docker-compose up -d backend
    sleep 10
    docker-compose exec -T backend python manage.py loaddata $BACKUP_DIR/${BACKUP_NAME}_database.json
else
    echo "فایل دیتابیس یافت نشد: ${BACKUP_NAME}_database.json"
fi

# Restore media files
if [ -f "$BACKUP_DIR/${BACKUP_NAME}_media.tar.gz" ]; then
    echo "بازگردانی فایل‌های media..."
    tar -xzf $BACKUP_DIR/${BACKUP_NAME}_media.tar.gz
else
    echo "فایل media یافت نشد: ${BACKUP_NAME}_media.tar.gz"
fi

# Restore static files
if [ -f "$BACKUP_DIR/${BACKUP_NAME}_static.tar.gz" ]; then
    echo "بازگردانی فایل‌های static..."
    tar -xzf $BACKUP_DIR/${BACKUP_NAME}_static.tar.gz
else
    echo "فایل static یافت نشد: ${BACKUP_NAME}_static.tar.gz"
fi

# Restart services
echo "راه‌اندازی مجدد سرویس‌ها..."
docker-compose up -d

echo ""
echo "========================================"
echo "Restore کامل شد!"
echo "========================================"
echo ""
echo "سرویس‌ها در حال راه‌اندازی مجدد هستند..."
echo "لطفاً چند دقیقه صبر کنید و سپس بررسی کنید:"
echo "- وبسایت: http://localhost"
echo "- پنل ادمین: http://localhost/admin"
echo "" 