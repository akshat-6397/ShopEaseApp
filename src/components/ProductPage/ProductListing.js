import React from "react";
import "./style.scss";
import { BsSearch } from "react-icons/bs";
import Dropdown from "./Dropdown";
import Card from "./Card";

const ProductListing = () => {
  return (
    <div className="product-listing">
      <div className="top-component">
        <h3>SHOPEASE FASHION STORE</h3>
        <div className="search-bar">
            <BsSearch style={{position: "absolute", left: '5'}}/>
            <input type="text" placeholder="Search For Products" />
        </div>
        <Dropdown />
      </div>
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default ProductListing;
