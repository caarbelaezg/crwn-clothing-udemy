import React, { useContext } from 'react';

import ProductCard from '../../components/ProductCard';

import { ProductsContext } from '../../context/shop.context';

import "./Shop.scss"

function Shop() {
  const { products } = useContext(ProductsContext);
  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Shop;
