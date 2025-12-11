import { GitHubCalendar } from "react-github-calendar";
import { useTranslation } from "react-i18next";
import { HiOutlineDownload } from "react-icons/hi";

import { AnimatedTerminal } from "../../components";

import "./About.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">{t("about.title")}</h2>

        <div className="content">
          <div className="text">
            <div className="profile">
              <p>{t("about.profile.p1")}</p>
              <p>{t("about.profile.p2")}</p>
              <p dangerouslySetInnerHTML={{ __html: t("about.profile.p3") }} />
            </div>

            <div className="hobbies">
              <h3 className="subsection-title">{t("about.hobbies.title")}</h3>
              <p>{t("about.hobbies.description")}</p>
            </div>

            <div className="github-activity">
              <h3 className="subsection-title">{t("about.github.title")}</h3>
              <GitHubCalendar
                username="lndbgaa"
                colorScheme="dark"
                fontSize={12}
                blockSize={11}
                blockMargin={3}
              />
            </div>

            <div className="cta">
              <a href="/CV_Linda_Bougaa.pdf" download className="btn-download">
                <span className="btn-content">
                  <HiOutlineDownload className="btn-icon" />
                  <span>{t("about.download_cv")}</span>
                </span>
              </a>
            </div>
          </div>

          <AnimatedTerminal />
        </div>
      </div>
    </section>
  );
};

export default About;
