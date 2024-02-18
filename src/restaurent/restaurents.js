import { Container } from "react-bootstrap"; 
import Restaurent from "./restaurent";
import { useState ,useEffect} from "react"; 
import axios from 'axios';
export default function Resturents() {
  const [details, setDetails] = useState([]);
  const [detail, setDetail] = useState([]);
  useEffect(()=>{
   axios.get('https://tripadvisor-api.onrender.com/Restaurents')
   .then((response)=>{
    setDetails(response.data);
    setDetail(response.data);
   })
   .catch((err)=>console.log(err));
  },[])
  function handleClick() {
    const search = document.getElementById("hotelsearch").value;
    const sorted = detail.filter((detail) => detail.key === search);

    setDetails(sorted);
  }
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
            <div className="nav-links" id="nav-links">
              <a href="/home#home" className="scroll-link nav-link">
                home
              </a>
              <a href="/home#about" className=" scroll-link nav-link">
                about
              </a>
              <a href="/home#services" className="nav-link scroll-link">
                services
              </a>
              <a href="/home#featured" className="nav-link scroll-link">
                featured
              </a>
              <a href="/home#gallery" className="nav-link scroll-link">
                gallery
              </a>
            </div>
            <div className="nav-icons"></div>
          </div>
        </nav>
        <h1 className="title" style={{ fontSize: "2.3rem" }}>
          Restaurents
        </h1>
        <div className="input-group mb-3">
            <input
              type="text"
              className="form-control border-success"
              placeholder="Enter place name to search"
              id="hotelsearch" 
            />
            <button
              className="btn btn-success"
              type="button"
              onClick={handleClick}
            >
              Search
            </button>
          </div>
        {details.map((detail) => {
          return (
            <>
              <Restaurent details={detail} />
            </>
          );
        })}
      </Container>
      <footer className="section footer">
        <p className="copyright">
          &copy;<span id="date"></span>. all rights reserved
        </p>
      </footer>
    </>
  );
}
restaurentdetails
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { useEffect ,useState } from "react";
import axios from 'axios';
export default function RestaurentDetails(props) {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [img,setImg] = useState([]);
  useEffect(()=>{
    axios.get(`http://localhost:3001/restaurent/${id}`)
    .then((response)=>{
      setImg(response.data.imgarr); 
      setDetails(response.data); 
  })
    .catch((err)=>console.log(err));
  },[]);
  const num=0; 
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
                  alt={details.view}
                  style={{ height: "18rem" }}
                  src={img[0]}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  alt={details.view}
                  style={{ height: "18rem" }}
                  src={img[1]}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  alt={details.view}
                  style={{ height: "18rem" }}
                  src={img[2]}
                />
              </Carousel.Item>
            </Carousel>
            <h3 style={{ fontSize: "2.2rem", letterSpacing: "0.2rem" }}>
              {details.title}
              <Badge
                style={{ fontSize: "1rem", backgroundColor: "gold" }}
                bg="bsPrefix"
              >
                {details.rating}
                <FontAwesomeIcon icon="fa-solid fa-star" />
              </Badge>
            </h3>
            <p style={{ letterSpacing: "0.2rem" }}></p>
            <p>
              <FontAwesomeIcon icon="fa-solid fa-angles-right" />
              {details.location}
              <br />
              <FontAwesomeIcon icon="fa-solid fa-angles-right" />
              {details.price} for two approx
              <br />
              <FontAwesomeIcon icon="fa-solid fa-angles-right" /> Open from
              11:00 AM - 11:00 PM
            </p>
            <h3>Directions</h3>
            <iframe
              src={details.map}
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