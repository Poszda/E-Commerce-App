import React from 'react'
import { Link,useLocation } from 'react-router-dom';
import Product from '../Product/Product';
import './products.css';
//NU SCHIMBA STATEURI IN TIMPUL RENDARII , CI DOAR PE ACTIUNI
function Products({currentList}) {
    console.log(useLocation());
    console.log(currentList);
    return (
        <div className='products-container'>
            {
                currentList.map(el=><Link key={el.id} to={`/shop/${el.category}/${el.id}`}><Product key={el.id} data={el} /></Link>) // e ok pentru ca nu schimba nici un state
            }{/* el.id si la link e ok? */}
        </div>
    )
}

export default Products