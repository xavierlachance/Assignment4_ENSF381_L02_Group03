import React, { useState } from 'react';
import './ProductItem.css';

const ProductItem = ({ product, addToCart}) => {
    const [showDescription, setShowDescription] = useState(false);

    const handleMouseEnter = () => {
        setShowDescription(true);
    };

    const handleMouseLeave = () => {
        setShowDescription(false);
    };

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className='ProductItem'>
            <img src={product.image} alt={product.name} />
            <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {product.name}
            </p>
            <p>
                ${product.price}
            </p>
            <button onClick={handleAddToCart}>
                Add to Cart
            </button>
            {showDescription && <p>
                {product.description}
            </p>}
        </div>
    );
};

export default ProductItem;