import React, { useState } from "react";
import "./css/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
export default function Signup() {
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };
  if (authMode === "signin") {
    return (
      <>
        <div className="Auth-form-container">
          <form className="Auth-form">
            <img alt="This will Take a while to load"
              id="ig"
              className="float-start"
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D"
            />

            <div className="float-end Auth-form-content">
              <h2 className="mt-5" id="tit">
                <b>
                  Explore the world to Experience <br />
                  the Beauty of Nature
                </b>
              </h2>{" "}
              <br />
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
                Not registered yet?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Sign Up
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  id="email"
                  name="email"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  id="password"
                  name="password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  <a href="/home"> Submit</a>
                </button>
              </div>
              <p className="text-center mt-2">
                Forgot <span className="link-primary">password?</span>
              </p>
            </div>
          </form>
        </div>
      </>
    );
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <img alt="This will Take a while to load"
          id="ig2"
          className="float-start"
          src="https://cdn.wallpapersafari.com/28/61/6Tr9P7.jpg"
        />

        <div className="float-end Auth-form-content">
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
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g selvam"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              <Link to="/home">Submit</Link>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
