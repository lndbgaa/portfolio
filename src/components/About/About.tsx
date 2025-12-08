import { useTranslation } from "react-i18next";

import DevIllustration from "@/assets/images/dev-illustration.svg?react";

import "./About.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">{t("about.title")}</h2>

        <div className="about-content">
          <div className="about-text">
            <div className="about-description">
              <p>
                {t("about.profile.intro")}
                <br />
                {t("about.profile.specialization")}
              </p>
              <p>{t("about.profile.career")}</p>
            </div>

            <div className="about-hobbies">
              <h3 className="subsection-title">{t("about.hobbies.title")}</h3>
              <p>{t("about.hobbies.description")}</p>
            </div>

            <div className="about-cta">
              <a href="/CV_Linda_Bougaa.pdf" download className="btn-download">
                {t("about.download_cv")}
              </a>
            </div>
          </div>

          <div className="about-image">
            <div className="image-container">
              <DevIllustration className="about-illustration" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
