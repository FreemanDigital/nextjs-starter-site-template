// hooks/useAos.ts
'use client';
import { useEffect } from 'react';
import AOS from 'aos';

const useAOS = () => {
    useEffect(() => {
        AOS.init({
            duration: 500, // Specify the animation duration
            once: true, // Whether animation should happen only once - while scrolling down
            mirror: false, // Whether elements should animate out while scrolling past them
        });
    }, []);
};

export default useAOS;
