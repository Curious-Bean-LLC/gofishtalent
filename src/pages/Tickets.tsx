import React, { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { musicians } from '../constants/musicians'
import { FaTicketAlt } from 'react-icons/fa'

const Tickets: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const artistFilter = searchParams.get('artist') || 'all'

  // Collect all shows from all musicians
  const allShows = useMemo(() => {
    return musicians
      .flatMap((musician) =>
        musician.shows?.map((show) => ({
          ...show,
          artistName: musician.name,
          artistFontClass: musician.fontClass,
          artistSlug: musician.route.split('/').pop() || '',
        })) || []
      )
      .sort((a, b) => {
        // Sort by date if available, otherwise keep original order
        if (a.date && b.date) {
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        }
        return 0
      })
  }, [])

  // Filter shows based on selected artist
  const filteredShows = useMemo(() => {
    if (artistFilter === 'all') {
      return allShows
    }
    return allShows.filter((show) => show.artistSlug === artistFilter)
  }, [allShows, artistFilter])

  // Get unique artists who have shows
  const artistsWithShows = useMemo(() => {
    return musicians.filter((musician) => musician.shows && musician.shows.length > 0)
  }, [])

  const handleFilterChange = (slug: string) => {
    if (slug === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ artist: slug })
    }
  }

  return (
    <div className='flex flex-col gap-6 max-w-7xl mx-auto px-8 py-12 text-center min-h-[calc(100vh-5rem)]'>
      <h1 className='text-5xl md:text-4xl sm:text-3xl font-bold mb-6 text-[#1e3a5f]'>
        Upcoming Shows
      </h1>
      <p className='text-xl md:text-lg sm:text-base text-[#2a5a8a] leading-relaxed mb-4'>
        Catch our talent live! Get your tickets now.
      </p>

      {/* Artist Filter */}
      <div className='flex flex-wrap justify-center gap-3 mb-4'>
        <button
          onClick={() => handleFilterChange('all')}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            artistFilter === 'all'
              ? 'bg-[#FF8C42] text-white shadow-md'
              : 'bg-orange-100 text-[#2a5a8a] hover:bg-orange-200 border-2 border-orange-200'
          }`}
        >
          All Artists
        </button>
        {artistsWithShows.map((musician) => {
          const slug = musician.route.split('/').pop() || ''
          return (
            <button
              key={musician.id}
              onClick={() => handleFilterChange(slug)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                artistFilter === slug
                  ? 'bg-[#FF8C42] text-white shadow-md'
                  : 'bg-orange-100 text-[#2a5a8a] hover:bg-orange-200 border-2 border-orange-200'
              }`}
            >
              {musician.name}
            </button>
          )
        })}
      </div>

      {filteredShows.length === 0 ? (
        <div className='bg-orange-50 rounded-xl p-8 border-2 border-[#FF8C42]'>
          <p className='text-[#2a5a8a] text-lg'>
            No upcoming shows at the moment. Check back soon!
          </p>
        </div>
      ) : (
        <div className='max-w-6xl mx-auto w-full border-2 border-[#FF8C42] rounded-xl overflow-hidden'>
          {filteredShows.map((show, index) => (
            <div
              key={index}
              className={`bg-orange-50 hover:bg-orange-100 transition-all ${
                index !== filteredShows.length - 1 ? 'border-b-2 border-[#FF8C42]' : ''
              }`}
            >
              {/* Four column layout with artist name on left */}
              <div className='grid grid-cols-1 md:grid-cols-4 gap-6 p-6'>
                {/* Column 1: Artist Name and Other Talent */}
                <div className='flex flex-col justify-center md:border-r-2 md:border-[#FF8C42] md:pr-6 space-y-2'>
                  <h3
                    className={`text-2xl font-bold text-[#1e3a5f] ${show.artistFontClass}`}
                  >
                    {show.artistName}
                  </h3>
                  {show.other_talent && (
                    <p className='text-[#2a5a8a] text-sm'>
                      <span className='font-semibold'>With: </span>
                      {show.other_talent}
                    </p>
                  )}
                </div>

                {/* Column 2: Date and Event Name */}
                <div className='space-y-2'>
                  {show.date && (
                    <p className='text-[#1e3a5f] font-bold text-lg'>
                      {show.date}
                    </p>
                  )}
                  {show.event_name && (
                    <p className='text-[#2a5a8a] font-semibold'>
                      {show.event_name}
                    </p>
                  )}
                </div>

                {/* Column 2: Venue and Location */}
                <div className='space-y-2'>
                  <p className='text-[#1e3a5f] font-bold text-lg'>
                    {show.venue}
                  </p>
                  <p className='text-[#2a5a8a]'>
                    {show.location}
                  </p>
                </div>

                {/* Column 3: Ticket Link and Social Link */}
                <div className='space-y-3'>
                  {show.ticket_link ? (
                    <a
                      href={show.ticket_link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='block w-full px-4 py-3 bg-[#FF8C42] hover:bg-[#ff7a2e] text-white font-bold rounded-lg transition-colors shadow-md text-center'
                    >
                      <div className='flex items-center justify-center gap-2'>
                        <FaTicketAlt />
                        <span>Buy Tickets</span>
                      </div>
                    </a>
                  ) : (
                    <p className='text-[#2a5a8a] text-sm'>
                      Tickets coming soon
                    </p>
                  )}
                  {show.social_link && (
                    <a
                      href={show.social_link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='block text-center px-4 py-2 text-[#FF8C42] hover:text-[#ff7a2e] font-semibold transition-colors border-2 border-[#FF8C42] hover:border-[#ff7a2e] rounded-lg'
                    >
                      Event Page →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Tickets
