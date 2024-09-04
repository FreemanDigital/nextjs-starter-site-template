import { get } from 'http'
import React from 'react'

interface SideBySideProps {
    layout: 'imageLeft' | 'imageRight'
}

const SideBySide: React.FC<SideBySideProps> = ({ layout }) => {
  return (
    <div className={`flex flex-col ${ layout == 'imageRight' ? 'sm:flex-row' : 'sm:flex-row-reverse' } min-h-72`}>
        <div className='flex flex-col justify-center w-full sm:w-1/2 gap-4 res-pad-x res-pad-y' data-aos={ layout == 'imageRight' ? 'fade-right' : 'fade-left' }>
            <h2 className='res-heading-sm font-bold'>
                Heading
            </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ante nec libero ultricies cursus.
            </p>
        </div>
        <div className={`w-full sm:w-1/2 bg-gray-500 min-h-72 ${ layout == 'imageRight' ? 'rounded-l-full' : 'rounded-r-full' }`} data-aos={ layout == 'imageRight' ? 'fade-left' : 'fade-right' }></div>
    </div>
  )
}

export default SideBySide