import Link from 'next/link';

export const metadata = {
  title: "Data Science — Raqeeb Sajjad",
  description: "Data cleaning, EDA, machine learning and dashboard services.",
};

const services = [
  {
    id: "data-cleaning",
    icon: "🧹",
    title: "Data Cleaning",
    description: "Transforming messy, raw data into clean, structured datasets ready for analysis.",
    points: [
      "Missing value handling",
      "Duplicate removal",
      "Outlier detection & treatment",
      "Data type conversion",
      "Standardization & normalization",
    ],
  },
  {
    id: "eda",
    icon: "🔍",
    title: "Exploratory Data Analysis (EDA)",
    description: "Understanding your data before modeling. Uncovering patterns, relationships, and anomalies.",
    points: [
      "Descriptive statistics",
      "Distribution analysis",
      "Correlation & relationships",
      "Trend discovery",
      "Feature understanding",
    ],
  },
  {
    id: "machine-learning",
    icon: "🤖",
    title: "Machine Learning",
    description: "Building predictive models that solve real business problems.",
    points: [
      "Regression & classification",
      "Clustering & segmentation",
      "Feature engineering",
      "Model evaluation & tuning",
      "Deployment-ready pipelines",
    ],
  },
  {
    id: "data-insights",
    icon: "📊",
    title: "Data Insights & Dashboards",
    description: "Turning raw numbers into decisions. Building interactive dashboards.",
    points: [
      "Interactive dashboards",
      "KPI tracking",
      "Business intelligence views",
      "Visual storytelling",
      "Decision-support tools",
    ],
  },
];

export default function DataSciencePage() {
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
          <h1 className="service-title">Data Science</h1>
          <p className="service-subtitle">
            End-to-end data solutions — from cleaning messy datasets to building ML models and interactive dashboards.
          </p>
        </div>

        {/* Quick Jump Pills */}
        <div className="service-pills">
          {services.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="service-pill">
              {s.icon} {s.title}
            </a>
          ))}
        </div>

        {/* Sections */}
        <div className="data-sections">
          {services.map((s) => (
            <div key={s.id} id={s.id} className="data-section">
              <div className="data-section-header">
                <span className="data-section-icon">{s.icon}</span>
                <h2>{s.title}</h2>
              </div>
              <p className="data-section-desc">{s.description}</p>
              <ul className="data-points">
                {s.points.map((p) => (
                  <li key={p}>
                    <span className="data-check">✓</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="service-cta">
          <h3>Have a data project in mind?</h3>
          <p>Let&apos;s talk about how I can help you turn data into decisions.</p>
          <Link href="/#contact" className="service-cta-btn">
            Get in Touch
          </Link>
        </div>

      </div>
    </section>
  );
}