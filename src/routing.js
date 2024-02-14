import { Routes ,Route } from "react-router-dom";
import Signup from "./signup";
import App from "./App";
import First from "./cont/first";
import AllTour from "./alltour/alltour";
import Hotels from "./hotel/hotels";
import Details from "./hotel/details";
import HotelPayment from "./hotel/hotelpayment";
import Restaurent from "./restaurent/restaurents";
import RestaurentDetails from "./restaurent/restaurentdetails";
import Login from "./login";
import Dashboard from "./admin/dashboard";
import Check from "./check";

export default function Routing(){
    return (
        <>
        <Routes>
            <Route path="/" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route element={<Check/>}>
               <Route path="/home" element={<App/>}/> 
               <Route path="/home/tour/:id" element={<First/>}/> 
               <Route path="/home/alltour" element={<AllTour/>}/>
               <Route path="/home/hotels" element={<Hotels/>}/>
               <Route path="/home/hotels/:id" element={<Details/>}/> 
               <Route path="/home/hotels/payment/:id" element={<HotelPayment />}/> 
               <Route path="/home/restaurents" element={<Restaurent/>}/>
               <Route path="/home/restaurent/:id" element={<RestaurentDetails/>}/> 
            </Route>
        </Routes>
        </>
    );
}