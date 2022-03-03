import React from 'react'
import './footer.css'
import { AiFillFacebook,AiOutlineInstagram,AiOutlineTwitter,AiFillYoutube } from "react-icons/ai";
import { FaPinterestSquare} from "react-icons/fa";

function Footer() {
    return (
        <footer>
        <div className="footer-container">
            <div className="section-1">
                <span className="info">
                    <p id="first">SHOP</p>
                    <p>Femei</p>
                    <p>Barbati</p>
                    <p>Barbati</p>
                    <p>Copii</p>
                </span>
                <div className="info">
                <p id="first">INFORMATII CORPORATIVE</p>
                    <p>Cariere la noi</p>
                    <p>Despre grupul nostru</p>
                    <p>Sustenabilitate</p>
                    <p>Presa</p>
                    <p>Relatii cu investitorii</p>
                    <p>Guvernare corporativa</p>
                </div>
                <div className="info">
                <p id="first">AJUTOR</p>
                    <p>Carduri cadou</p>
                    <p>Contul meu</p>
                    <p>Localizare magazin</p>
                    <p>Mentiuni legale si confidentialitate</p>
                    <p>Contact</p>
                    <p>Carduri cadou</p>
                    <p>Carduri cadou</p>
                </div>
                <div className="info">
                <p id="first">DEVINO MEMBRU</p>
                    <p>Icepe sa strangi puncte<br />pentru a obtine vouchere bonus</p>
                    <br/><br/>
                    <p><b>CITITI MAI MULTE -{'>'}</b></p>
                </div>
            </div>
            <div className="section-2">
                <AiFillFacebook/><AiOutlineTwitter/><AiOutlineInstagram/><FaPinterestSquare/><AiFillYoutube/>
            </div>
            <div className="section-3">
               <p>Conținutul acestui site este protejat de drepturile de autor și este proprietatea Technocons AB. <br/>
               Conceptul comercial al Technocons este să ofere performanta și calitate la cel mai bun<br/>
               Citit mai multe -{'>'}</p>
               <h3>Technocons</h3>
            </div>
        </div>
        </footer>
    )
}

export default Footer
