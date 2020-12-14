import React from 'react';
import {Form} from "react-bootstrap";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Categories = ({handleInput}) => {
    return(
      <div>
          <h5 className="text-left">Categories</h5>
        <Form className="form-inline ">
        
        <Form.Group controlId="formBasicCheckbox">
        <Form.Check className ="CategorieText" type="checkbox" label="Jewelery" name="jewelery"  onChange={handleInput}/>
        </Form.Group>
      
        
        <Form.Group controlId="formBasicCheckbox">
            <Form.Check  className ="CategorieText" type="checkbox" label="Men Clothing" name="men clothing" onChange={handleInput} />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
            <Form.Check className ="CategorieText" type="checkbox" label="Electronics" name="electronics" onChange={handleInput} />
        </Form.Group>
        <br></br>

        <Form.Group controlId="formBasicCheckbox">
            <Form.Check className ="CategorieText" type="checkbox" label="Women Clothing" name="women" onChange={handleInput}/>
        </Form.Group>
       
        </Form>
        <br></br>
        <hr></hr>
    </div>
    
     
               
          
    )
} 
export default Categories;