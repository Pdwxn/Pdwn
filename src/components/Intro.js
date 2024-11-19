import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";
// import FractalTree from "./FractalTree";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    return (
      <div id="intro">
        {/* <FractalTree></FractalTree> */}
        <Typist avgTypingDelay={120}>
            <span className="intro-name">{"¿Hey, que tal?"}</span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">Suelo crear cositas interesantes.</div>
          <div className="intro-desc">
          Soy un Front-end Developer viviendo en LATAM. Tengo un gran interés  por la creación de productos de software de gran escala y alto impacto.
          </div>
          <a
            href="mailto:pdwxn@protonmail.com"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {" Hablemos!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
