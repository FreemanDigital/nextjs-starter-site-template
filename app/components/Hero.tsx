import React from 'react';

const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center py-36">
            <h1
                className="text-center font-bold py-4"
                style={{ fontSize: 'clamp(2.25rem, 5vw + 1rem, 5rem)' }}
                data-aos="fade-right"
            >
                Startup Template
            </h1>
            <p
                className="text-center"
                style={{ fontSize: 'clamp(1.5rem, 3vw + 0.5rem, 3rem)' }}
                data-aos="fade-left"
            >
                A template for creating a website with Next.js
            </p>
        </section>
    );
};

export default Hero;
