import os
import sys
import django
from django.core.management import execute_from_command_line

# Add the project directory to the Python path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

# Set up Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'dental_clinic.settings')
django.setup()

from django.contrib.auth.models import User
from doctors.models import Doctor, DoctorSchedule
from services.models import Service, ServiceFeature
from patients.models import Patient

def create_superuser():
    """Create a superuser for admin access"""
    if not User.objects.filter(username='admin').exists():
        User.objects.create_superuser('admin', 'admin@example.com', 'admin123')
        print("✅ Superuser created: admin/admin123")

def create_sample_doctors():
    """Create sample doctors"""
    doctors_data = [
        {
            'full_name': 'دکتر حدیثه محمدی',
            'specialization': 'composite_dentistry',
            'education': 'دکترای دندانپزشکی - دانشگاه علوم پزشکی تهران',
            'experience_years': 10,
            'bio': 'متخصص کامپوزیت و زیبایی دندان با بیش از 10 سال تجربه در زمینه پر کردن و ترمیم دندان‌ها. متخصص در درمان‌های کامپوزیت و زیبایی دندان',
            'phone': '09363381066',
            'email': 'dr.hadiyeh@clinic-mohammadi.com',
            'address': 'تهران، نسیم شهر، خیابان اصلی، پلاک 123'
        },
        {
            'full_name': 'دکتر سارا احمدی',
            'specialization': 'cosmetic_dentistry',
            'education': 'دکترای دندانپزشکی - دانشگاه علوم پزشکی شهید بهشتی',
            'experience_years': 8,
            'bio': 'متخصص زیبایی و ترمیم دندان با تخصص در ونیر کامپوزیت و لمینت',
            'phone': '021-87654321',
            'email': 'dr.ahmadi@clinic-mohammadi.com',
            'address': 'تهران، نسیم شهر، خیابان فرعی، پلاک 456'
        },
        {
            'full_name': 'دکتر علی محمدی',
            'specialization': 'general_dentistry',
            'education': 'دکترای دندانپزشکی - دانشگاه علوم پزشکی ایران',
            'experience_years': 6,
            'bio': 'دندانپزشک عمومی با تخصص در درمان‌های پیشگیرانه و بهداشت دهان و دندان',
            'phone': '021-11223344',
            'email': 'dr.ali@clinic-mohammadi.com',
            'address': 'تهران، نسیم شهر، خیابان اصلی، پلاک 789'
        }
    ]
    
    for doctor_data in doctors_data:
        doctor, created = Doctor.objects.get_or_create(
            full_name=doctor_data['full_name'],
            defaults=doctor_data
        )
        if created:
            print(f"✅ Doctor created: {doctor.full_name}")
            
            # Create schedule for each doctor
            schedule_data = [
                {'day_of_week': 'monday', 'start_time': '09:00', 'end_time': '18:00'},
                {'day_of_week': 'tuesday', 'start_time': '09:00', 'end_time': '18:00'},
                {'day_of_week': 'wednesday', 'start_time': '09:00', 'end_time': '18:00'},
                {'day_of_week': 'thursday', 'start_time': '09:00', 'end_time': '18:00'},
                {'day_of_week': 'friday', 'start_time': '09:00', 'end_time': '14:00'},
                {'day_of_week': 'saturday', 'start_time': '09:00', 'end_time': '14:00'},
            ]
            
            for schedule in schedule_data:
                DoctorSchedule.objects.get_or_create(
                    doctor=doctor,
                    day_of_week=schedule['day_of_week'],
                    defaults=schedule
                )

def create_sample_services():
    """Create sample services"""
    services_data = [
        {
            'name': 'پر کردن کامپوزیت',
            'description': 'پر کردن حرفه‌ای دندان با کامپوزیت رزین با کیفیت بالا',
            'category': 'composite',
            'duration': 60,
            'price': 500000
        },
        {
            'name': 'ونیر کامپوزیت',
            'description': 'ونیر کامپوزیت برای زیبایی و ترمیم دندان‌های جلو',
            'category': 'composite',
            'duration': 90,
            'price': 1200000
        },
        {
            'name': 'باندینگ کامپوزیت',
            'description': 'باندینگ کامپوزیت برای ترمیم و زیبایی دندان',
            'category': 'composite',
            'duration': 75,
            'price': 800000
        },
        {
            'name': 'سفید کردن دندان',
            'description': 'سفید کردن حرفه‌ای دندان با جدیدترین تکنولوژی',
            'category': 'cosmetic',
            'duration': 45,
            'price': 600000
        },
        {
            'name': 'جرم گیری و پولیش',
            'description': 'جرم گیری حرفه‌ای و پولیش دندان',
            'category': 'preventive',
            'duration': 30,
            'price': 300000
        },
        {
            'name': 'مشاوره تخصصی',
            'description': 'مشاوره رایگان با متخصصین کامپوزیت',
            'category': 'consultation',
            'duration': 20,
            'price': 0
        }
    ]
    
    for service_data in services_data:
        service, created = Service.objects.get_or_create(
            name=service_data['name'],
            defaults=service_data
        )
        if created:
            print(f"✅ Service created: {service.name}")
            
            # Add features for composite services
            if service.category == 'composite':
                features = [
                    'استفاده از بهترین مواد کامپوزیت',
                    'تضمین کیفیت کار',
                    'بدون درد و ناراحتی',
                    'نتیجه طبیعی و زیبا'
                ]
                for feature in features:
                    ServiceFeature.objects.get_or_create(
                        service=service,
                        title=feature,
                        defaults={'description': feature}
                    )

def create_sample_patients():
    """Create sample patients"""
    patients_data = [
        {
            'full_name': 'سارا احمدی',
            'phone': '09123456789',
            'email': 'sara.ahmadi@example.com',
            'gender': 'female'
        },
        {
            'full_name': 'علی محمدی',
            'phone': '09123456790',
            'email': 'ali.mohammadi@example.com',
            'gender': 'male'
        },
        {
            'full_name': 'فاطمه رضایی',
            'phone': '09123456791',
            'email': 'fateme.rezaei@example.com',
            'gender': 'female'
        }
    ]
    
    for patient_data in patients_data:
        patient, created = Patient.objects.get_or_create(
            phone=patient_data['phone'],
            defaults=patient_data
        )
        if created:
            print(f"✅ Patient created: {patient.full_name}")

def main():
    """Main setup function"""
    print("🚀 Setting up Dental Clinic Project...")
    
    # Run migrations
    print("📦 Running migrations...")
    execute_from_command_line(['manage.py', 'makemigrations'])
    execute_from_command_line(['manage.py', 'migrate'])
    
    # Create superuser
    print("👤 Creating superuser...")
    create_superuser()
    
    # Create sample data
    print("👨‍⚕️ Creating sample doctors...")
    create_sample_doctors()
    
    print("🦷 Creating sample services...")
    create_sample_services()
    
    print("👥 Creating sample patients...")
    create_sample_patients()
    
    print("✅ Setup completed successfully!")
    print("\n📋 Next steps:")
    print("1. Run Django server: python manage.py runserver")
    print("2. Run React development server: npm start")
    print("3. Access admin panel: http://localhost:8000/admin")
    print("4. Access frontend: http://localhost:3000")

if __name__ == '__main__':
    main() 