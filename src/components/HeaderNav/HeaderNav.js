import React from 'react';
import { content } from './content';
import './style.css';

const HeaderNav = () => {
    return (
        <div className="navbar">
            {
                content.map((nav, i) => (
                    <div key={i}><a href="/">{nav}</a></div>
                ))
            }
        </div>
    );
};

export default HeaderNav;