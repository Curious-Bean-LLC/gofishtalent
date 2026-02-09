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
  advancePriceInDollars?: number
  doorPriceInDollars?: number
  isSoldOut: boolean
}

const fa_shows: Show[] = [
  {
    artistSlug: 'fairy-astronaut',
    date: '02-28-2026',
    venue: "Linneman's Riverwest Inn",
    location: 'Milwaukee, WI',
    isSoldOut: false,
    eventLink: 'https://linnemans.com/event/ssaann-w-faded-places-fairy-astronaut-february-28-2026/',
  },
  {
    artistSlug: 'fairy-astronaut',
    date: '03-22-2026',
    venue: "Anodyne Walker's Point",
    location: 'Milwaukee, WI',
    ticketLink: 'https://tickets.venuepilot.com/e/fairy-astronaut-modern-haunting-luxi-2026-03-22-anodyne-coffee-roasting-co-224-w-bruce-st-milwaukee-9cc07b',
    eventLink: 'https://anodynecoffee.com/pages/concerts?srsltid=AfmBOop691z_TuMJDFNjWjhiivrgJZk4TIDlNMj0HPjuLmi0phK2bRL8#/events/168983',
    advancePriceInDollars: 12,
    doorPriceInDollars: 17,
    doorsTime: '5:00 PM',
    startTime: '6:00 PM',
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
  {
    artistSlug: 'fairy-astronaut',
    date: '07-23-2026',
    venue: 'GBUFO Museum',
    eventName: 'GBUFO Invasion Fest',
    location: 'Green Bay, WI',
    // lineup: ['Modern Haunting'], // TODO update with lineup once announced
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
    venue: 'GBUFO Museum',
    eventName: 'GBUFO Invasion Fest',
    location: 'Green Bay, WI',
    // lineup: ['Fairy Astronaut'], // TODO update with lineup once announced
    isSoldOut: false,
  },
]

export const allShowsSortedByDate: Show[] = [fa_shows, axa_shows, mh_shows]
  .flat()
  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
