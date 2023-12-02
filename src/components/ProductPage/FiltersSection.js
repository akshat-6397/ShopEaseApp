import React, { useEffect, useState } from "react";
import "./style.scss";

const FiltersSection = ({ setFilteredData, data, filteredData }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter((item) => selectedCategories.includes(item.category))
      );
    }
  }, [selectedCategories]);
  const handleCheckboxChange = (e) => {
    if (selectedCategories.length>0 && selectedCategories.includes(e.target.value)) {
      setSelectedCategories(selectedCategories.filter((item) => item !== e.target.value));
    } else {
      setSelectedCategories([...selectedCategories, e.target.value]);
    }
  };

  return (
    <div className="filter-section">
      <div className="top">
        <h3>FILTERS</h3>
        <button>Clear All</button>
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
          <span>5000</span>
          <span>10000</span>
        </div>
        <input type="range" value={5000} min={500} max={10000} />
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
