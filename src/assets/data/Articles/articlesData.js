// articlesData.js
const articlesData = [
  {
    id: 1,
    title: "See rare photos of the Beatles before they were famous!",
    author: "Molly Enking",
    date: "06/10/2022",
    category: "Exclusive",
    tags: ["Beatles", "Rare Photos", "Liverpool", "Cavern Club"],
    readTime: "5 min read",
    views: 125000,
    likes: 890,
    image1: "/images/beatles01.jpg",
    image2: "/images/beatles02.jpg",
    content: [
      "In 1961, shortly before their rise to fame, the Beatles played a local gig at the Cavern Club in Liverpool. Now, rare photos of the group—including original drummer Pete Best—from that performance have been discovered by a local photographer's family.",
      "The newly discovered photos feature John Lennon, 20, and Paul McCartney, 19, singing and playing guitar in the intimate setting of the Cavern Club, where the band would perform nearly 300 times between 1961 and 1963.",
      "These photographs offer a unique glimpse into the early days of what would become the most successful band in history, showing the raw energy and charisma that would later captivate the world."
    ]
  },
  {
    id: 2,
    title: "How The Beatles Changed Rock Music Forever",
    author: "John Doe",
    date: "15/05/2021",
    category: "Analysis",
    tags: ["Beatles", "Rock Music", "Innovation", "Music History"],
    readTime: "8 min read",
    views: 98000,
    likes: 1200,
    image1: "/images/thebeatles1967.jpg",
    image2: "/images/The_Fabs.JPG",
    content: [
      "The Beatles revolutionized rock music by blending pop, classical, and psychedelic elements in ways that had never been attempted before. Their innovative approach to songwriting, recording techniques, and musical arrangements set new standards for the entire industry.",
      "From their early pop hits to their experimental later albums, The Beatles consistently pushed the boundaries of what was possible in popular music. Their influence can still be heard today in virtually every genre of music.",
      "The band's willingness to experiment with new sounds, instruments, and recording techniques paved the way for countless artists who followed, making them not just successful musicians, but true pioneers of modern music."
    ]
  },
  {
    id: 3,
    title: "Queen's Legacy Continues to Inspire New Generations",
    author: "Music Weekly",
    date: "20/03/2024",
    category: "Legacy",
    tags: ["Queen", "Freddie Mercury", "Legacy", "Inspiration"],
    readTime: "6 min read",
    views: 156000,
    likes: 2100,
    image1: "/images/Queen01.jpg",
    image2: "/images/Queen02.jpg",
    content: [
      "Queen's music continues to inspire new generations of musicians and fans worldwide. Their theatrical performances and timeless hits remain as relevant today as they were decades ago, proving that great music truly transcends time.",
      "The band's influence can be seen in modern rock, pop, and even electronic music, with artists across all genres citing Queen as a major inspiration. Their innovative approach to live performance and studio recording continues to set standards.",
      "From 'Bohemian Rhapsody' to 'We Will Rock You', Queen's songs have become anthems that unite people across cultures and generations, demonstrating the universal power of music."
    ]
  },
  {
    id: 4,
    title: "Metallica's Revolutionary Impact on Heavy Metal",
    author: "Metal Head",
    date: "15/02/2024",
    category: "Metal",
    tags: ["Metallica", "Heavy Metal", "Thrash Metal", "Pioneers"],
    readTime: "7 min read",
    views: 89000,
    likes: 1500,
    image1: "/images/Metallica.jpg",
    image2: "/images/party01.jpg",
    content: [
      "Metallica has been one of the most influential bands in heavy metal history, pioneering the thrash metal genre and bringing metal to mainstream audiences worldwide. Their technical precision and aggressive sound redefined what heavy metal could be.",
      "The band's complex compositions, powerful performances, and dedication to their craft have earned them a place among the greatest bands of all time. Their influence extends far beyond metal, affecting rock, alternative, and even classical music.",
      "From their early thrash metal days to their more recent experimental work, Metallica has consistently pushed the boundaries of heavy music while maintaining their core identity and fan base."
    ]
  },
  {
    id: 5,
    title: "The Evolution of Rock Music Through the Decades",
    author: "Rock History",
    date: "10/01/2024",
    category: "History",
    tags: ["Rock Music", "Evolution", "History", "Genres"],
    readTime: "10 min read",
    views: 112000,
    likes: 980,
    image1: "/images/ACDC.jpg",
    image2: "/images/pinkfloyd.jpg",
    content: [
      "Rock music has evolved dramatically over the decades, from its blues roots to the diverse subgenres we see today. Each era has brought new sounds, techniques, and cultural movements that have shaped the genre's development.",
      "From the early days of Chuck Berry and Elvis Presley to modern rock bands, the genre continues to reinvent itself while maintaining its core energy and rebellious spirit. The evolution reflects broader social and cultural changes.",
      "Today's rock music incorporates elements from countless other genres, creating a rich tapestry of sounds that continues to evolve and surprise listeners around the world."
    ]
  },
  {
    id: 6,
    title: "Pink Floyd's Psychedelic Masterpieces",
    author: "Prog Rock Monthly",
    date: "28/12/2023",
    category: "Progressive Rock",
    tags: ["Pink Floyd", "Progressive Rock", "Psychedelic", "Concept Albums"],
    readTime: "9 min read",
    views: 134000,
    likes: 1800,
    image1: "/images/pinkfloyd.jpg",
    image2: "/images/beatles01.jpg",
    content: [
      "Pink Floyd revolutionized progressive rock with their innovative use of synthesizers, elaborate concept albums, and groundbreaking live performances. Their music transcended traditional rock boundaries, creating immersive sonic experiences.",
      "From 'The Dark Side of the Moon' to 'The Wall', Pink Floyd created albums that were more than just collections of songs—they were complete artistic statements that explored themes of madness, isolation, and the human condition.",
      "The band's influence on modern music is immeasurable, with their experimental approach inspiring countless artists across genres from electronic music to alternative rock."
    ]
  },
  {
    id: 7,
    title: "Led Zeppelin: The Architects of Hard Rock",
    author: "Classic Rock Today",
    date: "05/12/2023",
    category: "Hard Rock",
    tags: ["Led Zeppelin", "Hard Rock", "Blues Rock", "Jimmy Page"],
    readTime: "8 min read",
    views: 167000,
    likes: 2200,
    image1: "/images/Led_Zeppelin.jpg",
    image2: "/images/Queen01.jpg",
    content: [
      "Led Zeppelin defined the sound of hard rock with their powerful riffs, thunderous drums, and Robert Plant's soaring vocals. Their fusion of blues, folk, and rock created a unique sound that influenced generations of musicians.",
      "The band's innovative approach to recording and production, combined with their legendary live performances, established them as one of the most important bands in rock history. Their influence can be heard in virtually every hard rock and metal band that followed.",
      "From 'Stairway to Heaven' to 'Whole Lotta Love', Led Zeppelin created some of the most iconic songs in rock history, songs that continue to resonate with fans around the world."
    ]
  },
  {
    id: 8,
    title: "The Rolling Stones: 60 Years of Rock and Roll",
    author: "Rock Legends",
    date: "22/11/2023",
    category: "Rock and Roll",
    tags: ["Rolling Stones", "Rock and Roll", "Mick Jagger", "Keith Richards"],
    readTime: "7 min read",
    views: 145000,
    likes: 1900,
    image1: "/images/Rolling_Stones.jpg",
    image2: "/images/Metallica.jpg",
    content: [
      "The Rolling Stones have been the embodiment of rock and roll for over six decades, with their rebellious attitude, blues-influenced sound, and electrifying live performances. They've outlasted trends and remained relevant through changing musical landscapes.",
      "Mick Jagger and Keith Richards' songwriting partnership has produced some of the most enduring songs in rock history, from 'Satisfaction' to 'Paint It Black'. Their music captures the spirit of rock and roll like no other band.",
      "The Stones' influence extends far beyond music, shaping fashion, culture, and the very definition of what it means to be a rock star. They continue to tour and record, proving that rock and roll truly has no age limit."
    ]
  },
  {
    id: 9,
    title: "Nirvana and the Grunge Revolution",
    author: "Alternative Weekly",
    date: "18/11/2023",
    category: "Grunge",
    tags: ["Nirvana", "Grunge", "Kurt Cobain", "Alternative Rock"],
    readTime: "6 min read",
    views: 198000,
    likes: 2800,
    image1: "/images/Nirvana.jpg",
    image2: "/images/ACDC.jpg",
    content: [
      "Nirvana brought grunge music to the mainstream with their raw, emotional sound and Kurt Cobain's powerful songwriting. Their breakthrough album 'Nevermind' changed the face of rock music in the early 1990s.",
      "The band's success opened doors for countless alternative and grunge bands, proving that music with authentic emotion and raw energy could compete with the polished pop of the era. Their influence on alternative rock is immeasurable.",
      "Despite their short career, Nirvana's impact on music culture was profound, inspiring a generation of musicians to embrace authenticity over commercial appeal and to express genuine emotion through their art."
    ]
  },
  {
    id: 10,
    title: "AC/DC: The Power of Simple Rock",
    author: "Hard Rock Herald",
    date: "12/11/2023",
    category: "Hard Rock",
    tags: ["AC/DC", "Hard Rock", "Angus Young", "Power Chords"],
    readTime: "5 min read",
    views: 123000,
    likes: 1600,
    image1: "/images/ACDC.jpg",
    image2: "/images/pinkfloyd.jpg",
    content: [
      "AC/DC proved that sometimes the most powerful music comes from the simplest elements. Their straightforward approach to rock and roll, built on powerful riffs and anthemic choruses, has made them one of the most successful bands in history.",
      "The band's signature sound, characterized by Malcolm and Angus Young's guitar work and Bon Scott's (later Brian Johnson's) distinctive vocals, has remained remarkably consistent throughout their career, proving that great rock doesn't need to be complicated.",
      "From 'Highway to Hell' to 'Thunderstruck', AC/DC has created some of the most recognizable and enduring rock anthems, songs that continue to energize audiences around the world decades after their release."
    ]
  },
  {
    id: 11,
    title: "The Beatles' Studio Innovations",
    author: "Recording Arts",
    date: "08/11/2023",
    category: "Technology",
    tags: ["Beatles", "Studio Innovation", "Recording", "Abbey Road"],
    readTime: "8 min read",
    views: 89000,
    likes: 1200,
    image1: "/images/beatles02.jpg",
    image2: "/images/thebeatles1967.jpg",
    content: [
      "The Beatles revolutionized studio recording with their innovative use of technology and creative experimentation. Working with producer George Martin at Abbey Road Studios, they pushed the boundaries of what was possible in the recording studio.",
      "From backward tape loops to innovative microphone techniques, The Beatles' studio work influenced the entire recording industry. Their approach to production was as creative as their songwriting, often using the studio as an instrument itself.",
      "Albums like 'Sgt. Pepper's Lonely Hearts Club Band' and 'Abbey Road' showcase the band's mastery of studio technology, creating sounds and textures that had never been heard before in popular music."
    ]
  },
  {
    id: 12,
    title: "Queen's Theatrical Live Performances",
    author: "Concert Chronicles",
    date: "03/11/2023",
    category: "Live Performance",
    tags: ["Queen", "Live Performance", "Theater", "Freddie Mercury"],
    readTime: "7 min read",
    views: 156000,
    likes: 2100,
    image1: "/images/Queen02.jpg",
    image2: "/images/Queen01.jpg",
    content: [
      "Queen transformed rock concerts into theatrical spectacles, with Freddie Mercury's commanding stage presence and the band's elaborate productions setting new standards for live performance. Their shows were more than concerts—they were full-scale productions.",
      "From their early club performances to their massive stadium shows, Queen consistently delivered unforgettable live experiences. Freddie Mercury's ability to connect with audiences of any size made him one of the greatest frontmen in rock history.",
      "The band's innovative use of lighting, staging, and audience participation created a template that countless bands have followed, proving that rock concerts could be both musically powerful and visually spectacular."
    ]
  },
  {
    id: 13,
    title: "The Rise of Progressive Rock in the 1970s",
    author: "Prog Rock Historian",
    date: "29/10/2023",
    category: "Progressive Rock",
    tags: ["Progressive Rock", "1970s", "Concept Albums", "Complexity"],
    readTime: "9 min read",
    views: 78000,
    likes: 1100,
    image1: "/images/pinkfloyd.jpg",
    image2: "/images/Led_Zeppelin.jpg",
    content: [
      "The 1970s saw the rise of progressive rock, a genre that combined rock music with elements of classical, jazz, and experimental music. Bands like Pink Floyd, Yes, and Genesis created complex, ambitious works that challenged listeners' expectations.",
      "Progressive rock was characterized by its use of complex time signatures, extended instrumental passages, and conceptual themes. These bands treated albums as complete artistic statements rather than collections of individual songs.",
      "The genre's influence can be heard in modern progressive metal, post-rock, and experimental music, proving that the progressive rock movement's emphasis on musical complexity and artistic ambition continues to inspire musicians today."
    ]
  },
  {
    id: 14,
    title: "Heavy Metal's Evolution from Black Sabbath to Today",
    author: "Metal Evolution",
    date: "25/10/2023",
    category: "Metal",
    tags: ["Heavy Metal", "Black Sabbath", "Evolution", "Subgenres"],
    readTime: "10 min read",
    views: 134000,
    likes: 1800,
    image1: "/images/Metallica.jpg",
    image2: "/images/ACDC.jpg",
    content: [
      "Heavy metal has evolved dramatically since Black Sabbath first defined the genre in the early 1970s. From the doom-laden riffs of Sabbath to the technical complexity of modern metal, the genre has continuously reinvented itself.",
      "The development of subgenres like thrash metal, death metal, and progressive metal has created a rich and diverse musical landscape. Each subgenre has brought new techniques, themes, and approaches to heavy music.",
      "Today's metal scene is more diverse than ever, with bands incorporating elements from electronic music, classical music, and world music, proving that heavy metal continues to evolve and surprise listeners."
    ]
  },
  {
    id: 15,
    title: "The Impact of Music Videos on Rock Culture",
    author: "Visual Music",
    date: "21/10/2023",
    category: "Culture",
    tags: ["Music Videos", "MTV", "Visual Culture", "Rock Music"],
    readTime: "6 min read",
    views: 98000,
    likes: 1300,
    image1: "/images/Queen01.jpg",
    image2: "/images/beatles01.jpg",
    content: [
      "The introduction of MTV in 1981 revolutionized how rock music was consumed and experienced. Music videos became an essential part of an artist's identity, allowing bands to create visual narratives that complemented their music.",
      "Bands like Queen, with their elaborate 'Bohemian Rhapsody' video, and later artists like Guns N' Roses and Metallica used music videos to enhance their artistic vision and reach new audiences. The visual medium became as important as the music itself.",
      "Today, with platforms like YouTube, music videos continue to be a crucial part of rock culture, allowing artists to express their creativity visually and connect with fans in new and innovative ways."
    ]
  }
];

export default articlesData;
