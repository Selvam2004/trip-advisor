import { Container } from "react-bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css";
import Hotel from "./hotel";
import { useState ,useEffect} from "react";
import axios from 'axios';
import Loader from "../loader";
 
export default function Hotels() {
  const [details, setDetails] = useState([]);
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
   axios.get('https://tripadvisor-api.onrender.com/Hotels')
   .then((response)=>{
    setDetails(response.data);
    setDetail(response.data);
    setLoading(false);
   })
   .catch((err)=>console.log(err));
  },[])
  function handleClick() {
    const search = document.getElementById("hotelsearch").value;
    const sorted = detail.filter((detail) => detail.key === search);

    setDetails(sorted);
  }
  return (
    <>
      <Container>
        <nav className="navbar  bg-secondary bg-gradient">
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
            <div className="nav-icons">
            <div className="paste-button">
              <a href="/home/booking"><button className="butt">
                <i className="bi bi-person-circle"></i>
                <span className="m-2 p-2">My Bookings &nbsp; </span>
              </button></a>
 
            </div>

             </div> 
          </div>
          
        </nav>
        <h1
          className="title"
          style={{ fontSize: "2.4rem", letterSpacing: "0.2rem" }}
        >
          Hotels
        </h1> 
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
          {loading?  <Loader/>:  details.map((detail,i) => {
          return (
            <>
              <Hotel key={i} details={detail} />
            </>
          );
        })}
      </Container>
      <footer className="section footer mt-2">
        <p className="copyright">
          &copy;<span id="date"></span>. all rights reserved
        </p>
      </footer>
    </>
  );
}