from django.db import models

class Service(models.Model):
    SERVICE_CATEGORY = (
        ('composite', 'کامپوزیت'),
        ('cosmetic', 'زیبایی'),
        ('preventive', 'پیشگیری'),
        ('emergency', 'اورژانس'),
        ('consultation', 'مشاوره'),
    )
    
    name = models.CharField(max_length=200, verbose_name='نام خدمات')
    description = models.TextField(verbose_name='توضیحات')
    category = models.CharField(max_length=50, choices=SERVICE_CATEGORY, verbose_name='دسته بندی')
    duration = models.IntegerField(help_text='مدت زمان به دقیقه', verbose_name='مدت زمان')
    price = models.DecimalField(max_digits=10, decimal_places=0, verbose_name='قیمت (تومان)')
    is_active = models.BooleanField(default=True, verbose_name='فعال')
    image = models.ImageField(upload_to='services/', blank=True, null=True, verbose_name='تصویر')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='تاریخ ایجاد')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='تاریخ بروزرسانی')
    
    class Meta:
        verbose_name = 'خدمات'
        verbose_name_plural = 'خدمات'
        ordering = ['category', 'name']
    
    def __str__(self):
        return self.name

class ServiceFeature(models.Model):
    service = models.ForeignKey(Service, on_delete=models.CASCADE, related_name='features', verbose_name='خدمات')
    title = models.CharField(max_length=200, verbose_name='عنوان')
    description = models.TextField(verbose_name='توضیحات')
    icon = models.CharField(max_length=50, blank=True, null=True, verbose_name='آیکون')
    
    class Meta:
        verbose_name = 'ویژگی خدمات'
        verbose_name_plural = 'ویژگی های خدمات'
    
    def __str__(self):
        return f"{self.service.name} - {self.title}" 