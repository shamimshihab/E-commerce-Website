/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Shopitems from "../components/shopitems";
import Newsletter from "../components/newsletter";
import Hero from "../components/hero";

const shop = () => {
  return (
    <>
      <section className="featured-products p-5">
        <div className="container-xxl">
          <div className="row">
            <Shopitems />
          </div>
        </div>
      </section>

      <Hero />

      <Newsletter />
    </>
  );
};

export default shop;
