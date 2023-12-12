import React, { useContext } from "react";
import { ShopContext } from "./shopcontext";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import Details from "../pages/details";
import { useNavigate } from "react-router-dom";
const prod = (props) => {
  const { id, name, price, image, brand } = props.data;
  const { addToCart, cartItems, viewProductDetails } = useContext(ShopContext);
  const navigate = useNavigate();
  const cartItemAmount = cartItems[id];
  return (
    <>
      <div className="col mb-5">
        <Link key={id} className="card h-100 m-auto">
          <Link to="/details" onClick={() => viewProductDetails(id)}>
            <img
              src={image}
              style={{ height: "20vh" }}
              className="card-img-top img-fluid"
              alt="..."
              // onClick={() => {
              //   viewProductDetails(id);
              //   console.log("clicked");
              //   navigate("/details");
              // }}
            />
          </Link>

          <div className="card-body">
            <p className="card-text mb-2">{brand}</p>
            <h5>{name} </h5>
            <ReactStars
              count={5}
              edit={false}
              value={4}
              size={24}
              activeColor="#EA9D5A"
            />
            <div className="mb-3">
              <p className="price mb-2">
                <span className="red">{price} </span>&nbsp;{" "}
                <strike>{price * 2}$</strike>
              </p>
              <Link to="/details" onClick={() => viewProductDetails(id)}>
                <p className="text-center">
                  <button className="fs-4" id="clear-cart">
                    View Details
                  </button>
                </p>
              </Link>
            </div>
            <div className="d-flex justify-content-center">
              <button
                onClick={() => {
                  addToCart(id);
                  event.target.classList.toggle("red");
                }}
                className="myButton"
              >
                Add To Cart
                {cartItemAmount > 0 && `(${cartItemAmount})`}
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default prod;
