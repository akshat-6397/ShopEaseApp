import React from 'react';
import "./style.scss";
import FiltersSection from './FiltersSection';
import ProductListing from './ProductListing';

const ProductPage = () => {
  return (
    <div className='product-page'>
        <FiltersSection />
        <ProductListing />
    </div>
  )
}

export default ProductPage;