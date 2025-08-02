from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.db.models import Q
from .models import Patient, PatientNote
from .serializers import PatientSerializer, PatientCreateSerializer, PatientNoteSerializer

class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all().prefetch_related('notes')
    serializer_class = PatientSerializer
    
    def get_serializer_class(self):
        if self.action == 'create':
            return PatientCreateSerializer
        return PatientSerializer
    
    @action(detail=False, methods=['get'])
    def search(self, request):
        """Search patients by name or phone"""
        query = request.query_params.get('q', '')
        if query:
            patients = self.queryset.filter(
                Q(full_name__icontains=query) | Q(phone__icontains=query)
            )
        else:
            patients = self.queryset.all()
        serializer = self.get_serializer(patients, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['post'])
    def add_note(self, request, pk=None):
        """Add a note to a patient"""
        patient = self.get_object()
        serializer = PatientNoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(patient=patient)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PatientNoteViewSet(viewsets.ModelViewSet):
    queryset = PatientNote.objects.all()
    serializer_class = PatientNoteSerializer 