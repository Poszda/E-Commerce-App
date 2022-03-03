import React from 'react'
import './product.css';
//import img1 from '../../assets/images/img4.jpg'
function Product({data:{id,img,name,price,quantity,category}}) {
    return (
        <div className='product'>
            <img src={process.env.PUBLIC_URL + img} alt="" style={{width:'100%'}} />
            <div className="product-title">{name}</div>
            <div className="product-price">{price}</div>
        </div>
    )
}

export default Product
