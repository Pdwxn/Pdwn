import React from "react";
import { useLanguage } from "../components/LanguageContext";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

function Projects() {
  const { language } = useLanguage();

  const spotlightProjects = {
    "AI Cover Letter Generator": {
      title: "AI Cover Letter Generator ",
      desc:
        language === "es"
          ? "Es una web app que genera cartas de presentación personalizadas en segundos."
          : "It's a web app that generates personalized cover letters in seconds.",
      techStack: "Next.js 14 · TypeScript · Tailwind CSS · Groq API (llama-3.1-8b-instant)",
      link: "https://github.com/Pdwxn/Cover-letter-ai",
      open:
        "https://cover-letter-ai-zeta.vercel.app/",
      image: "/assets/cover-letter.png",
    },
    "Auth Transparency": {
      title: "Auth Transparency",
      desc:
        language === "es"
          ? "Es una web app educativa que muestra en tiempo real qué datos personales recibe cualquier aplicación cuando usas el login con un proveedor externo (Google, GitHub o Discord)."
          : "It's an educational web app that shows in real time what personal data any app receives when you log in using an external provider (Google, GitHub, or Discord).",
      techStack: "Next.js 15 · TypeScript · Tailwind CSS · NextAuth",
      link: "https://github.com/Pdwxn/auth-transparency",
      open:
        "https://auth-transparency.vercel.app/",
      image: "/assets/auth.png",
    },
    "Weather App": {
      title: "Weather App",
      desc:
        language === "es"
          ? "Es una aplicación del clima que muestra información en tiempo real, con una interfaz sencilla y fácil de usar."
          : "It's a weather app that shows real-time information with an easy-to-use interface.",
      techStack: "React.js · Javascript · HTML/CSS",
      link: "https://github.com/Pdwxn/weather-app-reactjs",
      open:
        "https://weather-app-reactjs-git-features-refactor-pdwxns-projects.vercel.app/",
      image: "/assets/weatherapp.png",
    },
    "AI Code Reviewer": {
      title: "AI Code Reviewer",
      desc:
        language === "es"
          ? "Es una herramienta web que permite analizar, mejorar y entender código en tiempo real mediante inteligencia artificial."
          : "It's a web-based tool that uses artificial intelligence to analyze, improve, and understand code in real time.",
      techStack: "Next.js 14 · TypeScript · Tailwind CSS · Groq API (Qwen 3 32B)",
      link: "https://github.com/Pdwxn/code-reviewer-ai",
      open: "https://code-reviewer-ai-ten.vercel.app/",
      image: "/assets/reviewer.png",
    },
    CardStone: {
      title: "CardStone",
      desc:
        language === "es"
          ? "Una aplicación que te permite conocer las más de 3000 cartas que existen en Hearthstone."
          : "An application that allows you to know the more than 3,000 cards that exist in Hearthstone.",
      techStack: "React.js · Typescript · TailwindCSS",
      link: "https://github.com/Pdwxn/CardStone",
      open: "https://card-stone.vercel.app/",
      image: "/assets/cardstone.png",
    },
    // Agrega más proyectos destacados aquí...
  };

  const projects = {
    "AI Cover Letter Generator": {
      title: "AI Cover Letter Generator ",
      desc:
        language === "es"
          ? "Es una web app que genera cartas de presentación personalizadas en segundos."
          : "It's a web app that generates personalized cover letters in seconds.",
      techStack: "Next.js 14 · TypeScript · Tailwind CSS · Groq API (llama-3.1-8b-instant)",
      link: "https://github.com/Pdwxn/Cover-letter-ai",
      open:
        "https://cover-letter-ai-zeta.vercel.app/",
    },
    "Auth Transparency": {
      title: "Auth Transparency",
      desc:
        language === "es"
          ? "Es una web app educativa que muestra en tiempo real qué datos personales recibe cualquier aplicación cuando usas el login con un proveedor externo (Google, GitHub o Discord)."
          : "It's an educational web app that shows in real time what personal data any app receives when you log in using an external provider (Google, GitHub, or Discord).",
      techStack: "Next.js 15 · TypeScript · Tailwind CSS · NextAuth",
      link: "https://github.com/Pdwxn/auth-transparency",
      open:
        "https://auth-transparency.vercel.app/",
    },
    "Weather App": {
      desc:
        language === "es"
          ? "Es una aplicación del clima que muestra información en tiempo real, con una interfaz sencilla y fácil de usar."
          : "It's a weather app that shows real-time information with an easy-to-use interface.",
      techStack: "React.js · Javascript · HTML/CSS",
      link: "https://github.com/Pdwxn/weather-app-reactjs",
      open:
        "https://weather-app-reactjs-git-features-refactor-pdwxns-projects.vercel.app/",
    },
    "World Wander Log": {
      desc:
        language === "es"
          ? "Una aplicación que permite almacenar y llevar un registro de viajes, con una interfaz intuitiva y amigable."
          : "An app that allows you to store and track your trips, with an intuitive and friendly interface.",
      techStack: "React.js · Typescript · HTML / CSS",
      link: "https://github.com/Pdwxn/worldwanderlog-app-reactjs",
      open: "https://worldwanderlog-app-reactjs.vercel.app/",
    },
    "AI Code Reviewer": {
      desc:
        language === "es"
          ? "Es una herramienta web que permite analizar, mejorar y entender código en tiempo real mediante inteligencia artificial."
          : "It's a web-based tool that uses artificial intelligence to analyze, improve, and understand code in real time.",
      techStack: "Next.js 14 · TypeScript · Tailwind CSS · Groq API (Qwen 3 32B)",
      link: "https://github.com/Pdwxn/code-reviewer-ai",
      open: "https://code-reviewer-ai-ten.vercel.app/",
    },
    CardStone: {
      desc:
        language === "es"
          ? "Una aplicación que te permite conocer las más de 3000 cartas que existen en Hearthstone."
          : "An application that allows you to know the more than 3,000 cards that exist in Hearthstone.",
      techStack: "React.js · Typescript · HTML/CSS",
      link: "https://github.com/Pdwxn/CardStone",
      open: "https://card-stone.vercel.app/",
    },
  };

  return (
    <div id="projects">
      <div className="section-header">
        <span className="section-title">
          {language === "es" ? "/ Proyectos" : "/ Projects"}
        </span>
      </div>

      <Carousel>
        {Object.keys(spotlightProjects).map((key) => (
          <Carousel.Item key={key}>
            <img
              className="d-block w-100"
              src={spotlightProjects[key].image}
              alt={spotlightProjects[key].title}
            />
            <div className="caption-bg">
              <Carousel.Caption>
                <h3>{spotlightProjects[key].title}</h3>
                <p>{spotlightProjects[key].desc}</p>
                <p className="techStack">{spotlightProjects[key].techStack}</p>
                <ExternalLinks
                  githubLink={spotlightProjects[key].link}
                  openLink={spotlightProjects[key].open}
                />
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

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
                    githubLink={projects[key].link}
                    openLink={projects[key].open}
                  />
                </div>

                <div className="card-title">{key}</div>
                <div className="card-desc">{projects[key].desc}</div>
                <div className="card-tech">{projects[key].techStack}</div>
              </li>
            </FadeInSection>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;
