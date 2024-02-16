import axios from "axios";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

<<<<<<< HEAD
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
=======
export default function Check(){
    const navigate=useNavigate(); 
    axios.defaults.withCredentials=true;
    useEffect(()=>{
        axios.get("https://tripadvisor-api.onrender.com/dashboard")
        .then((res)=>{
            if(res.data==="user"){ 
                console.log("welcome to Trip Advisor");
            }
            else{
                console.log(res.data)
                navigate('/'); 
            }
        }).catch(err=>console.log(err));
        // eslint-disable-next-line
        },[]);
    return (
        <>
        <Outlet/>  
        </>
    );
>>>>>>> 1bbaf6a52c9e0205856431b49732b5c733cb4c25
}
