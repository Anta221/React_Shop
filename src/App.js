import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Page from "./components/Page.js";

function App() {
  const [produits, setProduits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState(0);
  const [filteredProduits, setFilteredProduits] = useState([]);
  const [countProductAdd, setCountProductAdd] = useState(0);
  const [show, setShow] = useState(false);
  const [idProduct, setIdProduct] = useState();
  const [cartProduits, setCartProduits] = useState([]);
  const [qCart, setQCart] = useState([]);
  


  //recupére les données de l'api
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProduits(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //filter by search
  useEffect(() => {
    setFilteredProduits(
      produits.filter((produit) =>
        produit.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue, produits]);
  
  //search value
  const handleInputText = (e) => {
    setSearchValue(
     e.target.value
    )
    
  }
//filter by categories
  useEffect(() => {
    setFilteredProduits(
      produits.filter((produit) =>
        produit.category.toLowerCase().startsWith(categories)
      )
    );
  }, [categories, produits]);

  //Categories Values
  const handleInput = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    const name = e.target.name
    if (value === true) {
      setCategories(
      name);
    }
  }

  // Price Values
  const handleInputRange = (e) => {
    const valueRange = e.target.type === 'range' ? e.target.value :undefined
    if (valueRange !==undefined) {
      setPrice(
        valueRange
      )
    }
    
  }

  //filter by price
  useEffect(() => {
        if(price !== undefined && price !==0 ){
          setFilteredProduits(
            produits.filter((el) => {
                return el.price <= price
            }
          )
          )
        }
  }, [price,produits]);
 
  //select quantity value
  const handleInputSelect = (e) => {
    setQuantity(parseInt(e.target.value))
  }
  //Delete product in cart
    const decrement = () => {
      setCountProductAdd(countProductAdd - 1);

    };
  

// Add product in cart
  useEffect(() => {
    if (idProduct !== undefined) {
      cartProduits.push(
        produits.filter(pro => pro.id == idProduct)
      );

    }
  }, [idProduct, produits]);
  const increment = (e) => {
      e.preventDefault();
      setIdProduct(e.target.value);
      setCountProductAdd(countProductAdd + quantity);
      qCart.push(quantity)
      setQuantity(0);
  };

  cartProduits.map((pro, i) => {
    qCart.forEach((element, index) => {
        if (i === index){
            Object.assign(pro[0], {quantity: element});
        }    
    });

   })
  
 const removeProduct = (e) => {
   e.preventDefault()
    /*for( var i = 0; i < cartProduits.length; i++){ 
    
        if ( cartProduits[i][0].id === idProduct) { 
          cartProduits[i].length = 0
           // cartProduits[i].splice(i, 1); 
        }
        
    
    }*/
   }

  //Panier
  const handleClose = () => {
    cartProduits.length =0
    setShow(false)
    setCountProductAdd(0)
    };
  const handleShow = () => setShow(true);
  

  if (isLoading) {
    return <p>Loading Products...</p>;
  }


  return (
    <div className="App">
      <header className="App-header">
        <Page 
        handleInputText = {handleInputText} 
        filteredProduits = {filteredProduits}
        handleInputRange = {handleInputRange}
        count = {filteredProduits.length}
        handleInput = {handleInput} 
        price = {price} 
        countProductAdd = {countProductAdd}
        increment = {increment}
        decrement = {decrement}
        handleInputSelect = {handleInputSelect}
        quantity = {quantity}
        handleClose = {handleClose}
        handleShow = {handleShow}
        show = {show}
        cartProduits = {cartProduits}
        qCart = {qCart}
        removeProduct = {removeProduct}
        >

        </Page>

      </header>
    </div>
  );
}

export default App;
