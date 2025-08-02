from rest_framework import serializers
from .models import Appointment
from patients.models import Patient
from doctors.models import Doctor
from services.models import Service

class AppointmentSerializer(serializers.ModelSerializer):
    patient_name = serializers.CharField(source='patient.full_name', read_only=True)
    doctor_name = serializers.CharField(source='doctor.full_name', read_only=True)
    service_name = serializers.CharField(source='service.name', read_only=True)
    
    class Meta:
        model = Appointment
        fields = [
            'id', 'patient', 'patient_name', 'doctor', 'doctor_name', 
            'service', 'service_name', 'appointment_date', 'appointment_time',
            'appointment_type', 'status', 'notes', 'created_at', 'updated_at'
        ]
        read_only_fields = ['status', 'created_at', 'updated_at']
    
    def validate(self, data):
        # Check if the appointment time is available
        existing_appointment = Appointment.objects.filter(
            doctor=data['doctor'],
            appointment_date=data['appointment_date'],
            appointment_time=data['appointment_time'],
            status__in=['pending', 'confirmed']
        ).exclude(id=self.instance.id if self.instance else None)
        
        if existing_appointment.exists():
            raise serializers.ValidationError("این زمان قبلاً رزرو شده است.")
        
        return data

class AppointmentCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = [
            'patient', 'doctor', 'service', 'appointment_date', 
            'appointment_time', 'appointment_type', 'notes'
        ]
    
    def validate(self, data):
        # Check if the appointment time is available
        existing_appointment = Appointment.objects.filter(
            doctor=data['doctor'],
            appointment_date=data['appointment_date'],
            appointment_time=data['appointment_time'],
            status__in=['pending', 'confirmed']
        )
        
        if existing_appointment.exists():
            raise serializers.ValidationError("این زمان قبلاً رزرو شده است.")
        
        return data 