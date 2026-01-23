import React, { useState } from 'react'
import { FaTicketAlt } from 'react-icons/fa'
import { allTourDatesSortedByDate } from '../constants/tour'

const Tour: React.FC = () => {
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set())

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
        Tour
      </h1>

      {/* Placeholder Poster */}
      <div className='mx-auto w-full max-w-2xl mb-8'>
        <div className='bg-orange-50 border-4 border-[var(--primary)] rounded-xl aspect-[2/3] flex items-center justify-center'>
          <p className='text-[var(--secondary)] text-xl font-bold'>
            Tour Poster Coming Soon
          </p>
        </div>
      </div>

      {/* Tour Dates */}
      {allTourDatesSortedByDate.length === 0 ? (
        <div className='bg-orange-50 rounded-xl p-8 border-2 border-[var(--primary)]'>
          <p className='text-[var(--secondary)] text-lg'>
            No upcoming tour dates at the moment. Check back soon!
          </p>
        </div>
      ) : (
        <div className='max-w-6xl mx-auto w-full border-2 border-[var(--primary)] rounded-xl overflow-hidden'>
          {allTourDatesSortedByDate.map((show, index) => {
            const isExpanded = expandedRows.has(index)
            return (
              <div
                key={index}
                className={`bg-orange-50 hover:bg-orange-100 transition-all cursor-pointer ${
                  index !== allTourDatesSortedByDate.length - 1
                    ? 'border-b-2 border-[var(--primary)]'
                    : ''
                }`}
                onClick={() => toggleRowExpansion(index)}
              >
                {/* Three column layout without artist name */}
                <div className='grid grid-cols-1 md:grid-cols-5 gap-6 p-6'>
                  {/* Column 1: Venue and Location - 2 spans */}
                  <div className='md:col-span-2 space-y-2'>
                    <p className='text-[var(--tertiary)] font-bold text-xl'>
                      {show.location}
                    </p>
                    <p className='text-[var(--secondary)] text-sm'>
                      {show.venue}
                    </p>
                    {show.lineup && (
                      <p className='text-[var(--secondary)] text-sm'>
                        {show.lineup.join(', ')}
                      </p>
                    )}
                  </div>

                  {/* Column 2: Date and Event Name - 2 spans */}
                  <div className='md:col-span-2 space-y-2'>
                    {show.date && (
                      <p className='text-[var(--tertiary)] font-bold text-xl'>
                        {new Date(show.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          timeZone: 'UTC',
                        })}
                      </p>
                    )}
                    {show.eventName && (
                      <p className='text-[var(--secondary)] font-semibold'>
                        {show.eventName}
                      </p>
                    )}
                  </div>

                  {/* Column 3: Ticket Link - 1 span */}
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
                        Tickets coming soon
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
                      {show.priceInDollars && (
                        <p className='text-[var(--secondary)] text-sm'>
                          <span className='font-semibold'>Price:</span> $
                          {show.priceInDollars}
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

export default Tour

