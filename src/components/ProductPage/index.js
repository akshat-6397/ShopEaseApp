import React, { useEffect, useState } from 'react';
import "./style.scss";
import FiltersSection from './FiltersSection';
import ProductListing from './ProductListing';
import MobileFilterSection from './MobileFilterSection';
import useIsMobile from '../../utils/useIsMobile';
import data from "../../utils/data.json";

const ProductPage = () => {
  const isMobile = useIsMobile();
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    setFilteredData(data);
  }, []);
  return (
    <div className='product-page'>
        {!isMobile?<FiltersSection setFilteredData={setFilteredData} data={data} filteredData={filteredData}/>:null}
        <ProductListing filteredData={filteredData}/>
        {isMobile?<MobileFilterSection />:null}
    </div>
  )
}

export default ProductPage;