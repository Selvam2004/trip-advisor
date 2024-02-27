import { Routes ,Route } from "react-router-dom";
import Signup from "./signup";
import App from "./App"; 
import AllTour from "./alltour/alltour";
import Hotels from "./hotel/hotels";
import Details from "./hotel/details";
import HotelPayment from "./hotel/hotelpayment";
import Restaurent from "./restaurent/restaurents";
import RestaurentDetails from "./restaurent/restaurentdetails";
import Login from "./login";
import Dashboard from "./admin/dashboard";
import Check from "./check";
import Tour from "./cont/tour";
import Admin from "./admin/Admin";
import Main from "./admin/main";
import Tours from "./admin/tour";
import Hotel from "./admin/Hotel";
import Restaurents from "./admin/Restaurent";
import RestaurentPayment from "./restaurent/restaurentPayment";
import Confirmation from "./order/order";
import Bookings from "./order/bookings";

export default function Routing(){
    return (
        <>
        <Routes>
            <Route path="/" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}>
                <Route path="main" element={<Main/>}/>
                <Route path="admin" element={<Admin/>}/>
                <Route path="hotels" element={<Hotel/>}/>
                <Route path="restaurents" element={<Restaurents/>}/>
                <Route path="tours" element={<Tours/>}/>
            </Route>
            <Route element={<Check/>}>
               <Route path="/home" element={<App/>}/> 
               <Route path="/home/alltour" element={<AllTour/>}/>
               <Route path="/home/tour/:id" element={<Tour/>}/> 
               <Route path="/home/hotels" element={<Hotels/>}/>
               <Route path="/home/hotels/:id" element={<Details/>}/> 
               <Route path="/home/hotels/payment/:id" element={<HotelPayment/>} /> 
               <Route path="/home/restaurents" element={<Restaurent/>}/>
               <Route path="/home/restaurent/:id" element={<RestaurentDetails/>}/> 
               <Route path="/home/restaurent/payment/:id" element={<RestaurentPayment/>}/> 
               <Route path="/home/order/:id" element={<Confirmation/>}/> 
               <Route path="/home/bookings" element={<Bookings/>}/> 
            </Route>
        </Routes>
        </>
    );
}