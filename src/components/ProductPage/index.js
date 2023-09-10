import React from 'react';
import "./style.scss";
import FiltersSection from './FiltersSection';
import ProductListing from './ProductListing';
import MobileFilterSection from './MobileFilterSection';
import useIsMobile from '../../utils/useIsMobile';

const ProductPage = () => {
  const isMobile = useIsMobile();
  return (
    <div className='product-page'>
        {!isMobile?<FiltersSection />:null}
        <ProductListing />
        <MobileFilterSection />
    </div>
  )
}

export default ProductPage;