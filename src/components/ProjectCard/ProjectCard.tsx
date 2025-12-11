import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import "./ProjectCard.css";

import type { Project } from "../../data/projects.ts";
import type { CardPosition } from "../Projects/Projects";

type ProjectCardProps = {
  project: Project;
  index: number;
  isCarousel?: boolean;
  isActive?: boolean;
  getCardPosition?: (index: number) => CardPosition;
  onCardClick?: (index: number) => void;
};

const ProjectCard = ({
  project,
  index,
  isCarousel = false,
  isActive = false,
  getCardPosition,
  onCardClick,
}: ProjectCardProps) => {
  const { t } = useTranslation();

  const cardContent = (
    <>
      <div className="image">
        <img src={project.image} alt={t(project.imageAltKey)} />
      </div>

      <div className="content">
        <h3 className="title">{t(project.titleKey)}</h3>
        <p className="description">{t(project.descriptionKey)}</p>

        <div className="technologies">
          {project.technologies.map((tech, techIndex) => (
            <span key={techIndex} className="tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="buttons">
          <a
            href={project.github}
            target="_blank"
            className="btn github-btn"
            aria-label={t("projects.viewGithub", {
              project: t(project.titleKey),
            })}
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a
            href={project.demo}
            target="_blank"
            className="btn demo-btn"
            aria-label={t("projects.viewDemo", {
              project: t(project.titleKey),
            })}
          >
            <FaExternalLinkAlt />
            <span>Demo</span>
          </a>
        </div>
      </div>
    </>
  );

  if (isCarousel && getCardPosition) {
    const { x, scale, zIndex, isVisible } = getCardPosition(index);

    if (!isVisible) return null;

    return (
      <motion.div
        key={project.id}
        className={`card ${isActive ? "active" : ""}`}
        animate={{ x, scale, zIndex }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={() => !isActive && onCardClick?.(index)}
      >
        {cardContent}
      </motion.div>
    );
  }

  return (
    <motion.div
      key={project.id}
      className="card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {cardContent}
    </motion.div>
  );
};

export default ProjectCard;
