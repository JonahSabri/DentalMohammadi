from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.utils import timezone
from datetime import datetime, timedelta
from .models import Appointment
from .serializers import AppointmentSerializer, AppointmentCreateSerializer

class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all().select_related('patient', 'doctor', 'service')
    serializer_class = AppointmentSerializer
    
    def get_serializer_class(self):
        if self.action == 'create':
            return AppointmentCreateSerializer
        return AppointmentSerializer
    
    @action(detail=False, methods=['get'])
    def available_times(self, request):
        """Get available appointment times for a specific doctor and date"""
        doctor_id = request.query_params.get('doctor_id')
        date_str = request.query_params.get('date')
        
        if not doctor_id or not date_str:
            return Response(
                {'error': 'doctor_id و date الزامی هستند'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        try:
            appointment_date = datetime.strptime(date_str, '%Y-%m-%d').date()
        except ValueError:
            return Response(
                {'error': 'فرمت تاریخ نامعتبر است'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Define working hours (9 AM to 6 PM)
        working_hours = [
            '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
            '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
            '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
        ]
        
        # Get booked times for this doctor and date
        booked_times = Appointment.objects.filter(
            doctor_id=doctor_id,
            appointment_date=appointment_date,
            status__in=['pending', 'confirmed']
        ).values_list('appointment_time', flat=True)
        
        booked_times = [time.strftime('%H:%M') for time in booked_times]
        available_times = [time for time in working_hours if time not in booked_times]
        
        return Response({
            'available_times': available_times,
            'booked_times': booked_times
        })
    
    @action(detail=False, methods=['get'])
    def today_appointments(self, request):
        """Get today's appointments"""
        today = timezone.now().date()
        appointments = self.queryset.filter(appointment_date=today)
        serializer = self.get_serializer(appointments, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def upcoming_appointments(self, request):
        """Get upcoming appointments"""
        today = timezone.now().date()
        appointments = self.queryset.filter(
            appointment_date__gte=today
        ).order_by('appointment_date', 'appointment_time')
        serializer = self.get_serializer(appointments, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['post'])
    def confirm_appointment(self, request, pk=None):
        """Confirm an appointment"""
        appointment = self.get_object()
        appointment.status = 'confirmed'
        appointment.save()
        serializer = self.get_serializer(appointment)
        return Response(serializer.data)
    
    @action(detail=True, methods=['post'])
    def cancel_appointment(self, request, pk=None):
        """Cancel an appointment"""
        appointment = self.get_object()
        appointment.status = 'cancelled'
        appointment.save()
        serializer = self.get_serializer(appointment)
        return Response(serializer.data)
    
    @action(detail=True, methods=['post'])
    def complete_appointment(self, request, pk=None):
        """Mark appointment as completed"""
        appointment = self.get_object()
        appointment.status = 'completed'
        appointment.save()
        serializer = self.get_serializer(appointment)
        return Response(serializer.data) 