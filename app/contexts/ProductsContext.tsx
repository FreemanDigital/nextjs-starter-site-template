'use client';

import React, { createContext, useContext, ReactNode } from 'react';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

interface ProductsContextProps {
    products: Product[];
}

const productData: Product[] = [
    {
        id: 1,
        name: 'Product 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 19.99,
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 29.99,
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 39.99,
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 49.99,
        image: 'https://via.placeholder.com/150',
    },
];

const ProductsContext = createContext<ProductsContextProps | undefined>(
    undefined
);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
    const getProduct = (id: number) => {
        return productData.find((product) => product.id === id);
    };

    return (
        <ProductsContext.Provider value={{ products: productData }}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = (): ProductsContextProps => {
    const context = useContext(ProductsContext);
    if (!context) {
        throw new Error('useProducts must be used within a ProductsProvider');
    }
    return context;
};
