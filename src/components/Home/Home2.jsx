import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import LinksComponent from "../LinksComponent";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Home2() {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true, delay: 500 });
  }, []);
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <div className="w-50 text-center m-auto mb-5 ">
          <h1 className="heading-name fw-bold text-center ">
            <span className="main-name">My Quality Services</span>
          </h1>
          <p className="text-white">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </p>
        </div>
        <div className="position-relative test-hover">
          <Link
            to="/"
            data-aos="fade-up"
            className="d-flex align-items-center justify-content-between text-white px-2 text-decoration-none"
          >
            <p className="fw-bold fs-4 test-hover_title text-start m-0">
              <span className="pe-3">01</span>Responsive Web Design
            </p>
            <p className="w-50 m-0 text-start">
              It is the art of creating websites that adapt seamlessly to
              various devices and screen sizes, ensuring optimal usability and
              appearance.
            </p>
            <span>
              <FaArrowRight className="fs-2" />
            </span>
          </Link>
          <Link
            to="/"
            className="d-flex align-items-center justify-content-between text-white px-2 text-decoration-none"
            data-aos="fade-up"
          >
            <p className="fw-bold fs-4 test-hover_title text-start m-0">
              <span className="pe-3">02</span>React JS Development
            </p>
            <p className="w-50 m-0 text-start">
              React JS Developer specializes in creating user interface (UI)
              components for web and mobile applications using the React library
            </p>
            <span>
              <FaArrowRight className="fs-2" />
            </span>
          </Link>
          <Link
            to="/"
            data-aos="fade-up"
            className="d-flex align-items-center justify-content-between text-white px-2 text-decoration-none"
          >
            <p className="fw-bold fs-4 test-hover_title text-start m-0">
              <span className="pe-3">03</span>Node.js Development
            </p>
            <p className="w-50 m-0 text-start">
              A skilled NodeJS Developer architects server logic, excelling in
              JavaScript and the NodeJS ecosystem. They design robust back-end
              infrastructures,
            </p>
            <span>
              <FaArrowRight className="fs-2" />
            </span>
          </Link>
          <Link
            to="/"
            data-aos="fade-up"
            className="d-flex align-items-center justify-content-between text-white px-2 text-decoration-none"
          >
            <p className="fw-bold fs-4 test-hover_title text-start m-0">
              <span className="pe-3">04</span>Javascript Development
            </p>
            <p className="w-50 m-0 text-start">
              As a JavaScript Developer, iam excellent in building dynamic and
              interactive web applications. my proficiency extends to JavaScript
              and ReactJS
            </p>
            <span>
              <FaArrowRight className="fs-2" />
            </span>
          </Link>
          <div className="tracker"></div>
        </div>
        <Row className="mt-5 align-items-center ">
          <Col md={8} className="home-about-social text-start">
            <h2 className="main-name fs-2 fw-bold">Let’s work together!</h2>
            <div className="links-container w-25 d-flex justify-content-between align-items-center pt-2 pe-5">
              <LinksComponent />
            </div>
          </Col>
          <Col md={4} className="myAvtar p-0">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
