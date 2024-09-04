/**
 * Blog Page Component
 *
 * This component renders the main blog page which lists all the blog posts.
 *
 * Features:
 * - Displays a list of all blog posts with their titles, excerpts, and publication dates.
 * - Each blog post title is a link that navigates to the individual blog post page.
 *
 * The blog posts data is imported from a local data file (`/data/blogData.ts`).
 * Tailwind CSS is used for styling the page.
 *
 * File Structure:
 * - /pages
 *   - /blog.tsx (this file)
 * - /data
 *   - /blogData.ts (contains blog post data)
 *
 * The component uses Next.js's static generation capabilities to generate the blog pages at build time.
 *
 * Dependencies:
 * - `next/link` for client-side navigation between blog pages.
 * - Tailwind CSS for styling.
 */

import { blogPosts } from '../data/blogData';
import PageHeader from '../components/PageHeader';
import MainContainer from '../components/MainContainer';
import Link from 'next/link';

export default function BlogPage() {
    return (
        <MainContainer addStyles="bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-black">
            <div className="res-pad-x py-8">
                <PageHeader heading="Blog" subheading="Read all the things!" />
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Blog List */}
                    <div className="w-full lg:w-2/3">
                        <ul className="space-y-6">
                            {blogPosts.map((post, index) => (
                                <li key={post.slug} className="bg-white dark:bg-transparent border-2 border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay={index * 100}>
                                    <Link href={`/blog/${post.slug}`}>
                                            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                                    </Link>
                                    <p className="text-sm mb-4">{post.publishDate}</p>
                                    <p>{post.excerpt}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Recent Posts */}
                    <div className="w-full lg:w-1/3">
                        <div className="bg-white dark:bg-transparent border-2 border-gray-200 p-6 rounded-lg shadow-md" data-aos='fade-up'>
                            <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                            <ul className="space-y-4">
                                {blogPosts.slice(0, 5).map((post) => (
                                    <li key={post.slug} className="hover:underline">
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </MainContainer>
    );
}
