# راهنمای استقرار Docker - کلینیک محمدی

## 📋 پیش‌نیازها

### 1. نصب Docker
- **Windows**: [Docker Desktop for Windows](https://docs.docker.com/desktop/install/windows-install/)
- **Linux**: [Docker Engine](https://docs.docker.com/engine/install/)
- **macOS**: [Docker Desktop for Mac](https://docs.docker.com/desktop/install/mac-install/)

### 2. نصب Docker Compose
- معمولاً همراه با Docker Desktop نصب می‌شود
- برای Linux: `sudo apt-get install docker-compose`

## 🚀 استقرار پروژه

### 1. کلون کردن پروژه
```bash
git clone <repository-url>
cd clinic-mohammadi
```

### 2. ساخت و اجرای کانتینرها
```bash
# ساخت و اجرای تمام سرویس‌ها
docker-compose up --build

# اجرا در پس‌زمینه
docker-compose up -d --build
```

### 3. بررسی وضعیت
```bash
# مشاهده کانتینرهای در حال اجرا
docker-compose ps

# مشاهده لاگ‌ها
docker-compose logs
```

## 🌐 دسترسی به برنامه

پس از اجرای موفق، می‌توانید از طریق آدرس‌های زیر به برنامه دسترسی داشته باشید:

- **وبسایت اصلی**: http://localhost
- **پنل ادمین**: http://localhost/admin
  - نام کاربری: `admin`
  - رمز عبور: `admin123`

## 📊 مدیریت کانتینرها

### مشاهده لاگ‌ها
```bash
# لاگ‌های تمام سرویس‌ها
docker-compose logs

# لاگ‌های سرویس خاص
docker-compose logs backend
docker-compose logs frontend

# لاگ‌های زنده
docker-compose logs -f
```

### توقف سرویس‌ها
```bash
# توقف سرویس‌ها
docker-compose down

# توقف و حذف volume ها
docker-compose down -v
```

### بروزرسانی
```bash
# توقف سرویس‌ها
docker-compose down

# ساخت مجدد و اجرا
docker-compose up --build
```

## 🔧 تنظیمات پیشرفته

### متغیرهای محیطی
می‌توانید فایل `.env` ایجاد کنید:

```env
DEBUG=False
SECRET_KEY=your-secret-key-here
DATABASE_URL=postgresql://user:password@host:port/db
```

### تنظیمات Nginx
فایل `nginx.conf` را برای تنظیمات خاص سرور ویرایش کنید.

### تنظیمات Django
فایل `dental_clinic/settings.py` را برای تنظیمات production ویرایش کنید.

## 🐛 عیب‌یابی

### مشکل در ساخت کانتینر
```bash
# پاک کردن cache
docker system prune -a

# ساخت مجدد
docker-compose build --no-cache
```

### مشکل در اتصال به دیتابیس
```bash
# بررسی لاگ‌های backend
docker-compose logs backend

# اجرای دستورات Django
docker-compose exec backend python manage.py migrate
docker-compose exec backend python manage.py createsuperuser
```

### مشکل در دسترسی به وبسایت
```bash
# بررسی وضعیت کانتینرها
docker-compose ps

# بررسی پورت‌ها
docker-compose port frontend 80
```

## 📈 مانیتورینگ

### مشاهده منابع
```bash
# استفاده از CPU و RAM
docker stats

# اطلاعات کانتینرها
docker-compose top
```

### Health Check
کانتینرها دارای health check هستند و در صورت مشکل خودکار restart می‌شوند.

## 🔒 امنیت

### تنظیمات امنیتی
- استفاده از HTTPS در production
- تنظیم firewall
- محدود کردن دسترسی‌ها
- به‌روزرسانی منظم کانتینرها

### Backup
```bash
# Backup دیتابیس
docker-compose exec backend python manage.py dumpdata > backup.json

# Restore دیتابیس
docker-compose exec backend python manage.py loaddata backup.json
```

## 📞 پشتیبانی

در صورت بروز مشکل:
1. لاگ‌ها را بررسی کنید
2. مستندات Docker را مطالعه کنید
3. با تیم توسعه تماس بگیرید

---

**توسعه‌دهنده**: تیم توسعه کلینیک محمدی  
**آخرین بروزرسانی**: 2024 