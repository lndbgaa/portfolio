import { useTranslation } from "react-i18next";
import {
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaFigma,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiTypescript,
} from "react-icons/si";

import "./Stack.css";

const Stack = () => {
  const { t } = useTranslation();

  const technologies = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
  ];

  const tools = [
    { name: "VS Code", icon: <FaCode /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "DataGrip", icon: <FaDatabase /> },
    { name: "Figma", icon: <FaFigma /> },
  ];

  return (
    <section id="stack">
      <div className="container">
        <h2 className="section-title">{t("stack.title")}</h2>

        <div className="content">
          <div className="section">
            <h3 className="subsection-title">
              {t("stack.technologies.title")}
            </h3>
            <div className="tech-grid">
              {technologies.map((tech) => (
                <div key={tech.name} className="tech-card">
                  <div className="tech-icon">{tech.icon}</div>
                  <p className="tech-name">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="section">
            <h3 className="subsection-title">{t("stack.tools.title")}</h3>
            <div className="tech-grid">
              {tools.map((tool) => (
                <div key={tool.name} className="tech-card">
                  <div className="tech-icon">{tool.icon}</div>
                  <p className="tech-name">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
