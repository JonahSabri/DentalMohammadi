@echo off
echo Installing Dental Clinic Project Dependencies...
echo.

echo Installing Python dependencies...
pip install -r requirements.txt

echo.
echo Installing Node.js dependencies...
npm install

echo.
echo Setting up Django project...
python setup.py

echo.
echo Installation completed!
echo.
echo To start the project, run: start.bat
echo.
pause 