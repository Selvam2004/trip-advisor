import { Row ,Col} from "react-bootstrap";
export default function Places(props){
    const {content}=props;
    return (
        <>
        <h3 className="mb-3 mt-3 ">{content.place}</h3>
            <Row>
              <Col md={3}>
              <img className="plcimg" src={content.imagesrc} alt={content.place}/>
              </Col>
              <Col md={6}>
           <h5 style={{textIndent:"50px"}} className="pcnt m-3"> 
           {content.discription}
           <br/> <br/><br/>
           <b>Time:</b> {content.time}<br/>
            <b>Entry Fee:</b>{content.fee}
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