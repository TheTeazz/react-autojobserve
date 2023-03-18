import React from "react";
import { Sidebar } from "./sidebar";
import "./autoApply.css";

export const AutoApply = () => {
  return (
    <div className="d-flex col-12">
      <div className="col-2 col-sm-1">
        <Sidebar />
      </div>

      <div class=" col-sm-11 col-10 px-md-5 p-4">
        <div class="mt-3">
          <div class="return">
            <button class="btn" routerLinkActive="active">
              <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
            </button>
          </div>

          <div class=" container m-3 content">
            <div class="">
              <p>Do you want AutoJobServe to apply to jobs for you?</p>

              <form action="">
                <input type="radio" name="select" id="yes" value="yes" />
                <label for="yes">Yes</label>
                <br />

                <input type="radio" name="select" id="no" value="no" />
                <label for="no">No</label>
              </form>
            </div>

            <div class="d-flex flex-column align-items-start justify-content-around">
              <div class="mt-4">
                <label for="job-title">Job Title: </label>
                <br />
                <select name="" id="job-title" class="p-2">
                  <option value="">Frontend developer</option>
                  <option value="">Backend developer</option>
                  <option value="">Angular developer</option>
                  <option value="">React developer</option>
                  <option value="">DevOps Engineer</option>
                </select>
              </div>

              <div class="mt-4">
                <label for="languages">Location </label>
                <br />
                <select name="" id="languages" class="p-2">
                  <option value="">England</option>
                  <option value="">France</option>
                  <option value="">Spain</option>
                  <option value="">Italy</option>
                  <option value="">Netherlands</option>
                </select>
              </div>

              <div class="d-md-flex flex-column align-items-start mt-4">
                <label for="job-type" class="mb-2">
                  job preference:
                </label>

                <div class="job-type">
                  <div class="d-flex">
                    <input type="checkbox" name="" id="remote" class="me-1" />
                    <label for="remote">Remote</label>
                  </div>
                  <div class="d-flex">
                    <input type="checkbox" name="" id="on-site" class="me-1" />
                    <label for="on-site">Onsite </label>
                  </div>
                  <div class="d-flex">
                    <input type="checkbox" name="" id="hybrid" class="me-1" />
                    <label for="hybrid">Hybrid </label>
                  </div>
                </div>
              </div>

              <div class="container-fluid col-8 mt-4">
                <button class="saveBtn p-3 p-md-3 mx-2 rounded">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
