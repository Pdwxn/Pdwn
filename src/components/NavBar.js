import React, { useState } from "react";
import { useLanguage } from "../components/LanguageContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { CONTACT_LINKS, RESUME_FILES } from "../constants/site";
import es from "../locales/es";
import en from "../locales/en";
import "../styles/NavBar.css";

const NavBar = () => {
  const { language, toggleLanguage } = useLanguage();
  const texts = language === "es" ? es : en;
  const [expanded, setExpanded] = useState(false);
  const resumeHref = RESUME_FILES[language];

  return (
    <Navbar
      fixed="top"
      expand="lg"
      variant="dark"
      expanded={expanded}
      onToggle={(nextExpanded) => setExpanded(nextExpanded)}
      className="site-navbar navbar-dark"
    >
      <Container>
        <Navbar.Brand href="#intro">Pdwn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" onSelect={() => setExpanded(false)}>
            <Nav.Link href="#intro">{texts.nav.home}</Nav.Link>
            <Nav.Link href="#about">{texts.nav.about}</Nav.Link>
            <Nav.Link href="#experience">{texts.nav.experience}</Nav.Link>
            <Nav.Link href="#projects">{texts.nav.projects}</Nav.Link>
            <Nav.Link href={resumeHref} download>
              {texts.nav.resume}
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto nav-actions" onSelect={() => setExpanded(false)}>
            <Nav.Link href={CONTACT_LINKS.email} aria-label="Email">
              <EmailRoundedIcon style={{ fontSize: 20 }} />
            </Nav.Link>
            <Nav.Link href={CONTACT_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHubIcon style={{ fontSize: 19 }} />
            </Nav.Link>
            <Nav.Link href={CONTACT_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon style={{ fontSize: 21 }} />
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                toggleLanguage();
                setExpanded(false);
              }}
              role="button"
              aria-label="Toggle language"
            >
              {language === "es" ? "EN" : "ES"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
