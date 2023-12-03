import React from "react";
import "./style.scss";
import { BsSearch } from "react-icons/bs";
import Dropdown from "./Dropdown";
import Card from "./Card";
import data from "../../utils/data.json";

const ProductListing = ({ filteredData }) => {
  return (
    <div className="product-listing">
      <div className="top-component">
        <h3>SHOPEASE FASHION STORE</h3>
        <div className="search-bar">
          <BsSearch style={{ position: "absolute", left: "8" }} />
          <input type="text" placeholder="Search For Products" />
        </div>
        <Dropdown />
      </div>
      <div className="cards">
        {filteredData?.length > 0 &&
          filteredData?.map((item) => <Card data={item} key={item?.id} />)}
      </div>
    </div>
  );
};

export default ProductListing;
