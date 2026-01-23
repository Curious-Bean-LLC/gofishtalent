import type { Show } from './shows'

const tourDates: Show[] = [
  {
    artistSlug: 'fairy-astronaut',
    date: '2026-06-02',
    venue: 'TBD',
    location: 'Knoxville, TN',
    isSoldOut: false,
  },
  {
    artistSlug: 'fairy-astronaut',
    date: '2026-06-03',
    venue: 'TBD',
    location: 'Nashville, TN',
    isSoldOut: false,
  },
  {
    artistSlug: 'fairy-astronaut',
    date: '2026-06-04',
    venue: 'TBD',
    location: 'Louisville, KY',
    isSoldOut: false,
  },
  {
    artistSlug: 'fairy-astronaut',
    date: '2026-06-05',
    venue: 'TBD',
    location: 'Cincinnati, OH',
    isSoldOut: false,
  },
  {
    artistSlug: 'fairy-astronaut',
    date: '2026-06-06',
    venue: 'TBD',
    location: 'St Louis, MO',
    isSoldOut: false,
  },
  {
    artistSlug: 'fairy-astronaut',
    date: '2026-06-08',
    venue: 'TBD',
    location: 'Springfield, IL',
    isSoldOut: false,
  },
  {
    artistSlug: 'fairy-astronaut',
    date: '2026-06-09',
    venue: 'TBD',
    location: 'Chicago, IL',
    isSoldOut: false,
  },
  {
    artistSlug: 'fairy-astronaut',
    date: '2026-06-10',
    venue: 'TBD',
    location: 'Minneapolis, MN',
    isSoldOut: false,
  },
  {
    artistSlug: 'fairy-astronaut',
    date: '2026-06-11',
    venue: 'TBD',
    location: 'Madison, WI',
    isSoldOut: false,
  },
  {
    artistSlug: 'fairy-astronaut',
    date: '2026-06-13',
    venue: 'TBD',
    location: 'Milwaukee, WI',
    isSoldOut: false,
  },
]

export const allTourDatesSortedByDate = tourDates.sort(
  (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
)
