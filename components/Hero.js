'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Agar page already load ho chuka hai (rare case)
    // To seedha animate karo
    const handlePageLoaded = () => setAnimate(true);
    const handleImmediate = () => setAnimate(true);

    // Check karo — loader visible hai ya nahi
    const loader = document.querySelector('.page-loader');
    const isLoaderActive = loader && !loader.classList.contains('fade-out');

    if (!isLoaderActive) {
      // Loader nahi hai — seedha animate
      setAnimate(true);
    } else {
      // Loader chal raha hai — wait karo
      window.addEventListener('pageLoaded', handlePageLoaded);
    }

    return () => {
      window.removeEventListener('pageLoaded', handlePageLoaded);
    };
  }, []);

  return (
    <section className={`hero ${animate ? 'animate' : ''}`} id="home">
      <div className="hero-container">

        <div className="hero-content">
          <p className="hero-greeting">👋 Hello, I&apos;m</p>
          <h1 className="hero-title">
            Raqeeb <span className="highlight"> Sajjad</span>
          </h1>
          <h2 className="hero-role">I Build Digital Solutions That Matter.</h2>
          <p className="hero-description">
            Creating modern digital solutions using technology, data and AI to turn ideas into meaningful digital experiences and business solutions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Hire Me</a>
          </div>

          // <div className="hero-socials">
          //   <a href="#" aria-label="GitHub">GH</a>
          //   <a href="#" aria-label="LinkedIn">LI</a>
          //   <a href="#" aria-label="Twitter">TW</a>
          // </div>
        </div>

        <div className="hero-image">
          <div className="image-wrapper">
            <img
              src="/images/p_clean.jfif"
              alt="Raqeeb Sajjad - Frontend Developer"
            />
          </div>
          <div className="experience-badge">
            <span className="badge-number">2+</span>
            <span className="badge-text">Years Experience</span>
          </div>
        </div>

      </div>
    </section>
  );
}
