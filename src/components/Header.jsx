import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../App.css";
import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light mb-0 px-3">
            <div className="container-fluid">
              <a
                className="navbar-brand d-flex justify-content-start w-20"
                href="/"
              >
                <span className="text-danger">Tech</span>Cart
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav d-flex justify-content-around w-75">
                  <li className="nav-item active px-3">
                    <NavLink className="nav-link text-decoration-none" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item px-3">
                    <NavLink
                      className="nav-link text-decoration-none"
                      to="/discover"
                    >
                      Discover
                    </NavLink>
                  </li>
                  <li className="nav-item px-3">
                    <NavLink
                      className="nav-link text-decoration-none"
                      to="/contact"
                    >
                      Contact Us
                    </NavLink>
                  </li>
                  <li className="nav-item px-3">
                    <NavLink
                      className="nav-link text-decoration-none"
                      to="/about"
                    >
                      About Us
                    </NavLink>
                  </li>
                </ul>
                <div className="d-flex justify-content-end w-25">
                  <NavLink to="/login" className="login text-decoration-none">
                    <button className="btn btn-outline-danger">Login</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
