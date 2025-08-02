#!/bin/bash

echo "Starting Dental Clinic Project..."
echo

echo "Starting Django Backend..."
python manage.py runserver &
DJANGO_PID=$!

echo
echo "Starting React Frontend..."
npm start &
REACT_PID=$!

echo
echo "Project is starting..."
echo "Django Admin: http://localhost:8000/admin"
echo "Frontend: http://localhost:3000"
echo
echo "Press Ctrl+C to stop both servers"
echo

# Wait for both processes
wait $DJANGO_PID $REACT_PID 