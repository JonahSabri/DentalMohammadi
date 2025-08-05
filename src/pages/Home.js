import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  FaTooth, 
  FaUserMd, 
  FaCalendarAlt, 
  FaPhone, 
  FaStar,
  FaCheckCircle,
  FaArrowRight,
  FaPlay,
  FaHeart,
  FaShieldAlt,
  FaAward,
  FaClock,
  FaMapMarkerAlt,
  FaEnvelope
} from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FaTooth />,
      title: 'کامپوزیت تخصصی',
      description: 'بهترین خدمات کامپوزیت با جدیدترین تکنولوژی‌ها',
      color: '#667eea',
      delay: 0.1
    },
    {
      icon: <FaUserMd />,
      title: 'پزشکان متخصص',
      description: 'تیم پزشکی مجرب و متخصص در زمینه کامپوزیت',
      color: '#f093fb',
      delay: 0.2
    },
    {
      icon: <FaCalendarAlt />,
      title: 'نوبت گیری رایگان',
      description: 'رزرو نوبت آنلاین به صورت رایگان و آسان',
      color: '#4CAF50',
      delay: 0.3
    },
    {
      icon: <FaPhone />,
      title: 'پشتیبانی 24/7',
      description: 'پشتیبانی شبانه‌روزی برای پاسخگویی به شما',
      color: '#FF9800',
      delay: 0.4
    }
  ];

  const services = [
    {
      title: 'پر کردن کامپوزیت',
      description: 'پر کردن حرفه‌ای دندان با کامپوزیت',
      price: '500,000 تومان',
      duration: '60 دقیقه',
      icon: <FaTooth />,
      color: '#667eea'
    },
    {
      title: 'ونیر کامپوزیت',
      description: 'ونیر کامپوزیت برای زیبایی دندان',
      price: '1,200,000 تومان',
      duration: '90 دقیقه',
      icon: <FaHeart />,
      color: '#f093fb'
    },
    {
      title: 'باندینگ کامپوزیت',
      description: 'باندینگ کامپوزیت برای ترمیم دندان',
      price: '800,000 تومان',
      duration: '75 دقیقه',
      icon: <FaShieldAlt />,
      color: '#4CAF50'
    }
  ];

  const testimonials = [
    {
      name: 'سارا احمدی',
      text: 'تجربه فوق‌العاده‌ای داشتم. دکتر بسیار متخصص بود و نتیجه کار عالی شد.',
      rating: 5,
      avatar: 'SA'
    },
    {
      name: 'علی محمدی',
      text: 'خدمات کامپوزیت عالی بود. قیمت‌ها مناسب و کیفیت کار بالا بود.',
      rating: 5,
      avatar: 'AM'
    },
    {
      name: 'فاطمه رضایی',
      text: 'نوبت گیری خیلی راحت بود و پزشک بسیار حرفه‌ای عمل کرد.',
      rating: 5,
      avatar: 'FR'
    }
  ];

  const stats = [
    { number: '1000+', label: 'بیمار راضی', icon: <FaHeart /> },
    { number: '10+', label: 'سال تجربه', icon: <FaAward /> },
    { number: '50+', label: 'پزشک متخصص', icon: <FaUserMd /> },
    { number: '24/7', label: 'پشتیبانی', icon: <FaClock /> }
  ];

  return (
    <div className="home">
      {/* Enhanced Hero Section */}
      <section className="hero">
        {/* Animated Background Elements */}
        <div className="hero-background">
          <motion.div
            className="floating-shape shape-1"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="floating-shape shape-2"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="floating-shape shape-3"
            animate={{
              y: [0, -15, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container">
          <div className="hero-content">
            <motion.div
              className="hero-text"
              initial={{ opacity: 0, x: -100, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ 
                duration: 1,
                ease: "easeOut"
              }}
            >
              <motion.div
                className="hero-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <FaAward />
                <span>بهترین کلینیک کامپوزیت 2024</span>
              </motion.div>

              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                کلینیک تخصصی
                <span style={{color: '#ffd700'}}> کامپوزیت دندان</span>
              </motion.h1>

              <motion.p 
                className="hero-subtitle"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                با بیش از 10 سال تجربه در زمینه کامپوزیت دندان، ما بهترین خدمات را با جدیدترین تکنولوژی‌ها ارائه می‌دهیم
              </motion.p>

              <motion.div 
                className="hero-stats"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="stat-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-content">
                      <div className="stat-number">{stat.number}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                className="hero-buttons"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/appointment" className="btn btn-primary btn-hero">
                    <FaCalendarAlt />
                    <span>نوبت گیری رایگان</span>
                    <FaArrowRight />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/services" className="btn btn-outline btn-hero">
                    <FaPlay />
                    <span>مشاهده خدمات</span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, x: 100, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ 
                delay: 0.5,
                duration: 1,
                ease: "easeOut"
              }}
            >
              <div className="hero-image-container">
                <motion.div
                  className="hero-main-icon"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FaTooth />
                </motion.div>
                
                <motion.div
                  className="floating-icons"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="floating-icon icon-1">
                    <FaUserMd />
                  </div>
                  <div className="floating-icon icon-2">
                    <FaHeart />
                  </div>
                  <div className="floating-icon icon-3">
                    <FaAward />
                  </div>
                  <div className="floating-icon icon-4">
                    <FaShieldAlt />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="scroll-arrow"></div>
        </motion.div>
      </section>

      {/* Enhanced Features Section */}
      <section className="section features-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">چرا ما را انتخاب کنید؟</h2>
            <p className="section-subtitle">
              با انتخاب ما، از بهترین خدمات کامپوزیت دندان بهره‌مند شوید
            </p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                style={{
                  '--feature-color': feature.color
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: feature.delay,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="feature-icon"
                  style={{ color: feature.color }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <motion.div
                  className="feature-hover-effect"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="section services-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">خدمات کامپوزیت</h2>
            <p className="section-subtitle">
              ارائه بهترین خدمات کامپوزیت با جدیدترین تکنولوژی‌ها
            </p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                style={{
                  '--service-color': service.color,
                  '--service-color-light': service.color
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15,
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="service-icon"
                  style={{ color: service.color }}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 10
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-details">
                  <span className="service-price">{service.price}</span>
                  <span className="service-duration">{service.duration}</span>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/appointment" className="btn btn-primary btn-service">
                    رزرو نوبت
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">نظرات بیماران</h2>
            <p className="section-subtitle">
              تجربیات واقعی بیماران ما از خدمات کامپوزیت
            </p>
          </motion.div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="testimonial-avatar">
                  {testimonial.avatar}
                </div>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <FaStar className="star" />
                    </motion.div>
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

      {/* Enhanced CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="cta-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              آماده برای شروع درمان هستید؟
            </motion.h2>
            <motion.p 
              className="cta-subtitle"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              همین حالا نوبت خود را رزرو کنید و از خدمات تخصصی ما بهره‌مند شوید
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/appointment" className="btn btn-primary btn-large btn-cta">
                <FaCalendarAlt />
                <span>رزرو نوبت رایگان</span>
                <FaArrowRight />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 