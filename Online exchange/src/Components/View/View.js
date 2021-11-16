import React,{useContext,useEffect} from 'react';
import { ProductContext } from '../../ProductContext';
import {Postcontext} from '../../Postcontext';
import { dataContext } from '../../dataContext';
import './View.css';
function View() {
const {state}=useContext(Postcontext)
const {product}=useContext(ProductContext)
  useEffect(() => {
    
    
  }, [])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={product ? product.url:''}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {product.price} </p>
          <span>{product.name}</span>
          <p>{product.category}</p>
          <span>{product.createAt}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{state ? state.username:''}</p>
          <p>{state ? state.phonenumber:''}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
