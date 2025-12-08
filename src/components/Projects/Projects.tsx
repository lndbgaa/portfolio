import { useTranslation } from "react-i18next";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import { projects } from "@/data/projects";

import "./Projects.css";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">{t("projects.title")}</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt="" />
              </div>

              <div className="project-content">
                <h3 className="project-title">{t(project.titleKey)}</h3>
                <p className="project-description">
                  {t(project.descriptionKey)}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-buttons">
                  <a
                    href={project.github}
                    target="_blank"
                    className="project-btn github-btn"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    className="project-btn demo-btn"
                  >
                    <FaExternalLinkAlt />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
