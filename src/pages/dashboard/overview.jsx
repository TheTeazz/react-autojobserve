import React from "react";
import { Sidebar } from "./sidebar";
import "./overview.css";

export const Overview = () => {
  return (
    <div className="overview d-flex col-12">

      <div className="sid col-2">
        <Sidebar></Sidebar>
      </div>

      <div class="main col-10 p-4">
        <div class="col-5 mt-3">
          <p class="welcome-back-text mt-4">Welcome back, Tosin</p>
        </div>

        <div class="d-flex align-items-center justify-content-center mt-3 text-center">
          <div class="col-6 col-sm-4 left p-2 p-md-3 my-2 mx-2">
            <h2 class="value fw-bold">15</h2>
            <p>Job matches</p>
          </div>
          <div class="col-6 col-sm-4 right p-2 p-md-3 my-2 mx-2">
            <h2 class="value fw-bold">35</h2>
            <p>Job applications</p>
          </div>
        </div>

        <div class="rec col mt-1 p-md-3">
          <p class="head fs-6 fw-bold">Recent job matches</p>

          <div class="table">
            <table class="table table-hover table-md shadow">
              <caption class="caption">List of Job matches</caption>
              <thead class="thead-dark">
                <tr class="">
                  <th scope="col">#</th>
                  <th scope="col">Job title</th>
                  <th scope="col">Company</th>
                  <th scope="col">Job location</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Data Scientist</td>
                  <td>Bincom</td>
                  <td>Lagos</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Data Analyst</td>
                  <td>Microsoft</td>
                  <td>Ibadan</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Frontend Dev</td>
                  <td>Interswitch</td>
                  <td>Port-Harcourt</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Backend dev</td>
                  <td>Meta</td>
                  <td>Akure</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Full stack dev</td>
                  <td>Google</td>
                  <td>Lagos</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
