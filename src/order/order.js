import { Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function Confirmation(){
    const { id }=useParams();
    return (
        <Alert
        key="warning"
        variant="warning"
        style={{ textAlign: "center" }}
      >
        🎉 Congratulations.Your Order has been confirmed.<br/>
        <h3>Order id:{id}</h3>
        
      </Alert>
    )
}