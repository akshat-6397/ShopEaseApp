import React, { useState } from "react";
import {
  BsFillArrowDownSquareFill,
  BsFillArrowUpSquareFill,
} from "react-icons/bs";
import FiltersSection from "./FiltersSection";

const MobileFilterSection = ({ setFilteredData, data, filteredData }) => {
  const [openFilter, setOpenFilter] = useState(false);
  const handleButtonClick = () => {
    setOpenFilter(!openFilter);
  };
  return (
    <div className="mobile-filter">
      {openFilter && (
        <FiltersSection
          setFilteredData={setFilteredData}
          data={data}
          filteredData={filteredData}
        />
      )}
      <div className="hidden-view">
        <h4>Apply Filters</h4>
        {openFilter ? (
          <BsFillArrowDownSquareFill
            style={{ marginLeft: "20px", height: "20px", width: "20px" }}
            onClick={handleButtonClick}
          />
        ) : (
          <BsFillArrowUpSquareFill
            onClick={handleButtonClick}
            style={{ marginLeft: "20px", height: "20px", width: "20px" }}
          />
        )}
      </div>
    </div>
  );
};

export default MobileFilterSection;
