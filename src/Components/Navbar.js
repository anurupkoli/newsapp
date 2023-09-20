import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary sticky-sm-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand" >
            DailyNews
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active" aria-current="page" >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link" >
                  About
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/general" className="dropdown-item" >
                      General
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/sports" className="dropdown-item" >
                      Sports
                    </NavLink>
                  </li>
                  <li>
                    <NavLink  to="/business" className="dropdown-item">
                      Business
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/entertainment"className="dropdown-item">
                      Entertainment
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/health" className="dropdown-item" >
                      Health
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/science" className="dropdown-item" >
                      Science
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/technology" className="dropdown-item">
                      Technology
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
