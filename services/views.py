from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Service
from .serializers import ServiceSerializer, ServiceListSerializer

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.filter(is_active=True).prefetch_related('features')
    serializer_class = ServiceSerializer
    
    def get_serializer_class(self):
        if self.action == 'list':
            return ServiceListSerializer
        return ServiceSerializer
    
    @action(detail=False, methods=['get'])
    def composite_services(self, request):
        """Get composite dentistry services"""
        services = self.queryset.filter(category='composite')
        serializer = self.get_serializer(services, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def cosmetic_services(self, request):
        """Get cosmetic dentistry services"""
        services = self.queryset.filter(category='cosmetic')
        serializer = self.get_serializer(services, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def by_category(self, request):
        """Get services by category"""
        category = request.query_params.get('category')
        if category:
            services = self.queryset.filter(category=category)
        else:
            services = self.queryset.all()
        serializer = self.get_serializer(services, many=True)
        return Response(serializer.data) 