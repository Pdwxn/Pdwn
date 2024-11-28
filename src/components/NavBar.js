import React from "react";
import { useLanguage } from "../components/LanguageContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/NavBar.css";

const NavBar = () => {
  const { language, toggleLanguage } = useLanguage();
  const texts = language === "es" ? require("../locales/es").default : require("../locales/en").default;

  return (
    <Navbar fixed="top" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">Pdwn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#intro">{texts.nav.home}</Nav.Link>
            <Nav.Link href="#about">{texts.nav.about}</Nav.Link>
            <Nav.Link href="#experience">{texts.nav.experiences}</Nav.Link>
            <Nav.Link href="#projects">{texts.nav.projects}</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="mailto:pdwxn@protonmail.com " alt="email">
              <EmailRoundedIcon style={{ fontSize: 20 }} />
            </Nav.Link>
            <Nav.Link href="https://drive.proton.me/urls/0CC9AKQMH4#AEKrRazWdJJH" target="_blank">
              <LibraryBooksRoundedIcon style={{ fontSize: 19 }} />
            </Nav.Link>
            <Nav.Link href="https://github.com/Pdwxn" target="_blank">
              <GitHubIcon style={{ fontSize: 19 }} />
            </Nav.Link>
            <Nav.Link href="https://linkedin.com/in/jesusparaguan" target="_blank">
              <LinkedInIcon style={{ fontSize: 21 }} />
            </Nav.Link>
            <Nav.Link onClick={toggleLanguage}>
              {language === "es" ? "EN" : "ES"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
