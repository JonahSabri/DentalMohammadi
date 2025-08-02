from django.db import models

class Patient(models.Model):
    GENDER_CHOICES = (
        ('male', 'مرد'),
        ('female', 'زن'),
    )
    
    full_name = models.CharField(max_length=200, verbose_name='نام کامل')
    phone = models.CharField(max_length=20, unique=True, verbose_name='شماره تماس')
    email = models.EmailField(blank=True, null=True, verbose_name='ایمیل')
    national_id = models.CharField(max_length=20, blank=True, null=True, verbose_name='کد ملی')
    birth_date = models.DateField(blank=True, null=True, verbose_name='تاریخ تولد')
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES, blank=True, null=True, verbose_name='جنسیت')
    address = models.TextField(blank=True, null=True, verbose_name='آدرس')
    emergency_contact = models.CharField(max_length=20, blank=True, null=True, verbose_name='شماره تماس اضطراری')
    medical_history = models.TextField(blank=True, null=True, verbose_name='سابقه پزشکی')
    allergies = models.TextField(blank=True, null=True, verbose_name='آلرژی‌ها')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='تاریخ ثبت')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='تاریخ بروزرسانی')
    
    class Meta:
        verbose_name = 'بیمار'
        verbose_name_plural = 'بیماران'
        ordering = ['-created_at']
    
    def __str__(self):
        return self.full_name

class PatientNote(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE, related_name='notes', verbose_name='بیمار')
    title = models.CharField(max_length=200, verbose_name='عنوان')
    content = models.TextField(verbose_name='محتوای یادداشت')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='تاریخ ایجاد')
    
    class Meta:
        verbose_name = 'یادداشت بیمار'
        verbose_name_plural = 'یادداشت‌های بیمار'
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.patient.full_name} - {self.title}" 