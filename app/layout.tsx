import type { Metadata } from 'next';
import { Gabarito } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ProductsProvider } from './contexts/ProductsContext';
import { CartProvider } from './contexts/CartContext';
import { ThemeProvider } from './contexts/ThemeContext';
import 'aos/dist/aos.css';

const gaba = Gabarito({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Startup Template Home',
    description: 'A template for creating a website with Next.js',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ThemeProvider>
            <ProductsProvider>
                <CartProvider>
                    <html lang="en">
                        <body className={`${gaba.className} dark:text-white transition-colors duration-500`}>
                            <Header />
                            {children}
                            <Footer />
                        </body>
                    </html>
                </CartProvider>
            </ProductsProvider>
        </ThemeProvider>
    );
}
