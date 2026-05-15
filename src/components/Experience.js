import React from "react";
import JobList from "./JobList";
import "../styles/Experience.css";
import FadeInSection from "./FadeInSection";
import { useLanguage } from "../components/LanguageContext";
import es from "../locales/es";
import en from "../locales/en";

const Experience = () => {
  const { language } = useLanguage();
  const texts = language === "es" ? es.experience : en.experience;

  return (
    <div id="experience">
      <FadeInSection>
        <div className="section-header ">
          <span className="section-title">/ {texts.title}</span>
        </div>
        <JobList />
      </FadeInSection>
    </div>
  );
};

export default Experience;
