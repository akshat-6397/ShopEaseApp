import React, { useEffect, useState } from "react";
import "./style.scss";
import FiltersSection from "./FiltersSection";
import ProductListing from "./ProductListing";
import MobileFilterSection from "./MobileFilterSection";
import useIsMobile from "../../utils/useIsMobile";
import data from "../../utils/data.json";

const ProductPage = () => {
  const isMobile = useIsMobile();
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [range, setRange] = useState(500);
  
  useEffect(() => {
    setFilteredData(data);
  }, []);

  const handleSearchChange = (e) => {
    if(e.target.value.length > 0){
      setFilteredData(filteredData.filter((item) => item?.name.toLowerCase().includes(e.target.value.toLowerCase())));
    }else{
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
    }
  }
  const handleClearAll = () => {
    setSelectedCategories([]);
    setFilteredData(data);
    setRange(500);
  }
  return (
    <div className="product-page">
      {!isMobile ? (
        <FiltersSection
          setFilteredData={setFilteredData}
          data={data}
          filteredData={filteredData}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          range={range}
          setRange={setRange}
          handleClearAll = {handleClearAll}
        />
      ) : null}
      <ProductListing filteredData={filteredData} handleSearchChange={handleSearchChange}/>
      {isMobile ? (
        <MobileFilterSection
          setFilteredData={setFilteredData}
          data={data}
          filteredData={filteredData}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          range={range}
          setRange={setRange}
          handleClearAll={handleClearAll}
        />
      ) : null}
    </div>
  );
};

export default ProductPage;
