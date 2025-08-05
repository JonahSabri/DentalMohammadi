# کلینیک محمدی - راهنمای نهایی

## وضعیت فعلی پروژه

✅ **پروژه کامل شده و آماده استفاده است**

### اطلاعات کلینیک
- **نام**: کلینیک محمدی (Mohammadi Clinic)
- **دکتر**: دکتر حدیثه محمدی
- **آدرس**: تهران، نسیم شهر، خیابان اصلی
- **تلفن**: 09363381066
- **ایمیل**: info@clinic-mohammadi.com

## ویژگی‌های پیاده‌سازی شده

### Frontend (React)
- ✅ صفحه اصلی با معرفی کلینیک
- ✅ صفحه خدمات با جزئیات درمان‌ها
- ✅ صفحه رزرو نوبت با فرم کامل
- ✅ صفحه درباره ما
- ✅ صفحه تماس
- ✅ انیمیشن‌های مدرن با Framer Motion
- ✅ طراحی ریسپانسیو
- ✅ انتخاب تاریخ و زمان
- ✅ اعلان‌های toast

### Backend (Django)
- ✅ API کامل برای تمام عملیات
- ✅ مدل‌های داده: Doctor, Service, Appointment, Patient
- ✅ پنل ادمین سفارشی شده
- ✅ احراز هویت و مجوزها
- ✅ مدیریت فایل‌های استاتیک و مدیا

### Docker
- ✅ Containerization کامل
- ✅ Docker Compose برای orchestration
- ✅ Nginx به عنوان reverse proxy
- ✅ اسکریپت‌های مدیریتی برای Windows و Linux

## نحوه اجرا

### روش 1: اجرای محلی (توصیه شده برای توسعه)

#### Backend (Django)
```bash
# نصب dependencies
pip install -r requirements.txt

# اجرای migrations
python manage.py makemigrations
python manage.py migrate

# ایجاد superuser (اختیاری)
python manage.py createsuperuser

# اجرای سرور
python manage.py runserver
```

#### Frontend (React)
```bash
# نصب dependencies
npm install

# اجرای سرور توسعه
npm start
```

### روش 2: اجرا با Docker

```bash
# ساخت و اجرای کامل
docker-compose up --build

# یا استفاده از اسکریپت
./docker-build.sh  # Linux
docker-build.bat   # Windows
```

## دسترسی‌ها

### Frontend
- **توسعه**: http://localhost:3000
- **تولید**: http://localhost (از طریق Nginx)

### Backend
- **API**: http://localhost:8000/api/
- **Admin**: http://localhost:8000/admin/
- **تولید**: http://localhost/api/ و http://localhost/admin/

## مشکلات حل شده

### 1. خطای `TypeError: doctors.map is not a function`
- ✅ حل شده با اضافه کردن بررسی‌های Array.isArray()
- ✅ مدیریت صحیح API responses

### 2. خطای `Invalid options object. Dev Server`
- ✅ حل شده با حذف proxy از package.json
- ✅ اضافه کردن setupProxy.js برای تنظیمات صحیح

### 3. مشکلات Docker
- ✅ سازگاری با نسخه‌های مختلف Docker Compose
- ✅ اسکریپت‌های fallback برای نسخه‌های قدیمی

## نکات مهم

### برای توسعه
1. همیشه Django backend را قبل از React frontend شروع کنید
2. از `setupProxy.js` برای تنظیمات API استفاده کنید
3. برای تغییرات در مدل‌ها، حتماً migrations را اجرا کنید

### برای تولید
1. از Docker برای deployment استفاده کنید
2. فایل‌های .env را برای تنظیمات محیطی تنظیم کنید
3. از اسکریپت‌های backup و restore استفاده کنید

## ساختار فایل‌ها

```
clinic-mohammadi/
├── src/                    # React frontend
│   ├── components/         # کامپوننت‌های React
│   ├── pages/             # صفحات اصلی
│   └── setupProxy.js      # تنظیمات proxy
├── doctors/               # Django app برای پزشکان
├── services/              # Django app برای خدمات
├── appointments/          # Django app برای نوبت‌ها
├── patients/             # Django app برای بیماران
├── dental_clinic/        # تنظیمات اصلی Django
├── static/               # فایل‌های استاتیک
├── media/                # فایل‌های آپلود شده
├── docker-compose.yml    # تنظیمات Docker
├── Dockerfile            # Docker برای backend
├── Dockerfile.frontend   # Docker برای frontend
└── requirements.txt      # Python dependencies
```

## پشتیبانی

برای هرگونه مشکل یا سوال:
1. فایل‌های troubleshooting موجود را بررسی کنید
2. از اسکریپت‌های مدیریتی استفاده کنید
3. لاگ‌های Docker را بررسی کنید

## آپدیت‌های آینده

- [ ] اضافه کردن سیستم پرداخت آنلاین
- [ ] پیامک تایید نوبت
- [ ] سیستم امتیازدهی و نظرات
- [ ] اپلیکیشن موبایل
- [ ] سیستم مدیریت مالی

---

**توسعه‌دهنده**: کلینیک محمدی  
**تاریخ**: 2024  
**نسخه**: 1.0.0 