import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaTooth, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaWhatsapp
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer-brand">
              <FaTooth className="footer-logo" />
              <h3>کلینیک محمدی</h3>
            </div>
            <p className="footer-description">
              ارائه بهترین خدمات کامپوزیت دندان با جدیدترین تکنولوژی‌ها و تیم پزشکی مجرب در تهران، نسیم شهر
            </p>
            <div className="social-links">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="social-link"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="social-link"
              >
                <FaTelegram />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="social-link"
              >
                <FaWhatsapp />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4>دسترسی سریع</h4>
            <ul className="footer-links">
              <li><Link to="/">خانه</Link></li>
              <li><Link to="/services">خدمات</Link></li>
              <li><Link to="/doctors">پزشکان</Link></li>
              <li><Link to="/appointment">نوبت گیری</Link></li>
              <li><Link to="/about">درباره ما</Link></li>
              <li><Link to="/contact">تماس</Link></li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>خدمات ما</h4>
            <ul className="footer-links">
              <li>پر کردن کامپوزیت</li>
              <li>ونیر کامپوزیت</li>
              <li>باندینگ کامپوزیت</li>
              <li>سفید کردن دندان</li>
              <li>جرم گیری</li>
              <li>مشاوره تخصصی</li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4>تماس با ما</h4>
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
            <div className="working-hours">
              <h5>ساعات کاری:</h5>
              <p>شنبه تا چهارشنبه: 9:00 - 18:00</p>
              <p>پنجشنبه: 9:00 - 14:00</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} کلینیک محمدی. تمامی حقوق محفوظ است.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy">حریم خصوصی</Link>
              <Link to="/terms">شرایط استفاده</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 