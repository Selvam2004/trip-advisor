import { useState } from "react"; 
export default function Services(){
  const [loading,setLoading]=useState(true);
  const [loading2,setLoading2]=useState(true);
 
    return (
        <section className="section featured-tours" id="services">
        <div className="title-wrapper">
          <h2 className="title">
            our <span className="subtitle">services</span>
          </h2>
        </div>

        <div className="section-center featured-center ">
          
          <article className="tour-card1">
            <a href="/home/hotels">
              <div className="tour-img-container">
              
               <div className="loader" style={{display:loading?'block':'none'}}></div>
               <div  style={{display:loading?'none':'block'}}>
                <img
                  src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?cs=srgb&dl=pexels-pixabay-258154.jpg&fm=jpg"
                  className="tour-img1"
                  onLoad={(e)=>setLoading(false)}
                  alt=""
                />
                </div> 
              </div>
            </a>
            <div className="tour-footer">
              <h4 className="tour-title fs-3">Hotel Booking</h4>
              <div className="tour-info">
                <p className="tour-country">
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  Tamil Nadu
                </p>
              </div>
            </div>
          </article>


          <article className="tour-card1">
            <a href="/home/restaurents">
              <div className="tour-img-container">
              <div className="loader" style={{display:loading2?'block':'none'}}></div>
               <div  style={{display:loading2?'none':'block'}}>
                <img
                  src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chan-walrus-941861.jpg&fm=jpg"
                  className="tour-img1" 
                  onLoad={(e)=>setLoading2(false)}
                  alt=""
                />
              </div>
              </div>
            </a>
            <div className="tour-footer">
              <h4 className="tour-title fs-3">Restaurent Booking</h4>
              <div className="tour-info">
                <p className="tour-country">
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  Tamil Nadu
                </p>
              </div>
            </div>
          </article>
 
        </div>
         
      </section>
       
    );
}
//  <section className="section services" id="services">
//         <div className="title-wrapper">
//           <h2 className="title">
//             our <span className="subtitle">services</span>
//           </h2>
//         </div>
//         <div className="section-center services-center">
//           <article className="service">
//             <span className="service-icon">
//               <i className="fas fa-wallet fa-fw"></i>
//             </span>
//             <div className="service-info">
//               <h4 className="service-title">saving money</h4>
//               <p className="service-text">
//                 " Transform your money to treasure. For the dreams, start saving
//                 today. "
//               </p>
//             </div>
//           </article>
//           <article className="service">
//             <span className="service-icon">
//               <i className="fas fa-tree fa-fw"></i>
//             </span>
//             <div className="service-info">
//               <h4 className="service-title">endless hiking</h4>
//               <p className="service-text">
//                 "After a day's walk,everything has twice its usual value"
//               </p>
//             </div>
//           </article>
//           <article className="service">
//             <span className="service-icon">
//               <i className="fas fa-socks fa-fw"></i>
//             </span>
//             <div className="service-info">
//               <h4 className="service-title">amazing comfort</h4>
//               <p className="service-text">Don't wait till tomorrow Do now</p>
//             </div>
//           </article>
//         </div>
//       </section>