import React, { useEffect, useState } from "react";
import { useLanguage } from "../components/LanguageContext";
import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";

import esTexts from "../locales/es";
import enTexts from "../locales/en";

const Intro = () => {
  const { language } = useLanguage(); 
  const texts = language === "es" ? esTexts : enTexts; 

  const [key, setKey] = useState(Date.now());

  useEffect(() => {
    setKey(Date.now()); // Cambiar la key con la fecha actual
  }, [language]);

  return (
    <div id="intro">
      <Typist key={key} avgTypingDelay={120}>
        <span className="intro-name">{texts.intro.greeting}</span>
      </Typist>
      <FadeInSection>
        <div className="intro-subtitle">{texts.intro.description}</div>
        <div className="intro-desc">{texts.intro.role}</div>
        <a href="mailto:pdwxn@protonmail.com" className="intro-contact">
          <EmailRoundedIcon />
          {texts.intro.contact}
        </a>
      </FadeInSection>
    </div>
  );
};

export default Intro;
