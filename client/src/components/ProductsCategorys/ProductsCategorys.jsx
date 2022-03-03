import React from 'react'
import './productsCategorys.css'
import {Link} from 'react-router-dom';
function ProductsCategorys({categoriesList,setcategoryOption}) {
    return (
        <div className="category-filter filter"> {/* first */}
        <div className="title-container">
            <p>PRODUCT<br/>CATEGORIES:</p>
            <div className="line"></div>
        </div>
        <ul className="category-list">
            <li onClick={()=>setcategoryOption('all')} className="category-option"><Link to={`/shop/all`}>All</Link></li>
            {categoriesList.map((el,index) =><li key={index} onClick={()=>setcategoryOption(el)} className="category-option"><Link to={`/shop/${el}`}>{el.charAt(0).toUpperCase() + el.slice(1)}</Link></li>)}
        </ul>
        </div>
    )
}

export default ProductsCategorys
