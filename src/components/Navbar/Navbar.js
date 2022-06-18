import React from 'react';
import "./Navbar.css";
import IMAGES from "../../assets/images/index"

const Navbar = ()=>(
    <div>
        <div className="logo alignLeft">
            <a href="/">
                <img src={IMAGES.logo} alt="" />
            </a>
        </div>
        <div className="alignRight">
            <ul className="navs">
                <li><a href="/">Home</a></li>
                <li><a href="/">Features</a></li>
                <li><a href="/">Download</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Contact</a></li>
            </ul>  
        </div>
    </div>
)

export default Navbar;