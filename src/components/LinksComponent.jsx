import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import { homeLinksData } from "../helpers/data";

export default function LinksComponent() {
  return (
    <>
      {homeLinksData.map((link) => (
        <OverlayTrigger
          key={link.label}
          placement="bottom"
          delay={{ show: 200, hide: 200 }}
          overlay={
            <Tooltip id="button-tooltip" className="fw-bold">
              {link.label}
            </Tooltip>
          }
        >
          <Link
            className="links-container_link text-decoration-none mx-1"
            to={link.to}
            target="blank"
          >
            {link.element}
          </Link>
        </OverlayTrigger>
      ))}
    </>
  );
}
