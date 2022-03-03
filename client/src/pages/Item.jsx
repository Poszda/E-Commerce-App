import React from 'react';
import './item.css';
import ItemSlider from '../components/ItemSlider/ItemSlider';
import {useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';
function Item() {

    const id_item = useParams().id2;
    const [item, setItem] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3002/getproduct/${id_item}`).then((response) =>{
            setItem(response.data[0]);
            console.log(response.data[0]);
          });
    }, [])

    //FUNCTIONS
    function addToCart(){
        console.log(1);
        let cart = [];
        if(localStorage.getItem('MyCart')){
            cart = JSON.parse(localStorage.getItem('MyCart'));
        }

        if(!cart.find(el=>el.id === item.id)){
            cart.push({id:item.id , pieces: 1});
        }
        else{
            alert("Item is already in the shopping cart");
        }
        localStorage.setItem('MyCart',JSON.stringify(cart));
    }
    return (
        <>
        <div className="item-section-1">
            <div className="left-side">
            <div className="container">
                <div className="title">{item.name}</div>
                <div className="text-boxes">
                <div className="text-box-1">
                {item.details}
                </div>
                <div className="text-box-2">{item.description}
                </div>
                </div>
                <div className="price">{item.price}</div>
                <div className='button' style={item.quantity === 0?{background:"grey"}:undefined} onClick={item.quantity !== 0?addToCart:undefined}>{item.quantity !==0?"Add to bag":"Out of stock"}</div> 
            </div>
            </div>
            <div className="right-side">
                <ItemSlider imgList={[item.img,item.img2,item.img3]}/>
            </div>
        </div>
        <div className="item-section-2"></div>
        </>

    )
}

export default Item
