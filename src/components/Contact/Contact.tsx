import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";
import isEmail from "validator/lib/isEmail";

import "./Contact.css";

import type { ChangeEvent, FormEvent } from "react";

interface FormData {
  email: string;
  message: string;
}

interface FormErrors {
  email?: string;
  message?: string;
}

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<FormData>({
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = t("contact.errors.emailRequired");
    } else if (!isEmail(formData.email)) {
      newErrors.email = t("contact.errors.emailInvalid");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("contact.errors.messageRequired");
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const now = new Date();

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_email: formData.email,
          message: formData.message,
          date: now.toLocaleDateString("fr-FR"),
          time: now.toLocaleTimeString("fr-FR"),
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus("success");
      setFormData({ email: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">{t("contact.title")}</h2>

        <div className="content">
          <div className="decoration">
            <div className="decoration-line"></div>
            <span className="decoration-icon">{"{ }"}</span>
            <div className="decoration-line"></div>
          </div>

          <p className="form-description">{t("contact.description")}</p>

          <form noValidate className="form" onSubmit={handleSubmit}>
            {submitStatus === "success" && (
              <div className="form-message success">
                {t("contact.form.successMessage")}
              </div>
            )}

            {submitStatus === "error" && (
              <div className="form-message error">
                {t("contact.form.errorMessage")}
              </div>
            )}

            <div className={`form-group ${errors.email ? "has-error" : ""}`}>
              <label htmlFor="email" className="form-label">
                <FaEnvelope className="label-icon" />
                {t("contact.form.email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder={t("contact.form.emailPlaceholder")}
              />
              {errors.email && (
                <span className="form-error">{errors.email}</span>
              )}
            </div>

            <div className={`form-group ${errors.message ? "has-error" : ""}`}>
              <label htmlFor="message" className="form-label">
                {t("contact.form.message")}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                rows={6}
                placeholder={t("contact.form.messagePlaceholder")}
              />
              {errors.message && (
                <span className="form-error">{errors.message}</span>
              )}
            </div>

            <button
              type="submit"
              className={`form-submit ${isSubmitting ? "submitting" : ""}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="submit-loading">
                  <span className="loading-dot"></span>
                  <span className="loading-dot"></span>
                  <span className="loading-dot"></span>
                </span>
              ) : (
                <>
                  {t("contact.form.submit")}
                  <FaPaperPlane className="submit-icon" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
