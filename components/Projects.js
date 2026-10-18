'use client';

import { useEffect, useRef, useState } from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description:
      'A modern online store with cart, checkout, and payment integration. Built for speed and conversions.',
    image: '/images/projects/ecommerce.jpg',
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    liveUrl: '#',
  },
  {
    id: 2,
    title: 'Sales Analytics Dashboard',
    category: 'Data Science',
    description:
      'Interactive dashboard visualizing business KPIs in real-time with drill-down capabilities.',
    image: '/images/projects/dashboard.jpg',
    gradient: 'linear-gradient(135deg, #f59e0b, #f97316)',
    liveUrl: '#',
  },
  {
    id: 3,
    title: 'Customer Churn Prediction',
    category: 'Machine Learning',
    description:
      'Predictive model achieving 92% accuracy in identifying at-risk customers before they leave.',
    image: '/images/projects/churn.jpg',
    gradient: 'linear-gradient(135deg, #ec4899, #f43f5e)',
    liveUrl: '#',
  },
  {
    id: 4,
    title: 'Personal Portfolio',
    category: 'Web Development',
    description:
      'A responsive portfolio with custom animations, dark mode, and smooth scroll interactions.',
    image: '/images/projects/portfolio.jpg',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    liveUrl: '#',
  },
  {
    id: 5,
    title: 'Retail Sales EDA',
    category: 'Data Science',
    description:
      'Deep exploratory analysis of retail sales data — uncovering seasonal trends and top performers.',
    image: '/images/projects/eda.jpg',
    gradient: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
    liveUrl: '#',
  },
  {
    id: 6,
    title: 'Task Manager App',
    category: 'Web Development',
    description:
      'A clean task management app with drag-and-drop, priorities, and local persistence.',
    image: '/images/projects/taskmanager.jpg',
    gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
    liveUrl: '#',
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
            <ProjectCard key={p.id} project={p} delay={`${i * 0.1}s`} />
          ))}
        </div>
      </div>
    </section>
  );
}