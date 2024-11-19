import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const one = (
      <p>
        Soy un <b>Front-end Developer</b>, me he logrado desempeñar
        como
        <b> Full-Stack Developer</b> en mi ultimo puesto de trabajo
        en la creación de una <b>WebApp</b> tipo{" "}
        <b>CRM</b>. Actualmente me encuentro aprendiendo mucho más
        respecto al mundo del <b>desarrollo de software</b>.
      </p>
    );
    const two = (
      <p>
        Además soy <b>Diseñador Gráfico</b> con enfoque en las <b>interfaces web</b> y la
        <b> experiencia de usuario</b>. Fuera del trabajo suelo interesarme en projectos
        pequeños, la creación de contenido (streaming) y videojuegos.
      </p>
    );

    const tech_stack = [
      "Typescript",
      "Python",
      "React.js",
      "Django",
      "Javascript ES6+",
      "Node.js",
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ acerca de mí</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Estas son las tecnologías que más suelo utilizar:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Jesus Paraguan" src={"/assets/me3.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
