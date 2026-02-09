import React, { useMemo, useState } from 'react'
import { FaTicketAlt } from 'react-icons/fa'
import { useSearchParams } from 'react-router-dom'
import { allShowsSortedByDate, musicians } from '../constants'

const Tickets: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const artistFilter = searchParams.get('artist') || 'all'
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set())

  // Filter shows based on selected artist
  const filteredShows = useMemo(() => {
    if (artistFilter === 'all') {
      return allShowsSortedByDate
    }
    return allShowsSortedByDate.filter(
      (show) => show.artistSlug === artistFilter,
    )
  }, [artistFilter])

  const handleFilterChange = (slug: string) => {
    // Collapse all rows when filter changes
    setExpandedRows(new Set())

    if (slug === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ artist: slug })
    }
  }

  const toggleRowExpansion = (index: number) => {
    setExpandedRows((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  return (
    <div className='flex flex-col gap-6 max-w-7xl mx-auto px-8 py-12 text-center min-h-[calc(100vh-5rem)]'>
      <h1 className='text-5xl md:text-4xl sm:text-3xl font-bold mb-6 text-[var(--tertiary)]'>
        Upcoming Shows
      </h1>

      {/* Artist Filter */}
      <div className='flex flex-wrap justify-center gap-3 mb-4'>
        <button
          onClick={() => handleFilterChange('all')}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            artistFilter === 'all'
              ? 'bg-[var(--primary)] text-white shadow-md'
              : 'bg-orange-100 text-[var(--secondary)] hover:bg-orange-200 border-2 border-orange-200'
          }`}
        >
          All Artists
        </button>
        {musicians.map((musician) => {
          return (
            <button
              key={musician.slug}
              onClick={() => handleFilterChange(musician.slug)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${musician.fontClass} ${
                artistFilter === musician.slug
                  ? 'bg-[var(--primary)] text-[var(--white)] shadow-md'
                  : 'bg-orange-100 text-[var(--secondary)] hover:bg-orange-200 border-2 border-orange-200'
              }`}
            >
              {musician.name}
            </button>
          )
        })}
      </div>

      {filteredShows.length === 0 ? (
        <div className='bg-orange-50 rounded-xl p-8 border-2 border-[var(--primary)]'>
          <p className='text-[var(--secondary)] text-lg'>
            No upcoming shows at the moment. Check back soon!
          </p>
        </div>
      ) : (
        <div className='max-w-6xl mx-auto w-full border-2 border-[var(--primary)] rounded-xl overflow-hidden'>
          {filteredShows.map((show, index) => {
            const isExpanded = expandedRows.has(index)
            return (
              <div
                key={index}
                className={`bg-orange-50 hover:bg-orange-100 transition-all cursor-pointer ${
                  index !== filteredShows.length - 1
                    ? 'border-b-2 border-[var(--primary)]'
                    : ''
                }`}
                onClick={() => toggleRowExpansion(index)}
              >
                {/* Four column layout with artist name on left, tickets column smaller */}
                <div className='grid grid-cols-1 md:grid-cols-7 gap-6 p-6'>
                  {/* Column 1: Artist Name and Other Talent - 2 spans */}
                  <div className='md:col-span-2 flex flex-col space-y-2'>
                    <h3
                      className={`text-2xl font-bold text-[var(--tertiary)] ${musicians.find((m) => m.slug === show.artistSlug)?.fontClass}`}
                    >
                      {musicians.find((m) => m.slug === show.artistSlug)
                        ?.name || 'Unknown Artist'}
                    </h3>
                    {show.lineup && (
                      <p className='text-[var(--secondary)] text-sm'>
                        {show.lineup.join(', ')}
                      </p>
                    )}
                    {show.eventName && (
                      <p className='text-[var(--secondary)] font-semibold'>
                        {show.eventName}
                      </p>
                    )}
                  </div>

                  {/* Column 2: Venue and Location - 2 spans */}
                  <div className='md:col-span-2 space-y-2'>
                    <p className='text-[var(--tertiary)] font-bold text-xl'>
                      {show.location}
                    </p>
                    <p className='text-[var(--secondary)] text-sm'>
                      {show.venue}
                    </p>
                  </div>

                  {/* Column 3: Date - 2 spans */}
                  <div className='md:col-span-2 space-y-2'>
                    {show.date && (
                      <p className='text-[var(--tertiary)] font-bold text-xl'>
                        {new Date(show.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    )}
                  </div>

                  {/* Column 4: Ticket Link and Social Link - 1 span (half size) */}
                  <div
                    className='md:col-span-1 space-y-3'
                    onClick={(e) => e.stopPropagation()}
                  >
                    {show.ticketLink ? (
                      show.isSoldOut ? (
                        <div className='block w-full px-4 py-3 bg-gray-300 text-gray-500 font-bold rounded-lg text-center cursor-not-allowed opacity-60'>
                          <div className='flex items-center justify-center gap-2'>
                            <FaTicketAlt />
                            <span>SOLD OUT</span>
                          </div>
                        </div>
                      ) : (
                        <a
                          href={show.ticketLink}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='block w-full px-4 py-3 bg-[var(--primary)] hover:bg-[#ff7a2e] text-[var(--white)] font-bold rounded-lg transition-colors shadow-md text-center'
                        >
                          <div className='flex items-center justify-center gap-2'>
                            <FaTicketAlt />
                            <span>Tickets</span>
                          </div>
                        </a>
                      )
                    ) : (
                      <p className='text-[var(--secondary)] text-sm'>
                        Tickets at the door
                      </p>
                    )}
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className='px-6 pb-6 pt-0'>
                    <div className='pt-4 flex flex-wrap gap-6 items-center justify-end'>
                      {show.doorsTime && (
                        <p className='text-[var(--secondary)] text-sm'>
                          <span className='font-semibold'>Doors:</span>{' '}
                          {show.doorsTime}
                        </p>
                      )}
                      {show.startTime && (
                        <p className='text-[var(--secondary)] text-sm'>
                          <span className='font-semibold'>Show Time:</span>{' '}
                          {show.startTime}
                        </p>
                      )}
                      {show.advancePriceInDollars && (
                        <p className='text-[var(--secondary)] text-sm'>
                          <span className='font-semibold'>Price:</span> $
                          {show.advancePriceInDollars}
                        </p>
                      )}
                      {show.eventLink && (
                        <a
                          href={show.eventLink}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='inline-block text-[var(--primary)] hover:text-[#ff7a2e] font-semibold transition-colors underline'
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Event Page →
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Tickets
