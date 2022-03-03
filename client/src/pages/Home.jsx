import React from 'react'
import './home.css';
import Footer from '../components/Footer/Footer';
import MyVideo from '../assets/videos/video1.mp4';
import img1 from '../assets/images/img10_edit3.jpg';
import img2 from '../assets/images/img8.jpeg';
import img3 from '../assets/images/img11.jpg';
import img4 from '../assets/images/drone3.png';
import { BsShield,BsArrowCounterclockwise,BsPerson,BsTruck} from "react-icons/bs";
import { FaMoneyCheckAlt} from "react-icons/fa";
import {BiSupport} from 'react-icons/bi'
import {Link} from "react-router-dom";
function Home() {
    return (
        <>
        {/* section 1 */}
        <div className="home-section-1"> 
            <div className="video-wrapper">  
                <div className="video-overlay"></div>    
                <video autoPlay loop muted>
                    <source src={MyVideo} type="video/mp4" />
                </video>  
            </div>

            <div className="text">
                <div className="beforetitle">
                     PREPARE FOR THE MOST REAL JOURNEY YOU'VE EVER SEEN
                </div>
                <br/>
                <div className="title">
                         L'orem web<br/>
                         som vous atoendon,<br/>
                         simt amede <span style={{color:"#6320ee"}}>project </span>
                </div>
                <br/><br/>
                <div className="aftertitle">
                    Unrealistic design
                    <div className='line'></div>
                </div>
            </div>
        </div>
        {/* section 2 */}
        <div className="home-section-2">
            <div className="all-container">
            <div className="img-container">
                <div className="box-1">
                <img src={img1} alt="" id="img1" />
                </div>
                <div className="box-2">
                    <img src={img2} alt="" id="img2" />
                </div>
            </div>
            <div className="text-container">
            <div className="title">We combine design,<br/>thinking and craft. Get<br/>your gedgets now!</div>
            <div className="aftertitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sapiente, 
            in voluptates mollitia inventore liberoex doloribus officia commodi porro repellat alias magni 
            provident laboriosam sunt architecto rerum. Recusandae commodi laboriosam 
            repudiandae maiores quisquam, ullam sequi id, enim tempora incidunt harum impedit omnis. Iste ipsa alias similique vero 
            corporis iure?</div>
            <Link to="/shop"><div className="button">Explore shop</div></Link>
            </div>
            </div>
        </div>
        {/* section 3 */}
        <div className="home-section-3">
                <div className="title">Top Categories</div>
                <div className="aftertitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nobis doloribus aspernatur tempore impedit explicabo, 
                corporis voluptate veniam veritatis quasi voluptas doloremque. Recusandae maiores porro nam! Mollitia!</div>
                <div className="categories-container">
                    <div className="box box-1">
                    <Link to="/shop/VR">
                        <div className="box-content">
                            <img src={img3} alt="" />
                        </div>
                    </Link>
                    </div>        
                    <div className="box box-2">
                    <Link to="/shop/drones">
                        <div className="box-content">
                            <img src={img4} alt="" />
                        </div>
                    </Link>
                    </div>        
                    <div className="box box-3">
                    <Link to="/shop/drones">
                        <div className="box-content">
                            <img id="vrlink" src={process.env.PUBLIC_URL + "/images/oculus1_2.png"} alt="" />
                        </div>
                    </Link>
                    </div>
                    <div className="box box-4">
                    <Link to="/shop/robots">
                        <div className="box-content">
                            <img id="robotlink" src={process.env.PUBLIC_URL + "/images/robot1_3.png"} alt="" />
                        </div>
                    </Link>
                    </div>            
                </div>
        </div>
            <div className="home-section-4">
                <div className="title">The Best Electronic Store</div>
                <div className="aftertitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Vero nobis doloribus aspernatur tempore impedit explicabo, corporis voluptate veniam veritatis quasi voluptas doloremque. 
                Recusandae maiores porro nam! Mollitia!</div>
                <div className="box-container">
                    <div className="box">
                        <div className='icon-class'><BsTruck size={'100%'}/></div>
                        <p className="box-title">Free Shipping Online</p>
                        <p className="box-text">The best part of our program is the free and the best shipping experience</p>
                    </div>
                    <div className="box">
                        <div className='icon-class'><BiSupport size={'100%'}/></div>
                        <p className="box-title">24/7 Support</p>
                        <p className="box-text">Our support team is always ready to help you solve any banking issues</p>
                    </div>
                    <div className="box">
                        <div className='icon-class'><BsPerson size={'100%'}/></div>
                        <p className="box-title">Personal Profile</p>
                        <p className="box-text">Register your free personal profile and start using our best futures</p>
                    </div>
                    <div className="box">
                        <div className='icon-class'><BsShield size={'100%'}/></div>
                        <p className="box-title">Shop With Confidence</p>
                        <p className="box-text">Our buyer protection purchese is up from click to delivery</p>
                    </div>
                    <div className="box">
                        <div className='icon-class'><FaMoneyCheckAlt size={'100%'}/></div>
                        <p className="box-title">Money Back Garantee</p>
                        <p className="box-text">We have many countries including the USA and the UK </p>
                    </div>
                    <div className="box">
                        <div className='icon-class'><BsArrowCounterclockwise size={'100%'}/></div>
                        <p className="box-title">90 Days Return</p>
                        <p className="box-text">You can easealy return products if you don't like them in simple steps</p>
                    </div>
                </div>
            </div>
        {/* footer*/}
        <Footer />
        </>
    )
}

export default Home
