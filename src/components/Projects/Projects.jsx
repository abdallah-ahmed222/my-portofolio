import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import leaf from "../../assets/Projects/leaf.png";
import techLearning from "../../assets/Projects/tech-learning.png";
import tasme3 from "../../assets/Projects/tasme3.png";
import gZone from "../../assets/Projects/g-zone.png";
import foodies from "../../assets/Projects/foodies.png";

function Projects() {
  return (
    <Container fluid className="project-section pt-5">
      <Container id="projects">
        <h1 className="main-name fw-bold">
          My Recent Works
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I have worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={tasme3}
              isBlog={false}
              title="Tasme3"
              description="It is an application for memorizing and reciting the Holy Quran"
              demoLink="https://tasmi3.app/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={foodies}
              isBlog={false}
              title="Foodies"
              description="Foodies is an online resturant reservation and order foood"
              ghLink="https://github.com/abdallah-ahmed222/Foodies-res"
              demoLink="https://foodies-res.netlify.app/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={gZone}
              isBlog={false}
              title="Game Zone"
              description="Game Zone is an online e-comerse for games "
              ghLink="https://github.com/abdallah-ahmed222/g-zone"
              demoLink="https://abdallah-ahmed222.github.io/g-zone/index.html"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={techLearning}
              isBlog={false}
              title="Tech Learning"
              description="Tech learning Is an academy for programing languages"
              ghLink="https://github.com/abdallah-ahmed222/Tech-Learning"
              demoLink="https://tech-learning.netlify.app/"
            />
          </Col>
        </Row>

        <a className="text-white my-5 ending p-3 px-4 fw-bold fork-btn-inner text-decoration-none" href="https://github.com/abdallah-ahmed222" target="blank">More On My Git Hub</a>

      </Container>
    </Container>
  );
}

export default Projects;
