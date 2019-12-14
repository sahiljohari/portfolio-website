import React from "react";
import { content } from "../HeaderNav/content";
import "./style.css";

const SideDrawer = props => (
  <nav className={props.show ? "side-drawer open" : "side-drawer"}>
    <div>
      {content.map((nav, i) => (
        <div key={i}>
          <a href={nav.url}>{nav.name}</a>
        </div>
      ))}
    </div>
  </nav>
);

export default SideDrawer;
