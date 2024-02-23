import { useEffect, useState } from 'react';
import {Card, Col, Container, Row} from 'react-bootstrap';
import axios from 'axios';
export default function Main(){
    const [user,setUser]=useState(0);
    const [admin,setAdmin]=useState(0);
    const [hotels,setHotels]=useState(0);
    const [restaurents,setRestaurents]=useState(0);
    const [tours,setTours]=useState(0);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        axios.get("https://tripadvisor-api.onrender.com/getCount")
        .then((res)=>{
           setUser(res.data.user);
           setHotels(res.data.hotel);
           setRestaurents(res.data.restaurent);
           setAdmin(res.data.admin);
           setTours(res.data.tour);
           setLoading(false);
        })
        .catch((err)=>console.log(err));
    },[]);
    if(loading){
      return(
        <>
        <div className="page" >
          <div className="cnt">
              <div className="ring"></div>
              <div className="ring"></div>
              <div className="ring"></div>
              <div className="ring"></div>
              <div className="h">loading</div>
          </div>
      </div>
    
        </>
      )
    }
    else{
    return (
         <Container className='mt-3'>
          <h1 className='fs-1 ms-5'>Trip Advisor Info</h1>
          <Row> 
            <Col md={5}>
                <Card  className='mb-4 mt-4 ms-5 me-4'>
                     <Card.Header className='text-center'>HOTELS</Card.Header>
                     <Card.Body>
                        <Card.Title>Number of Hotels: {hotels}</Card.Title>
                     </Card.Body>
                </Card>
                <Card  className='mb-4 mt-5 ms-5 me-4' >
                     <Card.Header className='text-center'>RESTAURENTS</Card.Header>
                     <Card.Body>
                        <Card.Title>Number of Restaurents: {restaurents}</Card.Title>
                     </Card.Body>
                </Card>
                <Card  className='mb-4 mt-5 ms-5 me-4' >
                     <Card.Header className='text-center'>TOURIST PLACES</Card.Header>
                     <Card.Body>
                        <Card.Title>Number of Tourist Places: {tours}</Card.Title>
                     </Card.Body>
                </Card>
            </Col> 
            <Col md={5}>
                <Card className='mb-4 mt-4 ms-5 me-4' >
                     <Card.Header className='text-center'>USERS</Card.Header>
                     <Card.Body>
                        <Card.Title>Number of Users: {user}</Card.Title>
                     </Card.Body>
                </Card>
                <Card  className='mb-4 mt-5 ms-5 me-4' >
                     <Card.Header className='text-center'>ADMIN</Card.Header>
                     <Card.Body>
                        <Card.Title>Number of Admin: {admin}</Card.Title>
                     </Card.Body>
                </Card>
            </Col>
            <Col md={2}>
            </Col>
          </Row>
         </Container>
    );
    }
}