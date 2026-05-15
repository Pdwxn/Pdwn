import React from "react";
import { useLanguage } from "../components/LanguageContext";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import ExternalLinks from "./ExternalLinks";
import Carousel from "react-bootstrap/Carousel";
import es from "../locales/es";
import en from "../locales/en";

function Projects() {
  const { language } = useLanguage();
  const texts = language === "es" ? es.projects : en.projects;

  const spotlightProjects = [
    {
      ...texts.spendwise,
      image: "/assets/spendwise.png",
    },
    {
      ...texts.coverLetterAi,
      image: "/assets/cover-letter.png",
    },
    {
      ...texts.authTransparency,
      image: "/assets/auth.png",
    },
    {
      name: language === "es" ? "AI Code Reviewer" : "AI Code Reviewer",
      description:
        language === "es"
          ? "Herramienta web que permite analizar, mejorar y entender código en tiempo real mediante inteligencia artificial."
          : "Web tool that uses artificial intelligence to analyze, improve, and understand code in real time.",
      details: "",
      stack: "Next.js · TypeScript · Tailwind CSS · Groq API",
      demo: "https://code-reviewer-ai-ten.vercel.app/",
      github: "https://github.com/Pdwxn/code-reviewer-ai",
      image: "/assets/reviewer.png",
    },
  ];

  const projects = texts.others;

  return (
    <div id="projects">
      <div className="section-header">
        <span className="section-title">/ {texts.title}</span>
        <a href="https://github.com/Pdwxn" target="_blank" rel="noopener noreferrer" className="explore-link">
          {language === "es" ? "Ver todos los proyectos" : "View all projects"}
        </a>
      </div>

      <div className="spotlight-projects-desktop">
        <Carousel interval={null} indicators>
          {spotlightProjects.map((project) => (
            <Carousel.Item key={project.name}>
              <img className="d-block w-100" src={project.image} alt={project.name} loading="lazy" />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  {project.details && <p className="carousel-details">{project.details}</p>}
                  <p className="techStack">{project.stack}</p>
                  <ExternalLinks
                    githubLink={project.github}
                    openLink={project.demo}
                    githubLabel={`${project.name} GitHub`}
                    openLabel={`${project.name} live demo`}
                  />
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="spotlight-projects-mobile">
        {spotlightProjects.map((project, i) => (
          <FadeInSection delay={`${(i + 1) * 100}ms`} key={project.name}>
            <div className="projects-card spotlight-mobile-card">
              <div className="card-header">
                <div className="folder-icon">
                  <FolderOpenRoundedIcon style={{ fontSize: 35 }} />
                </div>
                <ExternalLinks
                  githubLink={project.github}
                  openLink={project.demo}
                  githubLabel={`${project.name} GitHub`}
                  openLabel={`${project.name} live demo`}
                />
              </div>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-card-link">
                <div className="card-title">{project.name}</div>
                <div className="spotlight-mobile-image">
                  <img src={project.image} alt={project.name} loading="lazy" />
                </div>
              </a>
              <div className="card-desc">{project.description}</div>
              {project.details && <div className="card-desc card-desc-secondary">{project.details}</div>}
              <div className="card-tech">{project.stack}</div>
            </div>
          </FadeInSection>
        ))}
      </div>

      <div className="projects-subheader">{texts.otherTitle}</div>

      <div className="project-container">
        <ul className="projects-grid">
          {Object.keys(projects).map((key, i) => (
            <FadeInSection delay={`${i + 1}00ms`} key={key}>
              <li className="projects-card">
                <div className="card-header">
                  <div className="folder-icon">
                    <FolderOpenRoundedIcon style={{ fontSize: 35 }} />
                  </div>
                  <ExternalLinks
                    githubLink={projects[key].github}
                    openLink={projects[key].demo}
                    githubLabel={`${projects[key].name} GitHub`}
                    openLabel={`${projects[key].name} live demo`}
                  />
                </div>

                <div className="card-title">{projects[key].name}</div>
                <div className="card-desc">{projects[key].description}</div>
                <div className="card-tech">{projects[key].stack}</div>
              </li>
            </FadeInSection>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;
