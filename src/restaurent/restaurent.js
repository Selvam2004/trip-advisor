import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge,  Card, Col, Row } from "react-bootstrap";
import {  faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons' 
import { library } from '@fortawesome/fontawesome-svg-core' 
import {  faFontAwesome } from '@fortawesome/free-brands-svg-icons' 

library.add( faFontAwesome,faIndianRupeeSign)

export default function Restaurent(props){
    const {details}=props
    return (
        <>
        <Card className="m-3 mb-4 mt-4">
        <Row>
          <Col md={4}>
            <Card.Img 
              src={details.img}
              style={{height:"14rem"}}
            />
          </Col>
          <Col md={8}>
            <Card.Body>
            <h2 style={{fontSize:"2rem",letterSpacing:"0.2rem"}}>{details.title}</h2>
             <p style={{letterSpacing:"0.3rem"}}>{details.location}</p>
             <Card.Subtitle className="mb-2 text-muted" style={{letterSpacing:"0.2rem"}}>Rating:<Badge bg="bsPrefix" style={{backgroundColor:"gold"}}>{details.rating}<FontAwesomeIcon icon="fa-solid fa-star" /></Badge> </Card.Subtitle>
             
             <p className="float-start  ">
              Cost for two <FontAwesomeIcon icon={faIndianRupeeSign} />  {details.price} &nbsp;approx <br/>
             <Badge bg="success">Free Reservation </Badge> {details.offer}
             </p>
             <div className="float-end"> 
             <a href={"/home/restaurent/"+details.title}><button className="btn p-3 mb-4 me-4 ms-3 btn-warning" style={{letterSpacing:"0.2rem"}}>Book a Table</button></a>
             </div>
             
            </Card.Body>
          </Col>
        </Row>
      </Card>
        </>
    );
}
