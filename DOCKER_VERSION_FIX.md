# رفع مشکل نسخه Docker Compose - کلینیک محمدی

## 🐛 مشکل: 'ContainerConfig' KeyError

این خطا معمولاً در نسخه‌های قدیمی Docker Compose رخ می‌دهد.

## 🔧 راه‌حل‌ها

### 1. استفاده از فایل ساده (توصیه شده)

```bash
# استفاده از فایل docker-compose-simple.yml
docker-compose -f docker-compose-simple.yml up --build
```

### 2. به‌روزرسانی Docker Compose

#### Linux:
```bash
# حذف نسخه قدیمی
sudo apt-get remove docker-compose

# نصب نسخه جدید
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# بررسی نسخه
docker-compose --version
```

#### Windows:
```bash
# دانلود Docker Desktop جدید
# https://www.docker.com/products/docker-desktop/
```

### 3. پاک کردن کامل و ساخت مجدد

```bash
# توقف تمام کانتینرها
docker stop $(docker ps -aq)

# حذف تمام کانتینرها
docker rm $(docker ps -aq)

# حذف تمام image ها
docker rmi $(docker images -q)

# پاک کردن cache
docker system prune -a

# ساخت مجدد
docker-compose -f docker-compose-simple.yml up --build
```

## 📋 فایل‌های موجود

### فایل اصلی (نسخه جدید)
- `docker-compose.yml` - شامل healthcheck و ویژگی‌های پیشرفته

### فایل ساده (نسخه قدیمی)
- `docker-compose-simple.yml` - بدون healthcheck، سازگار با نسخه‌های قدیمی

## 🚀 دستورات مفید

### راه‌اندازی با فایل ساده
```bash
# Linux
docker-compose -f docker-compose-simple.yml up --build

# Windows
docker-compose -f docker-compose-simple.yml up --build
```

### توقف سرویس‌ها
```bash
# Linux
docker-compose -f docker-compose-simple.yml down

# Windows
docker-compose -f docker-compose-simple.yml down
```

### مشاهده لاگ‌ها
```bash
# Linux
docker-compose -f docker-compose-simple.yml logs

# Windows
docker-compose -f docker-compose-simple.yml logs
```

## 🔍 تشخیص مشکل

### بررسی نسخه Docker Compose
```bash
docker-compose --version
```

### بررسی نسخه Docker
```bash
docker --version
```

### بررسی وضعیت سرویس‌ها
```bash
docker ps
docker-compose ps
```

## 📊 مقایسه فایل‌ها

### فایل اصلی (docker-compose.yml)
```yaml
version: '3.8'
services:
  backend:
    healthcheck:
      test: ["CMD-SHELL", "python -c 'import requests; requests.get(\"http://localhost:8000/admin/\")'"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 60s
```

### فایل ساده (docker-compose-simple.yml)
```yaml
version: '3.7'
services:
  backend:
    # بدون healthcheck
```

## 🎯 توصیه‌ها

1. **ابتدا فایل ساده را امتحان کنید**
2. **اگر کار کرد، Docker Compose را به‌روزرسانی کنید**
3. **سپس از فایل اصلی استفاده کنید**

## 📞 در صورت بروز مشکل

1. **بررسی لاگ‌ها:**
   ```bash
   docker-compose -f docker-compose-simple.yml logs
   ```

2. **پاک کردن کامل:**
   ```bash
   docker system prune -a
   ```

3. **ساخت مجدد:**
   ```bash
   docker-compose -f docker-compose-simple.yml up --build
   ```

---

**توسعه‌دهنده**: تیم توسعه کلینیک محمدی  
**آخرین بروزرسانی**: 2024 