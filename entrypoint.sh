#!/bin/bash

# Wait for database to be ready
echo "Waiting for database..."
sleep 10

# Run migrations
echo "Running migrations..."
python manage.py migrate

# Create superuser if it doesn't exist
echo "Creating superuser..."
python manage.py shell -c "
from django.contrib.auth.models import User
if not User.objects.filter(username='admin').exists():
    User.objects.create_superuser('admin', 'admin@clinic-mohammadi.com', 'admin123')
    print('Superuser created successfully')
else:
    print('Superuser already exists')
"

# Run setup script
echo "Running setup script..."
python setup.py

# Collect static files
echo "Collecting static files..."
python manage.py collectstatic --noinput

echo "Django application is ready!"

# Start Gunicorn
exec gunicorn --bind 0.0.0.0:8000 dental_clinic.wsgi:application 