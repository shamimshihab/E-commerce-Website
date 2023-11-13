import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS1 } from "./products";
import ReactStars from "react-rating-stars-component";

const NewArrivals = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 p-3 product-container">
      {PRODUCTS1.slice(1, 5).map((product, index) => (
        <div className="col mb-5 product-card" key={product.id}>
          <div className="card h-100 m-auto">
            <img
              style={{ height: "25vh" }}
              src={product.image}
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text mb-2">{product.brand}</p>
              <h5 className="mb-3">{product.name}</h5>
              <div className="card-footer text-center m-auto">
                <p className="fs-4 text-danger">{product.status}</p>
                <p className="price">
                  <span className="red"></span>
                </p>
              </div>
              <div className="card-footer d-md-none">
                <div className="d-flex justify-content-between align-items-center">
                  <Link to="shop" className="m-auto">
                    View products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewArrivals;
