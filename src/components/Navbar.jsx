import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function NavBar() {
  const [navColour, updateNavbar] = useState(false);
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  window.addEventListener("scroll", scrollHandler);
  return (
    <Navbar
      fixed="top"
      expand="md"
      className={`${navColour ? `sticky` : `navbar`} py-0`}
    >
      <Container>
        <div className="logo-container">
          <Navbar.Brand
            as={Link}
            to="/"
            className="d-flex align-items-center py-0 "
          >
            <img src={logo} className="img-fluid logo" alt="brand" />
          </Navbar.Brand>
        </div>
        <Button
          href="https://www.linkedin.com/in/abdallah-ahmed-783512231/"
          target="_blank"
          className="fork-btn-inner fw-bold"
        >
          Hire Me !
        </Button>
      </Container>
    </Navbar>
  );
}

export default NavBar;
