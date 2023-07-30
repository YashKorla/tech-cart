import React, { Component } from "react";
import Item from "./Item";

class Cart extends Component {
  confirmOrder = () => {
    alert("Order Confirmed! Please pay by cash/upi on delivery!");
    this.props.clearCart();
  };
  render() {
    const cartItems = this.props.cartItems;
    const total = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(this.props.total);
    return (
      <React.Fragment>
        <div className="card cart-page">
          <div className="card-header d-flex justify-content-center">
            <h1>Items in the Cart</h1>
          </div>
          <div className="card-body w-100">
            {cartItems.map((c) => (
              <Item
                key={c.id}
                id={c.id}
                img={c.img}
                name={c.name}
                price={c.price}
              />
            ))}
          </div>
          <div className="card-footer bill w-100 bg-white">
            <h5> Total Bill: {total} </h5>
            <button
              className="btn btn-outline-danger"
              onClick={this.confirmOrder}
              disabled={total == "₹0.00" ? true : false}
            >
              Confirm Order
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;
