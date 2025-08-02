from django.contrib import admin
from .models import Patient, PatientNote

class PatientNoteInline(admin.TabularInline):
    model = PatientNote
    extra = 1

@admin.register(Patient)
class PatientAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'phone', 'email', 'gender', 'created_at')
    list_filter = ('gender', 'created_at')
    search_fields = ('full_name', 'phone', 'email', 'national_id')
    ordering = ('-created_at',)
    inlines = [PatientNoteInline]
    
    fieldsets = (
        ('اطلاعات شخصی', {
            'fields': ('full_name', 'phone', 'email', 'national_id', 'birth_date', 'gender')
        }),
        ('اطلاعات تماس', {
            'fields': ('address', 'emergency_contact')
        }),
        ('اطلاعات پزشکی', {
            'fields': ('medical_history', 'allergies'),
            'classes': ('collapse',)
        }),
    )

@admin.register(PatientNote)
class PatientNoteAdmin(admin.ModelAdmin):
    list_display = ('patient', 'title', 'created_at')
    list_filter = ('created_at',)
    search_fields = ('patient__full_name', 'title', 'content') 