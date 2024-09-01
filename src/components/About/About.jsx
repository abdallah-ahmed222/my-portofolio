import { Container } from "react-bootstrap";
import Techstack from "./Techstack";
function About() {
  return (
    <>
      <div className="about-section py-2">
        <div className="bread-crumb_bg" id="skills">
          <div className="bread-crumb_container d-flex flex-column justify-content-center align-items-center fs-2">
            <h1 className="main-name text-center fw-bold">My Skills</h1>
          </div>
        </div>
        <Container>
          <Techstack />
        </Container>
      </div>
    </>
  );
}
export default About;
