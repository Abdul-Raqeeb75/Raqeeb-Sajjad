import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  const columns = [
    {
      heading: 'Services',
      links: [
        { label: 'Web Development', href: '/services/web-development' },
        { label: 'Data Science', href: '/services/data-science' },
        { label: 'UI/UX Design', href: '/services/web-development' },
        { label: 'Consulting', href: '/#contact' },
      ],
    },
    {
      heading: 'Quick Links',
      links: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/#about' },
        { label: 'Projects', href: '/#projects' },
        { label: 'Contact', href: '/#contact' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'Get in Touch', href: '/#contact' },
        { label: 'Terms & Conditions', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        // { label: 'Refund Policy', href: '#' },
      ],
    },
  ];

  const socials = [
    { label: 'Instagram', href: '#', icon: '📷' },
    { label: 'X', href: '#', icon: '𝕏' },
    { label: 'YouTube', href: '#', icon: '▶' },
    { label: 'Email', href: '#', icon: '✉' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Top Section — Brand + Columns */}
        <div className="footer-top">

          {/* Brand Column */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <span className="footer-logo-mark">R</span>
              <span className="footer-logo-text">aqeeb</span>
            </Link>
            <p className="footer-tagline">
              Frontend developer &amp; data scientist.
              Crafting digital experiences that matter.
            </p>

            <div className="footer-socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="footer-social"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {columns.map((col) => (
            <div key={col.heading} className="footer-column">
              <h4 className="footer-heading">{col.heading}</h4>
              <ul className="footer-links">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Middle Section — Huge Background Text */}
        <div className="footer-giant-text-wrap">
          <span className="footer-giant-text">Raqeeb</span>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} Raqeeb Sajjad. All rights reserved.
          </p>
          
        </div>

      </div>
    </footer>
  );
}