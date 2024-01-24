import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "../App.css";
import Places from "./places";
import Hospitality from "./hospitality";
import Data from "./data.json";
import Galry from "./glry";
import Abt from "./abt";

export default function First(props) {
  const { id } = props;
  const head = Data[id].head;
  const content = Data[id].content;
  const hospitals = Data[id].hospitality;
  const images = Data[id].images;
  const about = Data[id].about;

  return (
    <>
      <Container>
        <nav className="navbar">
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
            {content.map((ctnt) => {
              return <Places content={ctnt} />;
            })}
          </Tab>

          <Tab eventKey="second" title="Hospitality">
            {hospitals.map((ctnt) => {
              return <Hospitality content={ctnt} />;
            })}
          </Tab>
          <Tab eventKey="third" title="Gallery">
            <Galry images={images} />
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
