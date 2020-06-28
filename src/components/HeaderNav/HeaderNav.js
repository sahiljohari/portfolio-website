import React, { useState, useEffect } from "react";
import { content, logo } from "./content";
import SocialLinks from "../SocialLinks/SocialLinks";
import "./style.css";

const HeaderNav = ({ isHeader = true }) => {
  const mainStyle = isHeader ? "navbar" : "footer";
  const linksStyle = isHeader ? "links-header" : "links-footer";

  const [pageScrollPos, setPageScrollPos] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      setPageScrollPos(window.pageYOffset)
    );
  }, [setPageScrollPos]);

  return (
    <header className={mainStyle}>
      <nav className="navbar__navigation">
        {isHeader && (
          <>
            <div className="navbar__items">
              {pageScrollPos > 580 && <p className="logo">{logo}</p>}
              {content
                .filter((nav) => nav.show)
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
