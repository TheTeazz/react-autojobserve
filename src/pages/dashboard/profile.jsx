import React from "react";
import { Sidebar } from "./sidebar";
import "./profile.css";

export const Profile = () => {
  return (
    <div className="d-flex col-12">
      <div className="dashboard-sidebar col-2">
        <Sidebar />
      </div>

      <div class="dashboard-content prof col-10 p-3 p-sm-4 d-md-flex flex-column align-items-center">
        <div class="personal-details d-flex flex-column flex-md-row justify-content-around align-items-center rounded p-3 col-md-8">
          <div class="mx-2">
            <div class="profile-image shadow d-flex justify-content-center align-items-center mb-2">
         
            </div>

            <div class="user-name text-center mt-4 mb-3">
              <h3 class="">John Doe</h3>
            </div>
          </div>

          <div class="line d-none d-md-inline-block"></div>

          <div class="mx-2">
            <p>
              <i class="fa fa-user pe-2" aria-hidden="true"></i>
              <span>@myusername</span>
            </p>
            <p>
              <i class="fa fa-phone pe-2" aria-hidden="true"></i>
              <span>+23456789012</span>
            </p>
            <p>
              <i class="fa fa-envelope-o pe-2" aria-hidden="true"></i>
              <span>myusername@email.com</span>
            </p>
            <p>
              <i class="fa fa-map-marker pe-2" aria-hidden="true"></i>
              <span>Lagos, Nigeria</span>
            </p>
          </div>
        </div>

        <div class="col-md-11 p-3 mt-3">
          <div class="">
            <div class="d-flex justify-content-between align-items-center">
              <h6>Professional summary</h6>
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            </div>

            <div class="d-flex summary">
              <textarea
                class="form-control me-2"
                id="exampleFormControlTextarea1"
                rows="5"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitati Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitati...
              </textarea>
              <input
                type="submit"
                value="Submit"
                class="submit py-1 px-3 text-center bttn rounded"
              />
            </div>
          </div>

          <div class="experience mt-4 ">
            <div class="d-flex justify-content-between align-items-center">
              <h6>Work experience</h6>

              <div class="controls">
                <i class="cancel fa fa-times-circle-o" aria-hidden="true"></i>
                <i class="add fa fa-plus" aria-hidden="true"></i>
              </div>
            </div>

            <div class="container new-experience rounded mb-3 p-3 d-flex flex-column justify-content-between align-items-center">
              <div class="new-role p-2 d-flex">
                <input
                  type="text"
                  name=""
                  placeholder="Enter your role"
                  id=""
                  class="col-6 mx-1"
                />
                <input
                  type="text"
                  name=""
                  placeholder="At where?"
                  id=""
                  class="col-6 mx-1"
                />
              </div>

              <div class="new-company p-2 d-flex justify-content-between">
                <div class="">
                  <label for="year" class="mx-1">
                    From:
                  </label>
                  <input
                    type="number"
                    name=""
                    placeholder="2021"
                    id="year"
                    min="2000"
                    max="2023"
                  />

                  <label for="year" class="mx-1">
                    Till:
                  </label>
                  <input
                    type="number"
                    name=""
                    placeholder="2021"
                    id="year"
                    min="2000"
                    max="2023"
                  />
                </div>
              </div>

              <button type="submit" class="bttn p-2 mt-1">
                Submit
              </button>
            </div>

            <div class="container job d-flex justify-content-between align-items-center">
              <div class="job-description">
                <p class="role m-0">Junior Frontend Developer</p>
                <p class="location">
                  <i class="fa fa-map-marker pe-3" aria-hidden="true"></i>
                  Bincom Dev Center
                </p>
              </div>

              <div class=" d-flex">
                <p class="duration">2016 - 2020</p>
                <i class="ms-1 minus fa fa-minus-circle" aria-hidden="true"></i>
              </div>
            </div>

            <div class="container job d-flex justify-content-between align-items-center mt-1">
              <div class="job-description">
                <p class="role m-0">Senior Frontend Developer</p>
                <p class="location">
                  <i class="fa fa-map-marker pe-3" aria-hidden="true"></i> Apple
                </p>
              </div>

              <div class=" d-flex">
                <p class="duration">2020 - 2022</p>
                <i class="ms-1 minus fa fa-minus-circle" aria-hidden="true"></i>
              </div>
            </div>
          </div>

          <div class="mt-4">
            <div class="d-md-flex justify-content-between">
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
                <label for="languages">Language: </label>
                <br />
                <select name="" id="languages" class="p-2">
                  <option value="">English</option>
                  <option value="">French</option>
                  <option value="">Spanish</option>
                  <option value="">Italian</option>
                  <option value="">Dutch</option>
                </select>
              </div>

              <div class="mt-4">
                <label for="skills">Skills: </label>
                <p>HTML, CSS, Javascript</p>
                <select name="" id="skills" class="p-2">
                  <option value="">Angular</option>
                  <option value="">React</option>
                  <option value="">Python</option>
                  <option value="">Vue</option>
                  <option value="">Svelte</option>
                </select>
              </div>
            </div>

            <div class="d-md-flex justify-content-between mt-4">
              <div class="mt-4">
                <label for="resume">Resume: </label>
                <br />
                <input
                  type="text"
                  name=""
                  placeholder="res@intel.net/"
                  id="resume"
                />
                <button class="resumeBtn ms-1">
                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </button>
              </div>

              <div class="d-md-flex flex-column align-items-start mt-4">
                <label for="job-type" class="mb-2">
                  Job preference:
                </label>

                <div id="job-type">
                  <div class="d-flex">
                    <input type="checkbox" name="" id="remote" class="" />
                    <label for="remote">Remote</label>
                  </div>
                  <div class="d-flex">
                    <input type="checkbox" name="" id="on-site" class="" />
                    <label for="on-site">Onsite </label>
                  </div>
                  <div class="d-flex">
                    <input type="checkbox" name="" id="hybrid" class="" />
                    <label for="hybrid">Hybrid </label>
                  </div>
                </div>
              </div>

              <div class="socials mt-4 mb-0">
                <h6>Social Accounts</h6>
                <div class="">
                  <label for="facebook" class="me-2">
                    Facebook:
                  </label>
                  <br />
                  <input
                    type="text"
                    name=""
                    placeholder="www.facebook.com/johndoe"
                    id="facebook"
                    class="me-1"
                  />
                  <input type="submit" value="OK" class="facebook p-2 rounded" />
                </div>

                <div class="">
                  <label for="linkedin" class="me-2">
                    LinkedIn:
                  </label>
                  <br />
                  <input
                    type="text"
                    name=""
                    placeholder="www.linkedIn.com/johndoe"
                    id="linkedin"
                    class="me-1"
                  />
                  <input type="submit" value="OK" class="linkedin p-2 rounded" />
                </div>

                <div class="">
                  <label for="twitter" class="me-2">
                    Twitter:
                  </label>
                  <br />
                  <input
                    type="text"
                    name=""
                    placeholder="www.twitter.com/johndoe"
                    id="twitter"
                    class="me-1"
                  />
                  <input type="submit" value="Ok" class="twitter p-2 rounded" />
                </div>
              </div>
            </div>

            <div class="mt-md-5 mt-4 d-md-flex justify-content-around align-items-center">
              <a href="http://" class="changePassword">
                change password
              </a>
              <button class="saveBtn p-3 py-md-2 mx-2 rounded">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
