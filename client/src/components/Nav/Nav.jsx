import React from 'react'
import './nav.css'
import {Link} from "react-router-dom";
import {useState} from 'react';
function Nav() {
    //STATES
    const [menuView,setMenuView] = useState(false);
    //FUNCTIONS
    const openMenu = () => {
        setMenuView(!menuView);
        console.log(menuView);
    }
    //JSX and LOGIC
    return (
        <div className={menuView ? 'navbar active' : 'navbar' }>
            <div className="navbar-header">
                 <h3>Technocons</h3>
                <div onClick={openMenu} className={menuView ? 'navbar-button active' : 'navbar-button' }>
                    <div className="bar"></div>
                    <div className="bar"></div>
                 </div>
            </div>

            <div className={menuView ? 'navbar-container active' : 'navbar-container' }>
                <div className={menuView?"navbar-container-left active" : 'navbar-container-left'} >
                    <ul>
                        <Link to="/" onClick={openMenu}><li>Home</li></Link>
                        <Link to="/about" onClick={openMenu}><li>About</li></Link>
                        <Link to="/shop" onClick={openMenu}><li>Shop</li></Link>
                        <Link to="/shopping-cart" onClick={openMenu}><li>Shopping Cart</li></Link>
                    </ul>
                </div>
                <div className={menuView?"navbar-container-right active" : 'navbar-container-right'}>
                    <div className="navbar-container-right-section-1">
                        
                        <div className="title">
                             <div className="beforetitle">WE ARE TECHNOCONS</div>
                            Let's create your<br />online<br />succes together
                            </div>
                        <div className="phonenumbers">+4070367482</div>
                        <div className="phonenumbers">+4070367482</div>
                        <div className="emails">technoconscontact@technocons.com</div>
                        <div className="adress">41 Peabody St, Nashville, TN 37210</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Nav
