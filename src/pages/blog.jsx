/* eslint-disable no-unused-vars */
import React from "react";
import b1 from "../assets/images/blog/b1.avif";

import b2 from "../assets/images/blog/b2.jpg";
import b3 from "../assets/images/blog/b3.jpg";
import b4 from "../assets/images/blog/b4.jpg";
import b5 from "../assets/images/blog/b5.jpg";
import b7 from "../assets/images/blog/b7.jpg";

const blog = () => {
  return (
    <>
      <section className="blog-wrapper p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="shop-details text-center align-items-center">
                <h1 className="text-white">#Read More Our Insightful Blog</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs p-5">
        <div className="container-xxl container">
          <div className="row">
            <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={b1}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">
                        {" "}
                        Irresistible Offer: Buy One, Get One Free{" "}
                      </h5>
                      <p className="blogs-card-text ">
                        Hey, savvy shoppers! We've got exciting news for you –
                        our Buy One, Get One Free offer is back! Elevate your
                        wardrobe without breaking the bank. Whether you're
                        eyeing that trendy jacket or a cozy sweater, now is the
                        perfect time to double up on style. Don't miss out on
                        this limited-time offer. Shop now and double the fashion
                        fun! 🛍️✨
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
            <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={b2} alt="" className="img-fluid rounded-start" />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">
                        {" "}
                        Experience Comfort in Every Thread{" "}
                      </h5>
                      <p className="blogs-card-text ">
                        Comfort meets style in our latest collection of
                        clothing! We understand the importance of feeling good
                        in what you wear. That's why we've curated a selection
                        of comfortable clothing that doesn't compromise on
                        fashion. From soft fabrics to easy-to-wear styles, our
                        collection ensures you look and feel your best. Explore
                        the joy of comfort and style – shop our new arrivals
                        today! 👚👖✨
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

            <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={b3} alt="" className="img-fluid rounded-start" />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">
                        {" "}
                        Modern Styling, Endless Possibilities
                      </h5>
                      <p className="blogs-card-text ">
                        Step into the future of fashion with our modern styling
                        collection. Our pieces are more than just clothes;
                        they're statements. From bold patterns to sleek designs,
                        we've got everything you need to upgrade your wardrobe.
                        Stay ahead of the fashion curve and embrace the power of
                        modern styling. Your next favorite outfit is just a
                        click away. Dive into modernity – shop now! 👗🕶️✨
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

            <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={b4} alt="" className="img-fluid rounded-start" />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">
                        Colors that Speak Louder than Words
                      </h5>
                      <p className="blogs-card-text ">
                        Express yourself with our vibrant and chic color
                        palette! Your wardrobe should be as dynamic as you are,
                        and our collection is here to make that happen. Whether
                        you're into bold and bright or subtle and sophisticated,
                        we've got a color for every mood. Dive into a world of
                        hues and let your style shine. Discover the beauty of
                        color – shop your favorites now! 🌈👠
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
          </div>
        </div>
      </section>
    </>
  );
};

export default blog;
