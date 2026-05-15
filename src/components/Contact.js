import React from "react";
import { useLanguage } from "../components/LanguageContext";
import FadeInSection from "./FadeInSection";
import { CONTACT_LINKS, RESUME_FILES } from "../constants/site";
import es from "../locales/es";
import en from "../locales/en";
import "../styles/Contact.css";

const Contact = () => {
  const { language } = useLanguage();
  const texts = language === "es" ? es.contact : en.contact;
  const resumeHref = RESUME_FILES[language];

  return (
    <div id="contact">
      <FadeInSection>
        <div className="contact-card">
          <div className="section-header">
            <span className="section-title">/ {texts.title}</span>
          </div>
          <p className="contact-copy">{texts.body}</p>
            <div className="contact-actions">
              <a href={CONTACT_LINKS.email} className="contact-button contact-button-primary">
                {texts.cta}
              </a>
              <a href={resumeHref} className="contact-button" download>
              {language === "es" ? "Descargar CV" : "Download Resume"}
            </a>
          </div>
          <div className="contact-links">
            <a href={CONTACT_LINKS.email}>Email</a>
            <a href={CONTACT_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={CONTACT_LINKS.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Contact;
