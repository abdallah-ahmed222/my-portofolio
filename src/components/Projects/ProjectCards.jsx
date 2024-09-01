import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Col, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <img className=" p-0" src={props.imgPath} alt="project-img" />
      <Card.Body className="p-4">
        <Row class="row">
          <Col xs={10}>
            <Card.Title className="fw-bold text-start">{props.title}</Card.Title>
            <p className="text-start m-0" style={{ textAlign: "justify" }}>
              {props.description}
            </p>
          </Col>
          <Col xs={2}>
            <FaArrowRight className="project-icon fs-2" />
          </Col>
        </Row>

      </Card.Body>
      <div className="mt-auto position-absolute  flex-column gap-2 p-3 pe-0 project-button_container ">

        {
          props.ghLink &&
          <Button variant="primary" className="fork-btn-inner" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        }
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            className="fork-btn-inner"
            href={props.demoLink}
            target="_blank"
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </div>
    </Card>
  );
}
export default ProjectCards;
