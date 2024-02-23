import { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
export default function Restaurants(){
    const [title, setTitle] = useState();
    const [img, setImg] = useState();
    const [key, setKey] = useState();
    const [location, setLocation] = useState();
    const [rating, setRating] = useState();
    const [price, setPrice] = useState(); 
    const [offer, setOffer] = useState();
    const [imgarr, setImgarr] = useState([]);
    const [map, setMap] = useState([]);
    const [loading, setLoading] = useState(false);
   
    const [imgurl, setImgurl] = useState();
    const [remove, setRemove] = useState();
  
      const handleImg = (e) => {
      e.preventDefault();
      setImgarr([...imgarr, imgurl]);
    };
    
    const handleSubmit = (e) => {
      setLoading(true);
      e.preventDefault();
      axios.post("https://tripadvisor-api.onrender.com/addRestaurent", {
        img,
        title,        
        location,
        key,
        rating,
        price, 
        offer, 
        imgarr,
        map
      })
      .then((res)=>{
        alert('Restaurent added Successfully');
        setLoading(false);
      })
      .catch((err)=>console.log(err));
    };
  const handleRemove=(e)=>{
    e.preventDefault();
    axios.post('https://tripadvisor-api.onrender.com/removeRestaurent',{remove})
    .then((res)=>alert('Restaurent Deleted'))
    .catch((err)=>console.log(err));
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
            <h1 className='fs-1 mt-3 ms-4'>RESTAURENTS</h1>
            <h2 className='ms-3 mt-4'>Add Restaurant:</h2>
            <Form className='border border-secondary rounded ms-3 p-3 mb-3'> 
            <Row>
            <Col md={5}>
                <Form.Group controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" onChange={(e)=>setTitle(e.target.value)}/>
                </Form.Group>       
                <Form.Group controlId="formPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="Enter price"  onChange={(e)=>setPrice(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formOffer">
                    <Form.Label>Offer</Form.Label>
                    <Form.Control type="text" placeholder="Enter Offer"  onChange={(e)=>setOffer(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formKey">
                    <Form.Label>Key for Search</Form.Label>
                    <Form.Control type="text" placeholder="Enter key for Search"  onChange={(e)=>setKey(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formAmenites">
                    <Form.Label>Restaurant Images:(Count:{imgarr.length})</Form.Label>
                    <InputGroup className='me-5 w-100'> 
                     <Form.Control type="text"  placeholder="Enter the url of the images"  onChange={(e)=>setImgurl(e.target.value)}/>
                     <button className='bt' onClick={handleImg}>add</button>  
                    </InputGroup>  
                </Form.Group>
                </Col>
                <Col md={1}>
                </Col>
                <Col md={5}>
                <Form.Group controlId="formLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Enter location"  onChange={(e)=>setLocation(e.target.value)}/>
                </Form.Group>                    
                <Form.Group controlId="formRating">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="text" placeholder="Enter rating"  onChange={(e)=>setRating(e.target.value)}/>
                </Form.Group> 
                <Form.Group controlId="formImage">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text" placeholder="Enter image URL"  onChange={(e)=>setImg(e.target.value)}/>
                </Form.Group> 
                <Form.Group controlId="formDirections">
                    <Form.Label>Directions</Form.Label>
                    <Form.Control type="text"  placeholder="Enter the map url"  onChange={(e)=>setMap(e.target.value)}/>  
                </Form.Group> 
                </Col>
            </Row>                
 
             <div className="w-100 mt-4 d-flex justify-content-center">
                <Button variant="primary" className='me-5 w-25' type="submit" onClick={handleSubmit}>
                    Add Restaurant
                </Button>
             </div>
                
            </Form> 

            <h2 className='ms-3 mt-4'>Remove Restaurant:</h2>
            <Form className='border border-secondary rounded ms-3 p-3 mb-4'>
            <Form.Group controlId="formTitle">
                    <Form.Label>Name of the Restaurant:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name of the Restaurent to remove" onChange={(e)=>setRemove(e.target.value)}/>
                </Form.Group>  

                <div className="w-100 mt-4 d-flex justify-content-center">
                <Button variant="primary" className='me-5' type="submit"  onClick={handleRemove}>
                    Remove Restaurant
                </Button>
             </div>
            </Form>
        </Container>
    );
  }
}