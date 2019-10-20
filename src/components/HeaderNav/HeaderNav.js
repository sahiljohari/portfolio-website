import React from 'react';
import { content } from './content';
import './style.css';

const HeaderNav = () => {
    return (
        <div className="navbar">
            <div className="navItems">
                {
                    content.navItems.map((nav, i) => (
                        <div key={i}><a href="/">{nav}</a></div>
                    ))
                }
            </div>
            <div className="links">
                [placeholder for links]
            </div>
        </div>
    );
};

export default HeaderNav;