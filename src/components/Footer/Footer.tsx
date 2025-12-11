import { useTranslation } from "react-i18next";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="footer">
      <div className="divider">
        <span className="divider-line"></span>
        <span className="divider-icon">{"</>"}</span>
        <span className="divider-line"></span>
      </div>

      <div className="content">
        <p className="copyright">
          © {currentYear} <span className="highlight">Linda Bougaa</span>.{" "}
          {t("footer.rights")}
        </p>

        <p className="tech">
          {t("footer.builtWith")}
          <span className="tech-icons">
            <FaReact className="tech-icon react-icon" aria-hidden="true" />
            <SiTypescript
              className="tech-icon typescript-icon"
              aria-hidden="true"
            />
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
