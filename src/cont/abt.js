import { Row ,Col} from "react-bootstrap";

export default function Abt(props) {
  const {data}=props;
  return <>
  <Row className="mt-4 mb-4">
    <Col md={5}>
      <img alt="about" src={data[0]}/>
    </Col>
    <Col className="mt-5 ps-5" md={7}>
      <h5 style={{textIndent:"50px"}}>{data[1]}</h5>
    </Col>
  </Row>
  </>
}
