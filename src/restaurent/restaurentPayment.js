import {
    Accordion,
    Alert,
    Badge, 
    Card,
    Col,
    Container,
    Form,
    ListGroup,
    Row,
    Tab,
  } from "react-bootstrap"; 
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
  import { useNavigate, useParams } from "react-router-dom";
  import { useEffect ,useState} from "react";
  import axios from 'axios';
import Loader from "../loader";
  export default function RestaurentPayment(props) {
    const { id } = useParams();
 
    const [details,setDetails] = useState({});
    const [loading,setLoading] = useState(true);
    const [guest,setGuest]=useState(1);
    const [slot,setSlot]=useState("6:00PM");
    const [date,setDate]=useState(new Date());
    const [user,setUser]=useState({});
    const navigate=useNavigate();

    function handleguest(e) {
      e.preventDefault();
      setGuest(e.target.value); 
    }
    function handleslot(e) {
      e.preventDefault();
      setSlot(e.target.value); 
    }

    const handleBooking = () => {
      setLoading(true);
      axios.post("https://tripadvisor-api.onrender.com/addOrder", {
        placeName: details.title,
        url:details.img,
        location:details.location,
        rating:details.rating,
        customerName: user.name,
        customerEmail: user.email,
        bookedDate: date,
        guest: guest,
        slot: slot,
        price: (details.price/details.guest)*guest
      }).then(res=>{ 
        setLoading(false); 
        navigate(`/home/order/${res.data}`);
      }).catch(err=>console.log(err));
    };

    useEffect(()=>{
      const url1=axios.get(`https://tripadvisor-api.onrender.com/restaurent/${id}`);
      const url2 = axios.get(`https://tripadvisor-api.onrender.com/dashboard`, {
        withCredentials: true,
      });
      Promise.all([url1, url2])
        .then((res) => {
          console.log(res);
          setDetails(res[0].data);
          setUser(res[1].data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
        },[id])
    console.log(details); 
    return (
      <>
      <Container>
        <nav className="navbar bg-secondary mb-2 bg-gradient">
          <div className="nav-center">
  
         
          <div className="nav-links" id="nav-links">
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
                <a href="/home/bookings"><button className="butt">
                  <i className="bi bi-person-circle"></i>
                  <span className="m-2 p-2">My Bookings &nbsp; </span>
                </button></a>
   
              </div>
  
               </div>
          </div>
        </nav>
        {loading? <Loader/>:
        <Row>
          <Col md={7}>
            <Alert
              key="warning"
              variant="warning"
              style={{ textAlign: "center" }}
            >
              🎉 Yay! you have got ₹{details.offer}{" "}
              on this booking!
            </Alert>
            <Card>
              <Card.Body>
                <Card.Title>
                  <h3> Your Details</h3>
                </Card.Title>
                <Card.Text>
                  Name:  {user.name}
                  &nbsp;&nbsp;&nbsp;Email: {user.email}&nbsp;&nbsp;&nbsp; 
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
                       <button className="btn-primary rounded p-2" onClick={handleBooking}>Confirm Booking</button>
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
                    <Form> 
                    <Card.Title>Table Reservation deals for</Card.Title>
                  <input className="form-control d-inline mb-3" onChange={e=>setDate(e.target.value)} type="date" />
                  <label>Select Guest</label>
                  <Form.Select value={guest} onChange={handleguest}>
                            <option value="1" selected>
                              1 guest
                            </option>
                            <option value="2">2 guests</option>
                            <option value="3">3 guests</option>
                            <option value="4">4 guests</option>
                            <option value="5">5 guests</option>
                            <option value="6">6 guests</option>
                  </Form.Select>
                  <br />
                  <label>Select slot</label>
                  <Form.Select value={slot} onChange={handleslot}> 
                            <option value="6:00 PM" selected> 6:00 PM</option>
                            <option value="6:30 PM"> 6:30 PM</option>
                            <option value="7:00 PM"> 7:00 PM</option>
                            <option value="7:30 PM"> 7:30 PM</option>
                            <option value="8:00 PM"> 8:00 PM</option>
                            <option value="8:30 PM"> 8:30 PM</option>
                            <option value="9:00 PM"> 9:00 PM</option>
                  </Form.Select>

                </Form>
                    </Card.Body>
                  </Card>
                  <br />
                  <hr />
                  <p>
                   Price for {details.guest} Person:{" "}
                    <span className="float-end" style={{ fontWeight: "bold" }}>
                      <FontAwesomeIcon icon={faIndianRupeeSign} />{" "}
                      {details.price}
                    </span>
                  </p> 
                  <p>
                   Person:{" "}
                    <span className="float-end" style={{ fontWeight: "bold" }}>
                      {guest}
                    </span>
                  </p> 
                  <p>
                   Slot:{" "}
                    <span className="float-end" style={{ fontWeight: "bold" }}>
                      {slot}
                    </span>
                  </p> 
                  <hr />
                  <p>
                    Total Payable Amount:{" "}
                    <span className="float-end" style={{ fontWeight: "bold" }}>
                      <FontAwesomeIcon icon={faIndianRupeeSign} />{" "}
                      {(details.price/details.guest)*guest}
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