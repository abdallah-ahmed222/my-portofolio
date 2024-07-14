import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link, NavLink } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { navLinksData } from "../helpers/data";
function NavBar() {
  const [expand, updateExpanded] = useState(false);
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
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <div className="logo-container d-flex align-items-center">
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center ">
            <img src={logo} className="img-fluid logo" alt="brand" />
          </Navbar.Brand>

          <OverlayTrigger
            placement="right"
            delay={{ show: 200, hide: 200 }}
            overlay={
              <Tooltip id="button-tooltip" className="fw-bold">
                Mail Me Now !!
              </Tooltip>
            }
          >
            <a
              href="mailto:abdallah.ahmed2022222@gmail.com"
              className="text-decoration-none fw-bold pt-1"
            >
              mail@Abdallah Ahmed
            </a>
          </OverlayTrigger>
        </div>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center" defaultActiveKey="#home">
            {navLinksData.map((link) => (
              <OverlayTrigger
                key={link.label}
                placement="bottom"
                delay={{ show: 200, hide: 200 }}
                overlay={
                  <Tooltip id="button-tooltip" className="fw-bold">
                    {link.label}
                  </Tooltip>
                }
              >
                <NavLink
                  to={link.to}
                  target={link.target}
                  className={({ isActive, isPending }) =>
                    `${
                      isPending ? `pending` : isActive ? "active" : ""
                    } text-decoration-none px-4 fw-bold nav_links`
                  }
                  onClick={() => updateExpanded(false)}
                >
                  {link.label}
                </NavLink>
              </OverlayTrigger>
            ))}

            <Nav.Item className="fork-btn p-0 ms-1">
              <Button
                href="https://github.com/abdallah-ahmed222"
                target="_blank"
                className="fork-btn-inner fw-bold"
              >
                Hire Me
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
