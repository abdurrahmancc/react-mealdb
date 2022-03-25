import React from "react";
import { input } from "react-bootstrap";

const Navber = ({ count }) => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg  navbar-light bg-primary">
        <div class="container-fluid mx-5">
          <a class="navbar-brand text-white" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto pe-5 mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link text-white active" href="">
                  Home
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link text-white active" href="#">
                  Contact
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link text-white active" href="#">
                  Cart <sup>{count}</sup>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link text-white active" href="#">
                  Login
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn bg-white " type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
