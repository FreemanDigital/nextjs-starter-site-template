/*
    Cart item grid that displays cart items from the cart context.
*/
'use client';

import React from 'react';
import { useCart } from '../contexts/CartContext';

const CartItemGrid = () => {
    const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
    return (
        <>
        <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto">
            {/* Display a message if the cart is empty */}
            {cart.length === 0 && (
                <h2 className="flex justify-center items-center font-bold text-2xl md:text-3xl text-center">
                    Your cart is empty.
                </h2>
            )}
            {/* Display the cart items */}
            {cart.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-row justify-between items-center p-4 border border-gray-200 rounded-lg"
                >
                    <div className="flex flex-row items-center gap-4">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div>
                            <h3 className="font-bold">{item.name}</h3>
                            <p className="res-paragraph">${item.price}</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <button
                            className="flex justify-center items-center font-bold rounded-full h-6 w-6 p-2 text-lg"
                            onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                            }
                        >
                            -
                        </button>
                        <p>{item.quantity}</p>
                        <button
                            className="flex justify-center items-center font-bold rounded-full h-6 w-6 p-2 text-lg"
                            onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                            }
                        >
                            +
                        </button>
                        <button
                            className="flex justify-center items-center bg-red-500 text-white font-bold rounded-lg p-2 h-8 w-8 text-lg"
                            onClick={() => removeFromCart(item.id)}
                        >
                            X
                        </button>
                    </div>
                </div>
            ))}
        </div>
        {/* Calulate the total price of the cart items */}
        <div className="flex flex-row justify-end p-4 max-w-4xl mx-auto">
            <h2 className="font-bold text-xl md:text-3xl">
                Total: ${getCartTotal()}
            </h2>
        </div>
        </>
    );
};

export default CartItemGrid;
