import MainContainer from "../components/MainContainer";
import PageHeader from "../components/PageHeader";
import ProductGrid from "../components/ProductGrid";

export default function Shop() {
    return (
        <MainContainer addStyles='bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-black'>
            <div style={{ paddingLeft: 'clamp(1rem, 3vw, 5rem)', paddingRight: 'clamp(1rem, 3vw, 5rem)',
                paddingBottom: 'clamp(1rem, 10vh, 10rem)'
             }}>
                <PageHeader heading='Shop' subheading='Buy all the things!' />
                <ProductGrid />
            </div>
        </MainContainer>
    );
}