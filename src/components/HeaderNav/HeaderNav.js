import React from 'react';
import { content } from './content';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './style.css';

const HeaderNav = props => {
    return (
        <header className="navbar">
            <nav className="navbar__navigation">
                <DrawerToggleButton click={props.drawerClickHandler} />
                <div className="navbar__items">
                    {
                        content.navItems.map((nav, i) => (
                            <div key={i}><a href="/">{nav}</a></div>
                        ))
                    }
                </div>
                <div className="spacer" />
                <div className="links">
                    [placeholder for links]
                </div>
            </nav>
        </header>
    );
};

export default HeaderNav;