import React from 'react';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import { Component } from 'react';

class App extends Component {
  state = {
    counter: 1,
    cartItems: [],
    total: 0
  }
  addItems = item => {
    let cartItems = [...this.state.cartItems];
    let counter = this.state.counter;
    let total = this.state.total;
    item["id"] = counter;
    cartItems.push(item);
    counter++;
    let price = item["price"].split(",");
    if(price.length == 2) {
      price[0] *= 1000;
    }
    else {
      price[0] *= 100000;
      price[1] *= 1000;
    }
    total += price.reduce((a, b) => parseInt(a) + parseInt(b), 0);
    this.setState({counter, cartItems, total});
  }
  clearCart = () => {
    let cartItems = [...this.state.cartItems];
    let counter = this.state.counter;
    let total = this.state.total;
    cartItems = [];
    counter = 1;
    total = 0;
    this.setState({counter, cartItems, total});
  }
  removeItem = item => {
    let cartItems = [...this.state.cartItems];
    let counter = this.state.counter;
    let total = 0;
    cartItems = cartItems.filter(c => c["img"] !== item["img"]);
    counter--;
    cartItems.forEach((c) => {
      let price = c["price"].split(",");
      if(price.length == 2) {
        price[0] *= 1000;
      }
      else {
        price[0] *= 100000;
        price[1] *= 1000;
      }
      total += price.reduce((a, b) => parseInt(a) + parseInt(b), 0);
    });
    console.log(cartItems);
    this.setState({counter, cartItems, total});
  }
  setTotal = total => {
    this.setState({total});
  }
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route path = '/' element = {<Layout />}>
              <Route index element = {<Home />} />
              <Route path = 'discover' element = {<Discover counter={this.state.counter} addItems={this.addItems} removeItem={this.removeItem} />} />
              <Route path = 'about' element = {<About />} />
              <Route path = 'contact' element = {<Contact />} />
              <Route path = 'login' element = {<Login />} />
              <Route path = 'register' element = {<Register />} />
              <Route path = 'cart' element = {<Cart cartItems={this.state.cartItems} total={this.state.total} clearCart={this.clearCart} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    );
  };
}

export default App;
