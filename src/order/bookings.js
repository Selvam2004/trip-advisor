import axios from "axios";
import { useEffect, useState } from "react";
import Details from "./details"; 
import Loader from '../loader';
export default function Bookings(){
    const [details,setDetails] = useState([]);
    const [detail,setDetail] = useState([]);
    const [loading,setLoading] = useState(true);
    const [hotel,setHotel] = useState(true);
    const [restaurent,setRestaurent] = useState(true);
    useEffect(()=>{ 
        const data1 =  detail.filter((data)=>!data.hasOwnProperty("rooms"));//restaurent
        const data2 =  detail.filter((data)=>!data.hasOwnProperty("slot"));//hotel
        if(restaurent&&hotel){
           setDetails(detail);
        }
        else if(restaurent){
            setDetails(data1);
        }
        else if(hotel){
            setDetails(data2);
        }
        else{
           setDetails([]);
        }
    },[hotel,restaurent,detail])

 
    useEffect(()=>{
       axios.get("https://tripadvisor-api.onrender.com/getOrders")
       .then((res)=>{
        setDetails(res.data);
        setDetail(res.data);
        setLoading(false);
       }).catch((err)=>console.log(err));
    },[]);
    return (
        <>
        <nav className="navbar bg-secondary bg-gradient">
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
 

             </div> 
          </div>
        </nav>
        
        <h1 className="title" style={{ fontSize: "2.3rem" }}>
          My Bookings
        </h1>
        <div className="ms-5 ps-5">
        <button className="p-2 ms-5 pe-3 ps-3 me-2 rounded-4 " style={{backgroundColor:hotel?"#3fd0d4":"transparent",color:hotel?"white":"black"}} onClick={e=>setHotel(!hotel)}>   Hotels  </button>
        <button className="p-2 pe-3 ps-3 me-2 rounded-4 " style={{backgroundColor:restaurent?"#3fd0d4":"transparent",color:restaurent?"white":"black"}} onClick={e=>setRestaurent(!restaurent)}>   Restaurent </button>
       </div>
       <div style={{minHeight:"20rem"}}>
        {loading?  <Loader/>:  details.map((detail,i) => {
          return (
            <>
              <Details key={i} details={detail} />
            </>
          );
        })}</div>
        <footer className="section footer mt-3">
          <p className="copyright">
          &copy;<span id="date"></span>. all rights reserved
          </p>
          </footer>
     
        </>
    );
}