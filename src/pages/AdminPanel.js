import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUserMd, 
  FaCalendarAlt, 
  FaTooth, 
  FaUsers,
  FaCog,
  FaChartBar
} from 'react-icons/fa';
import { fetchApiData } from '../utils/apiHelpers';
import './AdminPanel.css';

const AdminPanel = () => {
  const [stats, setStats] = useState({
    doctors: 0,
    appointments: 0,
    services: 0,
    patients: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [doctors, appointments, services, patients] = await Promise.all([
        fetchApiData('/api/doctors/'),
        fetchApiData('/api/appointments/'),
        fetchApiData('/api/services/'),
        fetchApiData('/api/patients/')
      ]);

      setStats({
        doctors: doctors.length,
        appointments: appointments.length,
        services: services.length,
        patients: patients.length
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const adminActions = [
    {
      title: 'مدیریت پزشکان',
      description: 'افزودن، ویرایش و حذف پزشکان',
      icon: <FaUserMd />,
      link: 'http://localhost:8000/admin/doctors/doctor/',
      color: '#667eea'
    },
    {
      title: 'مدیریت نوبت‌ها',
      description: 'مشاهده و مدیریت نوبت‌های بیماران',
      icon: <FaCalendarAlt />,
      link: 'http://localhost:8000/admin/appointments/appointment/',
      color: '#f093fb'
    },
    {
      title: 'مدیریت خدمات',
      description: 'افزودن و ویرایش خدمات کامپوزیت',
      icon: <FaTooth />,
      link: 'http://localhost:8000/admin/services/service/',
      color: '#4CAF50'
    },
    {
      title: 'مدیریت بیماران',
      description: 'مشاهده اطلاعات بیماران',
      icon: <FaUsers />,
      link: 'http://localhost:8000/admin/patients/patient/',
      color: '#FF9800'
    }
  ];

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="admin-panel">
      <div className="container">
        <motion.div
          className="admin-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">پنل مدیریت</h1>
          <p className="section-subtitle">
            مدیریت کامل کلینیک کامپوزیت از طریق این پنل
          </p>
        </motion.div>

        <div className="stats-grid">
          {Object.entries(stats).map(([key, value], index) => (
            <motion.div
              key={key}
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="stat-icon">
                {key === 'doctors' && <FaUserMd />}
                {key === 'appointments' && <FaCalendarAlt />}
                {key === 'services' && <FaTooth />}
                {key === 'patients' && <FaUsers />}
              </div>
              <div className="stat-content">
                <h3 className="stat-number">{value}</h3>
                <p className="stat-label">
                  {key === 'doctors' && 'پزشک'}
                  {key === 'appointments' && 'نوبت'}
                  {key === 'services' && 'خدمات'}
                  {key === 'patients' && 'بیمار'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="admin-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>عملیات مدیریت</h2>
          <div className="actions-grid">
            {adminActions.map((action, index) => (
              <motion.div
                key={index}
                className="action-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="action-icon" style={{ color: action.color }}>
                  {action.icon}
                </div>
                <h3 className="action-title">{action.title}</h3>
                <p className="action-description">{action.description}</p>
                <motion.a
                  href={action.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ورود به بخش
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="admin-info"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="info-card">
            <h3>دسترسی کامل به پنل ادمین</h3>
            <p>
              برای دسترسی کامل به تمام بخش‌های مدیریت، به آدرس زیر مراجعه کنید:
            </p>
            <a 
              href="http://localhost:8000/admin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <FaCog /> ورود به پنل ادمین
            </a>
            <div className="login-info">
              <p><strong>نام کاربری:</strong> admin</p>
              <p><strong>رمز عبور:</strong> admin123</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminPanel; 