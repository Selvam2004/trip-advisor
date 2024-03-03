import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "../css/App.css";
import Places from "./places";
import Hospitality from "./hospitality"; 
import Galry from "./glry";
import Abt from "./abt";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../loader";
import axios from "axios";
export default function Tour() {
  let { id } = useParams();
  console.log(id);
  const key = id; 
  const [loading,setLoading]=useState(true);
  const [head, setHead] = useState([]);
  const [content, setContent] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [images, setImages] = useState([]);
  const [about, setAbout] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://tripadvisor-api.onrender.com/TourDetails/${key}`
        );
  
        setHead(response.data.head);
        setContent(response.data.content);
        setHospitals(response.data.hospitality);
        setImages(response.data.images);
        setAbout(response.data.about);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [key]); 
   
if(loading){
  return (
     <Loader/>
  );
}
else{
  return (
    <>
      <Container>
        <nav className="navbar  bg-success bg-gradient">
          <div className="nav-center">
            <div className="nav-header">
              <div>
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
            <div className="nav-icons"></div>
          </div>
        </nav>
        <div className="head">
          <img className="imge" alt={head[0]} src={head[2]} />
          <h2 className="title headcnt">
            {head[0]}
            <span className="subtitle ">{head[1]}</span>
          </h2>
        </div>
        <Tabs
          className="mt-4"
          style={{ justifyContent: "center" }}
          defaultActiveKey="first"
        >
          <Tab eventKey="first" title="Things to do">
            {content.map((ctnt, i) => {
              return <Places key={i} content={ctnt} />;
            })}
          </Tab>

          <Tab eventKey="second" title="Hospitality">
            {hospitals.map((ctnt, i) => {
              return <Hospitality key={i} content={ctnt} />;
            })}
          </Tab>
          <Tab eventKey="third" title="Gallery">
            <Galry images={images} title={head[0]} />
          </Tab>
          <Tab eventKey="fourth" title="About">
            <Abt data={about} />
          </Tab>
        </Tabs>
      </Container>
      <footer className="section footer">
        <p className="copyright">
          &copy;<span id="date"></span>. all rights reserved
        </p>
      </footer>
    </>
  );
}
  
}