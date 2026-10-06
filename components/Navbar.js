'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // ==========================================
  // ROUTE CHANGE → sab close
  // ==========================================
  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  // ==========================================
  // BODY SCROLL LOCK
  // ==========================================
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // ==========================================
  // ESCAPE KEY → sab close
  // ==========================================
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  // ==========================================
  // RESIZE → desktop pe mobile menu close
  // ==========================================
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ==========================================
  // HANDLERS
  // ==========================================

  // Menu ke andar koi link click → menu close
  // BUT Services toggle pe click ho → close NA karo
  const handleNavLinksClick = (e) => {
    // Agar click Services button ya uske andar ke element pe hai → skip
    if (e.target.closest('.nav-dropdown-toggle')) return;
    // Agar click dropdown menu ke andar hai → skip
    if (e.target.closest('.nav-dropdown-menu')) return;

    if (mobileOpen) setMobileOpen(false);
  };

  // Services toggle — sirf mobile pe
  const handleServicesClick = () => {
    if (window.innerWidth <= 768) {
      setServicesOpen((prev) => !prev);
    }
  };

  // Desktop hover
  const handleMouseEnter = () => {
    if (window.innerWidth > 768) setServicesOpen(true);
  };
  const handleMouseLeave = () => {
    if (window.innerWidth > 768) setServicesOpen(false);
  };

  const servicesList = [
    { href: '/services/web-development', label: 'Web Development' },
    { href: '/services/data-science', label: 'Data Science' },
  ];

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <Link href="/" className="logo">
            <span className="logo-mark">R</span>
            <span className="logo-text">aqeeb</span>
          </Link>

          <ul
            className={`nav-links ${mobileOpen ? 'open' : ''}`}
            id="navLinks"
            onClick={handleNavLinksClick}
          >
            <li>
              <Link href="/" className="nav-link">Home</Link>
            </li>

            {/* Services Dropdown */}
            <li
              className="nav-dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className="nav-link nav-dropdown-toggle"
                onClick={handleServicesClick}
                aria-expanded={servicesOpen}
              >
                Services
                <svg
                  className={`dropdown-arrow ${servicesOpen ? 'open' : ''}`}
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <ul className={`nav-dropdown-menu ${servicesOpen ? 'open' : ''}`}>
                {servicesList.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="dropdown-item">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li><Link href="/#about" className="nav-link">About</Link></li>
            <li><Link href="/#projects" className="nav-link">Projects</Link></li>
            <li><Link href="/#contact" className="nav-link">Contact</Link></li>

            {/* Mobile-only CTA */}
            <li className="mobile-cta">
              <Link href="/#contact" className="nav-cta">
                Let&apos;s Talk
              </Link>
            </li>
          </ul>

          {/* Desktop-only CTA */}
          <Link href="/#contact" className="nav-cta desktop-cta">
            Let&apos;s Talk
          </Link>

          <button
            className={`menu-toggle ${mobileOpen ? 'active' : ''}`}
            id="menuToggle"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>

      <div
        className={`nav-overlay ${mobileOpen ? 'active' : ''}`}
        onClick={() => setMobileOpen(false)}
      ></div>
    </>
  );
}