import { Container } from "react-bootstrap";
import Techstack from "./Techstack";
function About() {
  return (
    <>
      <div className="bread-crumb_bg">
        <div className="bread-crumb_container d-flex flex-column justify-content-center align-items-center fs-2">
          <h1 className="main-name text-center fw-bold">My Skills</h1>
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
