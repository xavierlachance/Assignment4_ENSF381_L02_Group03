import React from 'react';
import './CartItem.css';

const CartItem = ({ item, removeFromCart }) => {
    return (
        <div>
            <img src={item.image} alt={item.name} />
            <p>
                {item.name}
            </p>
            <p>
                ${item.price}
            </p>
            <p>
                Quantity: {item.quantity}
            </p>
            <p>
                Total: ${(item.price * (item.quantity || 0)).toFixed(2)}
            </p>
            <button onClick={() => removeFromCart(item)}>
                Remove
            </button>
        </div>
    );
};

// Note: my friend showed me that you can use toFixed for decimals in JavaScript.

export default CartItem;