# راهنمای سریع - کلینیک محمدی

## 🚀 راه‌اندازی سریع

### روش 1: استفاده از فایل minimal (توصیه شده برای نسخه‌های قدیمی)

```bash
# Linux
docker-compose -f docker-compose-minimal.yml up --build

# Windows
docker-compose -f docker-compose-minimal.yml up --build
```

### روش 2: استفاده از اسکریپت‌های خودکار

```bash
# Linux
chmod +x *.sh
./docker-build.sh

# Windows
docker-build.bat
```

### روش 3: به‌روزرسانی Docker Compose

```bash
# Linux
chmod +x update-docker-compose.sh
./update-docker-compose.sh

# سپس استفاده از فایل اصلی
docker-compose up --build
```

## 📋 فایل‌های موجود

| فایل | نسخه | ویژگی‌ها | توصیه |
|------|------|----------|-------|
| `docker-compose-minimal.yml` | 2.4 | ساده‌ترین نسخه | برای نسخه‌های خیلی قدیمی |
| `docker-compose-simple.yml` | 3.7 | بدون healthcheck | برای نسخه‌های قدیمی |
| `docker-compose.yml` | 3.8 | کامل با healthcheck | برای نسخه‌های جدید |

## 🔧 دستورات مفید

### راه‌اندازی
```bash
# فایل minimal
docker-compose -f docker-compose-minimal.yml up --build

# فایل ساده
docker-compose -f docker-compose-simple.yml up --build

# فایل اصلی
docker-compose up --build
```

### توقف
```bash
# توقف همه
docker-compose -f docker-compose-minimal.yml down
docker-compose -f docker-compose-simple.yml down
docker-compose down
```

### مشاهده لاگ‌ها
```bash
# لاگ‌های backend
docker-compose -f docker-compose-minimal.yml logs backend

# لاگ‌های frontend
docker-compose -f docker-compose-minimal.yml logs frontend
```

## 🌐 دسترسی‌ها

پس از راه‌اندازی موفق:

- **وبسایت**: http://localhost
- **پنل ادمین**: http://localhost/admin
  - نام کاربری: `admin`
  - رمز عبور: `admin123`
- **API**: http://localhost/api/

## 🐛 عیب‌یابی

### مشکل: 'ContainerConfig' KeyError
```bash
# استفاده از فایل minimal
docker-compose -f docker-compose-minimal.yml up --build
```

### مشکل: نسخه قدیمی Docker Compose
```bash
# به‌روزرسانی
./update-docker-compose.sh
```

### مشکل: پورت در حال استفاده
```bash
# بررسی پورت‌ها
netstat -tlnp | grep :80
netstat -tlnp | grep :8000

# توقف سرویس‌های موجود
sudo systemctl stop nginx
sudo systemctl stop apache2
```

## 📊 بررسی وضعیت

```bash
# بررسی کانتینرها
docker ps

# بررسی لاگ‌ها
docker-compose -f docker-compose-minimal.yml logs

# بررسی منابع
docker stats
```

## 🔒 امنیت

### تنظیمات اولیه
```bash
# تغییر رمز عبور admin
docker-compose -f docker-compose-minimal.yml exec backend python manage.py changepassword admin
```

### Backup
```bash
# ایجاد backup
docker-compose -f docker-compose-minimal.yml exec backend python manage.py dumpdata > backup.json
```

## 📞 پشتیبانی

در صورت بروز مشکل:

1. **بررسی لاگ‌ها:**
   ```bash
   docker-compose -f docker-compose-minimal.yml logs
   ```

2. **پاک کردن کامل:**
   ```bash
   docker system prune -a
   ```

3. **ساخت مجدد:**
   ```bash
   docker-compose -f docker-compose-minimal.yml up --build
   ```

---

**توسعه‌دهنده**: تیم توسعه کلینیک محمدی  
**آخرین بروزرسانی**: 2024  
**وضعیت**: آماده برای استفاده 🚀 