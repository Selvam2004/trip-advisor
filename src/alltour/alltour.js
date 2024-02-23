import { Card, Col, Container, Row } from "react-bootstrap"; 
import { useEffect, useState } from "react";
import axios from 'axios'; 
 
 
export default function AllTour(){
  const [details, setDetails] = useState([]);
  const [detail, setDetail] = useState([]);
 
  useEffect(()=>{
      axios.get('https://tripadvisor-api.onrender.com/alltours')
      .then((tours)=>{
        setDetails(tours.data);
        setDetail(tours.data);
      })
      .catch((err)=>console.log(err));
  },[]); 
  function handleClick() {
    const search = document.getElementById("hotelsearch").value;
    const sorted = detail.filter((detail) => detail.key === search);
    setDetails(sorted);
  }
    return (
        <Container> 
        
        <nav className="navbar">

          <div className="nav-center">
            <div className="nav-header">
            <div >
              <h2 className="tle ">
            trip <span className="subtitle">advisor</span>
          </h2> 
            </div>
            </div>
            <div className="nav-links" id="nav-links">
              <a href="/home#home" className="scroll-link nav-link">
                home
              </a>
              <a href="/home#about" className=" scroll-link nav-link">
                about
              </a>
              <a href="/home#services" className="nav-link scroll-link">
                services
              </a>
              <a href="/home#featured" className="nav-link scroll-link">
                featured
              </a>
              <a href="/home#gallery" className="nav-link scroll-link">
                gallery
              </a>
               
            </div>
            <div className="nav-icons"> 
             
            </div>
          </div>
        </nav>
        <h2 className="p-3 text-center  " style={{marginLeft:"170px",marginRight:"170px",fontSize:"2.6rem",letterSpacing:"0.4rem"}}>All <span className="subtitle">Tours</span></h2>
        <div className="input-group mb-3">
            <input
              type="text"
              className="form-control border-success"
              placeholder="Enter place name to search"
              id="hotelsearch" 
            />
            <button
              className="btn btn-success"
              type="button"
              onClick={handleClick}
            >
              Search
            </button>
        </div>
        <Row sm={1} xs={1} md={3} className="g-4">
      {details.map((dtl,i) => (
        <Col key={i}>
          <Card className="tour-card" >
            <a href={"/home/tour/"+dtl.key}><Card.Img variant="top" className="tour-img" src={dtl.imgsrc} /></a>
            <Card.Body>
              <Card.Title>{dtl.head[0]+dtl.head[1]}</Card.Title>
              <Card.Text>
                <span className="tour-info tour-country">
                {dtl.location}
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
       </Row>
         </Container>
    );
}