/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blog1 from "../assets/images/blog/blog-1.jpg";
import blog2 from "../assets/images/blog/blog-2.jpg";
import blog3 from "../assets/images/blog/blog-3.jpg";
import blog4 from "../assets/images/blog/blog-4.jpg";
import about5 from "../assets/images/about/eCommerce-Cartoon.png";
import video from "../assets/images/about/1.mp4";
import Marquee from "react-fast-marquee";
import orders from "../assets/images/icons/icon1.png";
import orders1 from "../assets/images/icons/icon2.png";
import orders2 from "../assets/images/icons/icon3.png";
import orders3 from "../assets/images/icons/icon4.png";
import orders4 from "../assets/images/icons/icon5.png";
import r1 from "../assets/images/about/r1.jpg";
import r2 from "../assets/images/about/r2.jpg";
import r3 from "../assets/images/about/r3.jpg";
import r4 from "../assets/images/about/r4.jpg";
import r5 from "../assets/images/about/r5.jpeg";
import r6 from "../assets/images/about/r6.jpg";

import mobileImage from "../assets/images/mobileimage.jpg";
const about = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check the screen width on component mount and when it's resized
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Call the handleResize function initially
    handleResize();

    // Add an event listener to handle screen resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <section className="about-wrapper p-5 d-flex justify-content-center align-items-center">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="shop-details text-center align-items-center">
                <h1 className="text-white">#Know Us</h1>
                <p className="text-white fs-3">Get to know us more</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us p-5">
        <div className="row">
          <div className="col-md-6">
            <img src={about5} alt="" className="img-fluid p-5" />
          </div>
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
            <h1>
              <b>Why Shoppers?</b>
            </h1>

            <ol className="card-text">
              <li>
                <p className="list-item" style={{ fontSize: "18px" }}>
                  <strong>Extensive Product Range:</strong> Explore a vast
                  collection of products ranging from fashion and electronics to
                  home decor and lifestyle essentials. Our carefully curated
                  inventory ensures that you find exactly what you're looking
                  for, and perhaps even discover something new!
                </p>
              </li>
              <li>
                <p className="list-item" style={{ fontSize: "18px" }}>
                  <strong>Quality Assurance:</strong> We believe in delivering
                  products that not only meet but exceed your expectations.
                  Every item on Shoppers undergoes a stringent quality check,
                  ensuring you receive only the best.
                </p>
              </li>
              <li>
                <p className="list-item" style={{ fontSize: "18px" }}>
                  <strong>User-Friendly Interface:</strong> Navigating our
                  website is a seamless experience. Our user-friendly interface
                  allows you to browse effortlessly, find products with ease,
                  and complete your purchase in just a few clicks.
                </p>
              </li>

              <li>
                <p className="list-item" style={{ fontSize: "18px" }}>
                  <strong>Prompt Delivery:</strong> We understand that waiting
                  for your order can be exciting. That's why we've partnered
                  with reliable shipping services to bring your purchases to
                  your doorstep swiftly. Expect nothing less than prompt and
                  reliable delivery.
                </p>
              </li>
              <li>
                <p className="list-item" style={{ fontSize: "18px" }}>
                  <strong>Customer-Centric Support:</strong> Have questions or
                  need assistance? Our dedicated customer support team is here
                  to help. We pride ourselves on being responsive and committed
                  to resolving any queries you may have.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="abouts p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 d-flex flex-column align-items-center">
              <h1 className="mb-3">What our customers say...</h1>
            </div>
            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={r1}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Emily White</h5>
                      <p className="card-text mb-3">
                        Shoppers offers an incredible variety of products, and
                        each item I've purchased has exceeded my expectations in
                        terms of quality. It's my go-to place for finding unique
                        and reliable products.
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={r2} alt="" className="img-fluid rounded-start" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Michael Anderson</h5>
                      <p className="card-text mb-3">
                        Navigating through the Shoppers website is a breeze. The
                        user-friendly interface makes it easy to find what I'm
                        looking for, and the checkout process is quick and
                        efficient. I appreciate the seamless shopping
                        experience.
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last Updated now
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={r3} alt="" className="img-fluid rounded-start" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Sarah Taylor</h5>
                      <p className="card-text mb-3">
                        Shoppers consistently delivers my orders on time, if not
                        earlier. Their commitment to reliable shipping is
                        commendable. I can always count on receiving my items
                        when I need them.
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last Updated now
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={r4} alt="" className="img-fluid rounded-start" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Christopher Smith</h5>
                      <p className="card-text mb-3">
                        I had a query about one of my orders, and the Shoppers
                        customer service team was incredibly responsive and
                        helpful. They resolved my issue promptly, and their
                        dedication to customer satisfaction is evident.
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last Updated now
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={r5} alt="" className="img-fluid rounded-start" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Matthew Wilson</h5>
                      <p className="card-text mb-3">
                        Shoppers regularly offers amazing deals and discounts. I
                        love being able to snag quality products at affordable
                        prices. It's a great incentive for me to keep coming
                        back.
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last Updated now
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={r6}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Jena Wlton</h5>
                      <p className="card-text mb-3">
                        Security is a top priority for me when shopping online,
                        and Shoppers has consistently provided a secure platform
                        for transactions. I feel confident knowing that my
                        personal information is handled with care.
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 p-3">
              <Marquee className="p-2 slide">
                <div>
                  <img src={orders} alt="" className="img-fluid" />
                  <p className="card-text mb-2">Fast Orders</p>
                </div>
                <div>
                  <img src={orders1} alt="" className="img-fluid" />
                  <p className="card-text mb-2">Quick Shipping</p>
                </div>
                <div>
                  <img src={orders2} alt="" className="img-fluid" />
                  <p className="card-text mb-2">High Saves</p>
                </div>
                <div>
                  <img src={orders3} alt="" className="img-fluid" />
                  <p className="card-text">24/7 Support</p>
                </div>
                <div>
                  <img src={orders4} alt="" className="img-fluid" />
                  <p className="card-text">Online Orders</p>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
