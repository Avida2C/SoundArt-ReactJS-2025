const articlesData = [
  {
    id: 1,
    title: "The Beatles: The Story Behind The Legend",
    author: "Editor",
    date: "1967-06-01",
    category: "History",
    tags: ["Beatles", "History", "Rock and Roll"],
    readTime: "8 min",
    views: 125000,
    likes: 5400,
    image1: "/images/thebeatles1967.jpg",
    image2: "/images/The_Fabs.JPG",
    content: [
      "The Beatles transformed popular music with innovative songwriting and boundary-pushing studio work.",
      "Their influence spans generations, shaping the sound and culture of modern music."
    ]
  },
  {
    id: 2,
    title: "Queen's Rise to Global Stardom",
    author: "Staff Writer",
    date: "1975-11-21",
    category: "Legacy",
    tags: ["Queen", "Freddie Mercury", "Arena Rock"],
    readTime: "6 min",
    views: 98000,
    likes: 4100,
    image1: "/images/Queen_band.jpg",
    image2: "/images/Queen04.jpg",
    content: [
      "From humble beginnings to stadium anthems, Queen redefined live performance.",
      "Their catalog continues to inspire new generations of artists."
    ]
  },
  {
    id: 3,
    title: "Metallica: Masters of Metal",
    author: "Contributor",
    date: "1986-03-03",
    category: "Metal",
    tags: ["Metallica", "Metal", "Thrash"],
    readTime: "7 min",
    views: 87000,
    likes: 3500,
    image1: "/images/Metallica.jpg",
    image2: "/images/Metallica.jpg",
    content: [
      "Metallica brought thrash metal to the mainstream with precision and power.",
      "Their influence can be heard across modern heavy music."
    ]
  },
  {
    id: 4,
    title: "AC/DC and the Sound of High Voltage",
    author: "Guest Author",
    date: "1980-07-25",
    category: "Hard Rock",
    tags: ["AC/DC", "Hard Rock"],
    readTime: "5 min",
    views: 64000,
    likes: 2700,
    image1: "/images/ACDC.jpg",
    image2: "/images/ACDC.jpg",
    content: [
      "Few bands capture raw energy quite like AC/DC.",
      "Their timeless riffs continue to electrify audiences worldwide."
    ]
  },
  {
    id: 5,
    title: "See rare photos of the Beatles before they were famous!",
    author: "Molly Enking",
    date: "2022-10-06",
    category: "Exclusive",
    tags: ["Beatles", "Rare Photos", "Liverpool", "History"],
    readTime: "5 min",
    views: 125000,
    likes: 890,
    image1: "/images/thebeatles1967.jpg",
    image2: "/images/The_Fabs.JPG",
    content: [
      "In 1961, shortly before their rise to fame, the Beatles played a local gig at the Cavern Club in Liverpool. Now, rare photos from those early days have surfaced, showing the band in their raw, unpolished form.",
      "These images capture a moment in time before Beatlemania swept the globe, when four young musicians were just beginning to find their sound.",
      "The photos reveal intimate moments backstage and on stage, offering fans a glimpse into the band's humble beginnings before they became the most influential group in music history."
    ]
  },
  {
    id: 6,
    title: "How The Beatles Changed Rock Music Forever",
    author: "John Doe",
    date: "2021-05-15",
    category: "Analysis",
    tags: ["Beatles", "Rock Music", "Innovation", "History"],
    readTime: "8 min",
    views: 98000,
    likes: 1200,
    image1: "/images/thebeatles1967.jpg",
    image2: "/images/The_Fabs.JPG",
    content: [
      "The Beatles revolutionized rock music by blending pop, classical, and psychedelic elements in ways that had never been attempted before.",
      "Their innovative approach to studio recording, songwriting, and musical composition opened doors for countless artists who followed.",
      "From their early pop hits to their later experimental works, The Beatles proved that rock music could be both commercially successful and artistically groundbreaking."
    ]
  },
  {
    id: 7,
    title: "Queen's Legacy Continues to Inspire New Generations",
    author: "Music Weekly",
    date: "2022-10-06",
    category: "Legacy",
    tags: ["Queen", "Freddie Mercury", "Legacy", "Inspiration"],
    readTime: "6 min",
    views: 156000,
    likes: 2100,
    image1: "/images/Queen_band.jpg",
    image2: "/images/Queen04.jpg",
    content: [
      "Queen's music continues to inspire new generations of musicians and fans worldwide. Their theatrical performances and timeless anthems have stood the test of time.",
      "Freddie Mercury's legendary vocals and the band's innovative sound continue to resonate with audiences today, proving that great music transcends generations.",
      "From stadium rock anthems to intimate ballads, Queen's catalog remains as powerful and relevant as ever."
    ]
  },
  {
    id: 8,
    title: "Pink Floyd's The Dark Side of the Moon: A Masterpiece Revisited",
    author: "Music Critic",
    date: "2023-03-01",
    category: "Analysis",
    tags: ["Pink Floyd", "Progressive Rock", "Classic Albums", "Music History"],
    readTime: "10 min",
    views: 142000,
    likes: 3800,
    image1: "/images/pinkfloyd.jpg",
    image2: "/images/pinkfloyd.jpg",
    content: [
      "Fifty years after its release, Pink Floyd's The Dark Side of the Moon remains one of the most influential albums in rock history.",
      "This groundbreaking work pushed the boundaries of what was possible in both musical composition and studio production.",
      "The album's themes of mental health, time, money, and conflict remain as relevant today as they were in 1973."
    ]
  },
  {
    id: 9,
    title: "The Police: Three Men Who Changed Everything",
    author: "Rock Historian",
    date: "2022-11-20",
    category: "Legacy",
    tags: ["The Police", "Sting", "Reggae Rock", "New Wave"],
    readTime: "7 min",
    views: 95000,
    likes: 2400,
    image1: "/images/police.jpg",
    image2: "/images/police.jpg",
    content: [
      "The Police fused rock, reggae, and new wave into a distinctive sound that defined the early 1980s.",
      "With Sting's distinctive vocals, Andy Summers' unique guitar work, and Stewart Copeland's inventive drumming, the band created a sound unlike any other.",
      "Though their career was relatively short, The Police left an indelible mark on popular music."
    ]
  },
  {
    id: 10,
    title: "Coldplay: From Indie Beginnings to Global Stadiums",
    author: "Modern Music",
    date: "2023-06-15",
    category: "Legacy",
    tags: ["Coldplay", "Alternative Rock", "Modern Music", "Stadium Rock"],
    readTime: "6 min",
    views: 118000,
    likes: 3200,
    image1: "/images/coldplay.jpg",
    image2: "/images/coldplay.jpg",
    content: [
      "Coldplay craft anthemic, melodic songs that have defined modern pop-rock for over two decades.",
      "From their early indie beginnings to filling stadiums worldwide, the band has maintained their artistic integrity while achieving massive commercial success.",
      "Their ability to create emotionally resonant music that connects with millions of fans has made them one of the most successful bands of the 21st century."
    ]
  },
  {
    id: 11,
    title: "Foo Fighters: Keeping Rock Alive in the Modern Era",
    author: "Rock Today",
    date: "2023-01-10",
    category: "Analysis",
    tags: ["Foo Fighters", "Dave Grohl", "Modern Rock", "Nirvana"],
    readTime: "7 min",
    views: 134000,
    likes: 4500,
    image1: "/images/foofighters.jpg",
    image2: "/images/foofighters.jpg",
    content: [
      "Foo Fighters deliver high-energy modern rock led by Dave Grohl, maintaining the spirit of rock music in an ever-changing industry.",
      "Born from the ashes of Nirvana, Foo Fighters have carved their own path, proving that great rock music continues to thrive.",
      "With their powerful live performances and consistent output of quality albums, the band remains a beacon for rock fans worldwide."
    ]
  },
  {
    id: 12,
    title: "Linkin Park: Blending Genres and Breaking Boundaries",
    author: "Alternative Press",
    date: "2022-09-25",
    category: "Analysis",
    tags: ["Linkin Park", "Nu Metal", "Alternative Rock", "Hybrid Theory"],
    readTime: "8 min",
    views: 165000,
    likes: 5100,
    image1: "/images/linkinpark.jpg",
    image2: "/images/linkinpark.jpg",
    content: [
      "Linkin Park blended alternative rock, metal, and hip-hop with emotional depth, creating a unique sound that resonated with millions.",
      "Their debut album Hybrid Theory became one of the best-selling albums of all time, proving that genre-blending could achieve massive success.",
      "The band's honest lyrics about mental health and personal struggle helped break down barriers and connect with a generation seeking authenticity in music."
    ]
  },
  {
    id: 13,
    title: "Red Hot Chili Peppers: California Vibes and Funk Rock",
    author: "West Coast Music",
    date: "2023-04-12",
    category: "Legacy",
    tags: ["Red Hot Chili Peppers", "Funk Rock", "California", "Flea"],
    readTime: "7 min",
    views: 148000,
    likes: 4200,
    image1: "/images/redhotchillipeppers.jpg",
    image2: "/images/redhotchillipeppers.jpg",
    content: [
      "RHCP mix funk, punk, and rock with California flair, creating a sound that's uniquely their own.",
      "With Flea's innovative bass playing, John Frusciante's melodic guitar work, and Anthony Kiedis's distinctive vocals, the band has created some of the most iconic rock songs of the past three decades.",
      "Their ability to evolve while staying true to their roots has kept them relevant and beloved by fans worldwide."
    ]
  },
  {
    id: 14,
    title: "R.E.M.: Pioneers of Alternative Rock",
    author: "Indie Chronicle",
    date: "2022-12-08",
    category: "History",
    tags: ["R.E.M.", "Alternative Rock", "Indie Rock", "Michael Stipe"],
    readTime: "6 min",
    views: 107000,
    likes: 2900,
    image1: "/images/rem.jpg",
    image2: "/images/rem.jpg",
    content: [
      "R.E.M. pioneered alternative rock with jangly guitars and introspective lyrics, setting the stage for the indie rock movement.",
      "Their influential sound and cryptic lyrics influenced countless bands that followed, making them one of the most important acts in rock history.",
      "From college radio darlings to mainstream success, R.E.M. proved that alternative music could find a wide audience without compromising artistic vision."
    ]
  },
  {
    id: 15,
    title: "Green Day: Bringing Punk to the Mainstream",
    author: "Punk Rock News",
    date: "2023-02-14",
    category: "Legacy",
    tags: ["Green Day", "Punk Rock", "Pop Punk", "Dookie"],
    readTime: "6 min",
    views: 139000,
    likes: 3600,
    image1: "/images/greenday.jpg",
    image2: "/images/greenday.jpg",
    content: [
      "Green Day brought punk rock to mainstream audiences with massive hooks and infectious energy.",
      "Their breakthrough album Dookie introduced punk rock to a generation, proving that raw, energetic music could achieve commercial success.",
      "With their catchy melodies and rebellious spirit, Green Day helped define the sound of 1990s and 2000s alternative music."
    ]
  },
  {
    id: 16,
    title: "Ozzy Osbourne: The Prince of Darkness Legacy",
    author: "Metal Weekly",
    date: "2022-08-30",
    category: "Legacy",
    tags: ["Ozzy Osbourne", "Heavy Metal", "Black Sabbath", "Metal Legend"],
    readTime: "9 min",
    views: 173000,
    likes: 5800,
    image1: "/images/ozzy.jpg",
    image2: "/images/ozzy.jpg",
    content: [
      "The Prince of Darkness helped define heavy metal and hard rock, creating a legacy that spans over five decades.",
      "From his groundbreaking work with Black Sabbath to his successful solo career, Ozzy has remained one of the most iconic figures in rock music.",
      "His influence on metal music is immeasurable, and his theatrical stage presence has inspired countless performers."
    ]
  },
  {
    id: 17,
    title: "The Rise of Blink-182: Pop-Punk's Greatest Success Story",
    author: "Punk Weekly",
    date: "2023-05-20",
    category: "Legacy",
    tags: ["Blink-182", "Pop Punk", "Alternative Rock", "Modern Music"],
    readTime: "6 min",
    views: 121000,
    likes: 3400,
    image1: "/images/blink182.jpg",
    image2: "/images/blink182.jpg",
    content: [
      "Blink-182 popularized catchy, irreverent pop-punk for a generation, creating some of the most memorable songs of the 1990s and 2000s.",
      "With their humorous lyrics, infectious melodies, and energetic performances, the band brought punk rock to a mainstream audience.",
      "Their influence can be heard across modern pop-punk and alternative rock, making them one of the genre's most successful acts."
    ]
  },
  {
    id: 18,
    title: "3 Doors Down: Post-Grunge Anthems That Defined an Era",
    author: "Rock Chronicles",
    date: "2023-03-15",
    category: "Analysis",
    tags: ["3 Doors Down", "Post-Grunge", "Alternative Rock", "Modern Rock"],
    readTime: "7 min",
    views: 108000,
    likes: 2800,
    image1: "/images/3doorsdown.jpg",
    image2: "/images/3doorsdown.jpg",
    content: [
      "3 Doors Down blend post-grunge hooks with radio-ready rock anthems, creating a sound that defined early 2000s rock radio.",
      "Their breakthrough single 'Kryptonite' became an instant classic, showcasing the band's ability to craft memorable, emotionally resonant songs.",
      "Though often overlooked in discussions of rock greatness, 3 Doors Down have consistently delivered quality rock music to millions of fans."
    ]
  },
  {
    id: 19,
    title: "The Beatles' Abbey Road: Behind the Iconic Album Cover",
    author: "Music Historian",
    date: "2023-07-01",
    category: "History",
    tags: ["Beatles", "Abbey Road", "Album Art", "Classic Albums"],
    readTime: "8 min",
    views: 187000,
    likes: 6700,
    image1: "/images/thebeatles1967.jpg",
    image2: "/images/The_Fabs.JPG",
    content: [
      "The Abbey Road album cover is one of the most iconic images in music history, featuring The Beatles crossing the famous zebra crossing.",
      "This simple yet powerful image has been replicated and parodied countless times, becoming a symbol of the band's legacy.",
      "Behind the cover lies one of The Beatles' most cohesive and innovative albums, showcasing their mastery of studio production and songwriting."
    ]
  },
  {
    id: 20,
    title: "Queen's Live Aid Performance: The Greatest 20 Minutes in Rock History",
    author: "Concert Review",
    date: "2023-05-15",
    category: "Exclusive",
    tags: ["Queen", "Live Aid", "Freddie Mercury", "Live Performance"],
    readTime: "10 min",
    views: 245000,
    likes: 8900,
    image1: "/images/Queen_band.jpg",
    image2: "/images/Queen04.jpg",
    content: [
      "Queen's performance at Live Aid in 1985 is widely regarded as one of the greatest live performances in rock history.",
      "Freddie Mercury's commanding stage presence and the band's flawless execution captivated the massive Wembley Stadium audience and millions watching at home.",
      "This performance cemented Queen's legacy as one of the greatest live acts of all time and remains a masterclass in stadium rock performance."
    ]
  },
  {
    id: 21,
    title: "Metallica's Master of Puppets: A Thrash Metal Masterpiece",
    author: "Metal Magazine",
    date: "2023-02-26",
    category: "Analysis",
    tags: ["Metallica", "Thrash Metal", "Master of Puppets", "Classic Albums"],
    readTime: "9 min",
    views: 198000,
    likes: 7200,
    image1: "/images/Metallica.jpg",
    image2: "/images/Metallica.jpg",
    content: [
      "Master of Puppets stands as one of thrash metal's greatest achievements, showcasing Metallica at the peak of their creative and technical abilities.",
      "The album's complex arrangements, intricate guitar work, and powerful themes elevated thrash metal to new artistic heights.",
      "Nearly four decades after its release, Master of Puppets continues to influence metal musicians and remains essential listening for metal fans."
    ]
  },
  {
    id: 22,
    title: "AC/DC's Highway to Hell: The Album That Changed Everything",
    author: "Rock Legends",
    date: "2022-12-23",
    category: "History",
    tags: ["AC/DC", "Hard Rock", "Highway to Hell", "Bon Scott"],
    readTime: "7 min",
    views: 152000,
    likes: 4900,
    image1: "/images/ACDC.jpg",
    image2: "/images/ACDC.jpg",
    content: [
      "Highway to Hell marked AC/DC's breakthrough into the American market, combining their raw energy with polished production.",
      "Bon Scott's charismatic vocals and the band's relentless drive created an album that defined hard rock for generations.",
      "Tragically, this would be Bon Scott's final album, making Highway to Hell both a celebration of his legacy and a testament to the band's enduring power."
    ]
  },
  {
    id: 23,
    title: "Pink Floyd's The Wall: A Rock Opera for the Ages",
    author: "Progressive Music",
    date: "2023-01-30",
    category: "Analysis",
    tags: ["Pink Floyd", "Progressive Rock", "The Wall", "Rock Opera"],
    readTime: "11 min",
    views: 168000,
    likes: 6100,
    image1: "/images/pinkfloyd.jpg",
    image2: "/images/pinkfloyd.jpg",
    content: [
      "The Wall stands as one of rock's most ambitious concept albums, telling the story of isolation and mental breakdown through music.",
      "Roger Waters' deeply personal lyrics and the band's cinematic soundscapes created an immersive experience that transcended typical album boundaries.",
      "The accompanying tour's elaborate stage show set new standards for rock concerts, blurring the line between music and theater."
    ]
  },
  {
    id: 24,
    title: "The Police's Synchronicity: A Perfect Blend of Rock and Reggae",
    author: "Music Analysis",
    date: "2023-04-05",
    category: "Legacy",
    tags: ["The Police", "Synchronicity", "Reggae Rock", "New Wave"],
    readTime: "8 min",
    views: 134000,
    likes: 4100,
    image1: "/images/police.jpg",
    image2: "/images/police.jpg",
    content: [
      "Synchronicity represented the perfect synthesis of The Police's unique blend of rock, reggae, and new wave influences.",
      "The album's diverse range of songs, from the minimalist 'Every Breath You Take' to the complex 'Synchronicity I', showcased the band's versatility.",
      "This album marked the peak of The Police's commercial and critical success before they disbanded, leaving fans wanting more."
    ]
  },
  {
    id: 25,
    title: "Coldplay's A Rush of Blood to the Head: Defining Modern Rock",
    author: "Contemporary Music",
    date: "2023-06-18",
    category: "Analysis",
    tags: ["Coldplay", "Alternative Rock", "Modern Music", "Breakthrough Albums"],
    readTime: "7 min",
    views: 147000,
    likes: 5200,
    image1: "/images/coldplay.jpg",
    image2: "/images/coldplay.jpg",
    content: [
      "A Rush of Blood to the Head established Coldplay as one of the most important bands of the 2000s, combining emotional depth with accessible melodies.",
      "The album's introspective lyrics and atmospheric production created a sound that resonated with millions while maintaining artistic integrity.",
      "Songs like 'Clocks' and 'The Scientist' became instant classics, proving that modern rock could be both commercially successful and emotionally powerful."
    ]
  },
  {
    id: 26,
    title: "Foo Fighters: From Nirvana's Ashes to Rock Royalty",
    author: "Rock History",
    date: "2023-02-20",
    category: "History",
    tags: ["Foo Fighters", "Dave Grohl", "Nirvana", "Grunge"],
    readTime: "8 min",
    views: 176000,
    likes: 6500,
    image1: "/images/foofighters.jpg",
    image2: "/images/foofighters.jpg",
    content: [
      "Born from the tragic end of Nirvana, Foo Fighters began as Dave Grohl's solo project and evolved into one of rock's most successful bands.",
      "Grohl's songwriting and the band's powerful performances helped carry the torch of rock music into the 21st century.",
      "From their self-titled debut to their stadium-filling later albums, Foo Fighters have proven that great rock music never goes out of style."
    ]
  },
  {
    id: 27,
    title: "Linkin Park's Hybrid Theory: A Generation's Soundtrack",
    author: "Youth Culture",
    date: "2022-11-10",
    category: "Legacy",
    tags: ["Linkin Park", "Hybrid Theory", "Nu Metal", "Millennial Music"],
    readTime: "9 min",
    views: 223000,
    likes: 8100,
    image1: "/images/linkinpark.jpg",
    image2: "/images/linkinpark.jpg",
    content: [
      "Hybrid Theory captured the angst and energy of a generation, becoming one of the best-selling albums of the 2000s.",
      "Linkin Park's unique blend of metal, hip-hop, and electronic elements created a sound that was entirely their own.",
      "The album's raw emotion and honest lyrics connected with millions of young listeners, making it more than just music—it was a cultural phenomenon."
    ]
  },
  {
    id: 28,
    title: "Red Hot Chili Peppers' Californication: California Dreaming",
    author: "West Coast Sounds",
    date: "2023-08-12",
    category: "Legacy",
    tags: ["Red Hot Chili Peppers", "Californication", "Funk Rock", "John Frusciante"],
    readTime: "8 min",
    views: 189000,
    likes: 6900,
    image1: "/images/redhotchillipeppers.jpg",
    image2: "/images/redhotchillipeppers.jpg",
    content: [
      "Californication marked a triumphant return for the Red Hot Chili Peppers, reuniting with guitarist John Frusciante and creating some of their most beloved songs.",
      "The album's blend of funk, rock, and introspective lyrics showcased the band at their most mature and creative.",
      "From the infectious 'Scar Tissue' to the epic 'Otherside', Californication proved that the band could evolve while staying true to their unique sound."
    ]
  }
];

export default articlesData;


