import React from 'react'
import GFTAllJuly2025 from '../../assets/images/gft-all-2025-07.jpg'

const About: React.FC = () => {
  return (
    <div className='flex flex-col gap-6 max-w-7xl mx-auto px-8 py-12 text-center min-h-[calc(100vh-5rem)]'>
      <h1 className='text-5xl md:text-4xl sm:text-3xl font-bold mb-6 text-[#1e3a5f]'>
        About Us
      </h1>
      <p className='text-xl md:text-lg sm:text-base text-[#2a5a8a] leading-relaxed'>
        Go Fish! enables musicians to focus on their art, not sending emails.
      </p>
      <p className='text-xl md:text-lg sm:text-base text-[#2a5a8a] leading-relaxed'>
        Our value offering is simple: we do what our artists don't want to do.
        This could include anything from booking festivals to producing
        merchandise in our garages to hosting events. We're interested in doing
        whatever the band needs to thrive.
      </p>
      <img
        src={GFTAllJuly2025}
        alt='GoFishTalent Team July 2025'
        className='max-w-full h-auto rounded-lg mx-auto shadow-lg border-4 border-[#FF8C42]'
      />
      <p className='text-xl md:text-lg sm:text-base text-[#2a5a8a] leading-relaxed'>
        Our core values are transparency, ambition, and fun. We believe in
        paying fairly the artistic or otherwise talent we work with. We believe
        doing good business means we have nothing to hide, from each other or
        our artists. We keep it real because we trust that we want the same
        thing.
      </p>
      <p className='text-xl md:text-lg sm:text-base text-[#2a5a8a] leading-relaxed'>
        We started off as friends who want to help our friends succeed. We also
        believe that work ought to be enjoyable and that includes reframing
        success as we navigate an industry that can be difficult to break into
        (especially at a living wage). It's important to us that we maintain a
        spirit that is not easily sullied in the face of defeat.
      </p>
    </div>
  )
}

export default About
