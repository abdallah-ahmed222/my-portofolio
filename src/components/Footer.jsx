import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { navLinksData } from "../helpers/data";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer pt-5">
      <div className="logo-container d-flex align-items-center justify-content-center">
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center ">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
      </div>
      <Nav
        className="ms-auto align-items-center justify-content-center py-3"
        defaultActiveKey="#home"
      >
        {navLinksData.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            target={link.target}
            className="text-decoration-none px-4 fw-bold nav_links"
          >
            {link.label}
          </Link>
        ))}
      </Nav>
      <p className="text-white">
        © {year} All Rights Reserved by Abdallah Ahmed
      </p>
    </Container>
  );
}

export default Footer;
