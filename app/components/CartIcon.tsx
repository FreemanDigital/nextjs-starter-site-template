/*
    This component will be used to display the cart icon in the header along with a counter for the number of items in the cart pulled from cart context.
*/
'use client';

import { use, useContext, useEffect, useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useRouter } from 'next/navigation';

const CartIcon = () => {
    const { cart, getTotalItems } = useCart();
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="relative cursor-pointer" onClick={() => router.push('/cart')}>
            <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="dark:invert"
            >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    {' '}
                    <path
                        d="M3 3H4.37144C5.31982 3 6.13781 3.66607 6.32996 4.59479L8.67004 15.9052C8.86219 16.8339 9.68018 17.5 10.6286 17.5H17.5"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>{' '}
                    <path
                        d="M6.82422 7H19.6743C20.3386 7 20.8183 7.6359 20.6358 8.27472L19.6217 11.8242C19.2537 13.1121 18.0765 14 16.7371 14H8.27734"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>{' '}
                    <circle
                        cx="16.5"
                        cy="20.5"
                        r="0.5"
                        fill="#000000"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></circle>{' '}
                    <circle
                        cx="0.5"
                        cy="0.5"
                        r="0.5"
                        transform="matrix(1 0 0 -1 10 21)"
                        fill="#000000"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></circle>{' '}
                </g>
            </svg>
            {cart.length > 0 && (
                <div className="absolute top-0 right-0 -mt-1 -mr-1 bg-gray-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                    {getTotalItems()}
                </div>
            )}
        </div>
    );
};

export default CartIcon;
