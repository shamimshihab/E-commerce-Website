/* eslint-disable no-unused-vars */
import React from "react";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";
import Featuredproducts from "../components/featuredproducts";
import Newarrivals from "../components/newarrivals";
import banner from "../assets/images/banner/b1.jpg";
import banner1 from "../assets/images/banner/b10.jpg";
import blog1 from "../assets/images/blog/blog-1.jpg";
import blog2 from "../assets/images/blog/blog-2.jpg";
import blog3 from "../assets/images/blog/blog-3.jpg";
import blog4 from "../assets/images/blog/blog-4.jpg";
import Newsletter from "../components/newsletter";
import Hero from "../components/hero";
import r1 from "../assets/images/about/r1.jpg";
import r2 from "../assets/images/about/r2.jpg";
import r3 from "../assets/images/about/r3.jpg";
import r4 from "../assets/images/about/r4.jpg";
import r5 from "../assets/images/about/r5.jpeg";
import r6 from "../assets/images/about/r6.jpg";
import b1 from "../assets/images/blog/b1.avif";

import b2 from "../assets/images/blog/b2.jpg";
import b3 from "../assets/images/blog/b3.jpg";
import b4 from "../assets/images/blog/b4.jpg";
const home = () => {
  return (
    <>
      <section className="banner">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="d-flex flex-column justify-content-center ">
                <div
                  id="carouselExampleInterval"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="back-details">
                      <h1>Super Deals</h1>
                      <h2>On all products</h2>

                      <Link
                        to="/shop"
                        className="btn btn-primary"
                        id="button-link"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-products p-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Our Exclusive Products</h1>
            </div>
            <Featuredproducts />
          </div>
        </div>
      </section>

      <section className="repair-services p-5">
        <div className="container-xxl">
          <div className="row ">
            <div className="repair-details text-center align-items-center">
              <h1 className="mb-5 text-white">
                Attractive 70% Off on some products
              </h1>
              <div className="">
                <Link
                  to="/shop"
                  className="btn btn-primary  "
                  id="button-link-offer"
                >
                  Explore Here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="new-arrivals p-4">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex align-items-center justify-content-center flex-column">
              <h1>New Arrivals</h1>
            </div>
            <Newarrivals />
          </div>
        </div>
      </section>

      {/* <Hero /> */}
      <section className="hot-deals p-5 d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-6 d-flex">
              <div className="card m-auto mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={b1}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Hot Deals</h5>
                      <h2 className="card-text mb-2">Buy One get One free.</h2>
                      <p className="card-text mb-2">
                        <small className="text-body-secondary">
                          The latest best collection in our closet <br />
                          Feel Cute with our outfits
                        </small>
                      </p>
                      <Link to="blog">
                        <button className="mt-4">Learn more</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={b2}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Season-In</h5>
                      <h2 className="card-text mb-2">All Weather Attire</h2>
                      <p className="card-text mb-2">
                        <small className="text-body-secondary">
                          It never matter which season it is <br />
                          We got you covered
                        </small>
                      </p>
                      <Link to="blog">
                        <button className="mt-4">Learn more</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="mb-3">What our customers say...</h1>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="card">
                <img src={r1} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    Shoppers offers an incredible variety of products, and each
                    item I've purchased has exceeded my expectations in terms of
                    quality. It's my go-to place for finding unique and reliable
                    products.
                  </p>
                  <Link to="about">
                    <button className="mt-4">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-4">
              <div className="card">
                <img src={r2} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    Navigating through the Shoppers website is a breeze. The
                    user-friendly interface makes it easy to find what I'm
                    looking for, and the checkout process is quick and
                    efficient. I appreciate the seamless shopping experience.
                  </p>
                  <Link to="about">
                    <button className="mt-4">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-4">
              <div className="card">
                <img src={r3} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    Shoppers consistently delivers my orders on time, if not
                    earlier. Their commitment to reliable shipping is
                    commendable. I can always count on receiving my items when I
                    need them.
                  </p>
                  <Link to="about">
                    <button className="mt-4">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-4">
              <div className="card">
                <img src={r4} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    I had a query about one of my orders, and the Shoppers
                    customer service team was incredibly responsive and helpful.
                    They resolved my issue promptly, and their dedication to
                    customer satisfaction is evident.
                  </p>
                  <Link to="about">
                    <button className="mt-4">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
};

export default home;
