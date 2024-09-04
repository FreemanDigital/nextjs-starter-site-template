/*
    Cart page that displays cart information using CartItemGrid. 
*/

import React from 'react';
import MainContainer from '../components/MainContainer';
import CartItemGrid from '../components/CartItemGrid';

export default function CartPage() {
    return (
        <MainContainer addStyles='bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-black'>
        <div className='min-h-screen' style={{ paddingLeft: 'clamp(1rem, 3vw, 5rem)', paddingRight: 'clamp(1rem, 3vw, 5rem)' }}>
            <h1 className="text-3xl font-bold mt-8 mb-4">Cart</h1>
            <CartItemGrid />
        </div>
        </MainContainer>
    );
}