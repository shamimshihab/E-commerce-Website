import React, { useContext, useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { PRODUCTS } from "./products";
import { ShopContext } from "./shopcontext";
import Prod from "./prod";
import Pagination from "./Pagination";

const ShopItems = () => {
  const { cartItems } = useContext(ShopContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const allProducts = PRODUCTS;

  // State variables for price range filter, gender filter, and product type filter
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const [selectedGender, setSelectedGender] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const resetFilters = () => {
    setMinPrice(0);
    setMaxPrice(100);
    setSelectedGender("All");
    setSelectedType("All");
  };

  const filteredProducts = allProducts.filter((product) => {
    const productPrice = product.price;
    return (
      productPrice >= minPrice &&
      productPrice <= maxPrice &&
      (selectedGender === "All" || product.gender === selectedGender) &&
      (selectedType === "All" || product.type === selectedType)
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="content">
        <div className="sidebar">
          <h3>Filter Options</h3>
          <div>
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
          <div>
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
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label>Max Price: </label>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseFloat(e.target.value))}
            />
          </div>
          <button onClick={resetFilters}>Reset Filters</button>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {currentItems.map((product) => (
            <Prod key={product.id} data={product} />
          ))}
        </div>
        <div className="paginationDiv">
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={filteredProducts.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
};

export default ShopItems;
