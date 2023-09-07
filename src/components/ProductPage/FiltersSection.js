import React from "react";
import "./style.scss";

const FiltersSection = () => {
  return (
    <div className="filter-section">
      <div className="top">
        <h3>FILTERS</h3>
        <button>Clear All</button>
      </div>
      <hr></hr>
      <div className="middle">
        <h4>CATEGORIES</h4>
        <div className="men"><input type="checkbox" /><span>Men's Fashion</span></div>
        <div className="men"><input type="checkbox" /><span>Women's Fashion</span></div>
        <div className="men"><input type="checkbox" /><span>Kid's Fashion</span></div>
      </div>
      <hr />
      <div className="low-middle">
        <h4>PRICE</h4>
        <div className="price-range">
            <span>500</span>
            <span>5000</span>
            <span>10000</span>
        </div>
        <input type="range"
        value={5000}
        min={500}
        max={10000}/>
      </div>
      <hr />
      <div className="bottom">
        <h4>RATINGS</h4>
        <div className="rating"><input type="radio" name="rating"/><span>4 stars and above</span></div>
        <div className="rating"><input type="radio" name="rating"/><span>3 stars and above</span></div>
        <div className="rating"><input type="radio" name="rating"/><span>2 stars and above</span></div>
        <div className="rating"><input type="radio" name="rating"/><span>1 stars and above</span></div>
      </div>
    </div>
  );
};

export default FiltersSection;
