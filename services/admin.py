from django.contrib import admin
from .models import Service, ServiceFeature

class ServiceFeatureInline(admin.TabularInline):
    model = ServiceFeature
    extra = 1

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'duration', 'price', 'is_active')
    list_filter = ('category', 'is_active', 'created_at')
    search_fields = ('name', 'description')
    ordering = ('category', 'name')
    inlines = [ServiceFeatureInline]
    
    fieldsets = (
        ('اطلاعات اصلی', {
            'fields': ('name', 'description', 'category', 'duration', 'price', 'is_active')
        }),
        ('تصویر', {
            'fields': ('image',),
            'classes': ('collapse',)
        }),
    )

@admin.register(ServiceFeature)
class ServiceFeatureAdmin(admin.ModelAdmin):
    list_display = ('service', 'title', 'icon')
    list_filter = ('service',)
    search_fields = ('title', 'description') 