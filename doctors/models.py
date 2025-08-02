from django.db import models

class Doctor(models.Model):
    SPECIALIZATION_CHOICES = (
        ('composite_dentistry', 'کامپوزیت دندان'),
        ('cosmetic_dentistry', 'زیبایی دندان'),
        ('general_dentistry', 'دندانپزشکی عمومی'),
        ('orthodontics', 'ارتودنسی'),
        ('endodontics', 'اندودنتیکس'),
        ('periodontics', 'پریودنتیکس'),
    )
    
    full_name = models.CharField(max_length=200, verbose_name='نام کامل')
    specialization = models.CharField(max_length=50, choices=SPECIALIZATION_CHOICES, verbose_name='تخصص')
    education = models.TextField(verbose_name='تحصیلات')
    experience_years = models.IntegerField(verbose_name='سال‌های تجربه')
    bio = models.TextField(verbose_name='بیوگرافی')
    image = models.ImageField(upload_to='doctors/', blank=True, null=True, verbose_name='تصویر')
    phone = models.CharField(max_length=20, verbose_name='شماره تماس')
    email = models.EmailField(verbose_name='ایمیل')
    address = models.TextField(blank=True, null=True, verbose_name='آدرس')
    is_active = models.BooleanField(default=True, verbose_name='فعال')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='تاریخ ایجاد')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='تاریخ بروزرسانی')
    
    class Meta:
        verbose_name = 'دکتر'
        verbose_name_plural = 'دکترها'
        ordering = ['full_name']
    
    def __str__(self):
        return self.full_name

class DoctorSchedule(models.Model):
    DAYS_OF_WEEK = (
        ('monday', 'دوشنبه'),
        ('tuesday', 'سه‌شنبه'),
        ('wednesday', 'چهارشنبه'),
        ('thursday', 'پنج‌شنبه'),
        ('friday', 'جمعه'),
        ('saturday', 'شنبه'),
        ('sunday', 'یکشنبه'),
    )
    
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE, related_name='schedules', verbose_name='دکتر')
    day_of_week = models.CharField(max_length=20, choices=DAYS_OF_WEEK, verbose_name='روز هفته')
    start_time = models.TimeField(verbose_name='ساعت شروع')
    end_time = models.TimeField(verbose_name='ساعت پایان')
    is_available = models.BooleanField(default=True, verbose_name='در دسترس')
    
    class Meta:
        verbose_name = 'برنامه کاری'
        verbose_name_plural = 'برنامه‌های کاری'
        unique_together = ['doctor', 'day_of_week']
    
    def __str__(self):
        return f"{self.doctor.full_name} - {self.get_day_of_week_display()}" 