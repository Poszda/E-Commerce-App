import React from 'react'
import './header.css'

function Header({title,beforetitle,aftertitle,background}) {
    console.log(background);
    return (
    <div className="header-container">
        <div className="text">
        <div className="beforetitle">{beforetitle}</div>
        <div className="title">{title}</div>
        <div className="aftertitle">
             {aftertitle}
            <div className='line'></div></div>
        </div>
        <div className="image-filter"></div>
        <img id="background" src={process.env.PUBLIC_URL + background} alt=""/>
    </div>
    )
}

export default Header
