import { Row ,Col} from "react-bootstrap";
export default function Hospitality(props){
    const {content}=props;
    return (
        <>
        <h3 className="mb-3 mt-3 ">{content.place}</h3>
            <Row>
              <Col md={3}>
              <img className="plcimg" src={content.imagesrc} alt={content.place}/>
              </Col>
              <Col md={6}>
           <h5   className="pcnt m-3"> 
            <b>Address:</b>{content.address}<br/>
            <b>Opening:</b>{content.opening}<br/>
            <b>Contact:</b>{content.number}
            </h5> 
              </Col>
              <Col md={3}>
              <h4>Location:</h4>
            <iframe title={content.place} src={content.mapLink} width="300" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </Col>
            </Row><hr/>
        </>
    );
}