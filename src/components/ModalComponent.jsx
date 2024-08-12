import { Modal } from "react-bootstrap";

export function MyVerticallyCenteredModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby={props.eldata.label} centered>
      <Modal.Header className="border-0 justify-content-between align-items-center pb-0">
        <h3 className="d-flex align-items-center m-0">
          <span className="d-inline-block mb-1 pe-2" style={{ width: "40px" }}>
            {props.eldata.element ? props.eldata.element : ""}
          </span>
          {props.eldata.label ? props.eldata.label : ""}
        </h3>
        <button className="p-0" onClick={props.onHide}>
          <div className="close-container">
            <div className="leftright"></div>
            <div className="rightleft"></div>
          </div>
        </button>
      </Modal.Header>
      <Modal.Body>
        <p>{props.eldata.disc}</p>
      </Modal.Body>
    </Modal>
  );
}
