import React from 'react';
import './style.css';

const HeaderNav = () => {
    return (
        <div className="header">
            <ul className="navbar" id="nav">
                <li><a id="about" href="#about" className="active">About</a></li>
                <li><a id="career" href="#career">Career</a></li>
                <li><a id="port" href="#portfolio">Portfolio</a></li>
                <li><a id="contact" href="#contact">Contact</a></li>
            </ul>
        </div>
    );
}

export default HeaderNav;