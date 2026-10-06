export default function ProjectCard({ project, delay = '0s' }) {
  return (
    <article className="project-card" style={{ '--delay': delay }}>
      <div
        className="project-image"
        style={{ background: project.gradient }}
      >
        <div className="project-overlay">
          <a href={project.liveUrl || '#'} className="project-link">
            Live Demo
          </a>
          <a href={project.codeUrl || '#'} className="project-link">
            Code
          </a>
        </div>
      </div>

      <div className="project-content">
        <span className="project-category">{project.category}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
}