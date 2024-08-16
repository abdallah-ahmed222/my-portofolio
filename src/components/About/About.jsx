import { Container } from "react-bootstrap";
import Techstack from "./Techstack";
function About() {
  return (
    <>
      <div className="bread-crumb_bg" id="skills">
        <div className="bread-crumb_container d-flex flex-column justify-content-center align-items-center fs-2">
          <h1 className="main-name text-center fw-bold">My Skills</h1>
          <p className="fs-5 w-50 text-white">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </p>
        </div>
      </div>
      <Container fluid className="about-section py-4">
        <Container>
          <Techstack />
        </Container>
      </Container>
    </>
  );
}
export default About;
