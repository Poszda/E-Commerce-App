import React from 'react'
import './cart.css'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CartItem from '../components/CartItem/CartItem';
import {useState,useEffect} from 'react';
import axios from 'axios'
function Cart() {
  const [cartItemsList,setCartItemsList] = useState([]);
  const [totalPrice,setTotalPrice] = useState(0);
  const [shippingAdress,setShippingAdress] = useState("");
  const [shippingCountry,setShippingCountry] = useState("");
  const [shippingFullName,setShippingFullName] = useState("");
  const [shippingPhoneNumber,setShippingPhoneNumber] = useState("");

  useEffect(() => { // useEffect se apeleaza dupa ce se termina prima rendare
    //luam itemele din localStorge si aceleasi iteme din baza de date si facem o variabila din merge-ul lor
    const array = localStorage.getItem("MyCart")?JSON.parse(localStorage.getItem("MyCart")):[];
    axios.post("http://localhost:3002/getproducts",{array:array.map(el=>el.id)}).then((response) =>{
      const finalArray = array.map(el => {
        const finalElement = {...response.data.find(elem=>elem.id === el.id),pieces: el.pieces};
        return finalElement;
      });
      setCartItemsList(finalArray); //merged data
    });
  }, [])

  useEffect(()=>{
    let sum = 0;
    cartItemsList.forEach(el=> sum += el.price.slice(0,-1) * el.pieces);
    setTotalPrice(sum);
  },[cartItemsList])

  function sendOrder(){
    console.log(areEmptyFields());
    if(cartItemsList.length === 0) alert("Cosul este gol");
    else if(areEmptyFields()) alert("Completati campurile!");
    else{
      axios.post("http://localhost:3002/sendorder",{
        items:cartItemsList,
        total:totalPrice + "$",
        address:shippingAdress,
        country:shippingCountry,
        clientName:shippingFullName,
        phone:shippingPhoneNumber
      }).then((result)=>{
        alert("Comanda a fost trimisa")
        // daca nu avem erori si comanda a fost trimisa perfect stergem din localstorge comanda
        localStorage.removeItem("MyCart");
        setCartItemsList([]);
        setShippingAdress("");
        setShippingCountry("");
        setShippingFullName("");
        setShippingPhoneNumber("");
      });
    }
  }

  function areEmptyFields(){
      if(shippingAdress && shippingCountry && shippingFullName && shippingPhoneNumber) return false;
      return true;
  }

  return (
    <div className='cart-container'>
        <Header 
            title='Shopping Cart'
            aftertitle = 'PROUDLY THANKFUL OF OUR PRECIOUS WORK'
            background = '/images/shopimage.jpg'
        />
        <div className="cart-items-container">
          {cartItemsList.map(el=>{
             return <CartItem key={el.id} data = {el} setCartItemsList={setCartItemsList} cartItemsList = {cartItemsList}/>
          })}
          <div className='cart-total-price'>Total Cost: ${totalPrice}</div>
          <br/>
          <div className="cart-header-title">Shipping Details</div>
          <div className="cart-shipping-details">
            <textarea id="address-textarea" value={shippingAdress} placeholder='Your address...' onChange={(e)=>setShippingAdress(e.target.value)}></textarea>
            <div className="cart-inputs-container">
            <input className='cart-shipping-inputs' value={shippingCountry} type="text" placeholder='Country...' onChange={(e)=>setShippingCountry(e.target.value)}/>
            <input className='cart-shipping-inputs' value={shippingFullName} type="text" placeholder='Full Name...' onChange={(e)=>setShippingFullName(e.target.value)}/>
            <input className='cart-shipping-inputs' value={shippingPhoneNumber} type="text" placeholder='Phone Number...' onChange={(e)=>setShippingPhoneNumber(e.target.value)}/>
            </div>
          </div>
        <div className="cart-button-order" onClick={sendOrder}>Order</div>
        </div>
          
        <Footer/>
    </div>
  )
}

export default Cart