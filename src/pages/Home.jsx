import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="bg-image">
          <span className="home-text d-none">
            {" "}
            Welcome to <span className="text-danger">Tech</span>Cart <br />
            <Link to="/discover" className="text-decoration-none text-dark">
              <button className="btn btn-outline-danger">
                {" "}
                View Products{" "}
              </button>
            </Link>
          </span>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
