import React from "react";
import JobList from "./JobList";
import "../styles/Experience.css";
import FadeInSection from "./FadeInSection";
import { useLanguage } from "../components/LanguageContext";

const Experience = () => {
  const { language } = useLanguage();

  return (
    <div id="experience">
      <FadeInSection>
        <div className="section-header ">
          <span className="section-title">/ {language === "es" ? "Experiencias" : "Experiences"}</span>
        </div>
        <JobList />
      </FadeInSection>
    </div>
  );
};

export default Experience;
