import React from 'react';
import { content } from '../HeaderNav/content';
import './style.css';

const SideDrawer = props => (
    <nav className={props.show ? "side-drawer open" : "side-drawer"}>
        <div>
        {
            content.navItems.map((nav, i) => (
                <div key={i}><a href="/">{nav}</a></div>
            ))
        }
        </div>
    </nav>
);

export default SideDrawer;