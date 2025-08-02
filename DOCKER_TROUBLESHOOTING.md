# راهنمای عیب‌یابی Docker - کلینیک محمدی

## 🐛 مشکلات رایج و راه‌حل‌ها

### 1. خطای "Cannot start service backend"

**مشکل:**
```
ERROR: for clinic-mohammadi-backend Cannot start service backend: failed to create task for container: failed to create shim task: OCI runtime create failed: runc create failed: unable to start container process: error during container init: exec: "./docker-start.sh && gunicorn": stat ./docker-start.sh && gunicorn: no such file or directory: unknown
```

**راه‌حل:**
```bash
# پاک کردن کانتینرها و image ها
docker-compose down
docker system prune -a

# ساخت مجدد
docker-compose up --build
```

### 2. خطای "docker-compose command not found"

**مشکل:** Docker Compose نصب نیست

**راه‌حل Windows:**
```bash
# نصب Docker Desktop (شامل Docker Compose)
# دانلود از: https://www.docker.com/products/docker-desktop/
```

**راه‌حل Linux:**
```bash
# نصب Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### 3. خطای "Permission denied"

**مشکل:** فایل‌های .sh قابل اجرا نیستند

**راه‌حل:**
```bash
# تنظیم مجوزهای اجرا
chmod +x *.sh
chmod +x entrypoint.sh
chmod +x docker-start.sh
```

### 4. خطای "Port already in use"

**مشکل:** پورت 80 یا 8000 در حال استفاده است

**راه‌حل:**
```bash
# بررسی پورت‌های در حال استفاده
netstat -tlnp | grep :80
netstat -tlnp | grep :8000

# توقف سرویس‌های موجود
sudo systemctl stop nginx
sudo systemctl stop apache2
```

### 5. خطای "Database connection failed"

**مشکل:** دیتابیس در دسترس نیست

**راه‌حل:**
```bash
# بررسی لاگ‌های backend
docker-compose logs backend

# راه‌اندازی مجدد
docker-compose restart backend
```

## 🔧 دستورات مفید

### بررسی وضعیت
```bash
# وضعیت کانتینرها
docker ps

# لاگ‌های کانتینرها
docker-compose logs

# بررسی منابع
docker stats
```

### پاک کردن کامل
```bash
# توقف و حذف کانتینرها
docker-compose down

# حذف image ها
docker rmi $(docker images -q)

# پاک کردن cache
docker system prune -a
```

### ساخت مجدد
```bash
# ساخت مجدد بدون cache
docker-compose build --no-cache

# راه‌اندازی
docker-compose up
```

## 📋 چک‌لیست عیب‌یابی

### قبل از اجرا
- [ ] Docker نصب است
- [ ] Docker Compose نصب است
- [ ] پورت‌های 80 و 8000 آزاد هستند
- [ ] فایل‌های .sh قابل اجرا هستند

### در حین اجرا
- [ ] کانتینرها ساخته می‌شوند
- [ ] لاگ‌ها بدون خطا هستند
- [ ] سرویس‌ها در دسترس هستند

### پس از اجرا
- [ ] وبسایت در http://localhost قابل دسترسی است
- [ ] پنل ادمین در http://localhost/admin کار می‌کند
- [ ] API در http://localhost/api/ پاسخ می‌دهد

## 🚀 راه‌اندازی مرحله به مرحله

### 1. نصب Docker
```bash
# Windows: دانلود Docker Desktop
# Linux:
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

### 2. تنظیم مجوزها
```bash
chmod +x *.sh
```

### 3. راه‌اندازی
```bash
# Windows
docker-build.bat

# Linux
./docker-build.sh
```

### 4. بررسی
```bash
# بررسی کانتینرها
docker ps

# بررسی لاگ‌ها
docker-compose logs
```

## 📞 در صورت بروز مشکل

1. **لاگ‌ها را بررسی کنید:**
   ```bash
   docker-compose logs backend
   docker-compose logs frontend
   ```

2. **کانتینرها را پاک کنید:**
   ```bash
   docker-compose down
   docker system prune -a
   ```

3. **ساخت مجدد:**
   ```bash
   docker-compose up --build
   ```

4. **اگر مشکل حل نشد:**
   - فایل‌های Dockerfile و docker-compose.yml را بررسی کنید
   - مطمئن شوید که تمام فایل‌های مورد نیاز موجود هستند
   - Docker و Docker Compose را به‌روزرسانی کنید

---

**توسعه‌دهنده**: تیم توسعه کلینیک محمدی  
**آخرین بروزرسانی**: 2024 