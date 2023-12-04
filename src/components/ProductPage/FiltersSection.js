import React, { useEffect, useState } from "react";
import "./style.scss";

const FiltersSection = ({ setFilteredData, data, filteredData, selectedCategories, setSelectedCategories, range, setRange, handleClearAll }) => {

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredData(
        data.filter(
          (item) => Number(item?.discountedPrice.replace(/,/g, "")) <= range
        )
      );
    } else {
      setFilteredData(
        data.filter(
          (item) =>
            Number(item?.discountedPrice.replace(/,/g, "")) <= range &&
            selectedCategories.includes(item?.category)
        )
      );
    }
  }, [range, selectedCategories]);

  const handleRangeChange = (e) => {
    setRange(e.target.value);
    setFilteredData(
      filteredData.filter(
        (item) => Number(item?.discountedPrice.replace(/,/g, "")) <= range
      )
    );
  };

  const handleCheckboxChange = (e) => {
    if (
      selectedCategories.length > 0 &&
      selectedCategories.includes(e.target.value)
    ) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== e.target.value)
      );
    } else {
      setSelectedCategories([...selectedCategories, e.target.value]);
    }
  };

  return (
    <div className="filter-section">
      <div className="top">
        <h3>FILTERS</h3>
        <button onClick={handleClearAll}>Clear All</button>
      </div>
      <hr></hr>
      <div className="middle">
        <h4>CATEGORIES</h4>
        <div className="men">
          <input
            checked={selectedCategories.includes("Men")}
            type="checkbox"
            onChange={(e) => handleCheckboxChange(e)}
            value="Men"
          />
          <span>Men's Fashion</span>
        </div>
        <div className="men">
          <input
            checked={selectedCategories.includes("Women")}
            type="checkbox"
            onChange={(e) => handleCheckboxChange(e)}
            value="Women"
          />
          <span>Women's Fashion</span>
        </div>
        <div className="men">
          <input
            checked={selectedCategories.includes("Kids")}
            type="checkbox"
            onChange={(e) => handleCheckboxChange(e)}
            value="Kids"
          />
          <span>Kid's Fashion</span>
        </div>
      </div>
      <hr />
      <div className="low-middle">
        <h4>PRICE</h4>
        <div className="price-range">
          <span>500</span>
          <span>1250</span>
          <span>2500</span>
        </div>
        <input
          type="range"
          value={range}
          onChange={(e) => handleRangeChange(e)}
          min={500}
          max={2500}
        />
      </div>
      <hr />
      <div className="bottom">
        <h4>RATINGS</h4>
        <div className="rating">
          <input type="radio" name="rating" />
          <span>4 stars and above</span>
        </div>
        <div className="rating">
          <input type="radio" name="rating" />
          <span>3 stars and above</span>
        </div>
        <div className="rating">
          <input type="radio" name="rating" />
          <span>2 stars and above</span>
        </div>
        <div className="rating">
          <input type="radio" name="rating" />
          <span>1 stars and above</span>
        </div>
      </div>
    </div>
  );
};

export default FiltersSection;
