import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "./Hero.css";

const Hero = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="hero" className="hero">
      <div className="hero-text">
        <div className="hero-bracket">
          <motion.div
            className="bracket-vertical"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.3,
            }}
          />
          <motion.div
            className="bracket-horizontal bracket-top"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.8,
            }}
          />
          <motion.div
            className="bracket-horizontal bracket-bottom"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.8,
            }}
          />
        </div>

        <h1 className="hero-name">Linda Bougaa</h1>
        <h2 className="hero-title">
          {i18n.language === "fr" ? (
            <>
              {t("hero.role")}
              <br />
              <span className="reveal-container">
                <motion.span
                  className="accent"
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={{ clipPath: "inset(0 0% 0 0)" }}
                  transition={{
                    duration: 0.5,
                    ease: [0.77, 0, 0.175, 1],
                    delay: 0,
                  }}
                >
                  {t("hero.fullStack")}
                </motion.span>
              </span>
            </>
          ) : (
            <>
              <span className="reveal-container">
                <motion.span
                  className="accent"
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={{ clipPath: "inset(0 0% 0 0)" }}
                  transition={{
                    duration: 0.8,
                    ease: [0.77, 0, 0.175, 1],
                    delay: 0,
                  }}
                >
                  {t("hero.fullStack")}
                </motion.span>
              </span>
              <br />
              {t("hero.role")}
            </>
          )}
        </h2>
      </div>
    </section>
  );
};

export default Hero;
