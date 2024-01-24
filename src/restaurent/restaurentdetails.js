import {
  Badge,
  Card,
  CardBody,
  CardTitle,
  Carousel,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import Data from "./restaurentdetail.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function RestaurentDetails(props) {
  const { num } = props;
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
        <Row className="m-5">
          <Col md={8}>
            <Carousel data-bs-theme="dark">
              <Carousel.Item>
                <img
                  alt={Data[num].view}
                  style={{ height: "18rem" }}
                  src={img[0]}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  alt={Data[num].view}
                  style={{ height: "18rem" }}
                  src={img[1]}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  alt={Data[num].view}
                  style={{ height: "18rem" }}
                  src={img[2]}
                />
              </Carousel.Item>
            </Carousel>
            <h3 style={{ fontSize: "2.2rem", letterSpacing: "0.2rem" }}>
              {Data[num].title}
              <Badge
                style={{ fontSize: "1rem", backgroundColor: "gold" }}
                bg="bsPrefix"
              >
                {Data[num].rating}
                <FontAwesomeIcon icon="fa-solid fa-star" />
              </Badge>
            </h3>
            <p style={{ letterSpacing: "0.2rem" }}></p>
            <p>
              <FontAwesomeIcon icon="fa-solid fa-angles-right" />
              {Data[num].location}
              <br />
              <FontAwesomeIcon icon="fa-solid fa-angles-right" />
              {Data[num].price} for two approx
              <br />
              <FontAwesomeIcon icon="fa-solid fa-angles-right" /> Open from
              11:00 AM - 11:00 PM
            </p>
            <h3>Directions</h3>
            <iframe
              src={Data[num].map}
              width="600"
              height="450"
              title="direction"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
          <Col md={4}>
            <Card>
              <CardBody>
                <CardTitle>Table Reservation deals for</CardTitle>
                <form>
                  <input className="form-control d-inline mb-3" type="date" />
                  <select
                    class="form-select mb-3"
                    aria-label="Default select example"
                  >
                    <option selected>select Guest</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select>
                  <b> Select Slot</b>
                  <br />
                  <input
                    type="radio"
                    class="btn-check"
                    name="options"
                    id="option1"
                    autocomplete="off"
                    checked
                  />
                  <label class="btn btn-warning m-1" for="option1">
                    5:00 PM
                  </label>

                  <input
                    type="radio"
                    class="btn-check"
                    name="options"
                    id="option2"
                    autocomplete="off"
                  />
                  <label class="btn btn-warning m-1" for="option2">
                    5:30 PM
                  </label>

                  <input
                    type="radio"
                    class="btn-check"
                    name="options"
                    id="option3"
                    autocomplete="off"
                  />
                  <label class="btn btn-warning m-1" for="option3">
                    6:00 PM
                  </label>

                  <input
                    type="radio"
                    class="btn-check"
                    name="options"
                    id="option4"
                    autocomplete="off"
                  />
                  <label class="btn btn-warning m-1" for="option4">
                    6:30 PM
                  </label>
                  <input
                    type="radio"
                    class="btn-check"
                    name="options"
                    id="option4"
                    autocomplete="off"
                  />
                  <label class="btn btn-warning m-1" for="option4">
                    7:00 PM
                  </label>
                  <input
                    type="radio"
                    class="btn-check"
                    name="options"
                    id="option4"
                    autocomplete="off"
                  />
                  <label class="btn btn-warning m-1" for="option4">
                    7:30 PM
                  </label>
                  <button className="btn-primary w-100 rounded mt-4">
                    Confirm Booking
                  </button>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <footer className="section footer">
        <p className="copyright">
          &copy;<span id="date"></span>. all rights reserved
        </p>
      </footer>
    </>
  );
}
