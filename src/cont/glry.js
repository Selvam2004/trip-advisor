import { Col, Row } from "react-bootstrap";

export default function Galry(props){
    const {images,title}=props;
    return (
        <>
       
          <Row md={3}>
             {images.map((img,i)=>{
         return (
            <Col key={i}><img height="300px" className="mb-3" src={img}  alt={title}/></Col> 
            );
        })
        } 
         </Row>          
        
        
        </>
    );
}