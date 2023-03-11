import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { sidebarData } from "./sidebarData";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      {sidebarData.map((item, index) => {
        return (
          <Link to={item.link} key={index}>
            <div className="icon">{item.icon}</div>
            <div className="linkText">{item.title}</div>
          </Link>
        );
      })}
    </div>
  );
};

{
  /* <li
className="low m-0 d-flex justify-content-center align-items-center p-2"
key={index}
id= { window.location.pathname == item.link ? "active" : ''}
onClick={() => {
  window.location.pathname = item.link;
}}
>
<div
  id="icon"
  className="d-flex align-items-center justify-content-center"
>
  {item.icon}
</div>
<div id="title">{item.title}</div>
</li> */
}
