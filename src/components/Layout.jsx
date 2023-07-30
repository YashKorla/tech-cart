import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Component } from "react";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Outlet />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;
