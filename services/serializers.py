from rest_framework import serializers
from .models import Service, ServiceFeature

class ServiceFeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceFeature
        fields = ['id', 'title', 'description', 'icon']

class ServiceSerializer(serializers.ModelSerializer):
    features = ServiceFeatureSerializer(many=True, read_only=True)
    
    class Meta:
        model = Service
        fields = [
            'id', 'name', 'description', 'category', 'duration', 
            'price', 'is_active', 'image', 'features', 'created_at', 'updated_at'
        ]
        read_only_fields = ['created_at', 'updated_at']

class ServiceListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['id', 'name', 'description', 'category', 'duration', 'price', 'image'] 