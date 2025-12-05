import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";

import "./LanguageToggle.css";

const LanguageToggle = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <button
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label={
        i18n.language === "fr"
          ? t("a11y.switchToEnglish")
          : t("a11y.switchToFrench")
      }
    >
      <FaGlobe className="globe-icon" />
      <span className="lang-text">{i18n.language === "fr" ? "EN" : "FR"}</span>
    </button>
  );
};

export default LanguageToggle;
