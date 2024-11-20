import React from "react";
import { useLanguage } from "../components/LanguageContext";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import ExternalLinks from "./ExternalLinks";

function Projects() {
  const { language } = useLanguage();

  const projects = {
    "Weather App": {
      desc:
        language === "es"
          ? "Es una aplicación del clima que muestra información en tiempo real, con una interfaz sencilla y fácil de usar."
          : "It’s a weather app that shows real-time information with an easy-to-use interface.",
      techStack: "React.js, Javascript, HTML/CSS",
      link: "https://github.com/Pdwxn/weather-app-reactjs",
      open:
        "https://weather-app-reactjs-git-features-refactor-pdwxns-projects.vercel.app/",
    },
    "World Wander Log": {
      desc:
        language === "es"
          ? "Una aplicación que permite almacenar y llevar un registro de viajes, con una interfaz intuitiva y amigable."
          : "An app that allows you to store and track your trips, with an intuitive and friendly interface.",
      techStack: "React.js, Typescript, HTML / CSS",
      link: "https://github.com/Pdwxn/worldwanderlog-app-reactjs",
      open: "",
    },
    "Wave Box App": {
      desc:
        language === "es"
          ? "Es una aplicación de películas que permite buscar información, calificar películas y crear listas favoritas."
          : "It’s a movie app that allows you to search for information, rate movies, and create favorite lists.",
      techStack: "React.js, Typescript, HTML / CSS",
      link: "https://github.com/Pdwxn/wavebox-app-reactjs",
      open: "https://wavebox-app-reactjs.vercel.app/",
    },
    "Split Bill": {
      desc:
        language === "es"
          ? "Es una aplicación sencilla para dividir la cuenta con tus amigos, con una interfaz amigable e intuitiva."
          : "It’s a simple app to split the bill with your friends, with a user-friendly interface.",
      techStack: "Javascript, HTML/CSS",
      link: "https://github.com/Pdwxn/Split-Bill",
      open: "https://split-bill-nine.vercel.app/",
    },
    "Currency Converter App": {
      desc:
        language === "es"
          ? "Es una aplicación para convertir divisas de manera rápida y precisa, utilizando la API 'frankfurter.app'."
          : "It’s an app to quickly and accurately convert currencies using the 'frankfurter.app' API.",
      techStack: "Javascript, HTML/CSS",
      link: "https://github.com/Pdwxn/currency-converter",
      open: "https://currency-converter-ecru.vercel.app/",
    },
    "React Quiz": {
      desc:
        language === "es"
          ? "Es un quiz interactivo sobre React.js. Ofrece una interfaz intuitiva y utiliza useReducer para gestionar estados de forma eficiente y clara."
          : "It’s an interactive quiz about React.js. It offers an intuitive interface and uses useReducer to efficiently manage states.",
      techStack: "React.js, Typescript, HTML / CSS",
      link: "https://github.com/Pdwxn/react-quiz",
      open: "https://react-quiz-gamma-pied.vercel.app",
    },
  };

  return (
    <div id="projects">
      <div className="section-header">
        <span className="section-title">
          {language === "es" ? "/ Proyectos" : "/ Projects"}
        </span>
      </div>
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
