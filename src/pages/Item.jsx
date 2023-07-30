import React from "react";
import { Component } from "react";

class Item extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="card item mb-2" id={this.props.id}>
          <div className="card-body">
            <div className="row">
              <div className="col-md-2 d-flex justify-content-center">
                <img src={this.props.img} alt="headphone" />
              </div>
              <div className="col-md-2 title d-flex align-items-center">
                {this.props.name}
              </div>
              <div className="col-md-2 price d-flex align-items-center">
                {this.props.price}
              </div>
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <h5>Quantity: 1</h5>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Item;
