import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { LanguageToggle } from "@/components";

import "./Sidebar.css";

const Sidebar = () => {
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const sections = [
    { id: "about", label: t("sidebar.about") },
    { id: "projects", label: t("sidebar.projects") },
    { id: "stack", label: t("sidebar.stack") },
    { id: "contact", label: t("sidebar.contact") },
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
        aria-label={t("sidebar.home")}
      >
        <span className="logo-text">Lb.</span>
      </button>

      <button
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label={t("sidebar.menu")}
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
          <div className="sidebar-social-links">
            <a
              href="https://www.linkedin.com/in/linda-b-395216398/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={t("sidebar.linkedin")}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/lndbgaa"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={t("sidebar.github")}
            >
              <FaGithub />
            </a>
          </div>
          <div className="sidebar-language-toggle">
            <LanguageToggle />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
