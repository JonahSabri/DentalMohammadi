# راهنمای استقرار لینوکس - کلینیک محمدی

## 📋 پیش‌نیازها

### سیستم عامل
- Ubuntu 20.04+ یا CentOS 8+
- حداقل 2GB RAM
- حداقل 20GB فضای دیسک

### نرم‌افزارهای مورد نیاز
- Docker
- Docker Compose
- Git
- Curl

## 🚀 نصب و راه‌اندازی

### 1. نصب خودکار (توصیه شده)
```bash
# کلون کردن پروژه
git clone <repository-url>
cd clinic-mohammadi

# تنظیم مجوزهای اجرا
chmod +x *.sh

# نصب و راه‌اندازی کامل
./install-linux.sh
```

### 2. نصب دستی
```bash
# نصب Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# نصب Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# راه‌اندازی پروژه
./docker-build.sh
```

## 🐳 مدیریت Docker

### راه‌اندازی
```bash
# راه‌اندازی کامل
./docker-build.sh

# راه‌اندازی در پس‌زمینه
docker-compose up -d --build
```

### توقف
```bash
# توقف سرویس‌ها
./docker-stop.sh

# یا
docker-compose down
```

### مشاهده لاگ‌ها
```bash
# لاگ‌های تمام سرویس‌ها
./docker-logs.sh

# یا
docker-compose logs

# لاگ‌های زنده
docker-compose logs -f
```

## 🔧 مدیریت سرور

### راه‌اندازی سرور تولید
```bash
# راه‌اندازی سرور
sudo ./setup-server.sh

# شروع سرویس
sudo systemctl start clinic-mohammadi

# بررسی وضعیت
sudo systemctl status clinic-mohammadi

# فعال‌سازی در بوت
sudo systemctl enable clinic-mohammadi
```

### مدیریت سرویس
```bash
# شروع
sudo systemctl start clinic-mohammadi

# توقف
sudo systemctl stop clinic-mohammadi

# راه‌اندازی مجدد
sudo systemctl restart clinic-mohammadi

# وضعیت
sudo systemctl status clinic-mohammadi
```

## 💾 Backup و Restore

### ایجاد Backup
```bash
# Backup کامل
./backup.sh

# Backup دستی
docker-compose exec backend python manage.py dumpdata > backup.json
```

### بازگردانی
```bash
# بازگردانی از backup
./restore.sh

# بازگردانی دستی
docker-compose exec backend python manage.py loaddata backup.json
```

## 📊 Monitoring

### بررسی وضعیت
```bash
# بررسی سلامت سیستم
./monitor.sh

# بررسی کانتینرها
docker ps

# بررسی منابع
docker stats
```

### لاگ‌ها
```bash
# لاگ‌های سیستم
sudo journalctl -u clinic-mohammadi -f

# لاگ‌های Docker
docker-compose logs -f
```

## 🔒 امنیت

### تنظیمات Firewall
```bash
# فعال‌سازی UFW
sudo ufw enable

# باز کردن پورت‌های مورد نیاز
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 22/tcp
```

### تنظیمات SSL (HTTPS)
```bash
# نصب Certbot
sudo apt-get install certbot python3-certbot-nginx

# دریافت گواهی SSL
sudo certbot --nginx -d clinic-mohammadi.com -d www.clinic-mohammadi.com
```

## 📈 بهینه‌سازی

### تنظیمات Nginx
```bash
# کپی کردن تنظیمات
sudo cp nginx-production.conf /etc/nginx/sites-available/clinic-mohammadi

# فعال‌سازی سایت
sudo ln -s /etc/nginx/sites-available/clinic-mohammadi /etc/nginx/sites-enabled/

# تست تنظیمات
sudo nginx -t

# راه‌اندازی مجدد Nginx
sudo systemctl restart nginx
```

### تنظیمات Cron برای Backup
```bash
# ویرایش crontab
crontab -e

# اضافه کردن backup روزانه
0 2 * * * /opt/clinic-mohammadi/backup.sh
```

## 🐛 عیب‌یابی

### مشکلات رایج

#### کانتینرها راه‌اندازی نمی‌شوند
```bash
# بررسی لاگ‌ها
docker-compose logs

# پاک کردن و ساخت مجدد
docker-compose down
docker system prune -a
docker-compose up --build
```

#### مشکل در دسترسی به وبسایت
```bash
# بررسی پورت‌ها
netstat -tlnp | grep :80
netstat -tlnp | grep :8000

# بررسی firewall
sudo ufw status
```

#### مشکل در دیتابیس
```bash
# بررسی کانتینر backend
docker-compose logs backend

# اجرای دستورات Django
docker-compose exec backend python manage.py migrate
docker-compose exec backend python manage.py createsuperuser
```

## 📞 پشتیبانی

### اطلاعات مفید
- **پروژه**: /opt/clinic-mohammadi
- **Backup**: /opt/backups/clinic-mohammadi
- **لاگ‌ها**: /var/log/docker/

### دستورات مفید
```bash
# بررسی فضای دیسک
df -h

# بررسی استفاده از حافظه
free -h

# بررسی فرآیندها
ps aux | grep docker

# بررسی شبکه
docker network ls
```

---

**توسعه‌دهنده**: تیم توسعه کلینیک محمدی  
**آخرین بروزرسانی**: 2024  
**وضعیت**: آماده برای استقرار در لینوکس 🚀 