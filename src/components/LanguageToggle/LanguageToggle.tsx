import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";

import "./LanguageToggle.css";

const LanguageToggle = () => {
  const { t, i18n } = useTranslation();

  const isFrench = i18n.language === "fr";

  const toggleLanguage = () => {
    const newLanguage = isFrench ? "en" : "fr";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <button
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label={
        isFrench
          ? t("languageToggle.switchToEnglish")
          : t("languageToggle.switchToFrench")
      }
    >
      <FaGlobe className="globe-icon" />
      <span className="lang-text">{isFrench ? "EN" : "FR"}</span>
    </button>
  );
};

export default LanguageToggle;
