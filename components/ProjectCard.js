export default function ProjectCard({ project, delay = '0s' }) {
  return (
    <article className="project-card" style={{ '--delay': delay }}>
      <a
        href={project.liveUrl || '#'}
        className="project-card-link"
        aria-label={`View ${project.title}`}
        target={project.liveUrl ? '_blank' : '_self'}
        rel="noopener noreferrer"
      >
        {/* Background Image */}
        <div className="project-card-bg">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
            />
          ) : (
            <div
              className="project-card-gradient"
              style={{ background: project.gradient }}
            />
          )}
          <div className="project-card-blur-overlay" />
        </div>

        {/* Arrow Icon */}
        <span className="project-card-arrow" aria-hidden>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </span>

        {/* Content (visible on hover) */}
        <div className="project-card-content">
          <span className="project-card-category">{project.category}</span>
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-card-description">{project.description}</p>
        </div>
      </a>
    </article>
  );
}