import React from "react";
import { Sidebar } from "./sidebar";
import { sidebarData } from "./sidebarData";
import "./jobmatches.css";

export const JobMatches = () => {
  return (
    <div className="d-flex col-12 ">
      <div className="dashboard-sidebar col-2 col-sm-1">
        <Sidebar />
      </div>

      <div className="dashboard-content col-sm-11 col-10 p-5 p-sm-4">
        <div className="mb-2">
          <b>Hi Tosin, here are some jobs recommended for you</b>
        </div>

        <div className=" d-flex justify-content-center row p-1 mt-5">
          {sidebarData.map((item, index) => {
            return (
              <div className="shadow p-3 m-1 col-md-5">
                <div className="d-flex justify-content-between">
                  <div className="job-header">
                    <b className="title"> {item.title}</b>
                    <p className="location">item.location</p>
                  </div>

                  <div className="d-flex flex-column align-items-center">
                    <i className="fa fa-check-circle-o" aria-hidden="true"></i>
                    <p className="applied">Applied</p>
                  </div>
                </div>

                <div className="">
                  <h5 className=" ms-2">      
                    <b>Requirements</b>
                  </h5>

                  <ul classNameName="requirements">
                    <li>item.requirements</li>
                    <li>item.requirements</li>
                    <li>item.requirements</li>
                  </ul>
                </div>

                <div className="text-center">
                  <a className="details-bttn p-2 rounded" routerLink="/job-description">
                    View details
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
