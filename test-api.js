// Test script for API endpoints
const testAPI = async () => {
  console.log('Testing API endpoints...');

  try {
    // Test doctors endpoint
    console.log('\n1. Testing doctors endpoint...');
    const doctorsResponse = await fetch('/api/doctors/');
    const doctorsData = await doctorsResponse.json();
    console.log('Doctors response:', doctorsData);
    console.log('Is array:', Array.isArray(doctorsData));
    console.log('Has results:', doctorsData.results ? 'Yes' : 'No');

    // Test services endpoint
    console.log('\n2. Testing services endpoint...');
    const servicesResponse = await fetch('/api/services/');
    const servicesData = await servicesResponse.json();
    console.log('Services response:', servicesData);
    console.log('Is array:', Array.isArray(servicesData));
    console.log('Has results:', servicesData.results ? 'Yes' : 'No');

    // Test appointments endpoint
    console.log('\n3. Testing appointments endpoint...');
    const appointmentsResponse = await fetch('/api/appointments/');
    const appointmentsData = await appointmentsResponse.json();
    console.log('Appointments response:', appointmentsData);

  } catch (error) {
    console.error('Error testing API:', error);
  }
};

// Run test if in browser
if (typeof window !== 'undefined') {
  testAPI();
}

export default testAPI; 