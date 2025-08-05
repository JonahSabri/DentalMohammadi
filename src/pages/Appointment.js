import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { 
  FaCalendarAlt, 
  FaClock, 
  FaUserMd, 
  FaTooth,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { fetchApiData } from '../utils/apiHelpers';
import './Appointment.css';

const Appointment = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    email: '',
    doctorId: '',
    serviceId: '',
    appointmentDate: null,
    appointmentTime: '',
    appointmentType: '',
    notes: ''
  });

  const [doctors, setDoctors] = useState([]);
  const [services, setServices] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    fetchDoctors();
    fetchServices();
  }, []);

  useEffect(() => {
    if (formData.doctorId && formData.appointmentDate) {
      fetchAvailableTimes();
    }
  }, [formData.doctorId, formData.appointmentDate]);

  const fetchDoctors = async () => {
    const data = await fetchApiData('/api/doctors/');
    setDoctors(data);
  };

  const fetchServices = async () => {
    const data = await fetchApiData('/api/services/');
    setServices(data);
  };

  const fetchAvailableTimes = async () => {
    try {
      const dateStr = formData.appointmentDate.toISOString().split('T')[0];
      const response = await fetch(`/api/appointments/available_times/?doctor_id=${formData.doctorId}&date=${dateStr}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const timesArray = Array.isArray(data.available_times) ? data.available_times : [];
      setAvailableTimes(timesArray);
    } catch (error) {
      console.error('Error fetching available times:', error);
      setAvailableTimes([]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = (date) => {
    setFormData(prev => ({
      ...prev,
      appointmentDate: date,
      appointmentTime: ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // First, create or get patient
      const patientData = {
        full_name: formData.patientName,
        phone: formData.phone,
        email: formData.email
      };

      const patientResponse = await fetch('/api/patients/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(patientData)
      });

      const patient = await patientResponse.json();

      // Then create appointment
      const appointmentData = {
        patient: patient.id,
        doctor: formData.doctorId,
        service: formData.serviceId,
        appointment_date: formData.appointmentDate.toISOString().split('T')[0],
        appointment_time: formData.appointmentTime,
        appointment_type: formData.appointmentType,
        notes: formData.notes
      };

      const appointmentResponse = await fetch('/api/appointments/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData)
      });

      if (appointmentResponse.ok) {
        toast.success('نوبت شما با موفقیت ثبت شد!');
        setFormData({
          patientName: '',
          phone: '',
          email: '',
          doctorId: '',
          serviceId: '',
          appointmentDate: null,
          appointmentTime: '',
          appointmentType: '',
          notes: ''
        });
        setStep(1);
      } else {
        const error = await appointmentResponse.json();
        toast.error(error.detail || 'خطا در ثبت نوبت');
      }
    } catch (error) {
      console.error('Error creating appointment:', error);
      toast.error('خطا در ثبت نوبت');
    } finally {
      setLoading(false);
    }
  };

  const appointmentTypes = [
    { value: 'consultation', label: 'مشاوره' },
    { value: 'composite_filling', label: 'پر کردن کامپوزیت' },
    { value: 'composite_veneer', label: 'ونیر کامپوزیت' },
    { value: 'composite_bonding', label: 'باندینگ کامپوزیت' },
    { value: 'teeth_whitening', label: 'سفید کردن دندان' },
    { value: 'dental_cleaning', label: 'جرم گیری' },
    { value: 'emergency', label: 'اورژانس' }
  ];

  return (
    <div className="appointment-page">
      <div className="container">
        <motion.div
          className="appointment-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">رزرو نوبت</h1>
          <p className="section-subtitle">
            نوبت خود را به صورت رایگان رزرو کنید و از خدمات تخصصی ما بهره‌مند شوید
          </p>
        </motion.div>

        <div className="appointment-content">
          <motion.div
            className="appointment-form-container"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="appointment-form">
              <div className="form-section">
                <h3 className="form-section-title">
                  <FaUserMd /> اطلاعات شخصی
                </h3>
                <div className="grid grid-2">
                  <div className="form-group">
                    <label className="form-label">نام و نام خانوادگی *</label>
                    <input
                      type="text"
                      name="patientName"
                      value={formData.patientName}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">شماره تماس *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">ایمیل</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-section">
                <h3 className="form-section-title">
                  <FaTooth /> انتخاب خدمات و پزشک
                </h3>
                <div className="grid grid-2">
                  <div className="form-group">
                    <label className="form-label">انتخاب پزشک *</label>
                    <select
                      name="doctorId"
                      value={formData.doctorId}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    >
                      <option value="">پزشک مورد نظر را انتخاب کنید</option>
                      {Array.isArray(doctors) && doctors.map(doctor => (
                        <option key={doctor.id} value={doctor.id}>
                          {doctor.full_name} - {doctor.specialization_display}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">نوع خدمات *</label>
                    <select
                      name="appointmentType"
                      value={formData.appointmentType}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    >
                      <option value="">نوع خدمات را انتخاب کنید</option>
                      {appointmentTypes.map(type => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">خدمات *</label>
                  <select
                    name="serviceId"
                    value={formData.serviceId}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  >
                    <option value="">خدمات مورد نظر را انتخاب کنید</option>
                    {Array.isArray(services) && services.map(service => (
                      <option key={service.id} value={service.id}>
                        {service.name} - {service.price} تومان
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-section">
                <h3 className="form-section-title">
                  <FaCalendarAlt /> انتخاب زمان
                </h3>
                <div className="grid grid-2">
                  <div className="form-group">
                    <label className="form-label">تاریخ نوبت *</label>
                    <DatePicker
                      selected={formData.appointmentDate}
                      onChange={handleDateChange}
                      className="form-input"
                      placeholderText="تاریخ را انتخاب کنید"
                      dateFormat="yyyy/MM/dd"
                      minDate={new Date()}
                      filterDate={(date) => date.getDay() !== 5} // Exclude Fridays
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">ساعت نوبت *</label>
                    <select
                      name="appointmentTime"
                      value={formData.appointmentTime}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      disabled={!formData.appointmentDate}
                    >
                      <option value="">ساعت را انتخاب کنید</option>
                      {Array.isArray(availableTimes) && availableTimes.map(time => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3 className="form-section-title">
                  <FaEnvelope /> توضیحات اضافی
                </h3>
                <div className="form-group">
                  <label className="form-label">یادداشت (اختیاری)</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="form-input form-textarea"
                    placeholder="توضیحات اضافی خود را اینجا بنویسید..."
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary btn-large"
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {loading ? 'در حال ثبت...' : 'ثبت نوبت رایگان'}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="appointment-info"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="info-card">
              <h3>اطلاعات مهم</h3>
              <ul>
                <li>نوبت گیری کاملاً رایگان است</li>
                <li>لطفاً 15 دقیقه قبل از وقت نوبت حضور داشته باشید</li>
                <li>در صورت عدم حضور، نوبت لغو خواهد شد</li>
                <li>برای تغییر یا لغو نوبت با ما تماس بگیرید</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>ساعات کاری</h3>
              <div className="working-hours">
                <div className="working-day">
                  <span>شنبه تا چهارشنبه:</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="working-day">
                  <span>پنجشنبه:</span>
                  <span>9:00 - 14:00</span>
                </div>
                <div className="working-day">
                  <span>جمعه:</span>
                  <span>تعطیل</span>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h3>تماس با ما</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <FaPhone />
                  <span>09363381066</span>
                </div>
                <div className="contact-item">
                  <FaEnvelope />
                  <span>info@clinic-mohammadi.com</span>
                </div>
                <div className="contact-item">
                  <FaMapMarkerAlt />
                  <span>تهران، نسیم شهر، خیابان اصلی</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Appointment; 