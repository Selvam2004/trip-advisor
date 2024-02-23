import React, { useState } from "react";
import "./css/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() { 
  let [email,setEmail] = useState();
  let [password,setPassword] = useState();
  const [loading,setLoading]=useState(false);
  let [error, setError] = useState({});
  const navigate = useNavigate(); 
  const handleSubmit = (e)=> {
    e.preventDefault(); 
    setLoading(true);
    axios
      .post("https://tripadvisor-api.onrender.com/login", { email, password },{ withCredentials: true })
      .then((result) => {
        if (result.data.status === "success") {
          if(result.data.role==="admin"){
            console.log("welcome admin"); 
            navigate("/dashboard");
          }
          else{
            navigate("/home");
          } 
        }
        else{  
          setLoading(false);
          let errors={};
          if(result.data==="*Password incorrect"){
            errors.pwd=result.data;
          }
          else{
            errors.msg=result.data;
          }
          setError(errors);
          console.log(result.data);
        }
      })
      .catch((err) => console.log(err));
  }
 
     return (
    <>
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="float-start col-sm-12 col-md-6 ">
          <img
            alt="This will Take a while to load"
            className="float-start ig"
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D"
          />
      </div>
      {loading?<div className="float-end Auth-form-content col-sm-12 col-md-6">    <div className="page" >
      <div className="cnt">
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="h">loading</div>
      </div></div>  
   </div>:
          <div className="float-end Auth-form-content col-sm-12 col-md-6">
            
            <h2 className="mt-5" id="tit">
              <b>
                Explore the world to Experience <br />
                the Beauty of Nature
              </b>
            </h2>{" "}
            <br />
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet? <a href="/"><span className="link-primary">Sign Up</span></a>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                id="email"
                name="email" 
                onChange={e=>setEmail(e.target.value)}
              />
            </div>
            <p style={{color:"red"}}>{error.msg}</p>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                id="password"
                name="password" 
                onChange={e=>setPassword(e.target.value)}
              />
            </div>
            <p style={{color:"red"}}>{error.pwd}</p>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <span className="link-primary">password?</span>
            </p> 
         </div>}
        </form>
      </div>
    </>
  );
  
 
}
