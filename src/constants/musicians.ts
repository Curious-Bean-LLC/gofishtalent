import GFTLogo from '../../assets/images/gft-logo.png'
import FALogo from '../../assets/images/fa-logo.png'
import FACover from '../../assets/images/fa-cover.png'
import MHCover from '../../assets/images/mh-cover.jpg'
import AXACover from '../../assets/images/axa-cover.png'

export const musicians = [
  {
    id: 1,
    logo: FALogo,
    name: 'Fairy Astronaut',
    genre: 'Psychedelic Art-Pop',
    color: '#ff6b6b',
    image: FACover,
    fontClass: 'font-gochi-hand',
    route: '/talent/fairy-astronaut',
    bio: 'Fairy Astronaut is a Psychedelic Artpop Duo in Milwaukee, Wisconsin. Fronted by Brady Wayne- multi instrumentalist, producer, and McKenzie Van Oss- vocalist, multi instrumentalist, and former professional ballet dancer, stars collide to blast you off into a new dimension. The twink glam pair are originally from Green Bay, Wisconsin, and met in the Spring of 2024, where immediately a supernova was born. Quickly moving to Milwaukee later that fall, they began to shake things up leaving audiences with questions such as, “What is going on here?” and “Is this Performance Art? A Synth Wizard Battle? A Dance Party?” But what you really should be asking is, “Are we Human, or are we Fairy Astronaut?” and the answer is always, “Who Cares.”',
    location: 'Milwaukee, WI',
    influences: ['David Bowie', 'Björk', 'Tame Impala', 'Kate Bush'],
    highlights: [
      'Hosted a holiday special with over 50 attendees and moving $1k in ticket sales',
    ],
    sets: [
      {
        name: 'Originals Duo Set',
        duration: '30-60 minutes',
        description:
          'High-energy performance of original psychedelic art-pop songs featuring live synths, vocals, and dance performance',
      },
      {
        name: 'Covers Duo Set',
        duration: '30-180 minutes',
        description:
          'Unique reimaginings of popular songs across genres with our signature psychedelic twist',
      },
    ],
    socialLinks: {
      spotify:
        'https://open.spotify.com/artist/2o2CoR0mS78JbibKCr4q4q?si=DaHX28j-T6OudOHYQkCe4Q',
      instagram: 'https://instagram.com/fairyastronaut',
      website: 'https://bio.site/fairyastronaut',
      bandcamp: 'https://fairyastronaut.bandcamp.com',
      soundcloud: 'https://soundcloud.com/fairyastronaut',
      youtube: 'https://youtube.com/@fairyastronaut',
    },
    spotifyEmbedLink: 'https://open.spotify.com/embed/artist/2o2CoR0mS78JbibKCr4q4q?utm_source=generator&theme=0',
    songkickArtistId: '10384508',
    performances: [
      {
        title: 'Big Fish Bowl LIVE at Cactus Club (Milwaukee, WI)',
        youtubeUrl: 'https://youtu.be/ZePMJCnMH5g',
      },
      {
        title: 'Suburbia LIVE EP Release Show July 2025 (Milwaukee, WI)',
        youtubeUrl: 'https://youtu.be/h_miVJPdovE',
      },
      {
        title: 'Yes Woman LIVE EP Release Show July 2025 (Milwaukee, WI)',
        youtubeUrl: 'https://youtu.be/a9iZ8bDKt3o',
      },
    ],
    pressCoverage: [
      {
        title:
          'Radio Milwaukee `Milwaukee Music Friday`: Fairy Astronaut - LVL 5',
        url: 'https://radiomilwaukee.org/local-music/2025-10-16/new-milwaukee-music-fairy-astronaut-lvl-5',
        quote:
          '[McKenzie] Van Oss and bandmate Brady Wayne settle into a kinetic groove that’ll be perfect for bouncing around at their next live show.',
      },
    ],
  },
  {
    id: 2,
    logo: GFTLogo,
    name: 'AdriennexAsh',
    genre: 'Vocal pop duo',
    color: '#4ecdc4',
    image: AXACover,
    fontClass: 'font-rock-salt',
    route: '/talent/adriennexash',
    bio: 'Adrienne & Ash are identical twins, slaying the stage and serving looks ever since they can remember. They have an unsurprising natural talent to create smooth sounds together, whether they’re performing covers or delivering original tunes. Transcending genres, they spread their wings around pop, alternative, & soulful music with their uniquely ethereal, edgy, & maximalist vibe that can only ring in as authentically themselves.',
    location: 'Milwaukee, WI',
    influences: [
      'Alicia Keys',
      'H.E.R.',
      'SZA',
      'Erykah Badu',
      'Hozier',
      'Frank Ocean',
    ],
    highlights: [
      'Invited to perform at the Cactus Club (Milwaukee, WI) on more than one occasion',
    ],
    sets: [
      {
        name: 'Originals Duo Set',
        duration: '20-30 min',
        description:
          'Ethereal vocal harmonies and original songs blending pop, alternative, and soul',
      },
      {
        name: 'Covers Duo Set',
        duration: '30-45 min',
        description:
          'Stunning vocal arrangements of contemporary and classic hits spanning multiple genres',
      },
    ],
    socialLinks: {
      // spotify: 'https://spotify.com',
      instagram: 'https://instagram.com/adriennexash',
      website: 'https://bio.site/adriennexash',
      bandcamp: 'https://adriennexash.bandcamp.com',
      soundcloud: 'https://soundcloud.com/adriennexash',
      youtube: 'https://youtube.com/@adriennexash',
    },
    songkickArtistId: 'YOUR_SONGKICK_ARTIST_ID', // Replace with actual Songkick artist ID
    performances: [
      {
        title: 'Live Performance',
        youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Replace with actual video
      },
    ],
    pressCoverage: [
      // {
      //   title: 'Press Feature',
      //   url: 'https://example.com/article',
      //   quote: 'Twin vocal powerhouses with an unmistakable chemistry.',
      // },
    ],
  },
  {
    id: 3,
    logo: FALogo,
    name: 'Modern Haunting',
    genre: 'Paranormal dance rock',
    color: '#ffe66d',
    image: MHCover,
    fontClass: 'font-bangers',
    route: '/talent/modern-haunting',
    bio: 'Modern Haunting is a Paranormal Dance Rock band in Green Bay, Wisconsin. Fronted by Charlie Devillers, the project kicked off in 2022 after returning from his stint studying music in Nashville. Modern Haunting leads with driving synths, dance rock instrumentals, and vocals that follow the haunted vibe - sometimes like a classic 80s thriller, other times lyrically capturing the haunt of reality. Performances build on the recorded tracks fitting the energy of any room, making each set unique. The community Modern Haunting brings is passionate about a good bit, good music, and a new release every Friday the 13th.',
    location: 'Green Bay, WI',
    influences: ['The Killers', 'CHVRCHES', 'Depeche Mode', 'New Order'],
    highlights: ['3x BAMMY Award Winner'],
    sets: [
      {
        name: 'Originals - Solo',
        duration: '30-60 min',
        description:
          'High-energy paranormal dance rock with driving synths and haunting vocals',
      },
      {
        name: 'Originals - Duo',
        duration: '30-60 min',
        description: "It's like a solo set, but with a guitarist!",
      },
      {
        name: 'Originals - 4-piece Band',
        duration: '30-60 min',
        description:
          'The full Modern Haunting experience with bass, drums, guitar, synths, and vocals',
      },
    ],
    socialLinks: {
      spotify:
        'https://open.spotify.com/artist/75HqvSa3U6VfjkiCcKrOVe?si=teddqDjoRYi5UAFXlJ3piQ',
      instagram: 'https://instagram.com/modernhauntingmusic',
      website: 'https://modernhaunting.com',
      bandcamp: 'https://modernhaunting.bandcamp.com',
      soundcloud: 'https://soundcloud.com/modernhaunting',
      youtube: 'https://youtube.com/@modernhaunting',
    },
    songkickArtistId: '10312224', // Replace with actual Songkick artist ID
    performances: [
      {
        title: '09/13/2024 All Bands on Deck (Green Bay, WI)',
        youtubeUrl: 'https://www.youtube.com/watch?v=MkP08K1AECk', // Replace with actual video
      },
      {
        title: '01/20/2024 Frets and Friends (Green Bay, WI)',
        youtubeUrl: 'https://www.youtube.com/watch?v=Ar5Bq9wpk2s', // Replace with actual video
      },
    ],
    pressCoverage: [
      {
        title: "Modern Haunting on Code Zero Radio's Fox Cities Core",
        url: 'https://www.youtube.com/watch?v=3FtlTtQy7x0',
      },
      {
        title:
          "There's a Modern Haunting in Green Bay - ION Indie Music Magazine",
        url: 'https://domandoma.in/doman-documents/modern-haunting',
        quote: 'The soul of an 80’s vampire',
      },
    ],
    spotifyEmbedLink: 'https://open.spotify.com/embed/artist/75HqvSa3U6VfjkiCcKrOVe?utm_source=generator&theme=0',
  },
]
