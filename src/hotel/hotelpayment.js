import {
  Accordion,
  Alert,
  Badge,
  Card,
  Col,
  Container,
  ListGroup,
  Row,
  Tab,
} from "react-bootstrap"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useEffect ,useState} from "react";
import axios from 'axios';
export default function HotelPayment(props) {
  const { id } = useParams();
  const [details,setDetails] = useState({});
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    axios.get(`https://tripadvisor-api.onrender.com/hotel/${id}`)
  .then((response)=>{
  setDetails(response.data);
  setLoading(false);
   }).catch((err)=>console.log(err));
  },[id])
  console.log(details); 
  return (
    <>
    <Container>
      <nav className="navbar bg-secondary mb-2 bg-gradient">
        <div className="nav-center float-start">
          <div className="nav-header">
            <div>
              <h2 className="tle">
                trip <span className="subtitle">advisor</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="nav-icons float-end">
            <div className="paste-button">
              <button className="butt">
                <i className="bi bi-person-circle"></i>
                <span className="m-2 p-2">My Bookings &nbsp; ▼</span></button>
            <div className="dropdown-content">
               <div id="top"  >  </div>
               <div id="middle" >My Bookings</div>
               <div id="bottom">Log Out</div>
            </div>
            </div>

             </div>
      </nav>
      {loading?  <div className="page" >
      <div className="cnt">
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="h">loading</div>
      </div> 
   </div>:
      <Row>
        <Col md={7}>
          <Alert
            key="warning"
            variant="warning"
            style={{ textAlign: "center" }}
          >
            🎉 Yay! you just saved ₹{details.originalprice - details.price}{" "}
            on this booking!
          </Alert>
          <Card>
            <Card.Body>
              <Card.Title>
                <h3> Your Details</h3>
              </Card.Title>
              <Card.Text>
                Name: selvam
                &nbsp;&nbsp;&nbsp;Email:selvam@gmail.com&nbsp;&nbsp;&nbsp;MobileNumber:8765432190
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                <h4 style={{ fontWeight: "bold" }}>
                  Choose payment method to pay
                </h4>
              </Card.Title>
              <Card.Text>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <b> Pay At Hotel</b>
                    </Accordion.Header>
                    <Accordion.Body className="text-center">
                      <FontAwesomeIcon
                        icon="fa-solid fa-star"
                        style={{ color: "gold" }}
                      />
                      <b style={{ fontWeight: "bold" }}>
                        No payment needed today.
                      </b>
                      <br />
                      We will confirm your stay without any charge.<br/> Pay directly
                      at the hotel during your stay.<br/>
                      <button className="btn-primary rounded p-2">Confirm Booking</button>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <b>Pay Now</b>
                    </Accordion.Header>
                    <Accordion.Body>
                    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item action variant="info" href="#link1">
            Credit/Debit/ATM Cards
            </ListGroup.Item>
            <ListGroup.Item action variant="info" href="#link2">
            Wallets
            </ListGroup.Item>
            <ListGroup.Item action variant="info" href="#link3">
            Pay using UPI
            </ListGroup.Item>
            <ListGroup.Item action variant="info" href="#link4">
            Netbanking
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">Credit/Debit/ATM Cards</Tab.Pane>
            <Tab.Pane eventKey="#link2">Wallets</Tab.Pane>
            <Tab.Pane eventKey="#link3">Pay using UPI</Tab.Pane>
            <Tab.Pane eventKey="#link4">Netbanking</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={5}>
          <Card>
            <Card.Body>
              <Card.Title style={{ fontWeight: "bold", fontSize: "2rem" }}>
                {details.title}
                <Badge
                  className="ms-3 "
                  style={{ fontSize: "1rem", backgroundColor: "#3fd0d4" }}
                  bg="bsPrefix"
                >
                  {details.rating}
                  <FontAwesomeIcon icon="fa-solid fa-star" />
                </Badge>
              </Card.Title>
              <Card.Subtitle className="mb-2 mt-3 mb-3 text-muted">
                {details.location}
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
                <hr />
                <p>
                  Original Price:{" "}
                  <span className="float-end" style={{ fontWeight: "bold" }}>
                    <FontAwesomeIcon icon={faIndianRupeeSign} />{" "}
                    {details.originalprice}
                  </span>
                </p>
                <p>
                  Discount:{" "}
                  <span className="float-end" style={{ fontWeight: "bold" }}>
                    <FontAwesomeIcon icon={faIndianRupeeSign} /> -
                    {details.originalprice - details.price}
                  </span>
                </p>
                <p>
                  Your Savings:{" "}
                  <span className="float-end" style={{ fontWeight: "bold" }}>
                    <FontAwesomeIcon icon={faIndianRupeeSign} />{" "}
                    {details.originalprice - details.price}
                  </span>
                </p>{" "}
                <hr />
                <p>
                  Total Payable Amount:{" "}
                  <span className="float-end" style={{ fontWeight: "bold" }}>
                    <FontAwesomeIcon icon={faIndianRupeeSign} />{" "}
                    {details.price}
                  </span>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
}
    </Container>
    <footer className="section footer mt-3">
        <p className="copyright">
        &copy;<span id="date"></span>. all rights reserved
        </p>
        </footer>
    </>
  );
}