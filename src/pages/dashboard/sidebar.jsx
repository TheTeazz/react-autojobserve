import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { sidebarData } from "./sidebarData";

export const Sidebar = () => {
  return (
    <div className="sidebar p-2">
      <div className="sidebar-logo mb-5  d-flex align-items-center justify-content-center">
        <p>Autojobserve</p>
      </div>

      {sidebarData.map((item, index) => {
        return (
          <Link to={item.link} key={item.id} className="sidebar-link d-flex ">
            <div className="icon d-flex align-items-center justify-content-center">
              {item.icon}
            </div>
            <div className="title">{item.title}</div>
          </Link>
        );
      })}

      <button className="sidebar-logout-btn mt-5 p-1">Log out</button>
    </div>
  );
};
