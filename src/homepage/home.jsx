import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect,useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function Home(){ 
    const [logout,setLogout]=useState(true);
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios
          .get("https://tripadvisor-api.onrender.com/dashboard", { withCredentials: true })
          .then((res) => {
            if (logout) {
              setName(res.data.name);
              setEmail(res.data.email); 
            }
            else {
            console.log(res.data);
            navigate("/");
          }
        }).catch((err) => console.log(err));
        // eslint-disable-next-line
      }, [logout]); 
    return (
        <>
            <header id="home">
        <nav className="navbar bg-secondary bg-gradient"> 
          
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
            <div className="paste-button">
              <button className="butt">
                <i className="bi bi-person-circle"></i>
                <span className="m-2 p-2">{name} &nbsp; ▼</span></button>
            <div className="dropdown-content">
               <div id="top"  >{email}</div>
               <a href="/home/bookings"><div id="middle">My Bookings</div></a>
               <div id="bottom" onClick={()=>setLogout(false)}>Log Out</div>
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