import { Container } from "react-bootstrap";
import Data from "./hoteldetail.json";
import Hotel from "./hotel"; 
const details=Data; 
export default function Hotels() {
  return (
    <>
    <Container>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <div>
              <h2 className="tle">
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
          <div className="nav-icons"></div>
        </div>
      </nav>
      <h1 className="title" style={{fontSize:"2.4rem",letterSpacing:"0.2rem"}}>Hotels</h1>
      {
        details.map(detail=>{
            return (
                <>
                <Hotel details={detail} />
                </>
            );
        })
      } 
      
    </Container>
    <footer className="section footer mt-2">
        <p className="copyright">
        &copy;<span id="date"></span>. all rights reserved
        </p>
        </footer>
    </>
  );
}

