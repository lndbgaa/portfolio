import {
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaDocker,
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
  const stackTechnologies = [
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
    { name: "Docker", icon: <FaDocker /> },
    { name: "Docker Compose", icon: <FaDocker /> },
    { name: "VS Code", icon: <FaCode /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "DataGrip", icon: <FaDatabase /> },
  ];

  return (
    <section id="stack" className="stack">
      <div className="stack-container">
        <h2 className="section-title">Technologies</h2>

        <div className="stack-content">
          <div className="stack-section">
            <h3 className="subsection-title">Stack</h3>
            <div className="tech-grid">
              {stackTechnologies.map((tech) => (
                <div key={tech.name} className="tech-card">
                  <div className="tech-icon">{tech.icon}</div>
                  <p className="tech-name">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="stack-section">
            <h3 className="subsection-title">Outils</h3>
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
