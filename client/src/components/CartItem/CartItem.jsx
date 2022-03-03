import React from 'react'
//import styles from './cartItem.module.css'
import './cartItem.css'

function CartItem({data:{id,name,img,pieces,price,category,quantity},setCartItemsList,cartItemsList}) {

  function removeCartItem(){
    setCartItemsList(cartItemsList.filter(el=>el.id!==id));
    const cart = JSON.parse(localStorage.getItem('MyCart'));
    const updatedCart = cart.filter(el=>el.id!==id)
    localStorage.setItem('MyCart',JSON.stringify(updatedCart));
  }

  function updatePieces(typeOfUpdate){
    const updatedList = cartItemsList.map(el => {
      if(el.id === id) {
        if(typeOfUpdate === "increase"){
          if(el.pieces < quantity) {
            el.pieces++;
            updateLocalStorgeItemPieces(id,el.pieces)
          }
          else console.log("ati ajuns la max");
        }
        else if(typeOfUpdate === "decrease"){
          if(el.pieces > 1) {
            el.pieces--;
            updateLocalStorgeItemPieces(id,el.pieces);
          }
          else console.log("ati ajuns la minim");
        }
      }
      return el;
    });
    setCartItemsList(updatedList);
  }

  function updateLocalStorgeItemPieces(id,value){
    const cart = JSON.parse(localStorage.getItem('MyCart'));
    const updatedCart = cart.map(el=>{
      if(el.id === id) el.pieces = value;
      return el;
    })
    localStorage.setItem('MyCart',JSON.stringify(updatedCart));
  }

  return (
    <div className='cart-item-container'>
        <div id="cart-item-text">{name}</div>
        <img id="cart-item-img" src={process.env.PUBLIC_URL + img} alt=""/>
        <div className="cart-item-panel">
            <div id="cart-item-btn-plus" onClick={()=>updatePieces("increase")}>+</div>
            <div id="cart-item-pieces">{pieces}</div>
            <div id="cart-item-btn-minus" onClick={()=>updatePieces("decrease")}>-</div>
        </div>
        <div id="cart-item-category">Category: {category}</div>
        <div id="cart-item-price">Price: {price.slice(0,-1) * pieces} $</div>
        <div id="cart-item-btn-remove" onClick={removeCartItem}>Remove</div>
    </div>
  )
}

export default CartItem