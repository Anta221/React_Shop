import React from 'react';
import {Card, Col,Row, Button } from "react-bootstrap";
import '../App.css';
import Quantity from "./Quantity.js";

const ProductList = ({filteredProduits, increment, handleInputSelect, quantity}) => {
    return(
        <div className=" row justify-content-around" >
            <br></br>
            {filteredProduits.map((produit) =>
            <Card style={{ width: '20rem' }} key={produit.id}>
                <Card.Img variant="top" src={produit.image}  style={{ height: '22rem'}}/>
                <hr></hr>
                <Card.Body>
                <Card.Title>{produit.title}</Card.Title>
                <Card.Text className="mb-2 text-muted text-left description"> {produit.description}</Card.Text>
                <hr></hr>
                <Card.Text className="text-muted text-left CategorieText">🔶 {produit.category}</Card.Text>
                </Card.Body>
                
                <Card.Footer>
                 <Row>
                 <Col><Card.Text className="text-danger text-left">{produit.price} $</Card.Text></Col>
                 
                <Col className="float-Right"><Quantity handleInputSelect={handleInputSelect}></Quantity></Col>
                <Button 
                type = "submit"
                variant="warning" 
                value={produit.id}
                title="Choose quantity before to add" 
                onClick={increment}
                disabled= {quantity ===0 ?true : false}>
                    Add
                </Button>
                
                </Row> 
                </Card.Footer>
            </Card>
            )}
              
        </div>

          
          
    )
} 
export default ProductList;
