import React from 'react'
import Link from 'next/link'
import { navLinks } from '../data/navLinkData'
import { blogPosts } from '../data/blogData'
import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-center dark:bg-black px-4 sm:px-8 border-t-2 border-gray-300'>
        <div className='grid grid-cols-1 sm:grid-cols-4 h-full w-full justify-start items-start gap-4 pt-4 pb-4 max-w-4xl'>
            <div className='px-2'>
                <h1 className='text-2xl font-bold'>
                    <Link href='/'>Business Name</Link>
                </h1>
                <h3 className='text-sm'>123 Main St.</h3>
                <h3 className='text-sm'>City, State 12345</h3>
                <h3 className='text-sm'>555-555-5555</h3>
            </div>
            <div className='px-2 flex flex-col gap-2'>
                <h3 className='text-lg font-bold'><u>Navigation</u></h3>
                {navLinks.map((link) => (
                    <Link key={link.text} href={link.href}>
                        {link.text}
                    </Link>
                ))}
            </div>
            {/* Recent Blogs */}
            <div className='px-2 flex flex-col gap-2'>
                <h3 className='text-lg font-bold'><u>Recent Blogs</u></h3>
                {blogPosts.map((post) => (
                    <Link key={post.title} href={`/blog/${post.slug}`}>
                        {post.title}
                    </Link>
                ))}
            </div>
            {/* Social Media */}
            <div className='px-2 flex flex-col gap-2'>
                <h3 className='text-lg font-bold'><u>Follow Us</u></h3>
                <SocialLinks />
            </div>
        </div>
        <div>
            <div className='w-full px-2 flex flex-row gap-2 text-sm'>
                <Link href='/privacy-policy'>Privacy Policy</Link>
                <Link href='/terms-of-service'>Terms of Service</Link>
                <Link href='/refund-policy'>Refund Policy</Link>
                </div>
                <p className='w-full text-sm font-bold text-center py-1'>© 2021 Site Template</p>
        </div>
    </footer>
  )
}

export default Footer