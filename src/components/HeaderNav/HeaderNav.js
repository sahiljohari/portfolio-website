import React from "react";
import { content } from "./content";
import SocialLinks from "../SocialLinks/SocialLinks";
import "./style.css";

const HeaderNav = () => {
  return (
    <header className="navbar">
      <nav className="navbar__navigation">
        <div className="navbar__items">
          {content
            .filter(nav => nav.show)
            .map((nav, i) => (
              <div className="nav__item" key={i}>
                <a href={nav.url}>
                  <i className={nav.type}></i>
                  <p>{nav.name}</p>
                </a>
              </div>
            ))}
        </div>
        <div className="spacer" />
        <div className="links">
          <SocialLinks />
        </div>
      </nav>
    </header>
  );
};

export default HeaderNav;
