import React from "react";
import { NavLink } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { Component } from "react";

class Discover extends Component {
  headphone = document.getElementsByName("headphone");
  laptop = document.getElementsByName("laptop");
  mobile = document.getElementsByName("mobile");
  watch = document.getElementsByName("watch");
  showAll = () => {
    this.headphone.forEach((item) => {
      item.style.display = "block";
    });
    this.laptop.forEach((item) => {
      item.style.display = "block";
    });
    this.mobile.forEach((item) => {
      item.style.display = "block";
    });
    this.watch.forEach((item) => {
      item.style.display = "block";
    });
  };

  showHeadphones = () => {
    this.headphone.forEach((item) => {
      item.style.display = "block";
    });
    this.laptop.forEach((item) => {
      item.style.display = "none";
    });
    this.mobile.forEach((item) => {
      item.style.display = "none";
    });
    this.watch.forEach((item) => {
      item.style.display = "none";
    });
  };

  showLaptops = () => {
    this.headphone.forEach((item) => {
      item.style.display = "none";
    });
    this.laptop.forEach((item) => {
      item.style.display = "block";
    });
    this.mobile.forEach((item) => {
      item.style.display = "none";
    });
    this.watch.forEach((item) => {
      item.style.display = "none";
    });
  };

  showMobiles = () => {
    this.headphone.forEach((item) => {
      item.style.display = "none";
    });
    this.laptop.forEach((item) => {
      item.style.display = "none";
    });
    this.mobile.forEach((item) => {
      item.style.display = "block";
    });
    this.watch.forEach((item) => {
      item.style.display = "none";
    });
  };

  showWatches = () => {
    this.headphone.forEach((item) => {
      item.style.display = "none";
    });
    this.laptop.forEach((item) => {
      item.style.display = "none";
    });
    this.mobile.forEach((item) => {
      item.style.display = "none";
    });
    this.watch.forEach((item) => {
      item.style.display = "block";
    });
  };

  addToCart = (event) => {
    const btn = document.getElementById(event.currentTarget.id);
    const cart = document.getElementById("cart-text");
    let parent1 = btn.parentElement;
    let parent2 = parent1.parentElement;
    let firstChild = parent2.children;
    let element = {
      img: firstChild[0].firstChild.src,
      name: firstChild[1].firstChild.innerHTML,
      price: firstChild[1].children[1].lastChild.innerHTML,
    };
    let addItem = this.props.addItems;
    let removeItem = this.props.removeItem;
    if (btn.classList.contains("btn-danger")) {
      btn.classList.remove("btn-danger");
      btn.classList.remove("text-white");
      btn.innerHTML = "Add to Cart";
      removeItem(element);
    } else {
      btn.classList.add("btn-danger");
      btn.classList.add("text-white");
      btn.innerHTML = "Added to Cart";
      addItem(element);
    }
  };
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
                Categories
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav2"
                aria-controls="navbarNav2"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav2">
                <ul className="navbar-nav d-flex justify-content-around w-75">
                  <li className="nav-item active px-3">
                    <NavLink
                      className="nav-link text-decoration-none"
                      onClick={this.showAll}
                    >
                      All
                    </NavLink>
                  </li>
                  <li className="nav-item px-3">
                    <NavLink
                      className="nav-link text-decoration-none"
                      onClick={this.showHeadphones}
                    >
                      Headphones
                    </NavLink>
                  </li>
                  <li className="nav-item px-3">
                    <NavLink
                      className="nav-link text-decoration-none"
                      onClick={this.showLaptops}
                    >
                      Laptops
                    </NavLink>
                  </li>
                  <li className="nav-item px-3">
                    <NavLink
                      className="nav-link text-decoration-none"
                      onClick={this.showMobiles}
                    >
                      Mobiles
                    </NavLink>
                  </li>
                  <li className="nav-item px-3">
                    <NavLink
                      className="nav-link text-decoration-none"
                      onClick={this.showWatches}
                    >
                      Smartwatches
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <div className="products m-0 p-0">
          <div className="row m-2">
            <div name="headphone" className="card shadow-lg col-md-3 p-0 h-100">
              <div className="d-flex justify-content-center">
                <img
                  src="/images/headphone1.jpg"
                  alt="Hello"
                  className="card-img-top card-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">
                  JBL Tune 760NC
                </h5>
                <p className="card-text d-block fs-4">
                  <span className="superscript fs-6">₹</span>
                  <span>5,480</span>
                </p>
                <p className="card-text d-block">
                  Rating: <img src="/images/star5.jpg" className="rating" />
                </p>
                <p className="card-text d-block">
                  Wireless Over Ear Active Noise Cancellation Headphones with
                  Mic, up to 50 Hours Playtime, Pure Bass, Dual Pairing, AUX &
                  Voice Assistant Support for Mobile Phones (Black)
                </p>
              </div>
              <div className="card-footer d-flex justify-content-center fs-2">
                <button
                  id="btn1"
                  className="btn btn-outline-danger w-100"
                  onClick={this.addToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div name="headphone" className="card shadow-lg col-md-3 p-0 h-100">
              <div className="d-flex justify-content-center">
                <img
                  src="/images/headphone2.jpg"
                  alt="Hello"
                  className="card-img-top card-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">
                  JBL Tune 510BT
                </h5>
                <p className="card-text d-block fs-4">
                  <span className="superscript fs-6">₹</span>
                  <span>2,896</span>
                </p>
                <p className="card-text d-block">
                  Rating: <img src="/images/star4.jpg" className="rating" />
                </p>
                <p className="card-text d-block">
                  On Ear Wireless Headphones with Mic, up to 40 Hours Playtime,
                  Pure Bass, Quick Charging, Dual Pairing, Bluetooth 5.0 & Voice
                  Assistant Support for Mobile Phones (Black)
                </p>
              </div>
              <div className="card-footer d-flex justify-content-center fs-2">
                <button
                  id="btn2"
                  className="btn btn-outline-danger w-100"
                  onClick={this.addToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div name="headphone" className="card shadow-lg col-md-3 p-0 h-100">
              <div className="d-flex justify-content-center">
                <img
                  src="/images/headphone3.jpg"
                  alt="Hello"
                  className="card-img-top card-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">
                  Sony Wh-Ch510
                </h5>
                <p className="card-text d-block fs-4">
                  <span className="superscript fs-6">₹</span>
                  <span>2,690</span>
                </p>
                <p className="card-text d-block">
                  Rating: <img src="/images/star5.jpg" className="rating" />
                </p>
                <p className="card-text d-block">
                  Bluetooth Wireless On Ear Headphones Up-To 35Hrs Playtime
                  Lightweight, Type-C, Play/Pause Control, 30Mm Driver, Bt
                  Version 5.0 & Voice Assistant Support For Mobiles, with mic
                  (Blue)
                </p>
              </div>
              <div className="card-footer d-flex justify-content-center fs-2">
                <button
                  id="btn3"
                  className="btn btn-outline-danger w-100"
                  onClick={this.addToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div name="headphone" className="card shadow-lg col-md-3 p-0 h-100">
              <div className="d-flex justify-content-center">
                <img
                  src="/images/headphone4.jpg"
                  alt="Hello"
                  className="card-img-top card-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">
                  boAt Rockerz 550
                </h5>
                <p className="card-text d-block fs-4">
                  <span className="superscript fs-6">₹</span>
                  <span>1,999</span>
                </p>
                <p className="card-text d-block">
                  Rating: <img src="/images/star3.jpg" className="rating" />
                </p>
                <p className="card-text d-block">
                  Bluetooth Wireless Over Ear Headphones with Mic Upto 20 Hours
                  Playback, 50MM Drivers, Soft Padded Ear Cushions and Physical
                  Noise Isolation (Red)
                </p>
              </div>
              <div className="card-footer d-flex justify-content-center fs-2">
                <button
                  id="btn4"
                  className="btn btn-outline-danger w-100"
                  onClick={this.addToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="row m-2">
            <div name="headphone" className="card shadow-lg col-md-3 p-0 h-100">
              <div className="d-flex justify-content-center">
                <img
                  src="/images/headphone5.jpg"
                  alt="Hello"
                  className="card-img-top card-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">
                  boAt Airdopes Atom 81
                </h5>
                <p className="card-text d-block fs-4">
                  <span className="superscript fs-6">₹</span>
                  <span>1,499</span>
                </p>
                <p className="card-text d-block">
                  Rating: <img src="/images/star3.jpg" className="rating" />
                </p>
                <p className="card-text d-block">
                  True Wireless in Ear Earbuds with Upto 50H Playtime, Quad Mics
                  ENx Tech, 13MM Drivers, Beast Mode (50ms Super Low Latency),
                  ASAP Charge, BT v5.3 (Opal Black)
                </p>
              </div>
              <div className="card-footer d-flex justify-content-center fs-2">
                <button
                  id="btn5"
                  className="btn btn-outline-danger w-100"
                  onClick={this.addToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div name="headphone" className="card shadow-lg col-md-3 p-0 h-100">
              <div className="d-flex justify-content-center">
                <img
                  src="/images/headphone6.jpg"
                  alt="Hello"
                  className="card-img-top card-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">
                  Apple AirPods Pro (2nd Generation)
                </h5>
                <p className="card-text d-block fs-4">
                  <span className="superscript fs-6">₹</span>
                  <span>26,900</span>
                </p>
                <p className="card-text d-block">
                  Rating: <img src="/images/star5.jpg" className="rating" />
                </p>
                <p className="card-text d-block">
                  Active Noise Cancellation. Adaptive Transparency. Personalised
                  Spatial Audio with dynamic head tracking places sound all
                  around you. (White)
                </p>
              </div>
              <div className="card-footer d-flex justify-content-center fs-2">
                <button
                  id="btn6"
                  className="btn btn-outline-danger w-100"
                  onClick={this.addToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div name="laptop" className="card shadow-lg col-md-3 p-0 h-100">
              <div className="d-flex justify-content-center">
                <img
                  src="/images/laptop1.jpg"
                  alt="Hello"
                  className="card-img-top card-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">
                  HP Victus Gaming
                </h5>
                <p className="card-text d-block fs-4">
                  <span className="superscript fs-6">₹</span>
                  <span>55,990</span>
                </p>
                <p className="card-text d-block">
                  Rating: <img src="/images/star3.jpg" className="rating" />
                </p>
                <p className="card-text d-block">
                  AMD Ryzen 5 5600H Processor 16.1 inch(40.9 cm) FHD Gaming
                  Laptop (8GB RAM/512GB SSD/4GB Radeon RX5500M Graphics/B&O/Win
                  11/MS Office)
                </p>
              </div>
              <div className="card-footer d-flex justify-content-center fs-2">
                <button
                  id="btn7"
                  className="btn btn-outline-danger w-100"
                  onClick={this.addToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div name="laptop" className="card shadow-lg col-md-3 p-0 h-100">
              <div className="d-flex justify-content-center">
                <img
                  src="/images/laptop2.jpg"
                  alt="Hello"
                  className="card-img-top card-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">
                  Acer Nitro 5
                </h5>
                <p className="card-text d-block fs-4">
                  <span className="superscript fs-6">₹</span>
                  <span>82,990</span>
                </p>
                <p className="card-text d-block">
                  Rating: <img src="/images/star4.jpg" className="rating" />
                </p>
                <p className="card-text d-block">
                  12th Gen Intel Core Intel Core i5-12500H Processor 15.6-inch
                  FHD 144 Hz Gaming Laptop (16 GB RAM/RTX 3050 Graphics/512 GB
                  SSD/Windows 11 Home/2.5 Kgs/RGB Backlit)
                </p>
              </div>
              <div className="card-footer d-flex justify-content-center fs-2">
                <button
                  id="btn8"
                  className="btn btn-outline-danger w-100"
                  onClick={this.addToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="row m-2">
            <div name="laptop" className="card shadow-lg col-md-3 p-0 h-100">
              <div className="d-flex justify-content-center">
                <img
                  src="/images/laptop3.webp"
                  alt="Hello"
                  className="card-img-top card-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">
                  ASUS TUF Dash F15 (2022)
                </h5>
                <p className="card-text d-block fs-4">
                  <span className="superscript fs-6">₹</span>
                  <span>82,990</span>
                </p>
                <p className="card-text d-block">
                  Rating: <img src="/images/star5.jpg" className="rating" />
                </p>
                <p className="card-text d-block">
                  15.6" FHD 144Hz, Intel Core i5-12450H 12th Gen, 4GB GeForce
                  RTX 3050 Graphics, Gaming Laptop (16GB/512GB SSD/Windows
                  11/with Office/Black/2 kg), FX517ZC-HN084WS
                </p>
              </div>
              <div className="card-footer d-flex justify-content-center fs-2">
                <button
                  id="btn9"
                  className="btn btn-outline-danger w-100"
                  onClick={this.addToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div name="laptop" className="card shadow-lg col-md-3 p-0 h-100">
              <div className="d-flex justify-content-center">
                <img
                  src="/images/laptop4.jpg"
                  alt="Hello"
                  className="card-img-top card-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">
                  Hp Pavilion Gaming 15
                </h5>
                <p className="card-text d-block fs-4">
                  <span className="superscript fs-6">₹</span>
                  <span>67,490</span>
                </p>
                <p className="card-text d-block">
                  Rating: <img src="/images/star4.jpg" className="rating" />
                </p>
                <p className="card-text d-block">
                  Amd Ryzen 5 15.6 Inches Micro-Edge, Ips, Anti-Glare, Fhd
                  Display (8Gb Ram/512 Gb Ssd/144 Hz/ Rtx 3050Ti 4Gb
                  Graphics/Windows 11 Home/Ms Office), Shadow Black
                </p>
              </div>
              <div className="card-footer d-flex justify-content-center fs-2">
                <button
                  id="btn10"
                  className="btn btn-outline-danger w-100"
                  onClick={this.addToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div name="laptop" className="card shadow-lg col-md-3 p-0 h-100">
              <div className="d-flex justify-content-center">
                <img
                  src="/images/laptop5.jpg"
                  alt="Hello"
                  className="card-img-top card-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">
                  MSI Katana GF76
                </h5>
                <p className="card-text d-block fs-4">
                  <span className="superscript fs-6">₹</span>
                  <span>75,990</span>
                </p>
                <p className="card-text d-block">
                  Rating: <img src="/images/star3.jpg" className="rating" />
                </p>
                <p className="card-text d-block">
                  Intel 11th Gen. i7-11800H, 43CM FHD 144 Hz Gaming Laptop
                  (16GB/512GB NVMe SSD/Windows 11 Home/Nvidia RTX3060 6GB
                  GDDR6/Black/2.6Kg), 11UE-485IN
                </p>
              </div>
              <div className="card-footer d-flex justify-content-center fs-2">
                <button
                  id="btn11"
                  className="btn btn-outline-danger w-100"
                  onClick={this.addToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div name="laptop" className="card shadow-lg col-md-3 p-0 h-100">
              <div className="d-flex justify-content-center">
                <img
                  src="/images/laptop6.webp"
                  alt="Hello"
                  className="card-img-top card-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">
                  Acer Predator Triton 300
                </h5>
                <p className="card-text d-block fs-4">
                  <span className="superscript fs-6">₹</span>
                  <span>1,90,693</span>
                </p>
                <p className="card-text d-block">
                  Rating: <img src="/images/star5.jpg" className="rating" />
                </p>
                <p className="card-text d-block">
                  Intel i7-10750H 15.6 inches Full HD 1920x1080, LED Gaming
                  Laptop IPS 144Hz 3ms IPS Display, 16GB Dual-Channel DDR4,
                  Windows 10 Home 1TB NVMe SSD, 2.1kg
                </p>
              </div>
              <div className="card-footer d-flex justify-content-center fs-2">
                <button
                  id="btn12"
                  className="btn btn-outline-danger w-100"
                  onClick={this.addToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="row m-2">
            <div name="mobile" className="card shadow-lg col-md-3 p-0 h-100">
              <div className="d-flex justify-content-center">
                <img
                  src="/images/phone1.jpg"
                  alt="Hello"
                  className="card-img-top card-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">
                  OnePlus Nord CE 2 Lite 5G
                </h5>
                <p className="card-text d-block fs-4">
                  <span className="superscript fs-6">₹</span>
                  <span>18,999</span>
                </p>
                <p className="card-text d-block">
                  Rating: <img src="/images/star3.jpg" className="rating" />
                </p>
                <p className="card-text d-block">
                  Black Dusk, 6GB RAM, 128GB Storage. 64MP Main Camera with EIS;
                  2MP Depth Lens and 2MP Macro Lens; Front (Selfie) Camera: 16MP
                  Sony IMX471.
                </p>
              </div>
              <div className="card-footer d-flex justify-content-center fs-2">
                <button
                  id="btn13"
                  className="btn btn-outline-danger w-100"
                  onClick={this.addToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div name="mobile" className="card shadow-lg col-md-3 p-0 h-100">
              <div className="d-flex justify-content-center">
                <img
                  src="/images/phone2.jpg"
                  alt="Hello"
                  className="card-img-top card-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">
                  Google Pixel 7 Pro
                </h5>
                <p className="card-text d-block fs-4">
                  <span className="superscript fs-6">₹</span>
                  <span>76,990</span>
                </p>
                <p className="card-text d-block">
                  Rating: <img src="/images/star5.jpg" className="rating" />
                </p>
                <p className="card-text d-block">
                  Hazel, 128 GB,12 GB RAM. The Pixel 7 Pro triple rear camera
                  system includes a 5x telephoto lens. The updated ultrawide
                  lens with autofocus now powers Macro Focus.
                </p>
              </div>
              <div className="card-footer d-flex justify-content-center fs-2">
                <button
                  id="btn14"
                  className="btn btn-outline-danger w-100"
                  onClick={this.addToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div name="mobile" className="card shadow-lg col-md-3 p-0 h-100">
              <div className="d-flex justify-content-center">
                <img
                  src="/images/phone3.jpg"
                  alt="Hello"
                  className="card-img-top card-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">
                  Apple iPhone 14
                </h5>
                <p className="card-text d-block fs-4">
                  <span className="superscript fs-6">₹</span>
                  <span>70,999</span>
                </p>
                <p className="card-text d-block">
                  Rating: <img src="/images/star5.jpg" className="rating" />
                </p>
                <p className="card-text d-block">
                  256 GB, (Product) RED. 15.40 cm (6.1-inch) Super Retina XDR
                  display. Advanced camera system for better photos in any
                  light. Cinematic mode now in 4K Dolby Vision up to 30 fps.
                </p>
              </div>
              <div className="card-footer d-flex justify-content-center fs-2">
                <button
                  id="btn15"
                  className="btn btn-outline-danger w-100"
                  onClick={this.addToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div name="mobile" className="card shadow-lg col-md-3 p-0 h-100">
              <div className="d-flex justify-content-center">
                <img
                  src="/images/phone4.jpg"
                  alt="Hello"
                  className="card-img-top card-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">
                  Realme Narzo 50 Pro 5G
                </h5>
                <p className="card-text d-block fs-4">
                  <span className="superscript fs-6">₹</span>
                  <span>20,990</span>
                </p>
                <p className="card-text d-block">
                  Rating: <img src="/images/star3.jpg" className="rating" />
                </p>
                <p className="card-text d-block">
                  Hyper Black 6GB RAM+128GB Storage | Super AMOLED | Advanced
                  Dimensity 920 5G Gaming Processor | 50% Charge in 31 min |
                  Expandable Upto 256 GB
                </p>
              </div>
              <div className="card-footer d-flex justify-content-center fs-2">
                <button
                  id="btn16"
                  className="btn btn-outline-danger w-100"
                  onClick={this.addToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="row m-2">
            <div name="mobile" className="card shadow-lg col-md-3 p-0 h-100">
              <div className="d-flex justify-content-center">
                <img
                  src="/images/phone5.jpg"
                  alt="Hello"
                  className="card-img-top card-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">
                  Realme Narzo 50 Pro 5G
                </h5>
                <p className="card-text d-block fs-4">
                  <span className="superscript fs-6">₹</span>
                  <span>20,990</span>
                </p>
                <p className="card-text d-block">
                  Rating: <img src="/images/star3.jpg" className="rating" />
                </p>
                <p className="card-text d-block">
                  Hyper Blue 6GB RAM+128GB Storage | Super AMOLED | Advanced
                  Dimensity 920 5G Gaming Processor | 50% Charge in 31 min |
                  Expandable Upto 256 GB
                </p>
              </div>
              <div className="card-footer d-flex justify-content-center fs-2">
                <button
                  id="btn17"
                  className="btn btn-outline-danger w-100"
                  onClick={this.addToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div name="mobile" className="card shadow-lg col-md-3 p-0 h-100">
              <div className="d-flex justify-content-center">
                <img
                  src="/images/phone6.jpg"
                  alt="Hello"
                  className="card-img-top card-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">
                  Samsung Galaxy S23 5G
                </h5>
                <p className="card-text d-block fs-4">
                  <span className="superscript fs-6">₹</span>
                  <span>79,990</span>
                </p>
                <p className="card-text d-block">
                  Rating: <img src="/images/star5.jpg" className="rating" />
                </p>
                <p className="card-text d-block">
                  Green, 8GB, 256GB Storage. More light for your night - Get
                  ready for a Gallery full of epic night shots everyone will
                  want. Designed with the planet in mind
                </p>
              </div>
              <div className="card-footer d-flex justify-content-center fs-2">
                <button
                  id="btn18"
                  className="btn btn-outline-danger w-100"
                  onClick={this.addToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div name="watch" className="card shadow-lg col-md-3 p-0 h-100">
              <div className="d-flex justify-content-center">
                <img
                  src="/images/smartwatch1.jpg"
                  alt="Hello"
                  className="card-img-top card-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">
                  boAt Wave
                </h5>
                <p className="card-text d-block fs-4">
                  <span className="superscript fs-6">₹</span>
                  <span>1,799</span>
                </p>
                <p className="card-text d-block">
                  Rating: <img src="/images/star4.jpg" className="rating" />
                </p>
                <p className="card-text d-block">
                  Smart Talk with Advanced Dedicated Bluetooth Calling Chip,
                  1.69 HD Display with 550 NITS & 70% Color Gamut, 150+ Watch
                  Faces, Multi-Sport Modes,HR,SpO2, IP68(Active Black)
                </p>
              </div>
              <div className="card-footer d-flex justify-content-center fs-2">
                <button
                  id="btn19"
                  className="btn btn-outline-danger w-100"
                  onClick={this.addToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div name="watch" className="card shadow-lg col-md-3 p-0 h-100">
              <div className="d-flex justify-content-center">
                <img
                  src="/images/smartwatch2.webp"
                  alt="Hello"
                  className="card-img-top card-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">
                  boAt Wave Lite
                </h5>
                <p className="card-text d-block fs-4">
                  <span className="superscript fs-6">₹</span>
                  <span>1,499</span>
                </p>
                <p className="card-text d-block">
                  Rating: <img src="/images/star3.jpg" className="rating" />
                </p>
                <p className="card-text d-block">
                  1.69" HD Display, Sleek Metal Body, HR & SpO2 Level Monitor,
                  140+ Watch Faces, Activity Tracker, Multiple Sports Modes,
                  IP68 & 7 Days Battery Life(Active Black)
                </p>
              </div>
              <div className="card-footer d-flex justify-content-center fs-2">
                <button
                  id="btn20"
                  className="btn btn-outline-danger w-100"
                  onClick={this.addToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="row m-2">
            <div name="watch" className="card shadow-lg col-md-3 p-0 h-100">
              <div className="d-flex justify-content-center">
                <img
                  src="/images/smartwatch3.jpg"
                  alt="Hello"
                  className="card-img-top card-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">
                  Muktrics M1
                </h5>
                <p className="card-text d-block fs-4">
                  <span className="superscript fs-6">₹</span>
                  <span>399</span>
                </p>
                <p className="card-text d-block">
                  Rating: <img src="/images/star3.jpg" className="rating" />
                </p>
                <p className="card-text d-block">
                  Water Proof Touchscreen, Blood Pressure Tracking, Heart Rate
                  Sensor and Basic Functionality (Black)
                </p>
              </div>
              <div className="card-footer d-flex justify-content-center fs-2">
                <button
                  id="btn21"
                  className="btn btn-outline-danger w-100"
                  onClick={this.addToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div name="watch" className="card shadow-lg col-md-3 p-0 h-100">
              <div className="d-flex justify-content-center">
                <img
                  src="/images/smartwatch4.jpg"
                  alt="Hello"
                  className="card-img-top card-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">
                  Timex Fit 2.0
                </h5>
                <p className="card-text d-block fs-4">
                  <span className="superscript fs-6">₹</span>
                  <span>4,796</span>
                </p>
                <p className="card-text d-block">
                  Rating: <img src="/images/star4.jpg" className="rating" />
                </p>
                <p className="card-text d-block">
                  Multifunction Unisex smartwatch. Black Dial. Coloured Digital
                  watch. Round Dial with 45mm case width.
                </p>
              </div>
              <div className="card-footer d-flex justify-content-center fs-2">
                <button
                  id="btn22"
                  className="btn btn-outline-danger w-100"
                  onClick={this.addToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div name="watch" className="card shadow-lg col-md-3 p-0 h-100">
              <div className="d-flex justify-content-center">
                <img
                  src="/images/smartwatch5.jpg"
                  alt="Hello"
                  className="card-img-top card-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">
                  VELL - TECH Bluetooth
                </h5>
                <p className="card-text d-block fs-4">
                  <span className="superscript fs-6">₹</span>
                  <span>429</span>
                </p>
                <p className="card-text d-block">
                  Rating: <img src="/images/star3.jpg" className="rating" />
                </p>
                <p className="card-text d-block">
                  ID116 P Smart Fitness Watch for Men & Women Activity
                  Tracker/Call, Massages, Whatsapp, Facebook Alert
                </p>
              </div>
              <div className="card-footer d-flex justify-content-center fs-2">
                <button
                  id="btn23"
                  className="btn btn-outline-danger w-100"
                  onClick={this.addToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div name="watch" className="card shadow-lg col-md-3 p-0 h-100">
              <div className="d-flex justify-content-center">
                <img
                  src="/images/smartwatch6.jpg"
                  alt="Hello"
                  className="card-img-top card-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">
                  Amazfit GTS2 Mini
                </h5>
                <p className="card-text d-block fs-4">
                  <span className="superscript fs-6">₹</span>
                  <span>1,030</span>
                </p>
                <p className="card-text d-block">
                  Rating: <img src="/images/star3.jpg" className="rating" />
                </p>
                <p className="card-text d-block">
                  Smart Watch with Always-on AMOLED Display, SpO2, 14 Days'
                  Battery Life, 68 Sports Modes, Sleep & Stress Monitoring
                  (Breeze Blue)
                </p>
              </div>
              <div className="card-footer d-flex justify-content-center fs-2">
                <button
                  id="btn24"
                  className="btn btn-outline-danger w-100"
                  onClick={this.addToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="cart">
            <NavLink to="/cart">
              <BsCartFill />
              <span id="cart-text" className="cart-text fs-6 text-dark">
                {this.props.counter - 1}
              </span>
            </NavLink>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Discover;
