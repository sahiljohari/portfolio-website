import React from "react";
import { content } from "./content";
import SocialLinks from "../SocialLinks/SocialLinks";
import "./style.css";

const HeaderNav = ({ isHeader = true }) => {
  const mainStyle = isHeader ? "navbar" : "footer";
  const linksStyle = isHeader ? "links-header" : "links-footer";
  return (
    <header className={mainStyle}>
      <nav className="navbar__navigation">
        {isHeader && (
          <>
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
          </>
        )}
        <div className={linksStyle}>
          <SocialLinks />
        </div>
      </nav>
    </header>
  );
};

export default HeaderNav;
