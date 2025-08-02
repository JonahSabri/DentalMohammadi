from django.contrib import admin
from .models import Appointment

@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('patient', 'doctor', 'appointment_date', 'appointment_time', 'appointment_type', 'status')
    list_filter = ('status', 'appointment_type', 'appointment_date', 'doctor')
    search_fields = ('patient__full_name', 'doctor__full_name', 'notes')
    date_hierarchy = 'appointment_date'
    ordering = ('-appointment_date', '-appointment_time')
    
    fieldsets = (
        ('اطلاعات بیمار و پزشک', {
            'fields': ('patient', 'doctor', 'service')
        }),
        ('جزئیات نوبت', {
            'fields': ('appointment_date', 'appointment_time', 'appointment_type', 'status')
        }),
        ('یادداشت', {
            'fields': ('notes',),
            'classes': ('collapse',)
        }),
    )
    
    def get_queryset(self, request):
        return super().get_queryset(request).select_related('patient', 'doctor', 'service') 