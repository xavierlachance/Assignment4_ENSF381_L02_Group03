import React from 'react';
import ProductItem from './ProductItem';
import products from '../data/products';

const ProductList = ({ addToCart }) => {
    return (
        <div>
            {products.map((product, index ) => (
                <div key={index}>
                <ProductItem product={product} addToCart={addToCart} />
                </div>
            ))}
        </div>
    );
}

export default ProductList;