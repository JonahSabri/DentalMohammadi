import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaTooth, 
  FaUserMd, 
  FaCalendarAlt, 
  FaPhone, 
  FaStar,
  FaCheckCircle,
  FaArrowLeft
} from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: <FaTooth />,
      title: 'کامپوزیت تخصصی',
      description: 'بهترین خدمات کامپوزیت با جدیدترین تکنولوژی‌ها'
    },
    {
      icon: <FaUserMd />,
      title: 'پزشکان متخصص',
      description: 'تیم پزشکی مجرب و متخصص در زمینه کامپوزیت'
    },
    {
      icon: <FaCalendarAlt />,
      title: 'نوبت گیری رایگان',
      description: 'رزرو نوبت آنلاین به صورت رایگان و آسان'
    },
    {
      icon: <FaPhone />,
      title: 'پشتیبانی 24/7',
      description: 'پشتیبانی شبانه‌روزی برای پاسخگویی به شما'
    }
  ];

  const services = [
    {
      title: 'پر کردن کامپوزیت',
      description: 'پر کردن حرفه‌ای دندان با کامپوزیت',
      price: '500,000 تومان',
      duration: '60 دقیقه'
    },
    {
      title: 'ونیر کامپوزیت',
      description: 'ونیر کامپوزیت برای زیبایی دندان',
      price: '1,200,000 تومان',
      duration: '90 دقیقه'
    },
    {
      title: 'باندینگ کامپوزیت',
      description: 'باندینگ کامپوزیت برای ترمیم دندان',
      price: '800,000 تومان',
      duration: '75 دقیقه'
    }
  ];

  const testimonials = [
    {
      name: 'سارا احمدی',
      text: 'تجربه فوق‌العاده‌ای داشتم. دکتر بسیار متخصص بود و نتیجه کار عالی شد.',
      rating: 5
    },
    {
      name: 'علی محمدی',
      text: 'خدمات کامپوزیت عالی بود. قیمت‌ها مناسب و کیفیت کار بالا بود.',
      rating: 5
    },
    {
      name: 'فاطمه رضایی',
      text: 'نوبت گیری خیلی راحت بود و پزشک بسیار حرفه‌ای عمل کرد.',
      rating: 5
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <motion.div
              className="hero-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">
                کلینیک تخصصی
                <span className="gradient-text"> کامپوزیت دندان</span>
              </h1>
              <p className="hero-subtitle">
                با بیش از 10 سال تجربه در زمینه کامپوزیت دندان، ما بهترین خدمات را با جدیدترین تکنولوژی‌ها ارائه می‌دهیم
              </p>
              <div className="hero-buttons">
                <Link to="/appointment" className="btn btn-primary">
                  <FaCalendarAlt /> نوبت گیری رایگان
                </Link>
                <Link to="/services" className="btn btn-outline">
                  مشاهده خدمات
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="hero-image"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="hero-image-container">
                <FaTooth className="hero-icon" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            چرا ما را انتخاب کنید؟
          </motion.h2>
          <div className="grid grid-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            خدمات کامپوزیت
          </motion.h2>
          <div className="grid grid-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-details">
                  <span className="service-price">{service.price}</span>
                  <span className="service-duration">{service.duration}</span>
                </div>
                <Link to="/appointment" className="btn btn-primary">
                  رزرو نوبت
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            نظرات بیماران
          </motion.h2>
          <div className="grid grid-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <FaCheckCircle className="check-icon" />
                  <span>{testimonial.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-title">آماده برای شروع درمان هستید؟</h2>
            <p className="cta-subtitle">
              همین حالا نوبت خود را رزرو کنید و از خدمات تخصصی ما بهره‌مند شوید
            </p>
            <Link to="/appointment" className="btn btn-primary btn-large">
              <FaCalendarAlt /> رزرو نوبت رایگان
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 