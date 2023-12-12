import React, { useContext } from "react";
import Shopitems from "../components/shopitems";
import Newsletter from "../components/newsletter";
import Hero from "../components/hero";
import { useSearchParams } from "react-router-dom";

const shop = () => {
  const [searchParams] = useSearchParams();

  console.log("searchParams", searchParams);
  const searchQuery = searchParams.get("search");

  console.log("Search Query:", searchQuery);
  return (
    <>
      <section className="featured-products p-5">
        <div className="container-xxl">
          <div className="row">
            <Shopitems searchQuery={searchQuery} />
          </div>
        </div>
      </section>

      {/* <Hero /> */}

      <Newsletter />
    </>
  );
};

export default shop;
