import axios from 'axios';
import { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
export default function Admin(){
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [rmemail,setRmEmail]=useState();
    const [role,setRole]=useState('admin');
    const [loading,setLoading]=useState(false);
    
    const handleAdd=(e)=>{
        setLoading(true);
        e.preventDefault();
       axios.post("https://tripadvisor-api.onrender.com/register",{name,email,password,role})
       .then((res)=>{
        alert('admin added');
        setLoading(false);
       })
       .catch((err)=>console.log(err));
    }
    const handleRemove=(e)=>{
        e.preventDefault();
       axios.post("https://tripadvisor-api.onrender.com/removeAdmin",{rmemail})
       .then((res)=>alert('admin removed'))
       .catch((err)=>console.log(err));
    }

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
        <Container>
            <h1 className='fs-1 mt-3 ms-4'>ADMIN</h1>
            <Row>
                <Col md={2}>
                </Col>
                <Col md={6}>
                   <h2 className='ms-3 mt-4'>Add Admin:</h2>
                <Form className='border border-secondary rounded ms-3 p-3 mb-4'>
                 <Form.Group controlId="formTitle">
                    <Form.Label>Full Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Full Name" onChange={(e)=>setName(e.target.value)}/>
                 </Form.Group>  
                 <Form.Group controlId="formTitle">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>setEmail(e.target.value)}/>
                 </Form.Group>  
                 <Form.Group controlId="formTitle">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Enter password"  onChange={(e)=>setPassword(e.target.value)}/>
                 </Form.Group>  

                <div className="w-100 mt-4 d-flex justify-content-center">
                <Button variant="primary" type="submit" onClick={handleAdd}>
                    Add Admin
                </Button>
             </div>
            </Form>      
                 <h2 className='ms-3 mt-4'>Remove Admin:</h2>
            <Form className='border border-secondary rounded ms-3 p-3 mb-4'>
            <Form.Group controlId="formTitle">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="email" placeholder="Enter username of the admin to remove"  onChange={(e)=>setRmEmail(e.target.value)}/>
                </Form.Group>  

                <div className="w-100 mt-4 d-flex justify-content-center">
                <Button variant="primary"  type="submit" onClick={handleRemove}>
                    Remove Admin
                </Button>
             </div>
            </Form>
                </Col>
                <Col md={2}>
                </Col>
            </Row>
            
 
        </Container>
    );
    }
}