import React, { useContext, useEffect, useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { PRODUCTS } from "./products";
import { PRODUCTS1 } from "./products";
import { ShopContext } from "./shopcontext";
import Prod from "./prod";
import Pagination from "./Pagination";

const ShopItems = ({ searchQuery }) => {
  const { cartItems } = useContext(ShopContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const allProducts = PRODUCTS.concat(PRODUCTS1);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const [selectedGender, setSelectedGender] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedRating, setSelectedRating] = useState(0);

  const resetFilters = () => {
    setMinPrice(0);
    setMaxPrice(100);
    setSelectedGender("All");
    setSelectedType("All");
    setSelectedRating(0);
  };

  const filteredProducts = allProducts
    .filter((product) => {
      if (searchQuery) {
        const productName = product.name ? product.name.toLowerCase() : "";
        const productDescription = product.description
          ? product.description.toLowerCase()
          : "";
        const productType = product.type ? product.type.toLowerCase() : "";
        return (
          productName.includes(searchQuery.toLowerCase()) ||
          productDescription.includes(searchQuery.toLowerCase()) ||
          productType.includes(searchQuery.toLowerCase())
        );
      }
      return true;
    })
    .filter((product) => {
      const productPrice = product.price;
      return (
        productPrice >= minPrice &&
        productPrice <= maxPrice &&
        (selectedGender === "All" || product.gender === selectedGender) &&
        (selectedType === "All" || product.type === selectedType) &&
        (selectedRating === 0 || product.rating >= selectedRating)
      );
    });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  useEffect(() => {}, [
    minPrice,
    maxPrice,
    selectedGender,
    selectedType,
    selectedRating,
  ]);

  console.log("currentITEM", currentItems);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <div className="content">
        <div className="sidebar ">
          <h3>Filter Options</h3>
          <div className="m-2 p-2 ">
            <label>Gender: </label>
            <div className="gender-buttons">
              <button
                className={selectedGender === "All" ? "active" : ""}
                onClick={() => setSelectedGender("All")}
              >
                <span className="circle"></span>All
              </button>
              <button
                className={selectedGender === "Men" ? "active" : ""}
                onClick={() => setSelectedGender("Men")}
              >
                <span className="circle"></span>Men
              </button>
              <button
                className={selectedGender === "Women" ? "active" : ""}
                onClick={() => setSelectedGender("Women")}
              >
                <span className="circle"></span>Women
              </button>
              <button
                className={selectedGender === "Kids" ? "active" : ""}
                onClick={() => setSelectedGender("Kids")}
              >
                <span className="circle"></span>Kids
              </button>
            </div>
          </div>
          <div className="m-2  ">
            <label>Product Type: </label>
            <div className="type-buttons">
              <button
                className={selectedType === "All" ? "active" : ""}
                onClick={() => setSelectedType("All")}
              >
                <span className="circle"></span> All
              </button>
              <button
                className={selectedType === "Shirt" ? "active" : ""}
                onClick={() => setSelectedType("Shirt")}
              >
                <span className="circle"></span> Shirt
              </button>
              <button
                className={selectedType === "Pant" ? "active" : ""}
                onClick={() => setSelectedType("Pant")}
              >
                <span className="circle"></span> Pant
              </button>
              <button
                className={selectedType === "T-Shirt" ? "active" : ""}
                onClick={() => setSelectedType("T-Shirt")}
              >
                <span className="circle"></span> T-Shirt
              </button>
            </div>
          </div>
          <div>
            <label>Min Price: </label>
            <input
              className="m-2 p-2 "
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label>Max Price: </label>
            <input
              className="m-2 p-2 "
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseFloat(e.target.value))}
            />
          </div>

          <div className="m-2 p-2">
            <label>Rating: </label>
            <ReactStars
              count={5}
              size={24}
              value={selectedRating}
              onChange={(rating) => setSelectedRating(rating)}
            />
          </div>

          <button className="m-2 p-2 " onClick={resetFilters}>
            Reset Filters
          </button>
        </div>
        <div>
          <div className="row ">
            {searchQuery ? (
              <>
                <h1 class="text-black">
                  Searach Results for: <b>{searchQuery} </b>{" "}
                </h1>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {currentItems.map((product) => (
              <Prod key={product.id} data={product} />
            ))}
          </div>

          {currentItems.length == 0 ? (
            <>
              <div className="row  m-4">
                <p className="text-black fs-4">No results found </p>{" "}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        {filteredProducts.length > 0 ? (
          <>
            <div className="paginationDiv">
              <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={filteredProducts.length}
                paginate={paginate}
              />
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default ShopItems;
