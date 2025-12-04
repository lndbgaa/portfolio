import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import "./Sidebar.css";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "stack", label: "Stack" },
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
        aria-label="Retour à l'accueil"
      >
        <span className="logo-text">Lb.</span>
      </button>

      <button
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Menu"
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
              aria-label={`Aller à ${section.label}`}
            >
              {section.label}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <a
            href="/contact"
            className="social-link contact-icon"
            aria-label="Contact"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/lndbgaa"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
