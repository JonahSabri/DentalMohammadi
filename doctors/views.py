from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Doctor
from .serializers import DoctorSerializer, DoctorListSerializer

class DoctorViewSet(viewsets.ModelViewSet):
    queryset = Doctor.objects.filter(is_active=True).prefetch_related('schedules')
    serializer_class = DoctorSerializer
    
    def get_serializer_class(self):
        if self.action == 'list':
            return DoctorListSerializer
        return DoctorSerializer
    
    @action(detail=False, methods=['get'])
    def composite_specialists(self, request):
        """Get composite dentistry specialists"""
        doctors = self.queryset.filter(specialization='composite_dentistry')
        serializer = self.get_serializer(doctors, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def cosmetic_specialists(self, request):
        """Get cosmetic dentistry specialists"""
        doctors = self.queryset.filter(specialization='cosmetic_dentistry')
        serializer = self.get_serializer(doctors, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def by_specialization(self, request):
        """Get doctors by specialization"""
        specialization = request.query_params.get('specialization')
        if specialization:
            doctors = self.queryset.filter(specialization=specialization)
        else:
            doctors = self.queryset.all()
        serializer = self.get_serializer(doctors, many=True)
        return Response(serializer.data) 