import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import "./Hero.css";
import IMAGES from '../../assets/images';
const Hero = ()=>(
    <section className="heroSection" style={{backgroundImage:`url(${IMAGES.bannerback})`}}>
        <div className="container">
        <Navbar/>
        <div className="cta">
            <div className="cta-iphone">
                <img src={IMAGES.iphone} alt="" />
            </div>
            <div className="cta-cont">
                <h2>Chocolate pudding dessert jelly</h2>
                <p>Fruitcake donut gummies. Candy liquorice biscuit. Sugar plum jelly gummi bears brownie toffee cupcake caramels brownie cookie.</p>   
            </div>
        </div>
        </div>
    </section>
)

export default Hero;