import React from "react";
import { Sidebar } from "./sidebar";
import "./applications.css";

export const Applications = () => {
  return (
    <div className="d-flex col-12">
      <div className="col-2 col-sm-1">
        <Sidebar />
      </div>

      <div class="col-sm-10 col-10 p-4 p-sm-3">
        <div class="">
          <div class="return">
            <button class="btn" routerLinkActive="active">
              <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
            </button>
          </div>

          <div class="px-md-5">
            <div class="pageDescription mt-4">
              <p>My Applications(18)</p>
            </div>

            <table class="table table-hover shadow">
              <thead>
                <tr>
                  <th scope="col">s/n</th>
                  <th scope="col">Job title</th>
                  <th scope="col">Location</th>
                  <th scope="col">
                    Date appplied
                    <i class="fa fa-check-circle" aria-hidden="true"></i>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td> Senior Developer</td>
                  <td> Nigeria </td>
                  <td>12/11/2022</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Angular Developer</td>
                  <td> USA </td>
                  <td>13/11/2022</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>React Developer</td>
                  <td>Canada</td>
                  <td>14/11/2022</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Vue Developer</td>
                  <td>India</td>
                  <td>15/11/2022</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Junior Frontend Developer</td>
                  <td>France</td>
                  <td>16/11/2022</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Backend Developer</td>
                  <td>Ukraine</td>
                  <td>17/11/2022</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>DevOps Engineer</td>
                  <td>South Africa</td>
                  <td>18/11/2022</td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Python Developer</td>
                  <td>Spain</td>
                  <td>19/11/2022</td>
                </tr>
              </tbody>
            </table>

            <div class="container-fluid d-flex justify-content-between">
              <button class="paginationBtn py-2 px-md-2 px-1 m-2 rounded">
                <i
                  class="d-none d-md-inline-block pagin fa fa-chevron-left"
                  aria-hidden="true"
                ></i>{" "}
                Previous
              </button>
              <p class="m-2 p-2">1/2</p>
              <button class="paginationBtn py-2 px-md-2 px-1 m-2 rounded">
                Next{" "}
                <i
                  class="d-none  d-md-inline-block pagin fa fa-chevron-right"
                  aria-hidden="true"
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
