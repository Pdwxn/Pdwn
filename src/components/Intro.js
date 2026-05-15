import React from "react";
import { useLanguage } from "../components/LanguageContext";
import "../styles/Intro.css";
import FadeInSection from "./FadeInSection";
import { RESUME_FILES } from "../constants/site";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

import esTexts from "../locales/es";
import enTexts from "../locales/en";

const Intro = () => {
  const { language } = useLanguage();
  const texts = language === "es" ? esTexts : enTexts;
  const resumeHref = RESUME_FILES[language];

  return (
    <div id="intro">
      <FadeInSection>
        <div className="intro-layout">
          <div className="intro-content">
            <p className="intro-kicker">PDWN</p>
            <h1 className="intro-title">
              <Typist
                key={language}
                avgTypingDelay={80}
                startDelay={200}
                cursor={{ show: true, blink: true }}
              >
                <span>{texts.hero.titlePrefix} </span>
                <span className="intro-name">{texts.hero.titleName}</span>
              </Typist>
            </h1>
            <p className="intro-subtitle">{texts.hero.subtitle}</p>
            <p className="intro-secondary">{texts.hero.secondary}</p>

            <div className="intro-actions">
              <a href={resumeHref} className="intro-button intro-button-primary" download>
                {texts.hero.ctaResume}
              </a>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Intro;
