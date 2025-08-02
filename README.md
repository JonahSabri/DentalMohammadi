# کلینیک محمدی - دندانپزشکی 🦷

کلینیک تخصصی دندانپزشکی دکتر حدیثه محمدی در تهران، نسیم شهر. وبسایت کامل با تمرکز بر خدمات کامپوزیت، ساخته شده با Django و React.

## ✨ ویژگی‌ها

- 🎨 **طراحی مدرن و زیبا** با انیمیشن‌های جذاب
- 📅 **نوبت گیری رایگان** آنلاین
- 👨‍⚕️ **پنل ادمین** کامل برای مدیریت
- 🦷 **تمرکز بر کامپوزیت** دندان
- 📱 **طراحی ریسپانسیو** برای تمام دستگاه‌ها
- 🌐 **پشتیبانی کامل از فارسی** (RTL)
- ⚡ **عملکرد سریع** و بهینه

## 🛠️ تکنولوژی‌های استفاده شده

### Backend (Django)
- Django 4.2.7
- Django REST Framework
- SQLite Database
- CORS Headers
- Pillow (برای تصاویر)

### Frontend (React)
- React 18
- React Router DOM
- Framer Motion (انیمیشن‌ها)
- React Icons
- Styled Components
- React DatePicker
- React Toastify

## 🚀 نصب و راه‌اندازی

### پیش‌نیازها
- Python 3.8+
- Node.js 16+
- npm یا yarn

### 1. کلون کردن پروژه
```bash
git clone <repository-url>
cd dental-clinic
```

### 2. راه‌اندازی Backend (Django)

```bash
# ایجاد محیط مجازی
python -m venv venv

# فعال‌سازی محیط مجازی
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# نصب وابستگی‌ها
pip install -r requirements.txt

# راه‌اندازی اولیه
python setup.py

# اجرای سرور Django
python manage.py runserver
```

### 3. راه‌اندازی Frontend (React)

```bash
# نصب وابستگی‌ها
npm install

# اجرای سرور توسعه
npm start
```

## 🐳 راه‌اندازی با Docker

### Windows
```bash
# راه‌اندازی آسان
docker-build.bat

# توقف سرویس‌ها
docker-stop.bat

# مشاهده لاگ‌ها
docker-logs.bat
```

### Linux
```bash
# تنظیم مجوزهای اجرا
chmod +x *.sh

# راه‌اندازی آسان
./docker-build.sh

# توقف سرویس‌ها
./docker-stop.sh

# مشاهده لاگ‌ها
./docker-logs.sh

# نصب و راه‌اندازی کامل
./install-linux.sh

# راه‌اندازی سرور
sudo ./setup-server.sh
```

### 2. مشاهده لاگ‌ها
```bash
# مشاهده لاگ‌های تمام سرویس‌ها
docker-compose logs

# مشاهده لاگ‌های سرویس خاص
docker-compose logs backend
docker-compose logs frontend
```

### 3. توقف سرویس‌ها
```bash
docker-compose down
```

### 4. پاک کردن کامل
```bash
docker-compose down -v
docker system prune -a
```

## 📱 دسترسی به برنامه

### Development
- **فرانت‌اند**: http://localhost:3000
- **پنل ادمین**: http://localhost:8000/admin
  - نام کاربری: `admin`
  - رمز عبور: `admin123`

### Production (Docker)
- **وبسایت**: http://localhost
- **پنل ادمین**: http://localhost/admin
  - نام کاربری: `admin`
  - رمز عبور: `admin123`

## 🏗️ ساختار پروژه

```
dental-clinic/
├── dental_clinic/          # تنظیمات اصلی Django
├── appointments/           # مدیریت نوبت‌ها
├── doctors/              # مدیریت پزشکان
├── services/             # مدیریت خدمات
├── patients/             # مدیریت بیماران
├── src/                  # کدهای React
│   ├── components/       # کامپوننت‌های React
│   ├── pages/           # صفحات React
│   └── styles/          # فایل‌های CSS
├── static/              # فایل‌های استاتیک
├── media/               # فایل‌های آپلود شده
├── requirements.txt     # وابستگی‌های Python
├── package.json        # وابستگی‌های Node.js
└── manage.py          # فایل مدیریت Django
```

## 🦷 خدمات کامپوزیت

### خدمات اصلی
- **پر کردن کامپوزیت**: ترمیم حرفه‌ای دندان
- **ونیر کامپوزیت**: زیبایی دندان‌های جلو
- **باندینگ کامپوزیت**: ترمیم و زیبایی
- **سفید کردن دندان**: با جدیدترین تکنولوژی
- **جرم گیری و پولیش**: بهداشت حرفه‌ای
- **مشاوره تخصصی**: رایگان

### ویژگی‌های خدمات
- ✅ استفاده از بهترین مواد کامپوزیت
- ✅ تضمین کیفیت کار
- ✅ بدون درد و ناراحتی
- ✅ نتیجه طبیعی و زیبا

## 👨‍⚕️ تیم پزشکی

### متخصصین
- **دکتر سارا احمدی**: متخصص کامپوزیت دندان (8 سال تجربه)
- **دکتر علی محمدی**: متخصص زیبایی دندان (12 سال تجربه)
- **دکتر فاطمه رضایی**: دندانپزشک عمومی (6 سال تجربه)

### ساعات کاری
- **شنبه تا چهارشنبه**: 9:00 - 18:00
- **پنجشنبه**: 9:00 - 14:00
- **جمعه**: تعطیل

## 📞 اطلاعات تماس

- **تلفن**: 09363381066
- **ایمیل**: info@clinic-mohammadi.com
- **آدرس**: تهران، نسیم شهر، خیابان اصلی، پلاک 123
- **دکتر**: دکتر حدیثه محمدی

## 🔧 مدیریت پروژه

### دستورات مفید Django
```bash
# ایجاد مایگریشن‌های جدید
python manage.py makemigrations

# اعمال مایگریشن‌ها
python manage.py migrate

# ایجاد سوپر یوزر
python manage.py createsuperuser

# اجرای تست‌ها
python manage.py test
```

### دستورات مفید React
```bash
# ساخت نسخه تولید
npm run build

# اجرای تست‌ها
npm test

# بررسی خطاهای ESLint
npm run lint
```

### دستورات مفید Docker

#### Windows
```bash
# راه‌اندازی
docker-build.bat

# توقف
docker-stop.bat

# مشاهده لاگ‌ها
docker-logs.bat
```

#### Linux
```bash
# راه‌اندازی
./docker-build.sh

# توقف
./docker-stop.sh

# مشاهده لاگ‌ها
./docker-logs.sh

# Backup
./backup.sh

# Restore
./restore.sh

# Monitoring
./monitor.sh
```

## 🎨 ویژگی‌های طراحی

### انیمیشن‌ها
- انیمیشن‌های ورود با Framer Motion
- انیمیشن‌های hover و click
- انیمیشن‌های scroll با AOS
- انیمیشن‌های loading

### رنگ‌بندی
- **رنگ اصلی**: آبی-بنفش (#667eea to #764ba2)
- **رنگ ثانویه**: صورتی-قرمز (#f093fb to #f5576c)
- **رنگ‌های خنثی**: خاکستری‌های مختلف

### تایپوگرافی
- **فونت اصلی**: Vazirmatn (فونت فارسی)
- **وزن‌های فونت**: 100 تا 900
- **جهت متن**: RTL (راست به چپ)

## 🔒 امنیت

- احراز هویت کامل
- محافظت از CSRF
- اعتبارسنجی داده‌ها
- فیلتر کردن ورودی‌ها
- مدیریت خطاها

## 📊 عملکرد

- بهینه‌سازی تصاویر
- فشرده‌سازی CSS/JS
- کش کردن استاتیک‌ها
- لودینگ تنبل (Lazy Loading)
- بهینه‌سازی API

## 🤝 مشارکت

برای مشارکت در پروژه:

1. Fork کنید
2. Branch جدید ایجاد کنید (`git checkout -b feature/amazing-feature`)
3. تغییرات را commit کنید (`git commit -m 'Add amazing feature'`)
4. Push کنید (`git push origin feature/amazing-feature`)
5. Pull Request ایجاد کنید

## 📄 لایسنس

این پروژه تحت لایسنس MIT منتشر شده است.

## 🙏 تشکر

از تمامی افرادی که در توسعه این پروژه مشارکت داشته‌اند تشکر می‌کنیم.

---

**توسعه‌دهنده**: تیم توسعه کلینیک محمدی  
**آخرین بروزرسانی**: 2024  
**نسخه**: 1.0.0 