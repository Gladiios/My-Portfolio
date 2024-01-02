import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const { t } = useTranslation("common");
  const [state, handleSubmit] = useForm("xrgngqrw");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 5000); // Cache le message après 5 secondes
    }
  }, [state.succeeded]);

  // Réinitialise le formulaire après soumission
  useEffect(() => {
    if (state.succeeded) {
      document.getElementById("contact-form").reset();
    }
  }, [state.succeeded]);

  return (
    <div className="contact">
      <form
        id="contact-form"
        className="bottom-right-form contact-form bottom-right-animation"
        onSubmit={handleSubmit}
      >
        <div className="first-last-name">
          <div>
            <input
              type="text"
              id="first-name"
              name="first-name"
              placeholder={t("contactFormName")}
              required
            />
            <ValidationError
              prefix="first-name"
              field="text"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="email-message">
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Message"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="submit-button">
          <button type="submit" disabled={state.submitting}>
            {t("contactFormSubmit")}
          </button>
        </div>
        {showSuccessMessage && (
          <div className="form-success">
            <p>{t("contactFormSuccess")}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
