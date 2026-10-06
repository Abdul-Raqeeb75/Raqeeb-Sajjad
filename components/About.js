'use client';

import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left');

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="section-header reveal">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">
            Get to <span className="highlight">know me</span>
          </h2>
          <p className="section-subtitle">
            A passionate developer creating digital experiences that matter
          </p>
        </div>

        <div className="about-content">
          <div className="about-image reveal-left">
            <div className="about-image-wrapper">
              <img
                src="/images/p_clean.jfif"
                alt="Raqeeb Sajjad working"
              />
            </div>
            <div className="decorative-dots"></div>
          </div>

          <div className="about-text">
            <h3 className="about-heading reveal">
              I'm a Frontend Developer based in Pakistan
            </h3>

            <p className="about-paragraph reveal">
              I specialize in building modern, responsive websites that
              deliver exceptional user experiences. With a keen eye for
              design and a passion for clean code, I transform ideas into
              functional, beautiful digital products.
            </p>

            <p className="about-paragraph reveal">
              When I'm not coding, you'll find me exploring new design
              trends, contributing to open-source projects, or sharing
              knowledge with the developer community.
            </p>

            <div className="about-stats">
              <div className="stat-item reveal">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item reveal">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Done</span>
              </div>
              <div className="stat-item reveal">
                <span className="stat-number">30+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>

            <a href="#" className="btn btn-primary reveal">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
}