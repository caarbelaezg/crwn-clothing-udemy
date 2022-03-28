import React, { useContext } from 'react';

import Button, { BUTTON_TYPES_CLASSES } from '../Button';
import { CartContext } from '../../context/cart.context';

import './ProductCard.scss';

function ProductCard({ product }) {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPES_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </div>
  );
}

export default ProductCard;
