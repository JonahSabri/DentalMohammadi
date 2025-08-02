import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaTooth, 
  FaAward, 
  FaUsers, 
  FaClock, 
  FaCheckCircle,
  FaHeart,
  FaStar
} from 'react-icons/fa';
import './About.css';

const About = () => {
  const achievements = [
    {
      icon: <FaUsers />,
      number: '1000+',
      title: 'بیمار راضی',
      description: 'بیش از 1000 بیمار راضی از خدمات ما'
    },
    {
      icon: <FaClock />,
      number: '10+',
      title: 'سال تجربه',
      description: 'بیش از 10 سال تجربه در زمینه کامپوزیت'
    },
    {
      icon: <FaAward />,
      number: '50+',
      title: 'جایزه و گواهی',
      description: 'جایزه‌ها و گواهی‌های معتبر'
    },
    {
      icon: <FaHeart />,
      number: '100%',
      title: 'رضایت بیماران',
      description: 'رضایت کامل بیماران از خدمات'
    }
  ];

  const values = [
    {
      icon: <FaCheckCircle />,
      title: 'کیفیت بالا',
      description: 'استفاده از بهترین مواد و تکنولوژی‌های روز دنیا'
    },
    {
      icon: <FaHeart />,
      title: 'مراقبت از بیمار',
      description: 'اولویت اصلی ما سلامت و رضایت بیماران است'
    },
    {
      icon: <FaStar />,
      title: 'تخصص و تجربه',
      description: 'تیم پزشکی مجرب و متخصص در زمینه کامپوزیت'
    },
    {
      icon: <FaTooth />,
      title: 'خدمات جامع',
      description: 'ارائه تمام خدمات کامپوزیت تحت یک سقف'
    }
  ];

  return (
    <div className="about-page">
      <div className="container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">درباره کلینیک کامپوزیت</h1>
          <p className="section-subtitle">
            بیش از 10 سال تجربه در ارائه بهترین خدمات کامپوزیت دندان
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-story"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>داستان ما</h2>
            <p>
              کلینیک کامپوزیت در سال 1393 با هدف ارائه بهترین خدمات کامپوزیت دندان تأسیس شد. 
              ما با استفاده از جدیدترین تکنولوژی‌ها و مواد با کیفیت، خدمات حرفه‌ای به بیماران ارائه می‌دهیم.
            </p>
            <p>
              تیم پزشکی ما متشکل از متخصصین مجرب و با تجربه است که سال‌ها در زمینه کامپوزیت دندان فعالیت داشته‌اند. 
              هدف ما ارائه خدمات با کیفیت و رضایت کامل بیماران است.
            </p>
            <p>
              ما اعتقاد داریم که لبخند زیبا حق هر فردی است و با استفاده از بهترین تکنیک‌ها و مواد، 
              می‌توانیم لبخند رویایی شما را تحقق بخشیم.
            </p>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="image-container">
              <FaTooth className="about-icon" />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="achievements-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2>دستاوردهای ما</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="achievement-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="achievement-icon">{achievement.icon}</div>
                <h3 className="achievement-number">{achievement.number}</h3>
                <h4 className="achievement-title">{achievement.title}</h4>
                <p className="achievement-description">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="values-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2>ارزش‌های ما</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mission-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="mission-content">
            <h2>ماموریت ما</h2>
            <p>
              ماموریت ما ارائه بهترین خدمات کامپوزیت دندان با استفاده از جدیدترین تکنولوژی‌ها و مواد با کیفیت است. 
              ما متعهد به ارائه خدمات حرفه‌ای و رضایت کامل بیماران هستیم.
            </p>
            <div className="mission-points">
              <div className="mission-point">
                <FaCheckCircle />
                <span>استفاده از بهترین مواد کامپوزیت</span>
              </div>
              <div className="mission-point">
                <FaCheckCircle />
                <span>تضمین کیفیت کار</span>
              </div>
              <div className="mission-point">
                <FaCheckCircle />
                <span>بدون درد و ناراحتی</span>
              </div>
              <div className="mission-point">
                <FaCheckCircle />
                <span>نتیجه طبیعی و زیبا</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 