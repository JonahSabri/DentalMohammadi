from django.db import models
from django.contrib.auth.models import User
from doctors.models import Doctor
from services.models import Service

class Appointment(models.Model):
    APPOINTMENT_STATUS = (
        ('pending', 'در انتظار تایید'),
        ('confirmed', 'تایید شده'),
        ('completed', 'تکمیل شده'),
        ('cancelled', 'لغو شده'),
    )
    
    APPOINTMENT_TYPE = (
        ('consultation', 'مشاوره'),
        ('composite_filling', 'پر کردن کامپوزیت'),
        ('composite_veneer', 'ونیر کامپوزیت'),
        ('composite_bonding', 'باندینگ کامپوزیت'),
        ('teeth_whitening', 'سفید کردن دندان'),
        ('dental_cleaning', 'جرم گیری'),
        ('emergency', 'اورژانس'),
    )
    
    patient = models.ForeignKey('patients.Patient', on_delete=models.CASCADE, verbose_name='بیمار')
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE, verbose_name='دکتر')
    service = models.ForeignKey(Service, on_delete=models.CASCADE, verbose_name='خدمات')
    appointment_date = models.DateField(verbose_name='تاریخ نوبت')
    appointment_time = models.TimeField(verbose_name='ساعت نوبت')
    appointment_type = models.CharField(max_length=50, choices=APPOINTMENT_TYPE, verbose_name='نوع نوبت')
    status = models.CharField(max_length=20, choices=APPOINTMENT_STATUS, default='pending', verbose_name='وضعیت')
    notes = models.TextField(blank=True, null=True, verbose_name='یادداشت')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='تاریخ ایجاد')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='تاریخ بروزرسانی')
    
    class Meta:
        verbose_name = 'نوبت'
        verbose_name_plural = 'نوبت ها'
        ordering = ['-appointment_date', '-appointment_time']
    
    def __str__(self):
        return f"{self.patient.full_name} - {self.doctor.full_name} - {self.appointment_date}" 