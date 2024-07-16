import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/home-main.svg";
import Home2 from "./Home2";
import Type from "./Type";
import { FaDownload } from "react-icons/fa6";
import cv from "../../assets/abdallah_ahmed-cv.pdf";
import LinksComponent from "../LinksComponent";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row className="position-relative w-100">
            <div className="greating d-none d-md-block">HI!</div>
            <Col
              md={7}
              className="home-header p-0 ps-3 order-last order-md-first"
            >
              <h1 className="heading-name fw-bold ps-3 ">
                I am
                <span className="main-name"> Abdallah</span>{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <div className="text-start ps-3 pb-2">
                <Type />
              </div>
              <p className="ps-3 w-75 fs-5">
                I break down complex user experinece problems to create
                integritiy focussed solutions that connect billions of people
              </p>
              <div className="links-container w-75 d-flex justify-content-between align-items-center ps-3 pt-2 pe-5">
                <a
                  className="links-container_button d-block text-decoration-none"
                  download="abdallah_ahmed-cv.pdf"
                  href={cv}
                >
                  Download CV <FaDownload className="pb-1 fs-5" />
                </a>
                <LinksComponent />
              </div>
            </Col>

            <Col
              md={5}
              style={{ paddingBottom: 20 }}
              className="position-relative order-first order-md-last"
            >
              <div className="ps-5">
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid home-hero"
                  style={{ maxHeight: "500px" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
