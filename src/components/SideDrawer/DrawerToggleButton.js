import React from 'react';
import './style.css';

const DrawerToggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <span className="toggle-button__line"></span>
        <span className="toggle-button__line"></span>
        <span className="toggle-button__line"></span>
    </button>
);

export default DrawerToggleButton;