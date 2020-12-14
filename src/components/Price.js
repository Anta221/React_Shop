import React, { Fragment } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Categories = ({handleInputRange, price}) => {
    return(
        <Fragment>
              <h5 className="text-left">Price</h5>
        <form>
       
        
        <span className="priceText">Between 0$ and {price ===undefined? 0 : price} $</span>&nbsp;&nbsp;&nbsp;&nbsp;
         
        <input type="range" class="custom-range" min="7.95" max="1000" id="customRange2" name="range" onChange={handleInputRange}/>
        </form>
        </Fragment>
     
    
     
               
          
    )
} 
export default Categories;




