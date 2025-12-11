import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useWindowSize } from "usehooks-ts";

import { ProjectCard } from "../../components";
import { projects } from "../../data/projects.ts";

import "./Projects.css";

export type CardPosition = {
  x: string;
  scale: number;
  zIndex: number;
  isVisible: boolean;
};

export const MOBILE_BREAKPOINT = 768;

const Projects = () => {
  const { t } = useTranslation();
  const { width: windowWidth = 1200 } = useWindowSize();

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const isMobile = windowWidth <= MOBILE_BREAKPOINT;

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const getCardPosition = (index: number): CardPosition => {
    const diff = index - currentIndex;
    const totalProjects = projects.length;

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

    let offset = 70;
    if (windowWidth <= 1040) {
      offset = 60;
    }

    if (isActive) {
      scale = 1;
      zIndex = 3;
    } else if (isPrev) {
      x = -offset;
      scale = 0.8;
      zIndex = 1;
    } else if (isNext) {
      x = offset;
      scale = 0.8;
      zIndex = 1;
    }

    return { x: `${x}%`, scale, zIndex, isVisible };
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">{t("projects.title")}</h2>

        {isMobile ? (
          <div className="stack">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isCarousel={false}
              />
            ))}
          </div>
        ) : (
          <>
            <div className="carousel">
              <button
                className="carousel-arrow carousel-arrow-prev"
                onClick={goToPrev}
                aria-label={t("projects.previousProject")}
              >
                <FiChevronLeft />
              </button>

              <div className="carousel-track">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    isCarousel={true}
                    isActive={index === currentIndex}
                    getCardPosition={getCardPosition}
                    onCardClick={goToSlide}
                  />
                ))}
              </div>

              <button
                className="carousel-arrow carousel-arrow-next"
                onClick={goToNext}
                aria-label={t("projects.nextProject")}
              >
                <FiChevronRight />
              </button>
            </div>

            <div className="carousel-dots">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${
                    index === currentIndex ? "active" : ""
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={t("projects.goToProject", { number: index + 1 })}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
