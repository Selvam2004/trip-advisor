import axios from "axios";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
 
export default function Check() {
  const navigate = useNavigate(); 
  useEffect(() => {
    axios
      .get("https://tripadvisor-api.onrender.com/dashboard",{ withCredentials: true })
      .then((res) => {
        if (res.data.status === "user") {
          console.log("welcome to Trip Advisor");
        } else {
          console.log(res.data);
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
  }
