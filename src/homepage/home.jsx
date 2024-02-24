import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect,useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function Home(){
    const [logOut,setLogOut]=useState(true);
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios
          .get("https://tripadvisor-api.onrender.com/dashboard", { withCredentials: true })
          .then((res) => {
            if (logOut) {
              setName(res.data.name);
              setEmail(res.data.email); 
            }
            else {
            console.log(res.data);
            navigate("/");
          }
        }).catch((err) => console.log(err));
        // eslint-disable-next-line
      }, [logOut]); 
    return (
        <>
            <header id="home">
        <nav className="navbar bg-secondary"> 
          
          <div className="nav-center">
            <div >
              <h2 className="tle ">
            trip <span className="subtitle">advisor</span>
          </h2> 
            </div>
            <div className="nav-links" id="nav-links">
              <a href="#home" className="scroll-link nav-link">
                home
              </a>
              <a href="#about" className=" scroll-link nav-link">
                about
              </a>
              <a href="#services" className="nav-link scroll-link">
                services
              </a>
              <a href="#featured" className="nav-link scroll-link">
                featured
              </a>
              <a href="#gallery" className="nav-link scroll-link">
                gallery
              </a>
               
            </div>
            <div className="nav-icons">
            <div class="paste-button">
              <button class="butt">
                <i className="bi bi-person-circle"></i>
                <span className="m-2 p-2">{name} &nbsp; ▼</span></button>
            <div class="dropdown-content">
               <a id="top" href="/home">{email}</a>
               <a id="middle" href="/home">My Bookings</a>
               <div id="bottom" onClick={setLogOut(false)}>Log Out</div>
            </div>
            </div>

             </div>

          </div>
        </nav>
        <div className="hero">
          
          <div className="hero-banner">
            
            <h1 className="hero-title">continue exploring</h1>
            <p className="hero-text">
              Where the journey begins! To the world of an incredible vacation.
              We make dreams come true!
            </p>
            
            <a href="#featured" className="btn btn-white scroll-link">
              explore tours
            </a>
            
          </div>
          
        </div>
      </header>
        </>
    );
}