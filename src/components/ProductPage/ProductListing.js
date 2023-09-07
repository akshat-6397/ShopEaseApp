import React from "react";
import "./style.scss";
import { BsSearch } from "react-icons/bs";
import Dropdown from "./Dropdown";

const ProductListing = () => {
  return (
    <div className="product-listing">
      <div className="top-component">
        <h3>SHOPEASE FASHION STORE</h3>
        <div className="search-bar">
            <BsSearch />
            <input type="text" placeholder="Search For Products" />
        </div>
        <Dropdown />
      </div>
      <div className="Cards">

      </div>
    </div>
  );
};

export default ProductListing;
