import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import { 
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons"; 
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faStar } from "@fortawesome/free-solid-svg-icons";
import {  faFontAwesome } from "@fortawesome/free-brands-svg-icons";


library.add(
  fas, 
  faFontAwesome,
  faStar, 
  faIndianRupeeSign
);
export default function Details(props){
    const { details } = props; 
return (
    <Container>
          <Card className="m-3 mb-4 mt-4">
        <Row>
          <Col md={4}>
            <Card.Img src={details.url} style={{ height: "100%",maxHeight:"17rem" }} />
          </Col>
          <Col md={8}>
            <Card.Body>
                <div className="d-inline pt-2 float-start">
              <h2 style={{ fontSize: "2rem", letterSpacing: "0.2rem" }}>
                {details.placeName}
              </h2>
              <p style={{ letterSpacing: "0.2rem" }}>{details.location}</p></div>
              <Card.Subtitle
                className="me-5 mt-3 text-muted float-end"
                style={{ letterSpacing: "0.2rem" }}
              >
                Rating:
                <Badge bg="bsPrefix" style={{ backgroundColor: "gold" }}>
                  {details.rating}
                  <FontAwesomeIcon icon="fa-solid fa-star" />
                </Badge>{" "}
              </Card.Subtitle>
              <div className="clearfix"></div>
              
              <h3 style={{ fontSize: "1.2rem" }}>
                Amount: <FontAwesomeIcon icon={faIndianRupeeSign} /> {details.price}{" "}
                &nbsp; &nbsp;&nbsp;&nbsp;  
                Total Guest :{details.guest} &nbsp; &nbsp;&nbsp;&nbsp;
                {details.slot?`Slot : ${details.slot}`:`Rooms : ${details.rooms}`}
              </h3>
              <p><b className="fs-5 m-0"> Order Id: </b>{details._id} <br/><b className="fs-5 m-0"> Payment Status: </b> 
               <Badge bg="bsPrefix" style={{ backgroundColor: "blue" }}>
              {details.payment?"Paid":"Pending"} 
                </Badge>{" "}</p>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
);
}