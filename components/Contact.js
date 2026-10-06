'use client';

import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan baad mein actual form submission logic aayegi
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: '✉️',
      label: 'Email',
      value: 'abdulraqeeb0043@gmail.com',
      href: 'mailto:abdulraqeeb0043@gmail.com',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+92 3086883922',
      href: 'tel:+923086883922',
    },
    // {
    //   icon: '📍',
    //   label: 'Location',
    //   value: 'Pakistan',
    //   href: null,
    // },
  ];

  const socials = [
    { label: 'GitHub', href: '#', icon: 'GH' },
    { label: 'LinkedIn', href: '#', icon: 'LI' },
    { label: 'Twitter', href: '#', icon: 'TW' },
  ];

  return (
    <section
      ref={sectionRef}
      className={`contact ${animate ? 'animate' : ''}`}
      id="contact"
    >
      <div className="contact-container">

        {/* Header */}
        <div className="contact-header">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">
            Let&apos;s work <span className="highlight">together</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? I&apos;d love to hear from you.
          </p>
        </div>

        {/* Grid — Info + Form */}
        <div className="contact-grid">

          {/* LEFT: Contact Info */}
          <div className="contact-info">

            <div className="contact-info-cards">
              {contactInfo.map((item) => (
                <div key={item.label} className="contact-info-card">
                  <div className="contact-info-icon">{item.icon}</div>
                  <div className="contact-info-content">
                    <span className="contact-info-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="contact-info-value">
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-info-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="contact-socials-block">
              <h4 className="contact-socials-heading">Follow Me</h4>
              <div className="contact-socials">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="contact-social"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT: Form */}
          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className={`contact-submit ${submitted ? 'submitted' : ''}`}
              disabled={submitted}
            >
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}