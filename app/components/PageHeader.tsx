import React from 'react'

interface PageHeaderProps {
    heading: string
    subheading: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ heading, subheading }) => {
  return (
    <section className='flex flex-col items-center justify-center py-36'>
        <h1 className='text-center font-bold py-4' data-aos='fade-right' style={{ fontSize: 'clamp(2.25rem, 5vw + 1rem, 5rem)' }}>
            {heading}
        </h1>
        <p className='text-center' style={{ fontSize: 'clamp(1.5rem, 3vw + 0.5rem, 3rem)' }} data-aos='fade-left'>
            {subheading}
        </p>
    </section>
  )
}

export default PageHeader