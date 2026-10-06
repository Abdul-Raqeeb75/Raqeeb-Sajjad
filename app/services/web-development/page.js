import Link from 'next/link';

export const metadata = {
  title: "Web Development — Raqeeb Sajjad",
  description: "Custom web development services — landing pages, business sites, e-commerce and more.",
};

const services = [
  {
    icon: "🚀",
    title: "Landing Pages",
    description: "High-converting landing pages designed to turn visitors into customers. Fast, responsive, and built to perform.",
  },
  {
    icon: "🏢",
    title: "Business Websites",
    description: "Professional multi-page websites for small businesses and startups. Clean design, easy to manage, and built to grow with you.",
  },
  {
    icon: "🛒",
    title: "E-commerce Stores",
    description: "Modern online stores with product catalogs, cart, and checkout. Optimized for conversions and mobile shopping.",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description: "Every website I build works beautifully on mobile, tablet, and desktop. Mobile-first approach ensures a great experience on any screen.",
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    description: "Fast-loading websites that score high on Core Web Vitals. Optimized images, clean code, and best practices baked in.",
  },
  {
    icon: "🎨",
    title: "Custom UI Design",
    description: "Unique, pixel-perfect interfaces designed around your brand. No templates — everything built to fit your vision.",
  },
];

export default function WebDevelopmentPage() {
  return (
    <section className="service-page">
      <div className="service-page-container">

        {/* Back Button */}
        <Link href="/" className="back-button">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to Home
        </Link>

        {/* Header */}
        <div className="service-header">
          <span className="section-tag">Services</span>
          <h1 className="service-title">Web Development</h1>
          <p className="service-subtitle">
            Custom, responsive websites built with modern technologies — from simple landing pages to full business platforms.
          </p>
        </div>

        {/* Services Grid */}
        <div className="service-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <div className="service-icon">{s.icon}</div>
              <h2 className="service-card-title">{s.title}</h2>
              <p className="service-card-desc">{s.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="service-cta">
          <h3>Ready to build your website?</h3>
          <p>Let&apos;s turn your idea into a fast, beautiful, working website.</p>
          <Link href="/#contact" className="service-cta-btn">
            Start a Project
          </Link>
        </div>

      </div>
    </section>
  );
}