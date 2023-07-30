import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsTwitter, BsLinkedin, BsYoutube } from "react-icons/bs";
import { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="footer d-flex flex-wrap justify-content-around align-items-center py-2 px-3 border-top">
          <p className="col-md-4 mb-0 text-muted">&copy; 2023 TechCart</p>
          <Link
            to="/"
            className="col-md-4 d-flex justify-content-center mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <span className="text-danger"> Tech</span>Cart
          </Link>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <Link
                to="https://www.instagram.com/accounts/login/"
                className="nav-link px-2 text-muted"
              >
                <BsInstagram />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
                className="nav-link px-2 text-muted"
              >
                <BsTwitter />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="https://www.youtube.com/"
                className="nav-link px-2 text-muted"
              >
                <BsYoutube />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="https://in.linkedin.com/"
                className="nav-link px-2 text-muted"
              >
                <BsLinkedin />
              </Link>
            </li>
          </ul>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
