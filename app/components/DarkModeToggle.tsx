/*
    Dark mode toggle button using theme context.
*/

import { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import styles from '../styles/DarkModeToggle.module.css';

const DarkModeToggle = () => {
    const { isDark, toggleTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className='relative w-6 h-6'>
            <div
                className={`absolute top-0 left-0 w-6 h-6 cursor-pointer ${styles.icon} ${
                    isDark ? styles['icon-enter-active'] : styles['icon-exit-active']
                }`}
                onClick={() => toggleTheme()}
            >
            {isMounted && isDark && (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
                            d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>{' '}
                    </g>
                </svg>
            )}
            </div>
            <div
                className={`absolute top-0 left-0 w-6 h-6 cursor-pointer ${styles.icon} ${
                    isDark ? styles['icon-exit-active'] : styles['icon-enter-active']
                }`}
                onClick={() => toggleTheme()}
            >
            {isMounted && !isDark && (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 cursor-pointer dark:invert"
                    onClick={() => toggleTheme()}
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
                            d="M13 6V3M18.5 12V7M14.5 4.5H11.5M21 9.5H16M15.5548 16.8151C16.7829 16.8151 17.9493 16.5506 19 16.0754C17.6867 18.9794 14.7642 21 11.3698 21C6.74731 21 3 17.2527 3 12.6302C3 9.23576 5.02061 6.31331 7.92462 5C7.44944 6.05072 7.18492 7.21708 7.18492 8.44523C7.18492 13.0678 10.9322 16.8151 15.5548 16.8151Z"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>{' '}
                    </g>
                </svg>
            )}
            </div>
        </div>
    );
};

export default DarkModeToggle;
