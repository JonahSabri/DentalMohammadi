import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUserMd, FaGraduationCap, FaClock, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Doctors.css';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await fetch('/api/doctors/');
      const data = await response.json();
      setDoctors(data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="doctors-page">
      <div className="container">
        <motion.div
          className="doctors-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">تیم پزشکی</h1>
          <p className="section-subtitle">
            متخصصین مجرب و با تجربه ما در زمینه کامپوزیت دندان
          </p>
        </motion.div>

        <div className="doctors-grid">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              className="doctor-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="doctor-image">
                <FaUserMd />
              </div>
              <div className="doctor-info">
                <h3 className="doctor-name">{doctor.full_name}</h3>
                <p className="doctor-specialization">{doctor.specialization_display}</p>
                <p className="doctor-experience">{doctor.experience_years} سال تجربه</p>
                <p className="doctor-education">{doctor.education}</p>
                <p className="doctor-bio">{doctor.bio}</p>
                
                <div className="doctor-contact">
                  <div className="contact-item">
                    <FaPhone />
                    <span>{doctor.phone}</span>
                  </div>
                  <div className="contact-item">
                    <FaEnvelope />
                    <span>{doctor.email}</span>
                  </div>
                </div>

                <div className="doctor-schedule">
                  <h4>ساعات کاری:</h4>
                  <div className="schedule-grid">
                    {doctor.schedules?.map((schedule, idx) => (
                      <div key={idx} className="schedule-item">
                        <span className="day">{schedule.day_of_week_display}</span>
                        <span className="time">
                          {schedule.start_time} - {schedule.end_time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="doctors-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>آماده برای مشاوره هستید؟</h2>
          <p>با متخصصین ما مشاوره کنید و بهترین درمان را انتخاب کنید</p>
          <motion.button
            className="btn btn-primary btn-large"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/appointment'}
          >
            رزرو نوبت مشاوره
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Doctors; 