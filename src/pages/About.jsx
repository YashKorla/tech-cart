import React from "react";
import { Component } from "react";
import { RiAccountCircleFill } from "react-icons/ri";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="body d-flex justify-content-center align-items-center p-5">
          <div className="card shadow-lg m-2">
            <div className="card-header d-flex justify-content-center align-items-center">
              <RiAccountCircleFill className="icon" />
            </div>
            <div className="card-body d-flex justify-content-center align-items-center p-1">
              <h3 className="text-danger"> Yash Korla </h3>
            </div>
            <div className="card-footer">
              <label>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore fuga quis autem, quos velit neque ab obcaecati quae
                sed placeat repellat quas delectus, animi quidem? Quidem itaque
                ex quibusdam dolor?
              </label>
            </div>
          </div>

          <div className="card shadow-lg m-2">
            <div className="card-header d-flex justify-content-center align-items-center">
              <RiAccountCircleFill className="icon" />
            </div>
            <div className="card-body d-flex justify-content-center align-items-center p-1">
              <h3 className="text-danger"> Dev Mahey </h3>
            </div>
            <div className="card-footer">
              <label>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore fuga quis autem, quos velit neque ab obcaecati quae
                sed placeat repellat quas delectus, animi quidem? Quidem itaque
                ex quibusdam dolor?
              </label>
            </div>
          </div>

          <div className="card shadow-lg m-2">
            <div className="card-header d-flex justify-content-center align-items-center">
              <RiAccountCircleFill className="icon" />
            </div>
            <div className="card-body d-flex justify-content-center align-items-center p-1">
              <h3 className="text-danger"> Devang Dalvi </h3>
            </div>
            <div className="card-footer">
              <label>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore fuga quis autem, quos velit neque ab obcaecati quae
                sed placeat repellat quas delectus, animi quidem? Quidem itaque
                ex quibusdam dolor?
              </label>
            </div>
          </div>

          <div className="card shadow-lg m-2">
            <div className="card-header d-flex justify-content-center align-items-center">
              <RiAccountCircleFill className="icon" />
            </div>
            <div className="card-body d-flex justify-content-center align-items-center py-1">
              <h3 className="text-danger"> Vasu Viroja </h3>
            </div>
            <div className="card-footer">
              <label>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore fuga quis autem, quos velit neque ab obcaecati quae
                sed placeat repellat quas delectus, animi quidem? Quidem itaque
                ex quibusdam dolor?
              </label>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
