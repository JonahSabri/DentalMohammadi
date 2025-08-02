@echo off
echo Starting Dental Clinic Project...
echo.

echo Starting Django Backend...
start cmd /k "python manage.py runserver"

echo.
echo Starting React Frontend...
start cmd /k "npm start"

echo.
echo Project is starting...
echo Django Admin: http://localhost:8000/admin
echo Frontend: http://localhost:3000
echo.
pause 