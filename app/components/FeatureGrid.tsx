import React from 'react'

const featureData = [
    {
        title: 'Feature 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ante nec libero ultricies cursus.'
    },
    {
        title: 'Feature 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ante nec libero ultricies cursus.'
    },
    {
        title: 'Feature 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ante nec libero ultricies cursus.'
    },
    {
        title: 'Feature 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ante nec libero ultricies cursus.'
    }
]

const FeatureGrid = () => {
  return (
    <div className='flex flex-col py-8'>
        <h2 className='res-heading-sm text-center font-bold py-4' data-aos='fade-up'>
            Heading
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8'>
            {featureData.map((feature, index) => (
                <div key={index} className='flex flex-col gap-4 res-pad-x py-8' data-aos='fade-up'>
                    <div className='h-8 w-8 bg-gray-500 rounded-full' />
                    <h3 className='font-bold' style={{
                        fontSize: 'clamp(1.5rem, 2.5vw + 0.5rem, 2rem)'
                    }}>{feature.title}</h3>
                    <p className='res-paragraph'>{feature.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FeatureGrid