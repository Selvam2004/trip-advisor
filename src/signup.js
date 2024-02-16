import React, { useState, useEffect } from "react";
import "./css/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  let [name,setName] =useState();
  let [email,setEmail] = useState();
  let [password,setPassword] = useState(); 

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    setErrors(validateValues({name,email,password}));
    setSubmitting(true);
  };
  const validateValues = (inputValues) => {
    let errors = {};
    const regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 

    if(inputValues.name==null){
      errors.name = "* Please enter a name";
    }
    else if (inputValues.name.length < 5) {
      errors.name = "* Please enter a valid name";
    } else if (!regEx.test(inputValues.email)) {
      errors.email = "*Enter a valid email";
    } else if (inputValues.password==null) {
      errors.password = "*Please Enter a Password";
    }
    else if (inputValues.password.length < 5) {
      errors.password = "*Password is too short";
    }

    return errors;
  };

  const finishSubmit = () => {
    axios
      .post("https://tripadvisor-api.onrender.com/register",{name,email,password})
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
    // eslint-disable-next-line 
  }, [errors]);

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
      <div className="float-start col-sm-12 col-md-6 ">
        <img
          alt="This will Take a while to load"
          id="ig2"
          className="float-start"
          src="https://cdn.wallpapersafari.com/28/61/6Tr9P7.jpg"
        />
      </div>
        <div className="float-end Auth-form-content col-sm-12 col-md-6">
          <h2 className="mt-5" id="tit2">
            <b>
              Explore the world to Experience
              <br />
              the Beauty of Nature
            </b>
          </h2>{" "}
          <br />
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered? <a href="/login"><span className="link-primary">Sign In</span></a>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g selvam"
              id="name"
              onChange={e=>setName(e.target.value)}
            />
          </div>
          <p style={{ color: "red" }}>{errors.name}</p>
          <div className="form-group mt-3">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              id="email"
              onChange={e=>setEmail(e.target.value)}
            />
          </div>
          <p style={{ color: "red" }}>{errors.email}</p>
          <div className="form-group mt-3">
            <label htmlFor="pwd">Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              id="pwd"
              onChange={e=>setPassword(e.target.value)}
            />
          </div>
          <p style={{ color: "red" }}>{errors.password}</p>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
