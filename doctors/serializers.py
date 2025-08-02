from rest_framework import serializers
from .models import Doctor, DoctorSchedule

class DoctorScheduleSerializer(serializers.ModelSerializer):
    day_of_week_display = serializers.CharField(source='get_day_of_week_display', read_only=True)
    
    class Meta:
        model = DoctorSchedule
        fields = ['id', 'day_of_week', 'day_of_week_display', 'start_time', 'end_time', 'is_available']

class DoctorSerializer(serializers.ModelSerializer):
    specialization_display = serializers.CharField(source='get_specialization_display', read_only=True)
    schedules = DoctorScheduleSerializer(many=True, read_only=True)
    
    class Meta:
        model = Doctor
        fields = [
            'id', 'full_name', 'specialization', 'specialization_display',
            'education', 'experience_years', 'bio', 'image', 'phone', 'email',
            'is_active', 'schedules', 'created_at', 'updated_at'
        ]
        read_only_fields = ['created_at', 'updated_at']

class DoctorListSerializer(serializers.ModelSerializer):
    specialization_display = serializers.CharField(source='get_specialization_display', read_only=True)
    
    class Meta:
        model = Doctor
        fields = ['id', 'full_name', 'specialization', 'specialization_display', 'experience_years', 'image'] 