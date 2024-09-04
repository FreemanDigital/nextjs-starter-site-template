'use client';

import React from 'react'
import useAOS from '../hooks/useAOS'

interface MainContainerProps {
    addStyles?: string
    children: React.ReactNode
    }

const MainContainer: React.FC<MainContainerProps> = ({ addStyles, children }) => {
    useAOS();
  
    return (
    <main className={`flex min-h-screen flex-col ${ addStyles }`}>
        {children}
    </main>
  )
}

export default MainContainer