import { Routes ,Route } from "react-router-dom";
import Signup from "./signup";
import App from "./App";
import First from "./cont/first";
import AllTour from "./alltour";
import Hotels from "./hotel/hotels";
import Details from "./hotel/details";
import HotelPayment from "./hotel/hotelpayment";
import Restaurent from "./restaurent/restaurents";
import RestaurentDetails from "./restaurent/restaurentdetails";

export default function Routing(){
    return (
        <>
        <Routes>
            <Route path="/" element={<Signup/>}/>
            <Route path="/ooty" element={<First id={0}/>}/>
            <Route path="/valparai" element={<First id={1}/>}/> 
            <Route path="/home" element={<App/>}/>
            <Route path="/alltour" element={<AllTour/>}/>
            <Route path="/hotels" element={<Hotels/>}/>
            <Route path="/heaven" element={<Details num={0}/>}/>
            <Route path="/anamols" element={<Details num={1}/>}/>
            <Route path="/heavenPay" element={<HotelPayment num={0}/>}/>
            <Route path="/anamolsPay" element={<HotelPayment num={1}/>}/>
            <Route path="/restaurents" element={<Restaurent/>}/>
            <Route path="/shareif" element={<RestaurentDetails num={0}/>}/>
            <Route path="/pavilion" element={<RestaurentDetails num={1}/>}/>
        </Routes>
        </>
    );
}