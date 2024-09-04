/*
    Contact page with MainContainer, PageHeader, and simple ContactForm components.
*/

import MainContainer from '../components/MainContainer';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
    return (
        <MainContainer addStyles="bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-black">
            <div className="res-pad-x py-8">
                <PageHeader heading="Contact" subheading="Get in touch!" />
                <ContactForm />
            </div>
        </MainContainer>
    );
}