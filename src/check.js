import axios from "axios";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
 
export default function Check() {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("https://tripadvisor-api.onrender.com/dashboard")
      .then((res) => {
        if (res.data === "user") {
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
