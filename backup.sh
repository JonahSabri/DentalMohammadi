#!/bin/bash

echo "========================================"
echo "کلینیک محمدی - Backup"
echo "========================================"

# Set backup directory
BACKUP_DIR="/opt/backups/clinic-mohammadi"
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_NAME="clinic_backup_$DATE"

echo ""
echo "ایجاد backup..."

# Create backup directory
mkdir -p $BACKUP_DIR

# Backup database
echo "Backup دیتابیس..."
docker-compose exec -T backend python manage.py dumpdata > $BACKUP_DIR/${BACKUP_NAME}_database.json

# Backup media files
echo "Backup فایل‌های media..."
tar -czf $BACKUP_DIR/${BACKUP_NAME}_media.tar.gz media/

# Backup static files
echo "Backup فایل‌های static..."
tar -czf $BACKUP_DIR/${BACKUP_NAME}_static.tar.gz staticfiles/

# Create full backup
echo "ایجاد backup کامل..."
tar -czf $BACKUP_DIR/${BACKUP_NAME}_full.tar.gz \
    --exclude=node_modules \
    --exclude=venv \
    --exclude=.git \
    --exclude=__pycache__ \
    --exclude=*.pyc \
    .

# Remove old backups (keep last 7 days)
echo "پاک کردن backup های قدیمی..."
find $BACKUP_DIR -name "clinic_backup_*.tar.gz" -mtime +7 -delete
find $BACKUP_DIR -name "clinic_backup_*.json" -mtime +7 -delete

echo ""
echo "========================================"
echo "Backup کامل شد!"
echo "========================================"
echo ""
echo "فایل‌های backup:"
echo "- دیتابیس: $BACKUP_DIR/${BACKUP_NAME}_database.json"
echo "- Media: $BACKUP_DIR/${BACKUP_NAME}_media.tar.gz"
echo "- Static: $BACKUP_DIR/${BACKUP_NAME}_static.tar.gz"
echo "- کامل: $BACKUP_DIR/${BACKUP_NAME}_full.tar.gz"
echo ""
echo "حجم فایل‌ها:"
du -h $BACKUP_DIR/${BACKUP_NAME}_*
echo "" 