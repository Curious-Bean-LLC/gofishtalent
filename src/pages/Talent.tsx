import React from 'react'
import { FaFish } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { musicians } from '../constants/musicians'

const Talent: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col gap-6 max-w-7xl mx-auto px-8 py-12 text-center min-h-[calc(100vh-5rem)]'>
      <h1 className='text-5xl md:text-4xl sm:text-3xl font-bold mb-6 text-[#1e3a5f]'>
        Our Talent
      </h1>
      <p className='text-xl md:text-lg sm:text-base text-[#2a5a8a] leading-relaxed'>
        Discover the amazing talent we represent.
      </p>

      {/* Playing Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {musicians.map((musician) => (
          <div
            key={musician.slug}
            onClick={() => navigate(musician.route)}
            className='bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-[#FF8C42]/50 border-r-4 border-b-4 border-[#FF8C42] aspect-[2/3] flex flex-col relative cursor-pointer'
          >
            {/* Card Body - Band Picture */}
            <div className='flex-1 flex flex-col gap-6 items-center justify-center p-6'>
              <img
                src={musician.image}
                alt={musician.name}
                className='max-w-full max-h-full object-cover rounded-lg'
              />
              <h3
                className={
                  musician.fontClass + ' text-xl text-black font-bold mb-1'
                }
              >
                {musician.name}
              </h3>
            </div>

            {/* Playing Card Corner Decorations */}
            <div className='absolute top-4 left-4 text-black font-bold text-xl'>
              <FaFish />
            </div>
            <div className='absolute bottom-4 right-4 text-black font-bold text-xl rotate-180'>
              <FaFish />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Talent
