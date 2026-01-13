import React from 'react'

const Contact: React.FC = () => {
  return (
    <div className='flex flex-col gap-6 max-w-7xl mx-auto px-8 py-12 text-center min-h-[calc(100vh-5rem)]'>
      <h1 className='text-5xl md:text-4xl sm:text-3xl font-bold mb-6 text-[#1e3a5f]'>
        Contact Us
      </h1>
      <p className='text-xl md:text-lg sm:text-base text-[#2a5a8a] leading-relaxed'>
        <a
          href='mailto:gofishtalent@gmail.com'
          target='_blank'
          rel='noreferrer'
          className='external-link'
        >
          Email us
        </a>{' '}
        or{' '}
        <a
          href='https://www.instagram.com/gofishtalent'
          target='_blank'
          rel='noreferrer'
          className='external-link'
        >
          DM us on Instagram
        </a>
        !
      </p>
    </div>
  )
}

export default Contact
