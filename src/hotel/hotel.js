import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, Card, Col, Row } from "react-bootstrap";
import {
  faWifi,
  faTemperatureArrowDown,
  faTv,
  faShower,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faStar } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";


library.add(
  fas,
  faTwitter,
  faFontAwesome,
  faStar,
  faWifi,
  faTemperatureArrowDown,
  faTv,
  faShower,
  faIndianRupeeSign
);

export default function Hotel(props) {
  const { details } = props;


  return (
    <>
      <Card className="m-3 mb-5 mt-4">
        <Row>
          <Col md={4}>
            <Card.Img src={details.img} style={{ height: "100%" }} />
          </Col>
          <Col md={8}>
            <Card.Body>
              <h2 style={{ fontSize: "2.2rem", letterSpacing: "0.2rem" }}>
                {details.title}
              </h2>
              <p style={{ letterSpacing: "0.3rem" }}>{details.location}</p>
              <Card.Subtitle
                className="mb-2 text-muted"
                style={{ letterSpacing: "0.2rem" }}
              >
                Rating:
                <Badge bg="bsPrefix" style={{ backgroundColor: "gold" }}>
                  {details.rating}
                  <FontAwesomeIcon icon="fa-solid fa-star" />
                </Badge>{" "}
              </Card.Subtitle>
              <p>
                {details.avail.map((obj) => {
                  return (
                    <>
                      <FontAwesomeIcon icon={obj.icon} /> {obj.description}{" "}
                      &nbsp;&nbsp;&nbsp;
                    </>
                  );
                })}
              </p>
              <h3 className="float-start  " style={{ fontSize: "1.8rem" }}>
                <FontAwesomeIcon icon={faIndianRupeeSign} /> {details.price}{" "}
                &nbsp;
                <span
                  style={{ fontSize: "1.2rem", textDecoration: "line-through" }}
                  className="text-muted"
                >
                  <FontAwesomeIcon icon={faIndianRupeeSign} />{" "}
                  {details.originalprice}{" "}
                </span>
                <span style={{ fontSize: "1.2rem" }} className="text-warning">
                  {" "}
                  &nbsp;{details.discount}% off
                </span>
              </h3>
              <div className="float-end ">
                <a href={details.view}>
                  <button
                    className="btn-primary  mb-2"
                    style={{
                      borderRadius: "5px",
                      paddingBottm: "16px",
                      paddingTop: "16px",
                    }}
                  >
                    view details
                  </button>
                </a>
                <a href={details.book}>
                  <button
                    className="btn p-3 mb-2 ms-3 btn-warning"
                    style={{ letterSpacing: "0.2rem" }}
                  >
                    Book Now
                  </button>
                </a>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
}
