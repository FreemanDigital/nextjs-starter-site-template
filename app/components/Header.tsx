'use client';

import React, { useState } from 'react';
import CartIcon from './CartIcon';
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

import { disableScroll, enableScroll } from '../utils/scrollControl';
import { navLinks } from '../data/navLinkData';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            disableScroll();
            console.log('enable scrolling');
        } else {
            enableScroll();
            console.log('disable scrolling');
        }
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
        enableScroll();
    };

    return (
        <>
            <header className="relative w-full flex flex-row justify-between items-center h-16 px-4 md:px-8 border-b-2 border-gray-200 dark:bg-black dark:text-white">
                <h1 className="text-2xl font-bold">
                    <Link href="/">Site Template</Link>
                </h1>
                <nav className="hidden sm:flex h-full items-center gap-5">
                    <ul className="flex h-full justify-end items-center gap-6">
                        {navLinks.map((link) => (
                            <li key={link.text}>
                                <Link href={link.href}>{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                    <CartIcon />
                    <DarkModeToggle />
                </nav>
                <div className="flex flex-row sm:hidden gap-4 w-28">
                    <CartIcon />
                    <DarkModeToggle />
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => handleMenuClick()}
                        className="w-6 h-6 cursor-pointer dark:invert"
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
                                d="M1 12C1 11.4477 1.44772 11 2 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H2C1.44772 13 1 12.5523 1 12Z"
                                fill="#0F0F0F"
                            ></path>{' '}
                            <path
                                d="M1 4C1 3.44772 1.44772 3 2 3H22C22.5523 3 23 3.44772 23 4C23 4.55228 22.5523 5 22 5H2C1.44772 5 1 4.55228 1 4Z"
                                fill="#0F0F0F"
                            ></path>{' '}
                            <path
                                d="M1 20C1 19.4477 1.44772 19 2 19H22C22.5523 19 23 19.4477 23 20C23 20.5523 22.5523 21 22 21H2C1.44772 21 1 20.5523 1 20Z"
                                fill="#0F0F0F"
                            ></path>{' '}
                        </g>
                    </svg>
                </div>
                <div
                    className={`fixed top-16 left-0 w-full bg-white dark:bg-black transform ${
                        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 ease-in-out z-20 sm:hidden flex flex-col items-center justify-center gap-6 py-12`}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.text}
                            href={link.href}
                            className="text-xl"
                            onClick={handleLinkClick}
                        >
                            {link.text}
                        </Link>
                    ))}
                </div>
            </header>
            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-10"
                    onClick={handleMenuClick}
                />
            )}
        </>
    );
};

export default Header;
