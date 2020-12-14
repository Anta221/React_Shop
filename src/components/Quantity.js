import React from 'react';
import {Form} from "react-bootstrap";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Quantity = ({handleInputSelect}) => {
    
    return(
       
    <Form.Group controlId="exampleForm.SelectCustomSizeSm" style={{ width: '3rem' }}>
        <Form.Control as="select" size="sm"   name="quantity" titre="Select a quantity" onChange={handleInputSelect}>
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        </Form.Control>
    </Form.Group>
               
          
    )
} 
export default Quantity;




