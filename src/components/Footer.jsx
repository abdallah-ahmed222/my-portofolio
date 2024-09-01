import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <div className="logo-container d-flex align-items-center justify-content-center">
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center ">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
      </div>

      <p className="text-white">
        © {year} All Rights Reserved by Abdallah Ahmed
      </p>
    </Container>
  );
}

export default Footer;
