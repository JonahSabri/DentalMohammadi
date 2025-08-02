from rest_framework import serializers
from .models import Patient, PatientNote

class PatientNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientNote
        fields = ['id', 'title', 'content', 'created_at']
        read_only_fields = ['created_at']

class PatientSerializer(serializers.ModelSerializer):
    notes = PatientNoteSerializer(many=True, read_only=True)
    
    class Meta:
        model = Patient
        fields = [
            'id', 'full_name', 'phone', 'email', 'national_id', 'birth_date',
            'gender', 'address', 'emergency_contact', 'medical_history', 'allergies',
            'notes', 'created_at', 'updated_at'
        ]
        read_only_fields = ['created_at', 'updated_at']

class PatientCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = [
            'full_name', 'phone', 'email', 'national_id', 'birth_date',
            'gender', 'address', 'emergency_contact', 'medical_history', 'allergies'
        ]
    
    def validate_phone(self, value):
        # Check if phone number already exists
        if Patient.objects.filter(phone=value).exists():
            raise serializers.ValidationError("این شماره تماس قبلاً ثبت شده است.")
        return value 