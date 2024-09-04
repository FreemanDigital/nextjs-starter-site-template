/*
    About page with MainContainer, PageHeader, and Link components.
*/

import MainContainer from '../components/MainContainer';
import PageHeader from '../components/PageHeader';
import Link from 'next/link';
import SocialLinks from '../components/SocialLinks';

export default function AboutPage() {
    return (
        <MainContainer addStyles="bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-black">
            <div className="res-pad-x py-8">
                <PageHeader heading="About" subheading="Learn more about me!" />
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full lg:w-2/3" data-aos="fade-right">
                        <p>
                            Hi! I'm a software engineer based in the United
                            States. I have a passion for building web
                            applications and learning new technologies. I'm
                            currently working on a few projects that I'm excited
                            to share with you soon!
                        </p>
                        <p className="mt-4">
                            When I'm not coding, you can find me hiking,
                            reading, or playing video games. I'm always looking
                            for new book recommendations, so feel free to reach
                            out if you have any!
                        </p>
                    </div>
                    <div className="w-full lg:w-1/3" data-aos="fade-left">
                        <div className="bg-white dark:bg-transparent border-2 border-gray-200 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4">
                                Connect with Me
                            </h3>
                            <ul className="space-y-4">
                                <li>
                                    <SocialLinks />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </MainContainer>
    );
}
