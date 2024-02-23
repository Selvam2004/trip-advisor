import { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
export default function Hotel() {
  const [title, setTitle] = useState();
  const [img, setImg] = useState();
  const [key, setKey] = useState();
  const [location, setLocation] = useState();
  const [rating, setRating] = useState();
  const [price, setPrice] = useState();
  const [originalprice, setOriginalprice] = useState();
  const [discount, setDiscount] = useState();
  const [imgarr, setImgarr] = useState([]);
  const [avail, setAvail] = useState([]);
  const [loading, setLoading] = useState(false);

  const [amurl, setAmurl] = useState();
  const [amdes, setAmdes] = useState();
  const [imgurl, setImgurl] = useState();
  const [remove, setRemove] = useState();

  const handleAmneties = (e) => {
    
    e.preventDefault();
    setAvail([
      ...avail,
      {
        icon: amurl,
        description: amdes,
      },
    ]);
  };
  const handleImg = (e) => {
    e.preventDefault();
    setImgarr([...imgarr, imgurl]);
  };
  
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    axios.post("https://tripadvisor-api.onrender.com/addHotel", {
      img,
      title,
      key,
      location,
      rating,
      price,
      originalprice,
      discount,
      avail,
      imgarr,
    })
    .then((res)=>{
      alert('Hotel added Successfully');
      setLoading(false);
    })
    .catch((err)=>console.log(err));
  };
const handleRemove=(e)=>{
  e.preventDefault();
  axios.post('https://tripadvisor-api.onrender.com/removeHotel',{remove})
  .then((res)=>alert('Hotel Deleted'))
  .catch((err)=>consolelog(err));
}
if(loading){
  return(
    <>
    <div className="page" >
      <div className="cnt">
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="h">loading</div>
      </div>
  </div>

    </>
  )
}
else{
  return (
    <Container>
      <h1 className="fs-1 mt-3 ms-4">HOTELS</h1>
      <h2 className="ms-3 mt-4">Add Hotel:</h2>
      <Form className="border border-secondary rounded ms-3 p-3 mb-3">
        <Row>
          <Col md={5}>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formOriginalPrice">
              <Form.Label>Original Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter original price"
                onChange={(e) => setOriginalprice(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formRating">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter rating"
                onChange={(e) => setRating(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formKey">
              <Form.Label>Key for Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter key for Search"
                onChange={(e) => setKey(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formAmenites">
              <Form.Label>Amenities:(Count:{avail.length})</Form.Label>
              <Form.Control
                type="text"
                className="mb-3"
                placeholder="Enter url"
                onChange={(e) => setAmurl(e.target.value)}
              />
              <Form.Control
                type="text"
                className="mb-3"
                placeholder="Enter Description"
                onChange={(e) => setAmdes(e.target.value)}
              />
              <div className="w-100 mt-4 d-flex justify-content-center">
                <Button
                  variant="primary"
                  className="me-5 w-25"
                  type="submit"
                  onClick={handleAmneties}
                >
                  Add
                </Button>
              </div>
            </Form.Group>
          </Col>
          <Col md={1}></Col>
          <Col md={5}>
            <Form.Group controlId="formLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter location"
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formDiscount">
              <Form.Label>Discount</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter discount"
                onChange={(e) => setDiscount(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image URL"
                onChange={(e) => setImg(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formAmenites">
              <Form.Label>Hotel Images:(Count:{imgarr.length})</Form.Label>
              <Form.Control
                type="text"
                className="mb-3"
                placeholder="Enter url"
                onChange={(e) => setImgurl(e.target.value)}
              />
              <div className="w-100 mt-4 d-flex justify-content-center">
                <Button
                  variant="primary"
                  className="me-5 w-25"
                  type="submit"
                  onClick={handleImg}
                >
                  Add
                </Button>
              </div>
            </Form.Group>
          </Col>
        </Row>

        <div className="w-100 mt-4 d-flex justify-content-center">
          <Button
            variant="primary"
            className="me-5 w-25"
            type="submit"
            onClick={handleSubmit}
          >
            Add Hotel
          </Button>
        </div>
      </Form>

      <h2 className="ms-3 mt-4">Remove Hotel:</h2>
      <Form className="border border-secondary rounded ms-3 p-3 mb-4">
        <Form.Group controlId="formTitle">
          <Form.Label>Name of the Hotel:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name of the Hotel to remove"
            onChange={(e)=>setRemove(e.target.value)}
          />
        </Form.Group>

        <div className="w-100 mt-4 d-flex justify-content-center">
          <Button variant="primary" className="me-5 w-25" type="submit" onClick={handleRemove}>
            Remove Hotel
          </Button>
        </div>
      </Form>
    </Container>
  );
}
}
