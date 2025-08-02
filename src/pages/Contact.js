import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaWhatsapp,
  FaTelegram,
  FaInstagram
} from 'react-icons/fa';
import { toast } from 'react-toastify';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast.success('پیام شما با موفقیت ارسال شد!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'تلفن تماس',
      value: '021-12345678',
      link: 'tel:021-12345678'
    },
    {
      icon: <FaEnvelope />,
      title: 'ایمیل',
      value: 'info@dentalclinic.com',
      link: 'mailto:info@dentalclinic.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'آدرس',
      value: 'تهران، خیابان ولیعصر، پلاک 123',
      link: '#'
    },
    {
      icon: <FaClock />,
      title: 'ساعات کاری',
      value: 'شنبه تا چهارشنبه: 9:00 - 18:00',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <FaWhatsapp />,
      name: 'واتساپ',
      link: 'https://wa.me/989123456789',
      color: '#25D366'
    },
    {
      icon: <FaTelegram />,
      name: 'تلگرام',
      link: 'https://t.me/dentalclinic',
      color: '#0088cc'
    },
    {
      icon: <FaInstagram />,
      name: 'اینستاگرام',
      link: 'https://instagram.com/dentalclinic',
      color: '#E4405F'
    }
  ];

  return (
    <div className="contact-page">
      <div className="container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">تماس با ما</h1>
          <p className="section-subtitle">
            برای دریافت مشاوره و رزرو نوبت با ما تماس بگیرید
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info-section"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>اطلاعات تماس</h2>
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-info-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="contact-icon">{info.icon}</div>
                  <h3>{info.title}</h3>
                  <a href={info.link} className="contact-value">
                    {info.value}
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="social-links-section">
              <h3>شبکه‌های اجتماعی</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ backgroundColor: social.color }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="map-section">
              <h3>موقعیت ما</h3>
              <div className="map-container">
                <div className="map-placeholder">
                  <FaMapMarkerAlt />
                  <p>نقشه کلینیک</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2>ارسال پیام</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">نام و نام خانوادگی *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">ایمیل *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">شماره تماس</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">موضوع *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">پیام *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-input form-textarea"
                  rows="6"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary btn-large"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ارسال پیام
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="emergency-contact"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="emergency-card">
            <h3>اورژانس دندانپزشکی</h3>
            <p>برای موارد اورژانس در ساعات غیر کاری با شماره زیر تماس بگیرید:</p>
            <a href="tel:09123456789" className="emergency-phone">
              <FaPhone /> 09123456789
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 