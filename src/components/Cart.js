import React from 'react';
import {Modal, Button, Card, Col, Row, Container, Form} from "react-bootstrap";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Quantity from "./Quantity.js";

const Cart = ({show, handleClose, ListGroupItem, ListGroup, cartProduits, Image, qCart, removeProduct}) => {
    
    const totalProduct = (prix, quantity) => {
        return quantity * prix        
    }
    const somme=[];
    var total = 0;
    function getSum(total, num) {
  return total + num;
}

    return(
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>My cart </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid" >
         { cartProduits.length === 0 ? <span>Your cart is empty.</span> : cartProduits.map((p) => 
            <div>
                <Row key= {p[0].id}>
                    <Col xs={4} md={1}>
                         <Card style={{ width: '2rem', height: '2rem', border:'none' }}>
                            <Card.Img variant="top" src={p[0].image} />
                        </Card>
                    </Col>
                    <Col xs={8} md={8}>
                    {p[0].title}
                   <br/>
                    <span className = "filterText"> Indiv. ${p[0].price} </span><br/>
                    
                    <br/>
                    
                    <span className="priceText text-center text-danger">Total ${totalProduct(p[0].quantity, p[0].price )}</span>
                   
                    </Col>
                    <Col xs={6} md={3}>
                 <span style={{ color: 'white' }}> {somme.push(totalProduct(p[0].quantity, p[0].price ))}</span>
                        <Form.Group controlId="exampleForm.SelectCustomSizeSm" style={{ width: '3rem' }}>
                              
                            <Form.Control as="select" size="sm" name="quantity" titre="Select a quantity">
                                
                            <option selected ={p[0].quantity === 0? true : false} >0</option>
                            <option selected ={p[0].quantity === 1? true : false} >1</option>
                            <option selected ={p[0].quantity === 2? true : false} >2</option>
                            <option selected ={p[0].quantity === 3? true : false} >3</option>
                            <option selected ={p[0].quantity === 4? true : false} >4</option>
                            <option selected ={p[0].quantity === 5? true : false} >5</option>
                            
                            </Form.Control>

                        </Form.Group>
                    <Form inline>
                        <Button variant="outline-danger"  title="supprimer" onClick={removeProduct}>
                    ❌ <span className="badge badge-danger" name="notif" ></span></Button>
                    </Form>

                    </Col>
                    
                </Row>
                <hr></hr>
                 
            </div>
        ) }
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          <>
            { cartProduits.length === 0 ?<span>Close</span> : <span>Clear Cart</span>}
            </>
          </Button>
          <Button variant="primary">Checkout  {
                Math.round(somme.reduce(getSum, 0))
          } $</Button>
        </Modal.Footer>
      </Modal>
    )
} 
export default Cart;




