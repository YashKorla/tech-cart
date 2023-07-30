import React from "react";
import { Component } from "react";
import { IoMdContacts } from "react-icons/io";
import { Link } from "react-router-dom";

class Contact extends Component {
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
        <div className="contact-body d-flex align-items-center">
          <div className="card w-50 mx-5 shadow-lg">
            <div className="card-header d-flex justify-content-center align-items-center bg-danger text-white">
              <IoMdContacts className="icon" />
            </div>
            <div className="card-header d-flex justify-content-center align-items-center text-danger">
              <h4> Got a Query? Our experts are here to help! </h4>
            </div>
            <div className="card-body">
              <form
                className="needs-validation"
                noValidate
                method="POST"
                action="http://localhost:4000/query"
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
                    name="username"
                    required
                  />
                </div>
                <div className="input-group mb-4">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      id="validationTooltipEmailPrepend"
                    >
                      Email
                    </span>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    id="validationTooltipEmail"
                    placeholder="Eg: john.cloe@mail.com"
                    aria-describedby="validationTooltipEmailPrepend"
                    name="email"
                    required
                  />
                </div>
                <div className="input-group mb-4">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      id="validationTooltipQueryPrepend"
                    >
                      Query
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="validationTooltipQuery"
                    placeholder="Eg: Problems purchasing a product"
                    aria-describedby="validationTooltipQueryPrepend"
                    name="query"
                    required
                  />
                </div>
                <div className="d-flex justify-content-center mb-4">
                  <button
                    onClick={validate}
                    className="btn btn-outline-danger"
                    type="submit"
                  >
                    Post Query
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
