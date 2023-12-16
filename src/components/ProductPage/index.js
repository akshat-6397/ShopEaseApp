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
  const [rating, setRating] = useState(null);
  
  useEffect(() => {
    setFilteredData(data);
  }, []);
  useEffect(() => {
    handleFilterChange();
  }, [selectedCategories, range, rating])

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

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  }

  const handleFilterChange = () => {
    if(selectedCategories.length > 0){
      if(range === 500){
        if(rating === null){
          setFilteredData(data?.filter((item) => selectedCategories.includes(item?.category)));
        }else{
          setFilteredData(data?.filter((item) => selectedCategories.includes(item?.category) && Number(item?.ratings) >= Number(rating)));
        }
      }else{
        if(rating === null){
          setFilteredData(data?.filter((item) => selectedCategories.includes(item?.category) && Number(item?.discountedPrice.replace(/,/g, "")) <= range));
        }else{
          setFilteredData(data?.filter((item) => selectedCategories.includes(item?.category) && Number(item?.ratings) >= Number(rating) && Number(item?.discountedPrice.replace(/,/g, "")) <= range));
        }
      }
    }else{
      if(range === 500){
        if(rating === null){
          setFilteredData(data);
        }else{
          setFilteredData(data?.filter((item) => Number(item?.ratings) >= Number(rating)));
        }
      }else{
        if(rating === null){
          setFilteredData(data?.filter((item) => Number(item?.discountedPrice.replace(/,/g, "")) <= range));
        }else{
          setFilteredData(data?.filter((item) => Number(item?.ratings) >= Number(rating) && Number(item?.discountedPrice.replace(/,/g, "")) <= range));
        }
      }
    }
  };
  const handleClearAll = () => {
    setSelectedCategories([]);
    setFilteredData(data);
    setRange(500);
    setRating(null);
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
          handleRatingChange={handleRatingChange}
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
