import React from 'react'
import {useState,useEffect} from 'react';
function ItemSlider({imgList}) {

    const [currentImg, setCurrentImg] = useState(imgList[0]);
    useEffect(() => {
        setCurrentImg(imgList[0]);
    }, [imgList])
    
    return (
    <div className="slider-container">
        <div className="slider">
            <img src={currentImg}  alt=""/> {/* ??? cum o fac sa nu mai fie asa */} 
                                             {/* currentImg === undefined? imgList[0]:currentImg wtffff */}
        </div>
        <div className="other-images">
            <div className="img-wrapper">
                <img src={imgList[0]} onClick={()=>setCurrentImg(imgList[0])} alt=""/>
            </div>
            <div className="img-wrapper">
                <img src={imgList[1]} onClick={()=>setCurrentImg(imgList[1])} alt=""/>
            </div>
            <div className="img-wrapper">
                <img src={imgList[2]} onClick={()=>setCurrentImg(imgList[2])} alt=""/>
            </div>
        </div>
    </div>
    )
}

export default ItemSlider
