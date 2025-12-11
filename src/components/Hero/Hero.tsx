import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "./Hero.css";

const Hero = () => {
  const { t, i18n } = useTranslation();

  const isEnglish = i18n.language === "en";

  return (
    <section id="hero" className="hero">
      <div className="decoration">
        <div className="deco-line deco-line-1" />
        <div className="deco-line deco-line-2" />
        <div className="deco-circle deco-circle-1" />
        <div className="deco-circle deco-circle-2" />
      </div>

      <div className="content">
        <motion.span
          className="greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t("hero.greeting")}
        </motion.span>

        <motion.h1
          className="name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Linda Bougaa
        </motion.h1>

        <motion.h2
          className="title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {isEnglish ? (
            <>
              <span className="title-accent">
                {t("hero.fullStack")}
                <span className="cursor">_</span>
              </span>
              <span className="title-role">{t("hero.role")}</span>
            </>
          ) : (
            <>
              <span className="title-role">{t("hero.role")}</span>
              <span className="title-accent">
                {t("hero.fullStack")}
                <span className="cursor">_</span>
              </span>
            </>
          )}
        </motion.h2>

        <motion.div
          className="cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <a href="#projects" className="cta-btn">
            <span className="cta-content">
              <span>{t("hero.cta")}</span>
              <span className="cta-arrow">→</span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
