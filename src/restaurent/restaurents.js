import { Container } from "react-bootstrap";
import Data from "./restaurentdetail.json";
import Restaurent from "./restaurent";
import { useState } from "react";
const detail = Data;
export default function Resturents() {
  const [details, setDetails] = useState(detail);
  function handleClick() {
    const search = document.getElementById("hotelsearch").value;
    const sorted = detail.filter((detail) => detail.key === search);

    setDetails(sorted);
  }
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
        <h1 className="title" style={{ fontSize: "2.3rem" }}>
          Restaurents
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
        {details.map((detail) => {
          return (
            <>
              <Restaurent details={detail} />
            </>
          );
        })}
      </Container>
      <footer className="section footer">
        <p className="copyright">
          &copy;<span id="date"></span>. all rights reserved
        </p>
      </footer>
    </>
  );
}
