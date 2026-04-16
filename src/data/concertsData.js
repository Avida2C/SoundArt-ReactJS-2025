/**
 * Concerts Data
 * Contains all concert information
 */

const concertsData = [
  { 
    id: 1,
    artist: "The Beatles", 
    date: "2024-12-15", 
    venue: "Madison Square Garden", 
    city: "New York, NY",
    country: "United States",
    price: "150-500",
    image: "/images/beatles/thebeatles1967.jpg",
    status: "Sold Out",
    genre: "Rock",
    description: "Experience the magic of The Beatles in this once-in-a-lifetime tribute concert featuring rare performances and classic hits."
  },
  { 
    id: 2,
    artist: "Queen", 
    date: "2024-12-20", 
    venue: "Wembley Stadium", 
    city: "London, UK",
    country: "United Kingdom",
    price: "200-800",
    image: "/images/queen/Queen_band.jpg",
    status: "Limited",
    genre: "Rock",
    description: "Join us for an epic Queen tribute featuring the greatest hits and spectacular stage production."
  },
  { 
    id: 3,
    artist: "Metallica", 
    date: "2025-01-10", 
    venue: "Staples Center", 
    city: "Los Angeles, CA",
    country: "United States",
    price: "200-600",
    image: "/images/roster/Metallica.jpg",
    status: "Available",
    genre: "Metal",
    description: "Heavy metal legends Metallica bring their thunderous sound to Los Angeles in this must-see concert."
  },
  { 
    id: 4,
    artist: "AC/DC", 
    date: "2025-01-25", 
    venue: "Sydney Opera House", 
    city: "Sydney, Australia",
    country: "Australia",
    price: "180-550",
    image: "/images/roster/ACDC.jpg",
    status: "Available",
    genre: "Rock",
    description: "Rock and roll thunder down under! AC/DC tribute band brings the high voltage energy to Sydney."
  },
  { 
    id: 5,
    artist: "The Police", 
    date: "2025-02-01", 
    venue: "Royal Albert Hall", 
    city: "London, UK",
    country: "United Kingdom",
    price: "180-600",
    image: "/images/roster/police.jpg",
    status: "Available",
    genre: "Rock",
    description: "Experience the fusion of rock, reggae, and new wave with The Police tribute."
  },
  { 
    id: 6,
    artist: "Pink Floyd", 
    date: "2025-02-08", 
    venue: "Hollywood Bowl", 
    city: "Los Angeles, CA",
    country: "United States",
    price: "200-650",
    image: "/images/roster/pinkfloyd.jpg",
    status: "Limited",
    genre: "Progressive Rock",
    description: "A mesmerizing tribute to Pink Floyd with stunning visual effects and iconic songs."
  },
  { 
    id: 7,
    artist: "Coldplay", 
    date: "2025-02-14", 
    venue: "O2 Arena", 
    city: "London, UK",
    country: "United Kingdom",
    price: "150-500",
    image: "/images/roster/coldplay.jpg",
    status: "Available",
    genre: "Pop Rock",
    description: "An anthemic celebration of Coldplay's greatest hits and infectious energy."
  },
  { 
    id: 8,
    artist: "Foo Fighters", 
    date: "2025-02-20", 
    venue: "Madison Square Garden", 
    city: "New York, NY",
    country: "United States",
    price: "180-550",
    image: "/images/roster/foofighters.jpg",
    status: "Available",
    genre: "Rock",
    description: "High-energy rock performance featuring Foo Fighters' greatest hits."
  },
  { 
    id: 9,
    artist: "Linkin Park", 
    date: "2025-02-28", 
    venue: "Staples Center", 
    city: "Los Angeles, CA",
    country: "United States",
    price: "220-700",
    image: "/images/roster/linkinpark.jpg",
    status: "Limited",
    genre: "Alternative Rock",
    description: "Powerful tribute blending rock, metal, and hip-hop in Linkin Park style."
  },
  { 
    id: 10,
    artist: "Red Hot Chili Peppers", 
    date: "2025-03-05", 
    venue: "Golden Gate Park", 
    city: "San Francisco, CA",
    country: "United States",
    price: "160-480",
    image: "/images/roster/redhotchillipeppers.jpg",
    status: "Available",
    genre: "Funk Rock",
    description: "California vibes meet funk rock in this high-energy tribute performance."
  },
  { 
    id: 11,
    artist: "R.E.M.", 
    date: "2025-03-12", 
    venue: "Merriweather Post Pavilion", 
    city: "Columbia, MD",
    country: "United States",
    price: "140-400",
    image: "/images/roster/rem.jpg",
    status: "Available",
    genre: "Alternative Rock",
    description: "Jangly guitars and introspective lyrics in this R.E.M. tribute."
  },
  { 
    id: 12,
    artist: "Green Day", 
    date: "2025-03-18", 
    venue: "Wembley Stadium", 
    city: "London, UK",
    country: "United Kingdom",
    price: "170-520",
    image: "/images/roster/greenday.jpg",
    status: "Available",
    genre: "Punk Rock",
    description: "Punk rock brought to the mainstream with Green Day's infectious energy."
  },
  { 
    id: 13,
    artist: "Blink-182", 
    date: "2025-03-25", 
    venue: "Red Rocks Amphitheatre", 
    city: "Morrison, CO",
    country: "United States",
    price: "180-580",
    image: "/images/roster/blink182.jpg",
    status: "Limited",
    genre: "Pop Punk",
    description: "Irreverent pop-punk anthems that defined a generation."
  },
  { 
    id: 14,
    artist: "3 Doors Down", 
    date: "2025-04-01", 
    venue: "Gorge Amphitheatre", 
    city: "George, WA",
    country: "United States",
    price: "130-380",
    image: "/images/roster/3doorsdown.jpg",
    status: "Available",
    genre: "Post-Grunge",
    description: "Post-grunge hooks with radio-ready rock anthems."
  },
  { 
    id: 15,
    artist: "Ozzy Osbourne", 
    date: "2025-04-08", 
    venue: "O2 Arena", 
    city: "London, UK",
    country: "United Kingdom",
    price: "220-750",
    image: "/images/roster/ozzy.jpg",
    status: "Limited",
    genre: "Heavy Metal",
    description: "The Prince of Darkness delivers heavy metal legend status."
  },
  { 
    id: 16,
    artist: "Breaking Benjamin", 
    date: "2025-04-15", 
    venue: "The Armory", 
    city: "Minneapolis, MN",
    country: "United States",
    price: "150-450",
    image: "/images/roster/breakingbenjamin.jpg",
    status: "Available",
    genre: "Alternative Rock",
    description: "Powerful alternative rock with emotional depth and heavy riffs."
  }
];

export default concertsData;

