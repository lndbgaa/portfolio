import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import { projects } from "@/data/projects";

import "./Projects.css";

const Projects = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    const totalProjects = projects.length;
    
    // Handle wrapping for infinite loop effect
    let adjustedDiff = diff;
    if (diff > totalProjects / 2) adjustedDiff = diff - totalProjects;
    if (diff < -totalProjects / 2) adjustedDiff = diff + totalProjects;

    const isActive = adjustedDiff === 0;
    const isPrev = adjustedDiff === -1;
    const isNext = adjustedDiff === 1;
    const isVisible = Math.abs(adjustedDiff) <= 1;

    let x = 0;
    let scale = 0.75;
    let zIndex = 0;

    if (isActive) {
      x = 0;
      scale = 1;
      zIndex = 3;
    } else if (isPrev) {
      x = -70;
      scale = 0.8;
      zIndex = 1;
    } else if (isNext) {
      x = 70;
      scale = 0.8;
      zIndex = 1;
    }

    return { x: `${x}%`, scale, zIndex, isVisible };
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">{t("projects.title")}</h2>

        <div className="carousel">
          <div className="carousel-track">
            {projects.map((project, index) => {
              const { x, scale, zIndex, opacity, isVisible } = getCardStyle(index);
              
              if (!isVisible) return null;

              return (
                <motion.div
                  key={project.id}
                  className={`project-card ${index === currentIndex ? "active" : ""}`}
                  animate={{
                    x,
                    scale,
                    zIndex,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  onClick={() => index !== currentIndex && goToSlide(index)}
                >
                  <div className="project-image">
                    <img src={project.image} alt="" />
                  </div>

                  <div className="project-content">
                    <h3 className="project-title">{t(project.titleKey)}</h3>
                    <p className="project-description">
                      {t(project.descriptionKey)}
                    </p>

                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
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
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="carousel-dots">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
