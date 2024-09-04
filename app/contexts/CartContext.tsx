/*
    Create a context for the cart. This context will be used to store the cart items and the functions to manipulate the cart. Include the following properties in the context:
    - cart: An array of cart items. Each cart item should have the following properties:
        - id: A number representing the product ID.
        - name: A string representing the product name.
        - description: A string representing the product description.
        - price: A number representing the product price.
        - image: A string representing the product image URL.
        - quantity: A number representing the quantity of the product in the cart.
    - addToCart: A function that takes a product object as an argument and adds it to the cart. If the product already exists in the cart, the quantity should be incremented by 1.
    - removeFromCart: A function that takes a product ID as an argument and removes the product from the cart.
    - updateQuantity: A function that takes a product ID and a quantity as arguments and updates the quantity of the product in the cart.
    - clearCart: A function that clears all items from the cart.
    - getCartTotal: A function that calculates the total price of all items in the cart.
    Create a CartProvider component that wraps the children components and provides the cart context to them. The CartProvider should use local storage to persist the cart data.
    Create a custom hook useCart that can be used to access the cart context in functional components.
*/
'use client';

import React, { createContext, useContext, ReactNode, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

interface CartItem extends Product {
    quantity: number;
}

interface CartContextProps {
    cart: CartItem[];
    addToCart: (item: Product) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    clearCart: () => void;
    getCartTotal: () => string;
    getTotalItems: () => number;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useLocalStorage<CartItem[]>('cart', []);

    const addToCart = (product: Product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                console.log('Existing item found:', existingItem);
                console.log('Updated cart:', prevCart);
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                console.log('Adding new item:', product);
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (id: number) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const updateQuantity = (id: number, quantity: number) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    const getCartTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                getCartTotal,
                getTotalItems
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }

    return context;
};

export default CartContext;
