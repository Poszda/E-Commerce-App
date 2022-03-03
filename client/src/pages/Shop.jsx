import React from 'react'
import './shop.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Products from '../components/Products/Products';
import ProductsCategorys from '../components/ProductsCategorys/ProductsCategorys';
import ProductsPriceRange from '../components/ProductsPriceRange/ProductsPriceRange';
//import {productsList} from '../assets/data/data';
import {useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Shop() {

    //VARIABLES

    const URLcategory = useParams().id; // categoria din url

    //HOOKS
    const [productsList, setProductsList] = useState([]);
    const [currentList, setCurrentList] = useState([]);
    const [categoriesList, setCategoriesList] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    
    const [searchInput, setSearchInput] = useState('');
    const [sortOption, setSortOption] = useState('default');
    const [productsFinded, setProductsFinded] = useState(0)
    const [categoryOption, setCategoryOption] = useState(URLcategory!==undefined?URLcategory:'all');// ruta curenta
    const [priceInputs, setPriceInputs] = useState({left:0,right:10000})

    useEffect(() => {
        axios.get("http://localhost:3002/getproductslist").then((response) =>{
            setProductsList(response.data);
            setCurrentList(response.data);
            setCategoriesList(Array.from(new Set(response.data.map(el=>el.category))));
            setIsFetching(false);
          });
    }, [])

    useEffect(() => {
        //filter by search
        let originalList = [...productsList]; //primeste mereu lista originala si face din nou toate filtrele necesare
        if(searchInput!=='') 
        originalList = originalList.filter(el => el.name.toLowerCase().includes(searchInput.toLowerCase()));

        // sort by price
        if(sortOption === 'lower')
        originalList.sort((a,b) => parseFloat(a.price.substring(0, a.price.length - 1)) - parseFloat(b.price.substring(0, b.price.length - 1)));
        else if(sortOption === 'higher')
        originalList.sort((a,b) => parseFloat(b.price.substring(0, b.price.length - 1)) - parseFloat(a.price.substring(0, a.price.length - 1)));
        
        // filter by category
        if(categoryOption !== 'all')
        originalList = originalList.filter(el => el.category === categoryOption);
        
        //filter by price
        originalList = originalList.filter(el => parseFloat(el.price.substring(0, el.price.length - 1)) >= priceInputs.left &&
        parseFloat(el.price.substring(0, el.price.length - 1)) <= priceInputs.right);

        //update states
        setCurrentList(originalList);
        setProductsFinded(originalList.length);
    }, [sortOption,searchInput,categoryOption,priceInputs,isFetching])

    return (
        <div>
            <Header 
            title='Shop with us'
            beforetitle = 'ENJOY SHOPPING'
            aftertitle = 'BRING HIGH TECH IN YOUR HOME'
            background = '/images/shoppage2.jpg'
            />
            <div className="shop-section-1">
            <div className="container">
                <div className="container-left">
                    <ProductsCategorys categoriesList={categoriesList} setcategoryOption={setCategoryOption}/>
                    <ProductsPriceRange setpriceInputs={setPriceInputs} priceInputs={priceInputs}/>
                </div>
                <div className="container-right">
                    <div className="right-filter">
                    
                    <p>Products:{productsFinded}</p>
                    <div className="sorter-and-search">
                    <select id="sorter" onChange={(e)=>setSortOption(e.target.value)}>
                    <option value="default">Default</option>
                    <option value="lower">Lower Price</option>
                    <option value="higher">Higher Price</option>
                    </select>  
                    <input onChange={(e)=>setSearchInput(e.target.value)} type="text" placeholder="Search a product" name="fname" />
                    </div> 
                    </div>
                    <Products currentList={currentList}/>
                </div>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Shop