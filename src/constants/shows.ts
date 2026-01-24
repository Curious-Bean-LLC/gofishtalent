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
    date: '02-22-2026',
    venue: 'Unknown',
    location: 'Milwaukee, WI',
    isSoldOut: false,
  },
  {
    artistSlug: 'fairy-astronaut',
    date: '03-22-2026',
    venue: "Anodyne Walker's Point",
    location: 'Milwaukee, WI',
    isSoldOut: false,
  },
  {
    artistSlug: 'fairy-astronaut',
    date: '05-26-2026',
    venue: 'TBA',
    location: 'Milwaukee, WI',
    lineup: ['Desperate Electric', 'Modern Haunting'],
    isSoldOut: false,
  },
]
const axa_shows: Show[] = [
  // {
  //   artistSlug: 'adriennexash',
  //   date: '09-15-2024',
  //   venue: 'The Grand Theater',
  //   location: 'Springfield, IL',
  //   lineup: ['The Headliners', 'Opening Act'],
  //   ticketLink: 'https://tickets.example.com/fa-2024-09-15',
  //   priceInDollars: 45,
  //   isSoldOut: false,
  // },
]
const mh_shows: Show[] = [
  {
    artistSlug: 'modern-haunting',
    date: '03-07-2026',
    venue: 'At The Tracks',
    location: 'Green Bay, WI',
    isSoldOut: false,
  },
  {
    artistSlug: 'modern-haunting',
    date: '03-14-2026',
    venue: 'The Missfits',
    location: 'Appleton, WI',
    isSoldOut: false,
  },
  {
    artistSlug: 'modern-haunting',
    date: '03-22-2026',
    venue: "Anodyne Walker's Point",
    location: 'Milwaukee, WI',
    isSoldOut: false,
  },
  {
    artistSlug: 'modern-haunting',
    date: '04-14-2026',
    venue: 'At The Tracks',
    location: 'Green Bay, WI',
    isSoldOut: false,
  },
  {
    artistSlug: 'modern-haunting',
    date: '05-26-2026',
    venue: 'TBA',
    location: 'Milwaukee, WI',
    lineup: ['Desperate Electric', 'Fairy Astronaut'],
    isSoldOut: false,
  },
  {
    artistSlug: 'modern-haunting',
    date: '07-23-2026',
    venue: 'GBUFO Invasion Fest',
    location: 'Green Bay, WI',
    isSoldOut: false,
  },
]

export const allShowsSortedByDate: Show[] = [fa_shows, axa_shows, mh_shows]
  .flat()
  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
