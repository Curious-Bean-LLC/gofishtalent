import React, { useEffect } from 'react'
import {
  FaArrowLeft,
  FaBandcamp,
  FaGlobe,
  FaInstagram,
  FaSoundcloud,
  FaSpotify,
  FaYoutube,
} from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import { musicians } from '../constants/musicians'

const TalentEPK: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()

  // Find the musician based on the route
  const musician = musicians.find((m) => m.route === `/talent/${slug}`)

  // Reinitialize Songkick widget when artist changes
  useEffect(() => {
    if (musician?.songkickArtistId && musician.songkickArtistId !== 'YOUR_SONGKICK_ARTIST_ID') {
      // Remove existing Songkick script
      const existingScript = document.querySelector('script[src*="widget-app.songkick.com"]')
      if (existingScript) {
        existingScript.remove()
      }

      // Load new Songkick script for this artist
      const script = document.createElement('script')
      script.src = `//widget-app.songkick.com/injector/${musician.songkickArtistId}`
      script.async = true
      document.body.appendChild(script)

      // Cleanup function
      return () => {
        const scriptToRemove = document.querySelector(`script[src*="${musician.songkickArtistId}"]`)
        if (scriptToRemove) {
          scriptToRemove.remove()
        }
      }
    }
  }, [musician?.songkickArtistId])

  if (!musician) {
    return (
      <div className='max-w-7xl mx-auto px-8 py-12 text-center min-h-[calc(100vh-5rem)]'>
        <h1 className='text-4xl font-bold text-white mb-4'>Artist Not Found</h1>
        <button
          onClick={() => navigate('/')}
          className='px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors'
        >
          Back to Home
        </button>
      </div>
    )
  }

  return (
    <div className='max-w-7xl mx-auto px-8 py-12 min-h-[calc(100vh-5rem)]'>
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className='flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8'
      >
        <FaArrowLeft />
        <span>Back to Pond</span>
      </button>

      {/* Hero Section */}
      <div className='bg-gray-800/50 rounded-2xl p-8 mb-8 border border-gray-700'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          {/* Cover Image */}
          <div className='rounded-xl overflow-hidden shadow-2xl'>
            <img
              src={musician.image}
              alt={musician.name}
              className='w-full object-cover'
            />
          </div>

          {/* Artist Info */}
          <div className='space-y-6'>
            <div>
              <h1
                className={`text-6xl max-md:text-4xl font-bold text-white mb-3 ${musician.fontClass}`}
              >
                {musician.name}
              </h1>
              <p className='text-2xl max-md:text-xl text-gray-200 mb-2'>
                {musician.genre}
              </p>
              <p className='text-lg text-gray-400'>{musician.location}</p>
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* Main Content */}
        <div className='lg:col-span-2 space-y-8'>
          {/* Bio Section */}
          <div className='bg-gray-800/50 rounded-xl p-6 border border-gray-700'>
            <h2 className='text-3xl font-bold text-white mb-4'>Biography</h2>
            <p className='text-gray-300 leading-relaxed text-lg'>
              {musician.bio}
            </p>
          </div>

          {/* Highlights Section */}
          <div className='bg-gray-800/50 rounded-xl p-6 border border-gray-700'>
            <h2 className='text-3xl font-bold text-white mb-4'>
              Career Highlights
            </h2>
            <ul className='space-y-3'>
              {musician.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className='flex items-start gap-3 text-gray-300'
                >
                  <span className='text-indigo-500 text-xl mt-1'>✦</span>
                  <span className='text-lg'>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Influences Section */}
          <div className='bg-gray-800/50 rounded-xl p-6 border border-gray-700'>
            <h2 className='text-3xl font-bold text-white mb-4'>Influences</h2>
            <div className='flex flex-wrap gap-3'>
              {musician.influences.map((influence, index) => (
                <span
                  key={index}
                  className='px-4 py-2 bg-gray-700/50 rounded-full text-gray-200 border border-gray-600'
                >
                  {influence}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className='space-y-6'>
          {/* Social Links */}
          <div className='bg-gray-800/50 rounded-xl p-6 border border-gray-700 sticky top-24'>
            <h2 className='text-2xl font-bold text-white mb-4'>Connect</h2>
            <div className='space-y-3'>
              <a
                href={musician.socialLinks.spotify}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-3 px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors text-white'
              >
                <FaSpotify size={24} />
                <span className='font-semibold'>Listen on Spotify</span>
              </a>
              <a
                href={musician.socialLinks.bandcamp}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-3 px-4 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-colors text-white'
              >
                <FaBandcamp size={24} />
                <span className='font-semibold'>Support on Bandcamp</span>
              </a>
              <a
                href={musician.socialLinks.soundcloud}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-3 px-4 py-3 bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors text-white'
              >
                <FaSoundcloud size={24} />
                <span className='font-semibold'>Stream on SoundCloud</span>
              </a>
              <a
                href={musician.socialLinks.youtube}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-3 px-4 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors text-white'
              >
                <FaYoutube size={24} />
                <span className='font-semibold'>Watch on YouTube</span>
              </a>
              <a
                href={musician.socialLinks.instagram}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transition-colors text-white'
              >
                <FaInstagram size={24} />
                <span className='font-semibold'>Follow on Instagram</span>
              </a>
              <a
                href={musician.socialLinks.website}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-3 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors text-white'
              >
                <FaGlobe size={24} />
                <span className='font-semibold'>Visit Website</span>
              </a>
            </div>

            {/* Contact Button */}
            <div className='mt-6 pt-6 border-t border-gray-700'>
              <button
                onClick={() => navigate('/contact')}
                className='w-full px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-white font-semibold'
              >
                Book This Artist
              </button>
            </div>
          </div>
          {/* Songkick Widget */}
          <a
            href={`https://www.songkick.com/artists/${musician.songkickArtistId}`}
            className='songkick-widget'
            data-theme='dark'
            data-track-button='on'
            data-detect-style='off'
            data-background-color='rgb(0,0,0,1)'
            data-font-color='rgb(255,255,255,1)'
            data-button-bg-color='rgb(255,255,255,1)'
            data-button-text-color='rgb(0,0,0,1)'
            data-locale='en'
            data-other-artists='on'
            data-share-button='on'
            data-country-filter='on'
            data-rsvp='on'
            data-request-show='on'
            data-past-events='off'
            data-past-events-offtour='off'
            data-remind-me='off'
            // style='display: none;'
          ></a>
        </div>
      </div>
    </div>
  )
}

export default TalentEPK
