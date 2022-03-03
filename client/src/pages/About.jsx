import React from 'react'
import './about.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CountUp from 'react-countup';
import img1 from '../assets/images/middle_image.jpeg';
import storyimg1 from '../assets/images/story1.jpg';
import storyimg2 from '../assets/images/story3.jpeg';
import storyimg3 from '../assets/images/story5.jpeg';
import productsIcon from '../assets/images/icons/products2.png';
import customersIcon from '../assets/images/icons/customer2.png';
import workersIcon from '../assets/images/icons/team.png';
import {GiOpenBook,GiElectric} from "react-icons/gi";
import {MdDesignServices} from "react-icons/md";
import {useState,useEffect,useRef} from 'react';
function About() {
    const ref = useRef();
    const [startCounter, setStartCounter] = useState(false); // start when entering in viewport
    useEffect(() => { 
        function callback([entry]){
            if(startCounter === false)setStartCounter(entry.isIntersecting);
        }
        const observer = new IntersectionObserver(callback, {root:null,rootMargin: '0px',threshold: 0.5});
        observer.observe(ref.current);
    }, [])
    
    return (
        <div>
            <Header 
            title='Engineers, Designers and Collaborators'
            beforetitle = 'WHO WE ARE'
            aftertitle = 'PROUDLY THANKFUL OF OUR PRECIOUS WORK'
            background = '/images/someimage4.jpg'
            />
            <div className="about-section-1">
                    <div className="container">
                        <h1>All the love for technology</h1>
                        <div className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, odit sunt et pariatur facilis
                        nam illum ab expedita repellat harum natus, atque, neque obcaecati corporis veritatis! Enim quod ullam
                        voluptas saepe assumenda. Provident facilis explicabo sunt vitae eius delectus quo fugiat fuga! Ipsam 
                        itaque explicabo aut dolorem odio rem laudantium temporibus vitae facere illum nemo qui, soluta doloribus
                        commodi labore voluptatem nobis, libero magnam iste fugit assumenda! Nihil atque libero, incidunt 
                        consequuntur cupiditate maxime porro a eligendi quia asperiores dolorum nam, maiores repellendus!
                        Omnis nemo recusandae nam optio voluptates aspernatur asperiores ad esse impedit reprehenderit
                        incidunt, corrupti ipsa molestias consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Quibusdam est odio deleniti cumque magnam sit assumenda consequatur, ipsa, voluptatem laborum nihil quis 
                        dolor dolores quo inventore incidunt ipsum? Illum, magni in. Quidem fuga quam reiciendis quae quo maxime
                         facere aliquam, dignissimos voluptas sequi odit cupiditate perferendis nulla dolorum suscipit, repudiandae
                        iste hic vel officiis atque! Eius veniam earum dicta, consectetur maiores est! Laudantium possimus 
                        accusantium quisquam sint deleniti officia sequi, aliquid, et, ab reiciendis veritatis? Accusantium, 
                        deleniti. Deleniti debitis quo sequi, ipsum necessitatibus exercitationem? Repellat consectetur aperiam, 
                        accusantium fugit provident exercitationem esse, ad quis suscipit, ea omnis natus harum quidem impedit ut.
                        Aliquid ab dolorum debitis itaque, nesciunt tenetur asperiores ipsam nobis tempora. Iure cupiditate aliquam 
                        magnam eaque minus id dolores aspernatur ipsum, totam quae, maiores molestias commodi, quis doloribus ut nobis 
                        neque animi eum repudiandae dolorum repellat corrupti pariatur ad? Harum molestias nulla recusandae cupiditate 
                        quod, perferendis debitis? Nesciunt adipisci quo id repudiandae esse dolor, ad magnam quas itaque dolores iure
                        vero molestiae consequatur dolore commodi eos odit voluptatibus vel quisquam, corporis quia enim! Fugit sequi
                        voluptatem reiciendis ducimus repellendus unde at amet similique provident odio. Nobis nisi repellendus
                        voluptatibus, similique magni molestiae dicta deleniti voluptatum qui distinctio quaerat optio labore maxime
                        eos perferendis modi ratione quod pariatur excepturi assumenda. Laboriosam natus, eveniet ullam quos suscipit illo.
                        Aliquam, ducimus optio. Commodi, eos excepturi.
                        </div>
                        <img id="middle-image" src={img1} alt="" />
                        <div className="text-grid">
                                <div className="text-grid-child">
                                    <div className="title"> <GiOpenBook style={{color:"#6320ee",fontSize:'20px'}}/> Storytelling</div>
                                    <div className="content">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, 
                                    et ex blanditiis pariatur quam omnis quae facilis commodi tenetur accusantium.
                                    Totam quo, asperiores reprehenderit, quas natus ipsum neque excepturi aliquam animi itaque 
                                    error facilis addeserunt
                                    </div>
                                </div>
                                <div className="text-grid-child">
                                    <div className="title"><GiElectric style={{color:"#6320ee",fontSize:'20px'}}/>Technology</div>
                                    <div className="content">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, 
                                    et ex blanditiis pariatur quam omnis quae facilis commodi tenetur accusantium.
                                    Totam quo, asperiores reprehenderit, quas natus ipsum neque excepturi aliquam animi itaque 
                                    error facilis addeserun
                                    </div>
                                </div>
                                <div className="text-grid-child">
                                    <div className="title"><MdDesignServices style={{color:"#6320ee",fontSize:'20px'}}/>Design &bull; Craft</div>
                                    <div className="content">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, 
                                    et ex blanditiis pariatur quam omnis quae facilis commodi tenetur accusantium.
                                    Totam quo, asperiores reprehenderit, quas natus ipsum neque excepturi aliquam animi itaque 
                                    error facilis addeserun
                                    </div>
                                </div>
                        </div>
                    </div>
            </div>

            <div ref={ref} className="about-section-2">
            <div className="title">Excelent Results</div>
            <div className="aftertitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nobis doloribus aspernatur tempore impedit explicabo, 
                corporis voluptate veniam veritatis quasi voluptas doloremque. Recusandae maiores porro nam! Mollitia!</div>
                <div className="container">
                    <div className="box box-1">
                        <div className="box-number">{startCounter?<CountUp start={0} end={2500} duration={2} suffix={"+"}/>:<p>0</p>}</div>
                        <div className="box-title">Customers</div>
                        <div className="box-icon"><img src={customersIcon} alt="" /></div>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="box box-1">
                        <div className="box-number">{startCounter?<CountUp start={0} end={300} duration={2} suffix={"+"}/>:<p>0</p>}</div>
                        <div className="box-title">Hi-Tech Products</div>
                        <div className="box-icon"><img src={productsIcon} alt="" /></div>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="box box-3">
                        <div className="box-number">{startCounter?<CountUp start={0} end={500} duration={2} suffix={"+"}/>:<p>0</p>}</div>
                        <div className="box-title">Brilliant Workers</div>
                        <div className="box-icon"><img src={workersIcon} alt="" /></div>
                    </div>
                </div>
            </div>

            <div className="about-section-3">
            <div className="title">Our Stories</div>
            <div className="aftertitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nobis doloribus aspernatur tempore impedit explicabo, 
                corporis voluptate veniam veritatis quasi voluptas doloremque. Recusandae maiores porro nam! Mollitia!</div>
                <div className="container">
                    <div className="story-box">
                        <div className="story-box-img">
                            <img src={storyimg1} alt=""/>
                        </div>
                        <div className="story-box-text-container">
                            <div className="story-box-beforetitle">INSIDE</div>
                            <div className="story-box-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, tempore.</div>
                            <div className="story-box-button">Read the story &#8594;</div>
                        </div>
                    </div>
                    <div className="story-box">
                        <div className="story-box-img">
                            <img src={storyimg2} alt=""/>
                        </div>
                        <div className="story-box-text-container">
                            <div className="story-box-beforetitle">INSIDE</div>
                            <div className="story-box-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, tempore.</div>
                            <div className="story-box-button">Read the story &#8594;</div>
                        </div>
                    </div>
                    <div className="story-box">
                        <div className="story-box-img">
                            <img src={storyimg3} alt=""/>
                        </div>
                        <div className="story-box-text-container">
                            <div className="story-box-beforetitle">INSIDE</div>
                            <div className="story-box-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, tempore.</div>
                            <div className="story-box-button">Read the story &#8594;</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default About;