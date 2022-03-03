import React from 'react'
import './productsPriceRange.css'
import { useRef } from 'react'
function ProductsPriceRange({setpriceInputs,priceInputs}) {
    const first = useRef()
    const second = useRef()

    const formatData = (input) =>{
        if(input === '') return 0;
        if(input < 0) return 0;
        if(input === 'e' ) return 0;
        return parseInt(input);
    }

    const updatePrice = (e) =>{
        let newPrice={}
        if(e.target === first.current){
            newPrice = {
                left: formatData(e.target.value),
                right: priceInputs.right
            }
        }
        else{
            newPrice = {
                left: priceInputs.left,
                right: formatData(e.target.value)
            }
        }
        console.log(newPrice);
        setpriceInputs(()=>newPrice);
    }
    return (
        <div className="price-filter filter"> {/* second */}
        <div className="title-container">
            <p>FILTER<br/> BY PRICE:</p>
            <div className="line"></div>
        </div>
        <div className="price-inputs">
                <input type="number" ref = {first} id="firstinput" onChange={updatePrice} min='0' defaultValue={0}/>
                <input type="number" ref = {second} id = "secondinput" onChange={updatePrice} min='0' defaultValue={10000}/>
            </div>
        </div>
    )
}

export default ProductsPriceRange
