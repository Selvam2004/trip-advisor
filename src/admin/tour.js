import { Container, Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Tours(){

    const [placename, setPlacename] = useState();
    const [sub, setSub] = useState();
    const [img, setImg] = useState();
    const [head, setHead] = useState([placename,sub,img]);
    const [imgsrc, setImgsrc] = useState();
    const [key, setKey] = useState();
    const [location, setLocation] = useState();
    const [loading, setLoading] = useState(false);

    const [place, setPlace] = useState();
    const [place2, setPlace2] = useState();
    const [imagesrc, setImagesrc] = useState();    
    const [imagesrc2, setImagesrc2] = useState();    
    const [address, setAddress] = useState();
    const [fee, setFee] = useState();
    const [discription, setDiscription] = useState();
    const [time, setTime] = useState();
    
    const [content, setContent] = useState([]);
    const [hospitality, setHospitality] = useState([]);  
    const [opening, setOpening] = useState();
    const [number, setNumber] = useState();
    const [mapLink, setMaplink] = useState();
    const [mapLink2, setMaplink2] = useState();
   
    const [imgurl, setImgurl] = useState();
    const [images, setImages] = useState([]);
    
    const [aboutimg, setAboutimg] = useState();
    const [aboutdes, setAboutdes] = useState();
    const [about, setAbout] = useState([aboutimg,aboutdes]);

    const [remove, setRemove] = useState();
   useEffect(()=>{
    setHead([placename,sub,img]);
   },[placename,sub,img]);
   useEffect(()=>{
    setAbout([aboutimg,aboutdes]);
   },[aboutimg,aboutdes]);

    const handleImg = (e) => {
      e.preventDefault();
      setImages([...images, imgurl]);
    };
    
    const handleSubmit = (e) => {
        setLoading(true);
      e.preventDefault(); 
        axios.post("https://tripadvisor-api.onrender.com/addTourDetails", {head,imgsrc,key,location,content,hospitality,images,about})
        .then((res)=>{
            alert('Tourist Place Added succesfully');
            setLoading(false);
        })
        .catch((err)=>console.log(err));
      
    };
  const handleRemove=(e)=>{
    e.preventDefault();
    axios.post('https://tripadvisor-api.onrender.com/removeTour',{remove})
    .then((res)=>alert('Tourist Place Deleted'))
    .catch((err)=>consolelog(err));
  }

  const handlehospital=(e)=>{
    e.preventDefault();
    setHospitality([...hospitality,{
        place:place,
        imagesrc:imagesrc,
        address:address,
        opening:opening,
        number:number,
        mapLink:mapLink
    }]);
  }

  const handleContent=(e)=>{
    e.preventDefault();
    setContent([...content,{
        place:place2,
        imagesrc:imagesrc2,
        discription:discription,
        time:time,
        fee:fee,
        mapLink:mapLink2
    }]);
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
            <h1 className='fs-1 mt-3 ms-4'>Tours</h1>
            <h2 className='ms-3 mt-4'>Add Tourist Place:</h2>
            <Form className='border border-secondary rounded ms-3 p-3 mb-3'> 
            <Row>
            <Col md={5}>
                <Form.Group controlId="formTitle">
                    <Form.Label>Place Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Place name" onChange={(e)=>setPlacename(e.target.value)}/>
                </Form.Group>       
                <Form.Group controlId="formPrice">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Enter Location"  onChange={(e)=>setLocation(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formKey">
                    <Form.Label>Key for Search</Form.Label>
                    <Form.Control type="text" placeholder="Enter key for Search"  onChange={(e)=>setKey(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formAbout">
                    <Form.Label>About</Form.Label>
                    <Form.Control type="text" className='mb-3' placeholder="Enter image url" onChange={(e)=>setAboutimg(e.target.value)}/>  
                </Form.Group><hr/>
                <div>
                <h4>Hospitals:(count:{hospitality.length})</h4>
                <Form.Group controlId="formOffer">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Hospital Name"   onChange={(e)=>setPlace(e.target.value)}/>
                </Form.Group> 
                <Form.Group controlId="formOffer">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text" placeholder="Enter image url"  onChange={(e)=>setImagesrc(e.target.value)}/>
                </Form.Group> 
                <Form.Group >
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter Hospital Address "  onChange={(e)=>setAddress(e.target.value)}/>
                </Form.Group> 
                <Form.Group controlId="formOffer">
                    <Form.Label>Opening</Form.Label>
                    <Form.Control type="text" placeholder="Enter Hospital timing"  onChange={(e)=>setOpening(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formOffer">
                    <Form.Label>Contact</Form.Label>
                    <Form.Control type="text" placeholder="Enter Hospital contact number"  onChange={(e)=>setNumber(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formOffer">
                    <Form.Label>Directions</Form.Label>
                    <Form.Control type="text" placeholder="Enter map url"  onChange={(e)=>setMaplink(e.target.value)}/>
                </Form.Group>
                <div className=' text-center' onClick={handlehospital}>
                <Button className='mt-3 '>ADD</Button>     
                </div>
               
                </div>
                </Col>
                <Col md={1}>
                </Col>
                <Col md={5}>
                <Form.Group controlId="formLocation">
                    <Form.Label>Sub Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Sub Title" onChange={(e)=>setSub(e.target.value)}/>
                </Form.Group>  
                <Form.Group controlId="formImage">
                    <Form.Label>Card Image</Form.Label>
                    <Form.Control type="text" placeholder="Enter image URL" onChange={(e)=>setImgsrc(e.target.value)}/>
                </Form.Group>    
                <Form.Group controlId="formImage">
                    <Form.Label>Title Image</Form.Label>
                    <Form.Control type="text" placeholder="Enter image URL" onChange={(e)=>setImg(e.target.value)}/>
                </Form.Group>    
                <Form.Group controlId="formDirections">
                    <Form.Label>Gallery(Count:{images.length})</Form.Label>
                    <InputGroup className='me-5 w-100'> 
                     <Form.Control type="text"  placeholder="Enter the url of the images" onChange={(e)=>setImgurl(e.target.value)}/>
                     <button className='bt' onClick={handleImg}>add</button>  
                    </InputGroup>                   
                </Form.Group>
                <Form.Group controlId="formAbout">
                    <Form.Label>About Description</Form.Label>
                    <Form.Control type="text" className='mb-3' placeholder="Enter Description" onChange={(e)=>setAboutdes(e.target.value)}/>  
                </Form.Group> <hr/>
                <div>
                <h4>Place to visit:(count:{content.length})</h4>
                <Form.Group controlId="formOffer">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Place Name" onChange={(e)=>setPlace2(e.target.value)}/>
                </Form.Group> 
                <Form.Group controlId="formOffer">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text" placeholder="Enter image url" onChange={(e)=>setImagesrc2(e.target.value)}/>
                </Form.Group> 
                <Form.Group >
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter Place Description" onChange={(e)=>setDiscription(e.target.value)}/>
                </Form.Group> 
                <Form.Group controlId="formOffer">
                    <Form.Label>Timing</Form.Label>
                    <Form.Control type="text" placeholder="Enter time for visiting" onChange={(e)=>setTime(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formOffer">
                    <Form.Label>Entry Fee</Form.Label>
                    <Form.Control type="text" placeholder="Enter entry fee for the place" onChange={(e)=>setFee(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formOffer">
                    <Form.Label>Directions</Form.Label>
                    <Form.Control type="text" placeholder="Enter map url" onChange={(e)=>setMaplink2(e.target.value)}/>
                </Form.Group>
                <div className=' text-center'>
                <Button className='mt-3 ' onClick={handleContent}>ADD</Button>     
                </div>
               
                </div>
                </Col>
            </Row>   
             <div className="w-100 mt-4 d-flex justify-content-center">
                <Button variant="primary" className='me-5 w-25' type="submit" onClick={handleSubmit}>
                    Add Place
                </Button>
             </div>
                
            </Form> 

            <h2 className='ms-3 mt-4'>Remove Tourist Place:</h2>
            <Form className='border border-secondary rounded ms-3 p-3 mb-4'>
            <Form.Group controlId="formTitle">
                    <Form.Label>Name of the Place:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name of the tourist place to remove" onChange={(e)=>setRemove(e.target.value)}/>
                </Form.Group>  

                <div className="w-100 mt-4 d-flex justify-content-center">
                <Button variant="primary" className='me-5' type="submit" onClick={handleRemove}>
                    Remove place
                </Button>
             </div>
            </Form>
        </Container>
    ); 
  }

}