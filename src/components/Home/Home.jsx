import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/hero.png";
import Home2 from "./Home2";
import Type from "./Type";
import { FaDownload } from "react-icons/fa6";
import cv from "../../assets/abdallah_ahmed-cv.pdf";
import LinksComponent from "../LinksComponent";
import About from "../About/About";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { MdWorkspacePremium } from "react-icons/md";
import { FaBarsProgress, FaCode } from "react-icons/fa6";

function Home() {
  const [distnation, setDistnation] = useState("home")
  useEffect(() => {
    const section = document.getElementById(distnation);
    const rect = section.getBoundingClientRect();
    window.scrollTo(0, (rect.y - 50 == 50 ? rect.y : rect.y - 50));
    // console.log(rect);

  }, [distnation])
  // const handleGoTo = (eleId) => {

  // };
  return (
    <section id="home">
      <div id="circularMenu" className="circular-menu">
        <button
          className="p-0 floating-btn d-flex align-items-center justify-content-center"
          onClick={() => {
            document.getElementById("circularMenu").classList.toggle("active");
          }}
        >
          <FaBarsProgress className="fs-3" />
        </button>

        <div className={`items-wrapper`}>
          <button
            onClick={() => setDistnation("home")}
            className={`menu-item fa fa-facebook ${distnation == "home" ? `activeBtn` : ``}`}
          >
            <FaHome />
          </button>
          <button
            onClick={() => setDistnation("skills")}
            className={`menu-item fa fa-twitter ${distnation == "skills" ? `activeBtn` : ``}`}
          >
            <GrServices />
          </button>
          <button
            onClick={() => setDistnation("about")}
            className={`menu-item fa fa-google-plus ${distnation == "about" ? `activeBtn` : ``}`}
          >
            <FaCode />
          </button>
          <button onClick={() => setDistnation("home")}
            className={`menu-item fa fa-linkedin ${distnation == "home" ? `activeBtn` : ``}`}

          >
            <MdWorkspacePremium />
          </button>
        </div>
      </div>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row className="position-relative w-100">
            <div className="greating d-none d-md-block">HI!</div>
            <Col
              md={7}
              className="home-header p-0 ps-3 order-last order-md-first"
            >
              <h1 className="heading-name fw-bold ps-3 text-nowrap">
                I am
                <span className="main-name d-inline-block ps-2">
                  {" "}
                  Abdallah
                </span>{" "}
                <span
                  className="wave d-inline-block"
                  role="img"
                  aria-labelledby="wave"
                >
                  👋🏻
                </span>
              </h1>

              <div className="text-start text ps-3 pb-2">
                <Type />
              </div>
              <p className="ps-3 fs-5">
                I break down complex user experinece problems to create
                integritiy focussed solutions that connect billions of people
              </p>
              <div className="links-container w-75 d-flex justify-content-between align-items-center ps-3 pt-2 pe-5">
                <a
                  className="links-container_button d-flex justify-content-center text-decoration-none"
                  download="abdallah_ahmed-cv.pdf"
                  href={cv}
                >
                  <FaDownload className="fs-5 pe-1" />
                  Resume
                </a>
                <LinksComponent />
              </div>
            </Col>

            <Col
              md={5}
              style={{ paddingBottom: 20 }}
              className="position-relative order-first order-md-last d-flex align-items-center justify-content-center"
            >
              <div
                className="ps-5 d-flex justify-content-center hero-image_container position-relative"
                style={{ maxHeight: "90%" }}
              >
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid home-hero"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <About />
    </section>
  );
}

export default Home;
