import React from "react";
import { useLanguage } from "../components/LanguageContext";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

import es from "../locales/es";
import en from "../locales/en";

const About = () => {
  const { language } = useLanguage();
  const texts = language === "es" ? es.about : en.about;

  const tech_stack = texts.tech;

  return (
    <div id="about">
      <FadeInSection>
        <div className="section-header">
          <span className="section-title">/ {texts.title}</span>
        </div>
        <div className="about-content">
          <div className="about-description">
            <p dangerouslySetInnerHTML={{ __html: texts.description }} />
            <div>{texts.techTitle}</div>
            <ul className="tech-stack">
              {tech_stack.map((tech_item, i) => {
                return (
                  <FadeInSection delay={`${i + 1}00ms`} key={i}>
                    <li>{tech_item}</li>
                  </FadeInSection>
                );
              })}
            </ul>
            <p dangerouslySetInnerHTML={{ __html: texts.extra }} />
          </div>
          <div className="about-image">
            <img alt="Jesus Paraguan" src={"/assets/me3.jpg"} />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;
