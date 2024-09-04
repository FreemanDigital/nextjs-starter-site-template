/*
    Pricing page with MainContainer, PageHeader, and PricingTable components.
*/

import MainContainer from '../components/MainContainer';
import PageHeader from '../components/PageHeader';
import PricingTable from '../components/PricingTable';

export default function PricingPage() {
    return (
        <MainContainer addStyles="bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-black">
            <div className="res-pad-x py-8">
                <PageHeader heading="Pricing" subheading="Choose a plan that works for you!" />
                <PricingTable />
            </div>
        </MainContainer>
    );
}