import Image from "next/image";
import MainContainer from "./components/MainContainer";
import Hero from "./components/Hero";
import SideBySide from "./components/SideBySide";
import FeatureGrid from "./components/FeatureGrid";
import { ProductsProvider } from "./contexts/ProductsContext";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <MainContainer addStyles='bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-black'>
        <Hero />
        <SideBySide layout='imageRight' />
        <SideBySide layout='imageLeft' />
        <FeatureGrid />
        <div className='flex flex-col items-center justify-center px-4 py-8'>
            <h2 className='res-heading-sm font-bold text-center mb-4'>
                FAQ
            </h2>
            <FAQ />
        </div>
    </MainContainer>
  );
}