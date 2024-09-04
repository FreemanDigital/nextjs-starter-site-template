/*
    FAQ component is a functional component that returns a column of clickable expandable containers with questions and answers.
*/
'use client'
import { useState } from 'react'

const FAQData = [
    {
        question: 'What is the return policy?',
        answer: 'We have a 30-day return policy.'
    },
    {
        question: 'Do you ship internationally?',
        answer: 'Yes, we ship internationally.'
    },
    {
        question: 'How do I track my order?',
        answer: 'You can track your order by logging into your account.'
    },
    {
        question: 'How do I return an item?',
        answer: 'You can return an item by logging into your account.'
    },
    {
        question: 'How do I contact customer service?',
        answer: 'You can contact customer service by emailing.'
    }
]

const FAQ = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

    const handleQuestionClick = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index)
    }

  return (
    <div className='flex flex-col w-full gap-2'>
      {FAQData.map((faq, index) => (
        <div key={index} className='flex flex-col justify-center gap-2 border-2 dark:border-gray-500 rounded-md p-2'>
          <h3
            className='text-lg font-bold cursor-pointer'
            onClick={() => handleQuestionClick(index)}
          >
            {faq.question}
          </h3>
          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${expandedIndex !== index ? 'max-h-0' : 'max-h-40'}`}
          >
            <p className='text-sm'>
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FAQ