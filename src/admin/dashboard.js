
import axios from 'axios';
import { useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard(){
    const navigate=useNavigate();  
    useEffect(()=>{
        axios.get("https://tripadvisor-api.onrender.com/dashboard",{ withCredentials: true })
        .then((res)=>{
            if(res.data==="success"){ 
               console.log("welcome admin");
            }
            else{
                console.log(res.data)
                navigate('/'); 
            }
        }).catch(err=>console.log(err));
        // eslint-disable-next-line
        },[navigate]);
    return ( 
        <>
        <h1>Dashboard</h1> 
        </>
    );
}
