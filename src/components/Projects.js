import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    // const spotlightProjects = {
    //   "No Man's Land": {
    //     title: "no man's land",
    //     desc:
    //       "A third-person survival-mode game where you battle against time and space to return to Earth.",
    //     techStack: "C# (UNITY)",
    //     link: "https://github.com/slakh96/no-mans-land",
    //     open: "https://gazijarin.itch.io/no-mans-land",
    //     image: "/assets/nomansland.png"
    //   },
    //   Truth: {
    //     title: "truth",
    //     desc:
    //       "A three.js simulation of the planet system revolving around a monolith.",
    //     techStack: "JAVASCRIPT (THREE.JS)",
    //     link: "https://github.com/gazijarin/truth",
    //     open: "https://gazijarin.github.io/Truth/",
    //     image: "/assets/truth.png"
    //   },
    //   "Tall Tales": {
    //     title: "tall tales",
    //     desc:
    //       "A multi-player story-telling web game for 3-5 players. Its usage of sockets to allow for concurrent gameplay, connecting friends across the internet.",
    //     techStack: "NODE.JS (SOCKET.IO), REACT.JS, MONGODB",
    //     link: "https://github.com/gazijarin/TallTales",
    //     open: "https://talltales.herokuapp.com/",
    //     image: "/assets/talltales.png"
    //   },
    //   Portfolio: {
    //     title: "portfolio.js",
    //     desc:
    //       "A small JS library that helps with clear and succinct data presentation.",
    //     techStack: "NODE.JS (EXPRESS.JS)",
    //     link: "https://github.com/gazijarin/Portfolio.js",
    //     open: "https://afternoon-ocean-92382.herokuapp.com/",
    //     image: "/assets/portfolio.png"
    //   }
    // };
    const projects = {
      "Weather App": {
        desc:
          "Es una aplicación del clima que muestra información en tiempo real, con una interfaz sencilla y fácil de usar.",
        techStack: "React.js, Javascript, HTML/CSS",
        link: "https://github.com/Pdwxn/weather-app-reactjs",
        open: "https://weather-app-reactjs-git-features-refactor-pdwxns-projects.vercel.app/"
      },
      "World Wander Log": {
        desc:
          "Una aplicación que permite almacenar y llevar un registro de viajes, con una interfaz intuitiva y amigable.",
        techStack: "React.js, Typescript, HTML / CSS",
        link: "https://github.com/Pdwxn/worldwanderlog-app-reactjs",
        open: ""
      },
      "Wave Box App": {
        desc:
          "Es una aplicación de películas que permite buscar información, calificar películas y crear listas favoritas.",
        techStack: "React.js, Typescript, HTML / CSS",
        link: "https://github.com/Pdwxn/wavebox-app-reactjs",
        open: "https://wavebox-app-reactjs.vercel.app/"
      },
      "Split Bill": {
        desc:
          "Es una aplicación sencilla para dividir la cuenta con tus amigos, con una interfaz amigable e intuitiva.",
        techStack: "Javascript, HTML/CSS",
        link: "https://github.com/Pdwxn/Split-Bill",
        open: "https://split-bill-nine.vercel.app/"
      },
      "Currency Converter App": {
        desc:
          `Es una aplicación para convertir divisas de manera rápida y precisa, utilizando la API "frankfurter.app".`,
        techStack: "Javascript, HTML/CSS",
        link: "https://github.com/Pdwxn/currency-converter",
        open: "https://currency-converter-ecru.vercel.app/"
      },
      "React Quiz": {
        desc:
          "Es un quiz interactivo sobre React.js. Ofrece una interfaz intuitiva y utiliza useReducer para gestionar estados de forma eficiente y clara.",
        techStack: "React.js, Typescript, HTML / CSS",
        link: "https://github.com/Pdwxn/react-quiz",
        open: "https://react-quiz-gamma-pied.vercel.app"
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ proyectos</span>
        </div>
        {/* <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel> */}
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
