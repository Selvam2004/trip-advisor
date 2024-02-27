import {
  Badge, 
  Button, 
  Card,
  CardBody,
  CardTitle,
  Carousel,
  Col,
  Container, 
  Row,
} from "react-bootstrap"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  Link, useParams } from "react-router-dom";
import { useEffect ,useState } from "react";
import Loader from "../loader";
import axios from 'axios';
export default function RestaurentDetails(props) {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [img,setImg] = useState([]);
  const [loading,setLoading] = useState(true);
 const d=new Date();
  useEffect(()=>{
    axios.get(`https://tripadvisor-api.onrender.com/restaurent/${id}`)
    .then((response)=>{
      setImg(response.data.imgarr); 
      setDetails(response.data); 
      setLoading(false);
  }).catch((err)=>console.log(err));
  },[id]); 
  return (
    <>
      <Container >
        <nav className="navbar  bg-secondary bg-gradient">
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
        {loading?<Loader/>:<Row className="m-5">
          <Col md={8}>
            <Carousel data-bs-theme="dark">
              {img.map((source)=>{
                return (
              <Carousel.Item>
                <img
                  alt={details.title}
                  style={{ height: "18rem" }}
                  src={source}
                />
              </Carousel.Item> 
                );               
              })} 
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
                <Card className="text-center">
                  <Card.Body>
                <b style={{ fontWeight: "bold" }}>
                        {d.getDate()+"-"+d.getMonth()+"-"+d.getFullYear()  }<br/> 
                        Slot: 6:30PM &nbsp; Guest:2<br/>
                        
                  </b></Card.Body>
                  <Card.Footer>
                    Offer:{details.offer}
                  </Card.Footer>
                </Card>
                <hr/>
                Price:<span className="float-end">{details.price}</span><br/>
                Guest:<span className="float-end">{details.guest}</span><hr/>
                      <Link  to={`/home/restaurent/payment/${details.title}`}>
                    <Button className="btn-primary w-100 rounded mt-4">
                    Continue Booking
                  </Button></Link> 
              </CardBody>
            </Card>
          </Col>
        </Row>}
      </Container>
      <footer className="section footer">
        <p className="copyright">
          &copy;<span id="date"></span>. all rights reserved
        </p>
      </footer>
    </>
  );
}
