import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import "./Sidebar.css";

const Sidebar = () => {
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const sections = [
    { id: "about", label: t("sidebar.nav-link.about") },
    { id: "projects", label: t("sidebar.nav-link.projects") },
    { id: "stack", label: t("sidebar.nav-link.stack") },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <aside className={`sidebar ${isMenuOpen ? "menu-open" : ""}`}>
      <button
        className="sidebar-logo"
        onClick={() => scrollToSection("hero")}
        aria-label={t("a11y.home")}
      >
        <span className="logo-text">Lb.</span>
      </button>

      <button
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label={t("a11y.menu")}
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`sidebar-menu ${isMenuOpen ? "active" : ""}`}>
        <nav className="sidebar-nav">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="nav-link"
              aria-label={section.label}
            >
              {section.label}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <a
            href="/contact"
            className="social-link contact-icon"
            aria-label={t("a11y.contact")}
          >
            <FaEnvelope />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label={t("a11y.linkedin")}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/lndbgaa"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label={t("a11y.github")}
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
