import { Col, Row } from "react-bootstrap";

export default function Galry(props){
    const {images}=props;
    return (
        <>
        
         <Row>
            <Col md={4}><img height="300px" src={images[0]} alt="ooty"/></Col>
            <Col md={4}><img height="300px" src={images[1]} alt="ooty"/></Col>
            <Col md={4}><img height="300px" src={images[2]} alt="ooty"/></Col>
         </Row><br/>
         <Row>
            <Col md={4}><img height="300px" src={images[3]} alt="ooty"/></Col>
            <Col md={4}><img height="300px" src={images[4]} alt="ooty"/></Col>
            <Col md={4}><img height="300px" src={images[5]} alt="ooty"/></Col>
         </Row><br/>
         <Row>
            <Col md={4}><img height="300px"src={images[6]} alt="ooty"/></Col>
            <Col md={4}><img height="300px"src={images[7]} alt="ooty"/></Col>
            <Col md={4}><img height="300px" src={images[8]} alt="ooty"/></Col>
         </Row><br/>
        
        </>
    );
}