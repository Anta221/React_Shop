import React from 'react';
import {Row, Col } from "react-bootstrap";
import '../App.css';
import ProductList from './ProductList.js';
import Filter from './Filter.js';
import Categories from './CategoriesCheck.js';
import Price from './Price.js';
import Header from './Header.js';
import Cart from './Cart.js';

const Page = ({
    filteredProduits, 
    searchValue, 
    handleInputText, 
    count, 
    handleInput, 
    handleInputRange,
    price,
    countProductAdd, 
    increment,
    decrement,
    handleInputSelect,
    handleShow,
    handleClose,
    show,
    quantity,
    cartProduits,
    qCart,
    removeProduct
    }) => {
    return(
       

        <div className='container'>
        
            <Header 
            countProductAdd = {countProductAdd}
            decrement = {decrement}
            handleShow = {handleShow}
            >
            </Header>
            <Cart
            show ={show}
            handleClose = {handleClose}
            cartProduits = {cartProduits}
            quantity = {quantity}
            qCart = {qCart}
            removeProduct = {removeProduct}
            
            ></Cart>
            <br></br>
            <Row >
                
                <br></br>
                <Col sm={3}>
                <div  className = "container">
                <br></br><br></br><br></br>
                <p>
                    {count !== 0 ?
                    <span className="filterText">{count} product found</span>
                    :
                    <span className="text-danger font-italic  mr-4">No product found</span>
                    }
                </p>
                   <Filter
                        searchValue = {searchValue} 
                        handleInputText = {handleInputText}
                        count = {count}
                    >
                    </Filter>
                    <br></br>
                    <hr></hr>
                  <Categories handleInput={handleInput}>

                  </Categories>
                   <Price 
                   handleInputRange={handleInputRange}
                   price={price
                   }>
                       </Price> 
                </div>
                </Col>
                
                <Col sm={9}>
                    <ProductList 
                    filteredProduits = {filteredProduits}
                    increment = {increment} 
                    handleInputSelect ={handleInputSelect}
                    quantity = {quantity}
                    ></ProductList> 
                </Col>
            </Row> 
        </div>
               
          
    )
} 
export default Page;