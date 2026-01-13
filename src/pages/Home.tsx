import React from 'react'
import { useNavigate } from 'react-router-dom'
import { musicians } from '../constants/musicians'
import './FishPond.css'

const Home: React.FC = () => {
  const navigate = useNavigate()

  const handleFishClick = (route: string) => {
    navigate(route, { state: { from: 'home' } })
  }

  // SVG Fish Component
  const FishSVG = ({ color }: { color: string }) => (
    <svg
      width='225'
      height='120'
      viewBox='0 0 150 80'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMidYMid meet'
    >
      {/* Fish Tail */}
      <path
        d='M 20 40 L 0 25 L 5 40 L 0 55 Z'
        fill={color}
        className='fish-fin'
      />

      {/* Fish Body */}
      <ellipse
        cx='75'
        cy='40'
        rx='50'
        ry='30'
        fill={color}
        className='fish-body'
      />

      {/* Top Fin */}
      <path
        d='M 70 10 L 65 0 L 75 5 L 85 0 L 80 10 Z'
        fill={color}
        className='fish-fin'
      />

      {/* Bottom Fin */}
      <path
        d='M 60 70 L 55 80 L 65 75 L 75 80 L 70 70 Z'
        fill={color}
        className='fish-fin'
      />

      {/* Mouth */}
      <path
        d='M 120 40 Q 125 42 120 44'
        stroke={color}
        strokeWidth='2'
        fill='none'
      />

      {/* Eye - Always render last to be on top */}
      <circle
        cx='100'
        cy='35'
        r='8'
        fill='white'
        stroke='black'
        strokeWidth='1'
        className='fish-eye'
      />
      <circle cx='102' cy='35' r='4' fill='black' className='fish-pupil' />
    </svg>
  )

  return (
    <div className='flex flex-col gap-6 max-w-7xl mx-auto px-8 py-12 text-center min-h-[calc(100vh-5rem)]'>
      {/* Fish Pond */}
      <div className='fish-pond'>
        {/* Bubbles */}
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>

        {/* Seaweed */}
        <div className='seaweed'></div>
        <div className='seaweed'></div>
        <div className='seaweed'></div>
        <div className='seaweed'></div>
        <div className='seaweed'></div>

        {/* Fish with band images */}
        {musicians.map((musician, index) => (
          <div
            key={musician.id}
            className={`fish fish-${index + 1}`}
            onClick={() => handleFishClick(musician.route)}
          >
            <FishSVG color={musician.color} />
            <img
              src={musician.image}
              alt={musician.name}
              className='fish-band-image'
            />
            <div className='fish-tooltip'>
              <strong>{musician.name}</strong>
              <br />
              {musician.genre}
              <br />
              <span className='text-xs text-gray-300'>Click to view</span>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className='mt-8 flex flex-wrap justify-center gap-6'>
        {musicians.map((musician) => (
          <div
            key={musician.id}
            className='flex items-center gap-3 bg-orange-100 px-4 py-2 rounded-lg cursor-pointer hover:bg-[#FF8C42] hover:text-white transition-colors border-2 border-[#FF8C42]'
            onClick={() => handleFishClick(musician.route)}
          >
            <img
              src={musician.image}
              alt={musician.name}
              className='w-10 h-10 rounded-full border-2 border-[#FF8C42]'
            />
            <div className='text-left'>
              <div className='font-semibold'>{musician.name}</div>
              <div className='text-sm'>{musician.genre}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
