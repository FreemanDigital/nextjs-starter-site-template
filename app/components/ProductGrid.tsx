'use client';

import React from 'react';
import { useProducts } from '../contexts/ProductsContext';
import { useCart } from '../contexts/CartContext';

const ProductGrid: React.FC = () => {
    const { addToCart } = useCart();
    const { products } = useProducts();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product, index) => (
                <div
                    key={product.id}
                    className="flex flex-col gap-4 p-4 border border-gray-200 rounded-lg bg-white dark:bg-transparent shadow-lg max-w-lg mx-auto"
                    data-aos="fade-up" data-aos-delay={index * 100}
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-lg"
                    />
                    <h3 className="font-bold">{product.name}</h3>
                    <p className="res-paragraph">{product.description}</p>
                    <p className="font-bold text-lg">${product.price}</p>
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold rounded-md p-2 transition-colors" onClick={() => addToCart(product)}>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductGrid;
