import React from "react";

import { Link } from "react-router-dom";

import playstore from "../assets/images/pay/play.jpg";
import appstore from "../assets/images/pay/app.jpg";
import visa from "../assets/images/pay/pay.png";

const footer = () => {
  return (
    <>
      <footer className=" p-5">
        <div className="container-xxl">
          <div className="row justify-content-center justify-content-md-start">
            <div className="col-md-4 col-lg-4 mb-4 mb-md-0 ">
              <h2 className="footer-title mb-3">
                <b>Contact</b>
              </h2>
              <div className="mb-3">
                <p>
                  <b>Address:</b> Victoria
                </p>{" "}
              </div>
              <div className="mb-3">
                <p>
                  <b>Phone:</b>{" "}
                  <a className="footer-tel" href="tel:+12508637378">
                    Call us at +1 (250) 8637378
                  </a>
                </p>{" "}
              </div>
              <div className="mb-4">
                <p>
                  <b>Hours:</b> From 8 a.m To 6 p.m
                </p>{" "}
              </div>
            </div>
            <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
              <h2 className="footer-title mb-3">
                <b>About</b>
              </h2>
              <div className="mb-3">
                {" "}
                <Link to="/about" id="footer-links">
                  About Us
                </Link>{" "}
              </div>
              <div className="mb-3">
                {" "}
                <Link to="checkout" id="footer-links">
                  Delivery
                </Link>{" "}
              </div>
              <div className="mb-3">
                {" "}
                <Link id="footer-links">Privacy Policy</Link>{" "}
              </div>
            </div>
            <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
              <h2 className="footer-title mb-3">
                <b>Account</b>
              </h2>
              <div className="mb-3">
                {" "}
                <Link to="/login" id="footer-links">
                  Profile
                </Link>{" "}
              </div>
              <div className="mb-3">
                {" "}
                <Link to="/cart" id="footer-links">
                  View Cart
                </Link>{" "}
              </div>
              <div className="mb-3">
                {" "}
                <Link to="/contact" id="footer-links">
                  Help
                </Link>{" "}
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <h2 className="footer-title mb-3">
                <b>Install App</b>
              </h2>
              <p className="mb-3">
                Available On Google Play Services & App Store
              </p>
              <div className="className='mb-3 col-md-6 col-12 pay">
                <div className="mb-3">
                  <Link
                    to="https://play.google.com/store/games?hl=en_US&gl=US"
                    target="_blank"
                  >
                    <img src={playstore} alt="" />
                  </Link>
                </div>
                <div className="mb-3">
                  <Link to="https://www.apple.com/app-store/" target="_blank">
                    <img src={appstore} alt="" />
                  </Link>
                </div>
              </div>
              <p className="mb-3">Payment Methods</p>
              <div className="pay">
                <Link to="https://www.paypal.com/signin" target="_blank">
                  <img src={visa} alt="" />
                </Link>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="row">
            <div className="col-12 col-md-6">
              <p className="text-center text-md-start">
                &copy;Developed by Shamim 2023
              </p>
            </div>
            <div className="col-12 col-md-6">
              <ul className="list-inline text-center text-md-end">
                <li className="list-inline-item">
                  <Link to="#" className="text-dark">
                    Terms of Use
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="text-dark">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
