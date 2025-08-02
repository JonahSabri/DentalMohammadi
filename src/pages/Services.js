import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTooth, FaClock, FaStar, FaCheckCircle } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch('/api/services/');
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { value: 'all', label: 'همه خدمات' },
    { value: 'composite', label: 'کامپوزیت' },
    { value: 'cosmetic', label: 'زیبایی' },
    { value: 'preventive', label: 'پیشگیری' },
    { value: 'consultation', label: 'مشاوره' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="services-page">
      <div className="container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">خدمات کامپوزیت</h1>
          <p className="section-subtitle">
            ارائه بهترین خدمات کامپوزیت دندان با جدیدترین تکنولوژی‌ها و مواد با کیفیت
          </p>
        </motion.div>

        <motion.div
          className="category-filter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.value}
              className={`category-btn ${selectedCategory === category.value ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        <div className="services-grid">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="service-icon">
                <FaTooth />
              </div>
              <h3 className="service-title">{service.name}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-details">
                <div className="service-duration">
                  <FaClock />
                  <span>{service.duration} دقیقه</span>
                </div>
                <div className="service-price">
                  {service.price === 0 ? 'رایگان' : `${service.price.toLocaleString()} تومان`}
                </div>
              </div>

              {service.category === 'composite' && (
                <div className="service-features">
                  <h4>ویژگی‌های این خدمت:</h4>
                  <ul>
                    <li><FaCheckCircle /> استفاده از بهترین مواد کامپوزیت</li>
                    <li><FaCheckCircle /> تضمین کیفیت کار</li>
                    <li><FaCheckCircle /> بدون درد و ناراحتی</li>
                    <li><FaCheckCircle /> نتیجه طبیعی و زیبا</li>
                  </ul>
                </div>
              )}

              <div className="service-rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>
                <span className="rating-text">عالی (4.9)</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>آماده برای شروع درمان هستید؟</h2>
          <p>نوبت خود را رزرو کنید و از خدمات تخصصی ما بهره‌مند شوید</p>
          <motion.button
            className="btn btn-primary btn-large"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/appointment'}
          >
            رزرو نوبت رایگان
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services; 