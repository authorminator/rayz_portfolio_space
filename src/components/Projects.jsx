import portfolioContent from "../contents";
import BoxWithShadow from "./BoxWithShadow";
import "./Projects.css";

function Projects() {
  const { projects } = portfolioContent.portfolio;

  return (
    <section id="projects" className="projects-section">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <BoxWithShadow key={project.title + index}>
            <div className="project-card">
              <div className="project-icon">{project.icon}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={tech + i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </BoxWithShadow>
        ))}
      </div>
    </section>
  );
}

export default Projects;
