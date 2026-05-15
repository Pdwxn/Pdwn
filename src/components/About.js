import React from "react";
import { useLanguage } from "../components/LanguageContext";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";
import es from "../locales/es";
import en from "../locales/en";

const About = () => {
  const { language } = useLanguage();
  const texts = language === "es" ? es.about : en.about;

  return (
    <div id="about">
      <FadeInSection>
        <div className="section-header">
          <span className="section-title">/ {texts.title}</span>
        </div>
        <div className="about-content">
          <div className="about-description">
            <p dangerouslySetInnerHTML={{ __html: texts.paragraphOne }} />
            <div className="about-tech-title">{texts.techTitle}</div>
            <ul className="tech-stack">
              {texts.tech.map((techItem, i) => (
                <FadeInSection delay={`${(i + 1) * 100}ms`} key={techItem}>
                  <li>{techItem}</li>
                </FadeInSection>
              ))}
            </ul>
            <p dangerouslySetInnerHTML={{ __html: texts.paragraphTwo }} />
          </div>

          <div className="about-image">
            <img alt="Jesús Paraguan" src="/assets/me3.jpg" />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;
