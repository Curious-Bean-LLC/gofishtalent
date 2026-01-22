export interface Show {
  artistSlug: string
  date: string // ISO 8601 format
  venue: string
  location: string
  lineup?: string[]
  doorsTime?: string
  startTime?: string
  eventName?: string
  ticketLink?: string
  eventLink?: string
  priceInDollars?: number
  isSoldOut: boolean
}

const fa_shows: Show[] = [
  {
    artistSlug: 'fairy-astronaut',
    date: '2024-09-15',
    doorsTime: '7:00 PM',
    startTime: '8:00 PM',
    venue: 'The Grand Theater',
    location: 'Springfield, IL',
    lineup: ['The Headliners', 'Opening Act'],
    ticketLink: 'https://tickets.example.com/fa-2024-09-15',
    eventLink: 'https://events.example.com/fa-2024-09-15',
    priceInDollars: 45,
    isSoldOut: true,
  },
]
const axa_shows: Show[] = [
  {
    artistSlug: 'adriennexash',
    date: '2024-09-15',
    venue: 'The Grand Theater',
    location: 'Springfield, IL',
    lineup: ['The Headliners', 'Opening Act'],
    ticketLink: 'https://tickets.example.com/fa-2024-09-15',
    priceInDollars: 45,
    isSoldOut: false,
  },
]
const mh_shows: Show[] = [
  {
    artistSlug: 'modern-haunting',
    date: '2024-09-15',
    venue: 'The Grand Theater',
    location: 'Springfield, IL',
    lineup: ['The Headliners', 'Opening Act'],
    ticketLink: 'https://tickets.example.com/fa-2024-09-15',
    priceInDollars: 45,
    isSoldOut: false,
  },
]

export const allShowsSortedByDate: Show[] = [fa_shows, axa_shows, mh_shows]
  .flat()
  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
