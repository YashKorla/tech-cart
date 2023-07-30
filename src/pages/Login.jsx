import React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";

class Login extends Component {
  render() {
    const validate = (event) => {
      const form = document.querySelector(".needs-validation");
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    };

    return (
      <React.Fragment>
        <div className="login-body d-flex justify-content-center align-items-center">
          <div className="card shadow-lg m-2">
            <div className="card-header d-flex justify-content-center bg-danger text-white">
              <h3> Login </h3>
            </div>
            <div className="card-body">
              <form
                className="needs-validation"
                noValidate
                method="POST"
                action="http://localhost:4000/login"
              >
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      id="validationTooltipUsernamePrepend"
                    >
                      Username
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="validationTooltipUsername"
                    placeholder="Eg: JohnCloe"
                    aria-describedby="validationTooltipUsernamePrepend"
                    pattern="^[A-Za-z]+$"
                    name="username"
                    required
                  />
                </div>
                <div className="input-group mb-4">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      id="validationTooltipPasswordPrepend"
                    >
                      Password
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    id="validationTooltipPassword"
                    placeholder="Eg: Pass@123"
                    aria-describedby="validationTooltipPasswordPrepend"
                    pattern="^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$"
                    name="password"
                    required
                  />
                </div>
                <div className="d-flex justify-content-center mb-4">
                  <button onClick={validate} className="btn btn-outline-danger">
                    Login
                  </button>
                </div>
                <div className="d-flex justify-content-center">
                  <label>
                    Don't have an Account?
                    <NavLink
                      className="text-decoration-none text-danger"
                      to="/register"
                    >
                      {" "}
                      Sign Up
                    </NavLink>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
