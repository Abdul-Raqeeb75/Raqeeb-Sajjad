'use client';

import { useEffect, useRef, useState } from 'react';
import ProjectCard from './ProjectCard';

export const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A modern online store with cart, checkout, and payment integration. Built for speed and conversions.',
    tech: ['Next.js', 'CSS3', 'Stripe'],
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: 2,
    title: 'Sales Analytics Dashboard',
    category: 'Data Science',
    description: 'Interactive dashboard visualizing business KPIs in real-time with drill-down capabilities.',
    tech: ['Python', 'Pandas', 'Plotly'],
    gradient: 'linear-gradient(135deg, #f59e0b, #f97316)',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: 3,
    title: 'Customer Churn Prediction',
    category: 'Machine Learning',
    description: 'Predictive model achieving 92% accuracy in identifying at-risk customers before they leave.',
    tech: ['Scikit-learn', 'XGBoost', 'Pandas'],
    gradient: 'linear-gradient(135deg, #ec4899, #f43f5e)',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: 4,
    title: 'Personal Portfolio',
    category: 'Web Development',
    description: 'A responsive portfolio with custom animations, dark mode, and smooth scroll interactions.',
    tech: ['Next.js', 'CSS3'],
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: 5,
    title: 'Retail Sales EDA',
    category: 'Data Science',
    description: 'Deep exploratory analysis of retail sales data — uncovering seasonal trends and top performers.',
    tech: ['Python', 'Seaborn', 'Matplotlib'],
    gradient: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: 6,
    title: 'Task Manager App',
    category: 'Web Development',
    description: 'A clean task management app with drag-and-drop, priorities, and local persistence.',
    tech: ['React', 'LocalStorage'],
    gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
    liveUrl: '#',
    codeUrl: '#',
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

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

  return (
    <section
      ref={sectionRef}
      className={`projects ${animate ? 'animate' : ''}`}
      id="projects"
    >
      <div className="projects-container">
        <div className="projects-header">
          <span className="section-tag">My Work</span>
          <h2 className="section-title">
            Featured <span className="highlight">Projects</span>
          </h2>
          <p className="section-subtitle">
            Some things I&apos;ve built recently
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              delay={`${i * 0.1}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}