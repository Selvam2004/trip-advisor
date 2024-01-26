import { Card, Col, Container, Row } from "react-bootstrap";
import Data from "./tourdetails.json";
import { useState } from "react";
const detail=Data;
 

export default function AllTour(){
  const [details, setDetails] = useState(detail);
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
        <h2 className="p-3 text-center" style={{marginLeft:"170px",marginRight:"170px",fontSize:"2.6rem",letterSpacing:"0.4rem"}}>All <span className="subtitle">Tours</span></h2>
        <h3 className="text-center mb-5">
          <input
            className="searchinput"
            type="text"
            placeholder="Enter place name to search"
            id="hotelsearch"
          />
          <button className="searchbtn" onClick={handleClick} >
            search
          </button>
        </h3>
        <Row xs={1} md={3} className="g-4">
      {details.map((dtl) => (
        <Col>
          <Card className="tour-card">
            <a href={dtl.link}><Card.Img variant="top" className="tour-img" src={dtl.src} /></a>
            <Card.Body>
              <Card.Title>{dtl.name}</Card.Title>
              <Card.Text>
                <div className="tour-info tour-country">
                {dtl.location}
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    {/* <div className="section-center featured-center ">
    
          <article className="tour-card">
            <a href="Ooty.html">
              <div className="tour-img-container">
                <a href="/ooty"><img
                  src={require("../images/ooty.jpg")}
                  className="tour-img"
                  alt=""
                /></a>
              </div>
            </a>
            <div className="tour-footer">
              <h4 className="tour-title">Ooty - Queen Of Hills</h4>
              <div className="tour-info">
                <p className="tour-country">
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  Coimbatore,Tamil Nadu.
                </p>
              </div>
            </div>
          </article>
          <article className="tour-card">
            <a href="/valparai">
              <div className="tour-img-container">
                <img
                  src= "https://live.staticflickr.com/643/22146922258_4909743b45_b.jpg"
                  className="tour-img"
                  alt=""
                />
              </div>
            </a>
            <div className="tour-footer">
              <h4 className="tour-title">Valparai-Seventh Heaven</h4>
              <div className="tour-info">
                <p className="tour-country">
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  Coimbatore,Tamil Nadu.
                </p>
              </div>
            </div>
          </article>
          <article className="tour-card">
            <a href="valparai.html">
              <div className="tour-img-container">
                <img
                  src= "https://cdn.pixabay.com/photo/2017/09/01/13/07/kodaikanal-2704177_640.jpg"
                  className="tour-img"
                  alt=""
                />
              </div>
            </a>
            <div className="tour-footer">
              <h4 className="tour-title">Kodaikanal</h4>
              <div className="tour-info">
                <p className="tour-country">
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  Dindigul,Tamil Nadu.
                </p>
              </div>
            </div>
          </article>

        </div>
    <div className="section-center featured-center ">
          <article className="tour-card">
            <a href="Ooty.html">
              <div className="tour-img-container">
                <a href="/ooty"><img
                  src={require("../images/ooty.jpg")}
                  className="tour-img"
                  alt=""
                /></a>
              </div>
            </a>
            <div className="tour-footer">
              <h4 className="tour-title">Ooty - Queen Of Hills</h4>
              <div className="tour-info">
                <p className="tour-country">
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  Coimbatore,Tamil Nadu.
                </p>
              </div>
            </div>
          </article>
          <article className="tour-card">
            <a href="/valparai">
              <div className="tour-img-container">
                <img
                  src= "https://live.staticflickr.com/643/22146922258_4909743b45_b.jpg"
                  className="tour-img"
                  alt=""
                />
              </div>
            </a>
            <div className="tour-footer">
              <h4 className="tour-title">Valparai-Seventh Heaven</h4>
              <div className="tour-info">
                <p className="tour-country">
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  Coimbatore,Tamil Nadu.
                </p>
              </div>
            </div>
          </article>
          <article className="tour-card">
            <a href="valparai.html">
              <div className="tour-img-container">
                <img
                  src= "https://cdn.pixabay.com/photo/2017/09/01/13/07/kodaikanal-2704177_640.jpg"
                  className="tour-img"
                  alt=""
                />
              </div>
            </a>
            <div className="tour-footer">
              <h4 className="tour-title">Kodaikanal</h4>
              <div className="tour-info">
                <p className="tour-country">
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  Dindigul,Tamil Nadu.
                </p>
              </div>
            </div>
          </article>

        </div>
    <div className="section-center featured-center ">
          <article className="tour-card">
            <a href="Ooty.html">
              <div className="tour-img-container">
                <a href="/ooty"><img
                  src={require("../images/ooty.jpg")}
                  className="tour-img"
                  alt=""
                /></a>
              </div>
            </a>
            <div className="tour-footer">
              <h4 className="tour-title">Ooty - Queen Of Hills</h4>
              <div className="tour-info">
                <p className="tour-country">
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  Coimbatore,Tamil Nadu.
                </p>
              </div>
            </div>
          </article>
          <article className="tour-card">
            <a href="/valparai">
              <div className="tour-img-container">
                <img
                  src= "https://live.staticflickr.com/643/22146922258_4909743b45_b.jpg"
                  className="tour-img"
                  alt=""
                />
              </div>
            </a>
            <div className="tour-footer">
              <h4 className="tour-title">Valparai-Seventh Heaven</h4>
              <div className="tour-info">
                <p className="tour-country">
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  Coimbatore,Tamil Nadu.
                </p>
              </div>
            </div>
          </article>
          <article className="tour-card">
            <a href="valparai.html">
              <div className="tour-img-container">
                <img
                  src= "https://cdn.pixabay.com/photo/2017/09/01/13/07/kodaikanal-2704177_640.jpg"
                  className="tour-img"
                  alt=""
                />
              </div>
            </a>
            <div className="tour-footer">
              <h4 className="tour-title">Kodaikanal</h4>
              <div className="tour-info">
                <p className="tour-country">
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  Dindigul,Tamil Nadu.
                </p>
              </div>
            </div>
          </article>

        </div> */}


        </Container>
    );
}