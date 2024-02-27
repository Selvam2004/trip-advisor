import axios from "axios";
import {  useEffect, useState } from "react";
import {  Col,  Nav,Row } from "react-bootstrap";
import { Outlet,useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "../css/admin.css";
import Loader from '../loader';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
export default function Dashboard() {
  const navigate = useNavigate();
  const [logOut,setLogOut]=useState(true);
  const [loading,setLoading]=useState(true);
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [activeKey, setActiveKey] = useState("/dashboard/main");
  useEffect(() => {
    axios
      .get("https://tripadvisor-api.onrender.com/dashboard", { withCredentials: true })
      .then((res) => {
        if (res.data.status === "success"&&logOut) {
          setName(res.data.name);
          setEmail(res.data.email);
          navigate(activeKey); 
          setLoading(false);
        } else {
          console.log(res.data);
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, [logOut]);
  const handleNavItemClick = (event, href) => { 
    event.preventDefault();

    navigate(href);
  };
  if(loading){
    return(
      <>
       <Loader/>
      </>
    )
  }
  else{
  return (
    <>
      <Row className="w-100">
        <Col
          md={2}
          className="bg-dark min-vh-100   col-auto d-flex justify-content-between flex-column "
        >
          <div className="position-fixed">
            <div className="align-itemcenter text-white d-none d-sm-inline  d-flex text-decoration-none ms-3 mt-2">
              <div>
                <h2 className="text-uppercase text-center ms-3">
                  trip <span className="subtitle">advisor</span>
                </h2>
              </div>
            </div>
            <hr />
            <Nav
              className="flex-column w-100"
              defaultActiveKey="/dashboard/main"
              activeKey={activeKey}
               
              onSelect={(selectedKey) => setActiveKey(selectedKey)}
            >
              <Nav.Item className="fs-4 my-1 p-1 ms-2" >
                <Nav.Link
                 bsPrefix="adm"
                  eventKey="/dashboard/main"
                  onClick={(e) => handleNavItemClick(e, "/dashboard/main")}
                  className="p-2 fs-5"
                >
                  <i className="bi bi-speedometer2 mr-2"></i>
                  <span className="ms-2 d-none d-sm-inline ">Dashboard</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="fs-4 my-1 p-1 ms-2">
                <Nav.Link
                bsPrefix="adm"
                  eventKey="/dashboard/hotels"
                  onClick={(e) => handleNavItemClick(e, "/dashboard/hotels")}
                  className="p-2 w-100 fs-4"
                >
                  <i className="bi bi-hospital mr-2"></i>
                  <span className="ms-2 d-none d-sm-inline ">Hotel</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="fs-4 my-1 p-1 ms-2">
                <Nav.Link
                bsPrefix="adm"
                  eventKey= "/dashboard/restaurents"
                  onClick={(e) => handleNavItemClick(e, "/dashboard/restaurents")}
                  className="p-2  fs-4"
                >
                  <FontAwesomeIcon icon={faUtensils} className="mr-2" />
                  <span className="ms-2 d-none d-sm-inline ">Restaurant</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="fs-4 my-1 p-1 ms-2">
                <Nav.Link
                bsPrefix="adm"
                  eventKey="/dashboard/tours"
                  onClick={(e) => handleNavItemClick(e, "/dashboard/tours")}
                  className="p-2 fs-4"
                >
                  <i className="bi bi-luggage-fill mr-2"></i>
                  <span className="ms-2 d-none d-sm-inline ">Tours</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="fs-4 my-1 w-100 p-1 ms-2">
                <Nav.Link
                bsPrefix="adm" 
                  eventKey="/dashboard/admin"
                  onClick={(e) => handleNavItemClick(e, "/dashboard/admin")}
                  className="p-2 w-100 fs-4"
                >
                  <i className="bi bi-person-vcard-fill mr-2"></i>
                  <span className="ms-2 d-none d-sm-inline ">Admin</span>
                </Nav.Link>
              </Nav.Item>
            </Nav> 
          </div>
          <div className="dropdown open fixed-bottom ms-2 my-2 fs-4">
            <div
              className="text-decoration-none text-white dropdown-toggle p-3"
              data-bs-toggle="dropdown"
              type="button"
              id="triggerId"
              aria-expanded="false"
            >
              <i className="bi bi-person-circle"></i>
              <span className="ms-2">{name}</span>
            </div>
            <div className="dropdown-menu" aria-labelledby="triggerId">
              <div className="dropdown-item">{email}</div>
              <button className="dropdown-item" onClick={(e)=>setLogOut(false)}>Log Out</button>
            </div>
          </div>
        </Col>
        <Col md={10} className="  col-auto d-flex justify-content flex-column">
          <Outlet />
        </Col>
      </Row>
       
    </>
  );
  }
}
