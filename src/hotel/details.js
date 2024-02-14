import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Data from "./hoteldetail.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import { useParams } from "react-router-dom";

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
export default function Details(props) {
  const { id } = useParams();
  const num=id;
  const img = Data[num].imgarr;
  return (
    <>
    <Container>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <div>
              <h2 className="tle">
                trip <span className="subtitle">advisor</span>
              </h2>
            </div>
          </div>
        </div>
      </nav>
      <Carousel data-bs-theme="dark" className="m-5">
        <Carousel.Item>
          <img alt={Data[num].view} style={{ height: "28rem" }} src={img[0]} />
        </Carousel.Item>
        <Carousel.Item>
          <img alt={Data[num].view} style={{ height: "28rem" }} src={img[1]} />
        </Carousel.Item>
        <Carousel.Item>
          <img alt={Data[num].view} style={{ height: "28rem" }} src={img[2]} />
        </Carousel.Item>
      </Carousel>
      <div className="m-5">
        <Row>
          <Col md={8}>
            <div className="float-start">
              <h3 style={{ fontSize: "2.6rem", letterSpacing: "0.3rem" }}>
                {Data[num].title}
              </h3>
              <p style={{ letterSpacing: "0.3rem" }}>{Data[num].location}</p>
            </div>
            <div className="float-end">
              <Badge
                className="p-2"
                style={{ fontSize: "2rem", backgroundColor: "#3fd0d4" }}
                bg="bsPrefix"
              >
                {Data[num].rating}
                <FontAwesomeIcon icon="fa-solid fa-star" />
              </Badge>
            </div>
            <div style={{ clear: "both" }}></div>
            <h3>Amenities</h3>
            <p>
              {Data[num].avail.map((obj) => {
                return (
                  <>
                    <FontAwesomeIcon icon={obj.icon} /> {obj.description}{" "}
                    &nbsp;&nbsp;&nbsp;
                    <br />
                    <br />
                  </>
                );
              })}
            </p>
            <h3>About</h3>
            <p>Affordable hotels at prime location.</p>
            <h3>Hotel Policies</h3>
            <p>
              <span style={{ fontWeight: "bold" }}> Check-in: 12 : 00 PM </span>{" "}
              <br />
              <span style={{ fontWeight: "bold" }}>
                {" "}
                Check-out: 11:00 AM{" "}
              </span>{" "}
              <br />
              Couples are welcome
              <br /> Guests can check in using any local or outstation ID proof
              (PAN card not accepted).
              <br /> As a complimentary benefit, your stay is now insured by
              Acko.
              <br /> This hotel is serviced under the trade name of Heaven
              Holidays as per quality standards of OYO
            </p>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold", fontSize: "2rem" }}>
                  <FontAwesomeIcon icon={faIndianRupeeSign} /> {Data[num].price}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <span
                    style={{
                      textDecoration: "line-through",
                      fontSize: "1.2rem",
                    }}
                  >
                    <FontAwesomeIcon icon={faIndianRupeeSign} />{" "}
                    {Data[num].originalprice}
                  </span>
                  <span style={{ fontSize: "1.3rem" }} className="text-warning">
                    {" "}
                    &nbsp;{Data[num].discount}% off
                  </span>
                </Card.Subtitle>
                <Card.Text>
                  <Card>
                    <Card.Body>
                      <b style={{ fontWeight: "bold" }}>
                        Sun,31 Dec-Mon,1 Jan &nbsp;&nbsp; 1 Room, 1 Guest
                      </b>
                    </Card.Body>
                  </Card>
                  <br />
                  <FontAwesomeIcon icon="fa-solid fa-percent" /> Coupon Offer:
                  &nbsp;&nbsp;
                  <b style={{ fontWeight: "bold" }}>
                    <FontAwesomeIcon icon={faIndianRupeeSign} /> -
                    {Data[num].originalprice - Data[num].price}
                  </b>
                  <hr />
                  <p>
                    Your Savings:{" "}
                    <span className="float-end" style={{ fontWeight: "bold" }}>
                      <FontAwesomeIcon icon={faIndianRupeeSign} />{" "}
                      {Data[num].originalprice - Data[num].price}
                    </span>
                  </p>
                  <p>
                    Total Price:{" "}
                    <span className="float-end" style={{ fontWeight: "bold" }}>
                      <FontAwesomeIcon icon={faIndianRupeeSign} />{" "}
                      {Data[num].price}
                    </span>
                  </p>
                  <a href={Data[num].book}>
                    <button className="btn-primary pe-5">
                      Continue to Booking
                    </button>
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
    <footer className="section footer mt-2">
    <p className="copyright">
    &copy;<span id="date"></span>. all rights reserved
    </p>
    </footer>
    </>
  );
}
