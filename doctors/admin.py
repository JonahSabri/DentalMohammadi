from django.contrib import admin
from .models import Doctor, DoctorSchedule

class DoctorScheduleInline(admin.TabularInline):
    model = DoctorSchedule
    extra = 1

@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'specialization', 'experience_years', 'phone', 'is_active')
    list_filter = ('specialization', 'is_active', 'created_at')
    search_fields = ('full_name', 'phone', 'email')
    ordering = ('full_name',)
    inlines = [DoctorScheduleInline]
    
    fieldsets = (
        ('اطلاعات شخصی', {
            'fields': ('full_name', 'specialization', 'phone', 'email')
        }),
        ('اطلاعات حرفه‌ای', {
            'fields': ('education', 'experience_years', 'bio')
        }),
        ('تصویر و وضعیت', {
            'fields': ('image', 'is_active')
        }),
    )

@admin.register(DoctorSchedule)
class DoctorScheduleAdmin(admin.ModelAdmin):
    list_display = ('doctor', 'day_of_week', 'start_time', 'end_time', 'is_available')
    list_filter = ('day_of_week', 'is_available', 'doctor')
    search_fields = ('doctor__full_name',) 