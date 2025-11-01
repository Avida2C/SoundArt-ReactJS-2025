/**
 * Detailed Artist Data
 * Contains extended information for artist detail pages
 */

const artistDetails = {
  1: { // The Beatles
    fullBio: "The Beatles were an English rock band, formed in Liverpool in 1960, that comprised John Lennon, Paul McCartney, George Harrison and Ringo Starr. They are regarded as the most influential band of all time and were integral to the development of 1960s counterculture and popular music's recognition as an art form. Rooted in skiffle, beat and 1950s rock 'n' roll, their sound incorporated elements of classical music and traditional pop in innovative ways; the band also explored music styles ranging from folk and Indian music to psychedelia and hard rock. As pioneers in recording, songwriting and artistic presentation, the Beatles revolutionised many aspects of the music industry and were often publicized as leaders of the era's youth and sociocultural movements. Led by primary songwriters Lennon and McCartney, the Beatles evolved from Lennon's previous group, the Quarrymen, and built their reputation playing clubs in Liverpool and Hamburg over three years from 1960, initially with Stuart Sutcliffe playing bass. The core trio of Lennon, McCartney and Harrison, together since 1958, went through a succession of drummers, including Pete Best, before asking Starr to join them in 1962. Manager Brian Epstein moulded them into a professional act, and producer George Martin guided and developed their recordings, greatly expanding their domestic success after signing to EMI Records and achieving their first hit, 'Love Me Do', in late 1962. Throughout their career, the Beatles released a series of groundbreaking albums that showcased their evolution from a pop band to experimental artists. Their early work featured infectious melodies and harmonies that captured the hearts of millions worldwide. As they matured, their music became more complex and innovative, incorporating diverse influences from around the globe. The band's creative partnership between Lennon and McCartney produced some of the most memorable songs in popular music history, while Harrison's songwriting contributions and interest in Indian music added unique dimensions to their sound. The Beatles' influence extended far beyond music, impacting fashion, culture, and social movements of the 1960s. Their studio innovations, particularly with producer George Martin at Abbey Road Studios, pushed the boundaries of what was possible in popular music recording. From the raw energy of their early performances in Liverpool and Hamburg to their final masterpieces, the Beatles consistently reinvented themselves while maintaining their distinctive identity. Even after their breakup in 1970, their music continues to resonate with new generations of listeners, cementing their status as one of the greatest and most beloved bands in history.",
    discography: [
      { year: "1963", title: "Please Please Me", type: "Studio Album", image: "/images/beatles01.jpg", releaseDate: "March 22, 1963" },
      { year: "1963", title: "With the Beatles", type: "Studio Album", image: "/images/beatles02.jpg", releaseDate: "November 22, 1963" },
      { year: "1964", title: "A Hard Day's Night", type: "Studio Album", image: "/images/thebeatles1967.jpg", releaseDate: "July 10, 1964" },
      { year: "1964", title: "Beatles for Sale", type: "Studio Album", image: "/images/The_Fabs.JPG", releaseDate: "December 4, 1964" },
      { year: "1965", title: "Help!", type: "Studio Album", image: "/images/beatles01.jpg", releaseDate: "August 6, 1965" },
      { year: "1965", title: "Rubber Soul", type: "Studio Album", image: "/images/beatles02.jpg", releaseDate: "December 3, 1965" },
      { year: "1966", title: "Revolver", type: "Studio Album", image: "/images/thebeatles1967.jpg", releaseDate: "August 5, 1966" },
      { year: "1967", title: "Sgt. Pepper's Lonely Hearts Club Band", type: "Studio Album", image: "/images/The_Fabs.JPG", releaseDate: "May 26, 1967" },
      { year: "1968", title: "The Beatles (White Album)", type: "Studio Album", image: "/images/beatles01.jpg", releaseDate: "November 22, 1968" },
      { year: "1969", title: "Abbey Road", type: "Studio Album", image: "/images/beatles02.jpg", releaseDate: "September 26, 1969" },
      { year: "1970", title: "Let It Be", type: "Studio Album", image: "/images/thebeatles1967.jpg", releaseDate: "May 8, 1970" }
    ],
    media: [
      { type: "Video", title: "A Hard Day's Night (1964)", description: "Musical comedy film" },
      { type: "Video", title: "Help! (1965)", description: "Musical comedy film" },
      { type: "Video", title: "Magical Mystery Tour (1967)", description: "Television film" },
      { type: "Video", title: "Yellow Submarine (1968)", description: "Animated musical film" },
      { type: "Video", title: "Let It Be (1970)", description: "Documentary film" }
    ],
    photos: [
      { title: "Early Days in Liverpool", image: "/images/beatles01.jpg", description: "The Beatles performing at the Cavern Club" },
      { title: "Studio Session", image: "/images/beatles02.jpg", description: "Recording at Abbey Road Studios" },
      { title: "Live Performance", image: "/images/thebeatles1967.jpg", description: "Concert at Shea Stadium" },
      { title: "Backstage", image: "/images/The_Fabs.JPG", description: "Behind the scenes moments" },
      { title: "Press Conference", image: "/images/beatles01.jpg", description: "Media interviews and press events" },
      { title: "Rehearsal", image: "/images/beatles02.jpg", description: "Practice sessions and preparation" }
    ],
    members: ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"],
    formed: "1960",
    origin: "Liverpool, England",
    genres: ["Rock", "Pop", "Psychedelic Rock", "Folk Rock"],
    website: "https://www.thebeatles.com",
    concerts: [
      { date: "2024-12-15", venue: "Madison Square Garden", city: "New York, NY", status: "Sold Out", price: "150-500" },
      { date: "2024-12-20", venue: "Hollywood Bowl", city: "Los Angeles, CA", status: "Limited", price: "200-600" },
      { date: "2025-01-10", venue: "Royal Albert Hall", city: "London, UK", status: "Available", price: "120-400" },
      { date: "2025-01-25", venue: "Sydney Opera House", city: "Sydney, Australia", status: "Available", price: "180-550" }
    ],
    topTracks: [
      { title: "Hey Jude", album: "The Beatles 1967-1970", duration: "7:11", spotifyId: "4y6B8u8zO2Q42xy3e7T9QS", youtubeId: "A_MjCqQoLLA", playCount: 2840000000, weeklyPlays: 12500000, peakPosition: 1, releaseYear: 1968 },
      { title: "Let It Be", album: "Let It Be", duration: "4:03", spotifyId: "7iN1s7xHE4ifF5povM6A48", youtubeId: "QDYfEBY9NM4", playCount: 1980000000, weeklyPlays: 8900000, peakPosition: 1, releaseYear: 1970 },
      { title: "Come Together", album: "Abbey Road", duration: "4:20", spotifyId: "2EqlS6tkEnglzr7tkKAAYD", youtubeId: "45cYwDMibGo", playCount: 1650000000, weeklyPlays: 7200000, peakPosition: 1, releaseYear: 1969 },
      { title: "Yesterday", album: "Help!", duration: "2:05", spotifyId: "3BQHpFgAp4l80e1XslIjNI", youtubeId: "NrgmdO2Qj4w", playCount: 1420000000, weeklyPlays: 6500000, peakPosition: 1, releaseYear: 1965 },
      { title: "Here Comes The Sun", album: "Abbey Road", duration: "3:05", spotifyId: "6dGnYIeXmHdcikdzNNDMm2", youtubeId: "KQetemT1sWc", playCount: 1380000000, weeklyPlays: 6100000, peakPosition: 2, releaseYear: 1969 },
      { title: "A Hard Day's Night", album: "A Hard Day's Night", duration: "2:34", spotifyId: "sample6", youtubeId: "sample6", playCount: 980000000, weeklyPlays: 4200000, peakPosition: 1, releaseYear: 1964 },
      { title: "Help!", album: "Help!", duration: "2:19", spotifyId: "sample7", youtubeId: "sample7", playCount: 850000000, weeklyPlays: 3800000, peakPosition: 1, releaseYear: 1965 },
      { title: "I Want To Hold Your Hand", album: "Meet The Beatles!", duration: "2:25", spotifyId: "sample8", youtubeId: "sample8", playCount: 720000000, weeklyPlays: 3200000, peakPosition: 1, releaseYear: 1963 }
    ]
  },
  2: { // Queen
    fullBio: "Queen are a British rock band formed in London in 1970. The band comprised Freddie Mercury (lead vocals, piano), Brian May (guitar, vocals), Roger Taylor (drums, vocals) and John Deacon (bass). Their earliest works were influenced by progressive rock, hard rock and heavy metal, but the band gradually ventured into more conventional and radio-friendly works by incorporating further styles, such as arena rock and pop rock. Before forming Queen, May and Taylor had played together in a band named Smile. Mercury was a fan of Smile and encouraged them to experiment with more elaborate stage and recording techniques. He joined in 1970 and suggested the name 'Queen'. Deacon was recruited in March 1971, before the band released their eponymous debut album in 1973. Queen first charted in the UK with their second album, Queen II, in 1974, but it was their third album, Sheer Heart Attack, in 1974 and A Night at the Opera in 1975 that brought them international success. The latter featured 'Bohemian Rhapsody', which stayed at number one in the UK for nine weeks and helped popularise the music video.",
    discography: [
      { year: "1973", title: "Queen", type: "Studio Album", image: "/images/Queen01.jpg", releaseDate: "July 13, 1973" },
      { year: "1974", title: "Queen II", type: "Studio Album", image: "/images/Queen02.jpg", releaseDate: "March 8, 1974" },
      { year: "1974", title: "Sheer Heart Attack", type: "Studio Album", image: "/images/Queen03.jpg", releaseDate: "November 8, 1974" },
      { year: "1975", title: "A Night at the Opera", type: "Studio Album", image: "/images/Queen04.jpg", releaseDate: "November 21, 1975" },
      { year: "1976", title: "A Day at the Races", type: "Studio Album", image: "/images/Queen05.jpg", releaseDate: "December 10, 1976" },
      { year: "1977", title: "News of the World", type: "Studio Album", image: "/images/Queen06.jpg", releaseDate: "October 28, 1977" },
      { year: "1978", title: "Jazz", type: "Studio Album", image: "/images/Queen07.jpg", releaseDate: "November 10, 1978" },
      { year: "1980", title: "The Game", type: "Studio Album", image: "/images/Queen08.jpg", releaseDate: "June 30, 1980" },
      { year: "1982", title: "Hot Space", type: "Studio Album", image: "/images/Queen09.jpeg", releaseDate: "May 21, 1982" },
      { year: "1984", title: "The Works", type: "Studio Album", image: "/images/Queen10.jpeg", releaseDate: "February 27, 1984" },
      { year: "1986", title: "A Kind of Magic", type: "Studio Album", image: "/images/Queen11.jpg", releaseDate: "June 2, 1986" },
      { year: "1989", title: "The Miracle", type: "Studio Album", image: "/images/Queen12.jpg", releaseDate: "May 22, 1989" },
      { year: "1991", title: "Innuendo", type: "Studio Album", image: "/images/Queen13.jpg", releaseDate: "February 4, 1991" },
      { year: "1995", title: "Made in Heaven", type: "Studio Album", image: "/images/Queen14.jpg", releaseDate: "November 6, 1995" }
    ],
    media: [
      { type: "Video", title: "We Will Rock You (1977)", description: "Music video" },
      { type: "Video", title: "Bohemian Rhapsody (1975)", description: "Music video" },
      { type: "Video", title: "Live Aid (1985)", description: "Live performance" },
      { type: "Video", title: "The Freddie Mercury Tribute Concert (1992)", description: "Tribute concert" }
    ],
    photos: [
      { title: "Live Performance", image: "/images/Queen01.jpg", description: "Queen performing at Wembley Stadium" },
      { title: "Studio Recording", image: "/images/Queen02.jpg", description: "Recording sessions at Mountain Studios" },
      { title: "Backstage", image: "/images/Queen03.jpg", description: "Behind the scenes moments" },
      { title: "Press Event", image: "/images/Queen04.jpg", description: "Media interviews and press conferences" },
      { title: "Concert", image: "/images/Queen05.jpg", description: "Live concert performance" },
      { title: "Rehearsal", image: "/images/Queen06.jpg", description: "Practice sessions and preparation" }
    ],
    members: ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"],
    formed: "1970",
    origin: "London, England",
    genres: ["Rock", "Progressive Rock", "Arena Rock", "Pop Rock"],
    website: "https://www.queenonline.com",
    concerts: [
      { date: "2024-12-18", venue: "Wembley Stadium", city: "London, UK", status: "Sold Out", price: "200-800" },
      { date: "2025-02-14", venue: "Staples Center", city: "Los Angeles, CA", status: "Available", price: "250-750" },
      { date: "2025-03-01", venue: "Tokyo Dome", city: "Tokyo, Japan", status: "Available", price: "25000-80000" },
      { date: "2025-03-15", venue: "Accor Arena", city: "Paris, France", status: "Limited", price: "180-600" }
    ],
    topTracks: [
      { title: "Bohemian Rhapsody", album: "A Night at the Opera", duration: "5:55", spotifyId: "4u7EnebtmKWzUH433cf5Qv", youtubeId: "fJ9rUzIMcZQ", playCount: 3200000000, weeklyPlays: 18500000, peakPosition: 1, releaseYear: 1975 },
      { title: "We Will Rock You", album: "News of the World", duration: "2:02", spotifyId: "54flyrjcdnQdco7300avMJ", youtubeId: "-tJYN-eG1zk", playCount: 2100000000, weeklyPlays: 11200000, peakPosition: 1, releaseYear: 1977 },
      { title: "We Are The Champions", album: "News of the World", duration: "2:59", spotifyId: "7ccI9cStQbQdystvc6TvxD", youtubeId: "04854XqcfCY", playCount: 1950000000, weeklyPlays: 9800000, peakPosition: 1, releaseYear: 1977 },
      { title: "Don't Stop Me Now", album: "Jazz", duration: "3:29", spotifyId: "5T8EDUDqKcs6OSOwEsfqG7", youtubeId: "HgzGwKwLmgM", playCount: 1680000000, weeklyPlays: 8500000, peakPosition: 2, releaseYear: 1978 },
      { title: "Somebody To Love", album: "A Day at the Races", duration: "4:56", spotifyId: "4DYrRVwWNGff6J7Hj8Fc9L", youtubeId: "kijpcUv-b8M", playCount: 1420000000, weeklyPlays: 7200000, peakPosition: 2, releaseYear: 1976 },
      { title: "Another One Bites The Dust", album: "The Game", duration: "3:36", spotifyId: "sample9", youtubeId: "sample9", playCount: 1250000000, weeklyPlays: 6500000, peakPosition: 1, releaseYear: 1980 },
      { title: "Under Pressure", album: "Hot Space", duration: "4:08", spotifyId: "sample10", youtubeId: "sample10", playCount: 1180000000, weeklyPlays: 5800000, peakPosition: 1, releaseYear: 1981 },
      { title: "Radio Ga Ga", album: "The Works", duration: "5:48", spotifyId: "sample11", youtubeId: "sample11", playCount: 980000000, weeklyPlays: 4800000, peakPosition: 1, releaseYear: 1984 }
    ]
  },
  3: { // Metallica
    website: "https://www.metallica.com"
  },
  4: { // AC/DC
    website: "https://www.acdc.com"
  },
  5: { // Pink Floyd
    website: "https://www.pinkfloyd.com"
  },
  6: { // The Police
    website: "https://www.thepolice.com"
  },
  7: { // Coldplay
    website: "https://www.coldplay.com"
  },
  8: { // Foo Fighters
    website: "https://www.foofighters.com"
  },
  9: { // Linkin Park
    website: "https://www.linkinpark.com"
  },
  10: { // Red Hot Chili Peppers
    website: "https://www.redhotchilipeppers.com"
  },
  11: { // R.E.M.
    website: "https://www.remhq.com"
  },
  12: { // Blink-182
    website: "https://www.blink182.com"
  },
  13: { // 3 Doors Down
    website: "https://www.3doorsdown.com"
  },
  14: { // Green Day
    website: "https://www.greenday.com"
  },
  15: { // Ozzy Osbourne
    website: "https://www.ozzy.com"
  },
  16: { // The Police (Live)
    website: "https://www.thepolice.com"
  }
};

const defaultArtistDetails = {
  fullBio: "",
  discography: [
    { year: "2020", title: "Greatest Hits", type: "Compilation", image: "/images/thumbnail01.jpg", releaseDate: "January 1, 2020" },
    { year: "2019", title: "Live Album", type: "Live Album", image: "/images/thumbnail02.jpg", releaseDate: "January 1, 2019" },
    { year: "2018", title: "Studio Album", type: "Studio Album", image: "/images/thumbnail03.jpg", releaseDate: "January 1, 2018" }
  ],
  media: [
    { type: "Video", title: "Music Video", description: "Official music video" },
    { type: "Video", title: "Live Performance", description: "Concert footage" }
  ],
  photos: [
    { title: "Live Performance", image: "/images/thumbnail04.jpg", description: "Concert performance" },
    { title: "Studio Session", image: "/images/thumbnail05.jpg", description: "Recording session" },
    { title: "Behind the Scenes", image: "/images/thumbnail06.jpg", description: "Behind the scenes moments" }
  ],
  members: ["Lead Singer", "Guitarist", "Bassist", "Drummer"],
  formed: "2000",
  origin: "Unknown",
  genres: ["Rock", "Alternative"],
  website: null,
  concerts: [
    { date: "2025-01-15", venue: "Local Venue", city: "Your City", status: "Available", price: "50-150" },
    { date: "2025-02-20", venue: "Concert Hall", city: "Nearby City", status: "Available", price: "75-200" }
  ],
  topTracks: [
    { title: "Popular Song", album: "Greatest Hits", duration: "3:30", spotifyId: "sample1", youtubeId: "sample1", playCount: 50000000, weeklyPlays: 250000, peakPosition: 5, releaseYear: 2020 },
    { title: "Another Hit", album: "Studio Album", duration: "4:15", spotifyId: "sample2", youtubeId: "sample2", playCount: 35000000, weeklyPlays: 180000, peakPosition: 8, releaseYear: 2019 },
    { title: "Classic Track", album: "Live Album", duration: "5:20", spotifyId: "sample3", youtubeId: "sample3", playCount: 25000000, weeklyPlays: 120000, peakPosition: 12, releaseYear: 2018 }
  ]
};

/**
 * Get detailed information for an artist
 * @param {Object} artist - The artist object from artistData
 * @returns {Object} Detailed artist information or default details if not found
 */
export const getArtistDetails = (artist) => {
  const details = artistDetails[artist.id];
  if (details) {
    // If artist has full details, return them
    if (details.fullBio || details.discography) {
      return details;
    }
    // If artist only has website or partial details, merge with defaults
    return {
      ...defaultArtistDetails,
      ...details,
      fullBio: details.fullBio || artist.bio
    };
  }
  // Fallback to defaults
  return {
    ...defaultArtistDetails,
    fullBio: artist.bio
  };
};

