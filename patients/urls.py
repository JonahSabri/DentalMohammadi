from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PatientViewSet, PatientNoteViewSet

router = DefaultRouter()
router.register(r'patients', PatientViewSet)
router.register(r'patient-notes', PatientNoteViewSet)

urlpatterns = [
    path('', include(router.urls)),
] 