import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import artists from "../../data/Artist/artistData";
import ReviewsSection from "../../components/Reviews/ReviewsSection";
import "../../styles/artists.css";

export default function ArtistPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const selectedArtist = artists.find((a) => a.id === Number(id));

  // Enhanced artist data with more details
  const getArtistDetails = (artist) => {
    const details = {
      1: { // The Beatles
        fullBio: "The Beatles were an English rock band, formed in Liverpool in 1960, that comprised John Lennon, Paul McCartney, George Harrison and Ringo Starr. They are regarded as the most influential band of all time and were integral to the development of 1960s counterculture and popular music's recognition as an art form. Rooted in skiffle, beat and 1950s rock 'n' roll, their sound incorporated elements of classical music and traditional pop in innovative ways; the band also explored music styles ranging from folk and Indian music to psychedelia and hard rock. As pioneers in recording, songwriting and artistic presentation, the Beatles revolutionised many aspects of the music industry and were often publicized as leaders of the era's youth and sociocultural movements. Led by primary songwriters Lennon and McCartney, the Beatles evolved from Lennon's previous group, the Quarrymen, and built their reputation playing clubs in Liverpool and Hamburg over three years from 1960, initially with Stuart Sutcliffe playing bass. The core trio of Lennon, McCartney and Harrison, together since 1958, went through a succession of drummers, including Pete Best, before asking Starr to join them in 1962. Manager Brian Epstein moulded them into a professional act, and producer George Martin guided and developed their recordings, greatly expanding their domestic success after signing to EMI Records and achieving their first hit, 'Love Me Do', in late 1962. As their popularity grew into the intense fan frenzy dubbed 'Beatlemania', the band acquired the nickname 'the Fab Four', with Epstein, Martin or another member of the band's entourage sometimes informally referred to as a 'fifth Beatle'.",
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
        concerts: [
          { date: "2024-12-15", venue: "Madison Square Garden", city: "New York, NY", status: "Sold Out", price: "$150-500" },
          { date: "2024-12-20", venue: "Hollywood Bowl", city: "Los Angeles, CA", status: "Limited", price: "$200-600" },
          { date: "2025-01-10", venue: "Royal Albert Hall", city: "London, UK", status: "Available", price: "£120-400" },
          { date: "2025-01-25", venue: "Sydney Opera House", city: "Sydney, Australia", status: "Available", price: "A$180-550" }
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
        concerts: [
          { date: "2024-12-18", venue: "Wembley Stadium", city: "London, UK", status: "Sold Out", price: "£200-800" },
          { date: "2025-02-14", venue: "Staples Center", city: "Los Angeles, CA", status: "Available", price: "$250-750" },
          { date: "2025-03-01", venue: "Tokyo Dome", city: "Tokyo, Japan", status: "Available", price: "¥25,000-80,000" },
          { date: "2025-03-15", venue: "Accor Arena", city: "Paris, France", status: "Limited", price: "€180-600" }
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
      }
    };
    return details[artist.id] || {
      fullBio: artist.bio,
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
      concerts: [
        { date: "2025-01-15", venue: "Local Venue", city: "Your City", status: "Available", price: "$50-150" },
        { date: "2025-02-20", venue: "Concert Hall", city: "Nearby City", status: "Available", price: "$75-200" }
      ],
      topTracks: [
        { title: "Popular Song", album: "Greatest Hits", duration: "3:30", spotifyId: "sample1", youtubeId: "sample1", playCount: 50000000, weeklyPlays: 250000, peakPosition: 5, releaseYear: 2020 },
        { title: "Another Hit", album: "Studio Album", duration: "4:15", spotifyId: "sample2", youtubeId: "sample2", playCount: 35000000, weeklyPlays: 180000, peakPosition: 8, releaseYear: 2019 },
        { title: "Classic Track", album: "Live Album", duration: "5:20", spotifyId: "sample3", youtubeId: "sample3", playCount: 25000000, weeklyPlays: 120000, peakPosition: 12, releaseYear: 2018 }
      ]
    };
  };

  if (!selectedArtist) {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="display-4 text-muted">Artist Not Found</h2>
            <p className="lead">The artist you're looking for doesn't exist.</p>
            <Link to="/artists" className="btn btn-warning">
              Back to Artists
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const artistDetails = getArtistDetails(selectedArtist);

  // Helper function to format play counts
  const formatPlayCount = (count) => {
    if (count >= 1000000000) {
      return `${(count / 1000000000).toFixed(1)}B`;
    } else if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <div className="container py-5">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/artists">Artists</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{selectedArtist.name}</li>
        </ol>
      </nav>

      {/* Artist Header */}
      <div className="row mb-5">
        <div className="col-lg-4">
          <div className="position-relative">
            <img
              src={selectedArtist.image}
        alt={selectedArtist.name}
              className="img-fluid rounded shadow"
              style={{width: '100%', height: '400px', objectFit: 'cover'}}
            />
            <div className="position-absolute top-0 start-0 m-3">
              <span className="badge bg-warning text-dark fs-6">Featured Artist</span>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <h1 className="display-4 fw-bold text-warning mb-3">{selectedArtist.name}</h1>
          
          {/* Artist Info */}
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <div className="p-3 bg-light rounded">
                <h6 className="text-muted mb-1">Formed</h6>
                <p className="mb-0 fw-bold">{artistDetails.formed}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-3 bg-light rounded">
                <h6 className="text-muted mb-1">Origin</h6>
                <p className="mb-0 fw-bold">{artistDetails.origin}</p>
              </div>
            </div>
            <div className="col-12">
              <div className="p-3 bg-light rounded">
                <h6 className="text-muted mb-1">Genres</h6>
                <div className="d-flex flex-wrap gap-2">
                  {artistDetails.genres.map((genre, index) => (
                    <span key={index} className="badge bg-warning text-dark">{genre}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="d-flex gap-3">
            <button className="btn btn-warning btn-lg">
              <i className="bi bi-play-circle me-2"></i>
              Listen Now
            </button>
            <button className="btn btn-outline-warning btn-lg">
              <i className="bi bi-heart me-2"></i>
              Follow
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="row">
        <div className="col-12">
          <ul className="nav nav-tabs mb-4">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'discography' ? 'active' : ''}`}
                onClick={() => setActiveTab('discography')}
              >
                Discography
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'media' ? 'active' : ''}`}
                onClick={() => setActiveTab('media')}
              >
                Media
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'photos' ? 'active' : ''}`}
                onClick={() => setActiveTab('photos')}
              >
                Photos
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'music' ? 'active' : ''}`}
                onClick={() => setActiveTab('music')}
              >
                Music
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'concerts' ? 'active' : ''}`}
                onClick={() => setActiveTab('concerts')}
              >
                Concerts
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews
              </button>
            </li>
          </ul>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === 'overview' && (
              <div className="row">
                <div className="col-lg-8">
                  <h3 className="mb-3">About {selectedArtist.name}</h3>
                  <p className="lead mb-4">{artistDetails.fullBio}</p>
                  
                  <h4 className="mb-3">Band Members</h4>
                  <div className="row g-3">
                    {artistDetails.members.map((member, index) => (
                      <div key={index} className="col-md-6">
                        <div className="p-3 border rounded">
                          <h6 className="mb-0">{member}</h6>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Quick Stats</h5>
                      <div className="row g-3">
                        <div className="col-6">
                          <div className="text-center p-2 bg-light rounded">
                            <h4 className="text-warning mb-1">{artistDetails.discography.length}</h4>
                            <small className="text-muted">Albums</small>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="text-center p-2 bg-light rounded">
                            <h4 className="text-warning mb-1">50M+</h4>
                            <small className="text-muted">Streams</small>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="text-center p-2 bg-light rounded">
                            <h4 className="text-warning mb-1">{new Date().getFullYear() - parseInt(artistDetails.formed)}</h4>
                            <small className="text-muted">Years Active</small>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="text-center p-2 bg-light rounded">
                            <h4 className="text-warning mb-1">{artistDetails.members.length}</h4>
                            <small className="text-muted">Members</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'discography' && (
              <div>
                <h3 className="mb-4">Discography</h3>
                <div className="row g-4">
                  {artistDetails.discography.map((album, index) => (
                    <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                      <div className="card h-100 shadow-sm">
                        <img 
                          src={album.image} 
                          className="card-img-top" 
                          alt={album.title}
                          style={{height: '200px', objectFit: 'cover'}}
                        />
                        <div className="card-body d-flex flex-column">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <span className="badge bg-warning text-dark">{album.year}</span>
                            <small className="text-muted">{album.type}</small>
                          </div>
                          <h6 className="card-title">{album.title}</h6>
                          <small className="text-muted mt-auto">{album.releaseDate}</small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'media' && (
              <div>
                <h3 className="mb-4">Media</h3>
                <div className="row g-4">
                  {artistDetails.media.map((item, index) => (
                    <div key={index} className="col-lg-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-start">
                            <div className="flex-shrink-0 me-3">
                              <i className="bi bi-play-circle-fill text-warning fs-2"></i>
                            </div>
                            <div className="flex-grow-1">
                              <h5 className="card-title">{item.title}</h5>
                              <p className="card-text text-muted">{item.description}</p>
                              <span className="badge bg-secondary">{item.type}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'photos' && (
              <div>
                <h3 className="mb-4">Photos</h3>
                <div className="row g-4">
                  {artistDetails.photos.map((photo, index) => (
                    <div key={index} className="col-lg-4 col-md-6">
                      <div className="card h-100 shadow-sm">
                        <img 
                          src={photo.image} 
                          className="card-img-top" 
                          alt={photo.title}
                          style={{height: '250px', objectFit: 'cover'}}
                        />
                        <div className="card-body">
                          <h6 className="card-title">{photo.title}</h6>
                          <p className="card-text text-muted small">{photo.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'music' && (
              <div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3>Most Popular Tracks</h3>
                  <div className="d-flex align-items-center gap-3">
                    <div className="text-center">
                      <div className="h4 mb-0 text-warning">{formatPlayCount(artistDetails.topTracks.reduce((sum, track) => sum + track.playCount, 0))}</div>
                      <small className="text-muted">Total Streams</small>
                    </div>
                    <div className="text-center">
                      <div className="h4 mb-0 text-warning">{formatPlayCount(artistDetails.topTracks.reduce((sum, track) => sum + track.weeklyPlays, 0))}</div>
                      <small className="text-muted">This Week</small>
                    </div>
                  </div>
                </div>
                
                {/* Music Player Section */}
                <div className="row mb-5">
                  <div className="col-12">
                    <div className="card bg-dark text-white">
                      <div className="card-body p-4">
                        <div className="row align-items-center">
                          <div className="col-md-8">
                            <h5 className="mb-2">
                              <i className="bi bi-music-note-beamed text-warning me-2"></i>
                              Listen to {selectedArtist.name}
                            </h5>
                            <p className="text-muted mb-0">
                              Stream their music on Spotify or watch videos on YouTube
                            </p>
                          </div>
                          <div className="col-md-4 text-end">
                            <div className="d-flex gap-2 justify-content-end">
                              <a 
                                href={`https://open.spotify.com/artist/${artistDetails.topTracks[0]?.spotifyId}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn btn-success"
                              >
                                <i className="bi bi-spotify me-2"></i>Spotify
                              </a>
                              <a 
                                href={`https://www.youtube.com/results?search_query=${selectedArtist.name}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn btn-danger"
                              >
                                <i className="bi bi-youtube me-2"></i>YouTube
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Top Tracks List */}
                <div className="row g-3">
                  {artistDetails.topTracks.map((track, index) => (
                    <div key={index} className="col-12">
                      <div className="card border-0 shadow-sm">
                        <div className="card-body p-3">
                          <div className="row align-items-center">
                            <div className="col-md-1 text-center">
                              <span className={`badge fw-bold ${
                                index === 0 ? 'bg-warning text-dark' : 
                                index === 1 ? 'bg-secondary text-white' : 
                                index === 2 ? 'bg-warning text-dark' : 'bg-light text-dark'
                              }`}>
                                {index + 1}
                              </span>
                            </div>
                            <div className="col-md-4">
                              <h6 className="mb-1 fw-bold">{track.title}</h6>
                              <small className="text-muted">{track.album} • {track.releaseYear}</small>
                            </div>
                            <div className="col-md-2">
                              <div className="text-center">
                                <div className="fw-bold text-warning">{formatPlayCount(track.playCount)}</div>
                                <small className="text-muted">plays</small>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div className="text-center">
                                <div className="fw-bold text-success">{formatPlayCount(track.weeklyPlays)}</div>
                                <small className="text-muted">this week</small>
                              </div>
                            </div>
                            <div className="col-md-1 text-center">
                              <small className="text-muted">
                                <i className="bi bi-clock me-1"></i>{track.duration}
                              </small>
                            </div>
                            <div className="col-md-2">
                              <div className="d-flex gap-1">
                                <a 
                                  href={`https://open.spotify.com/track/${track.spotifyId}`} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="btn btn-outline-success btn-sm"
                                >
                                  <i className="bi bi-play-fill"></i>
                                </a>
                                <a 
                                  href={`https://www.youtube.com/watch?v=${track.youtubeId}`} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="btn btn-outline-danger btn-sm"
                                >
                                  <i className="bi bi-youtube"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Trending Tracks */}
                <div className="row mt-5">
                  <div className="col-12">
                    <div className="card border-warning">
                      <div className="card-body p-4">
                        <h5 className="card-title mb-3">
                          <i className="bi bi-graph-up-arrow text-warning me-2"></i>
                          Trending This Week
                        </h5>
                        <div className="row g-3">
                          {artistDetails.topTracks
                            .sort((a, b) => b.weeklyPlays - a.weeklyPlays)
                            .slice(0, 3)
                            .map((track, index) => (
                            <div key={index} className="col-md-4">
                              <div className="d-flex align-items-center p-3 bg-light rounded">
                                <div className="me-3">
                                  <span className="badge bg-warning text-dark fw-bold">
                                    #{index + 1}
                                  </span>
                                </div>
                                <div className="flex-grow-1">
                                  <h6 className="mb-1">{track.title}</h6>
                                  <small className="text-muted">
                                    <i className="bi bi-play-circle me-1"></i>
                                    {formatPlayCount(track.weeklyPlays)} plays this week
                                  </small>
                                </div>
                                <div className="text-end">
                                  <i className="bi bi-arrow-up text-success"></i>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Music Platforms */}
                <div className="row mt-4">
                  <div className="col-12">
                    <div className="card bg-light">
                      <div className="card-body p-4">
                        <h5 className="card-title mb-3">
                          <i className="bi bi-music-note-list me-2"></i>
                          Available on All Major Platforms
                        </h5>
                        <div className="row g-3">
                          <div className="col-md-3 col-6">
                            <div className="text-center">
                              <i className="bi bi-spotify text-success mb-2 d-block" style={{fontSize: '2rem'}}></i>
                              <h6>Spotify</h6>
                              <small className="text-muted">Streaming</small>
                            </div>
                          </div>
                          <div className="col-md-3 col-6">
                            <div className="text-center">
                              <i className="bi bi-apple text-dark mb-2 d-block" style={{fontSize: '2rem'}}></i>
                              <h6>Apple Music</h6>
                              <small className="text-muted">Streaming</small>
                            </div>
                          </div>
                          <div className="col-md-3 col-6">
                            <div className="text-center">
                              <i className="bi bi-youtube text-danger mb-2 d-block" style={{fontSize: '2rem'}}></i>
                              <h6>YouTube</h6>
                              <small className="text-muted">Videos</small>
                            </div>
                          </div>
                          <div className="col-md-3 col-6">
                            <div className="text-center">
                              <i className="bi bi-vinyl text-warning mb-2 d-block" style={{fontSize: '2rem'}}></i>
                              <h6>Physical</h6>
                              <small className="text-muted">CDs & Vinyl</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'concerts' && (
              <div>
                <h3 className="mb-4">Upcoming Concerts</h3>
                <div className="row g-4">
                  {artistDetails.concerts.map((concert, index) => (
                    <div key={index} className="col-lg-6">
                      <div className="card h-100 shadow-sm border-0">
                        <div className="card-body p-4">
                          <div className="d-flex justify-content-between align-items-start mb-3">
                            <div>
                              <h5 className="card-title mb-1">{concert.venue}</h5>
                              <p className="text-muted mb-0">
                                <i className="bi bi-geo-alt me-1"></i>{concert.city}
                              </p>
                            </div>
                            <span className={`badge ${
                              concert.status === 'Sold Out' ? 'bg-danger' :
                              concert.status === 'Limited' ? 'bg-warning text-dark' :
                              'bg-success'
                            }`}>
                              {concert.status}
                            </span>
                          </div>
                          
                          <div className="row g-3 mb-3">
                            <div className="col-6">
                              <div className="text-center p-3 bg-light rounded">
                                <i className="bi bi-calendar-event text-warning mb-2 d-block" style={{fontSize: '1.5rem'}}></i>
                                <h6 className="mb-1">{new Date(concert.date).toLocaleDateString('en-US', { 
                                  month: 'short', 
                                  day: 'numeric',
                                  year: 'numeric'
                                })}</h6>
                                <small className="text-muted">Date</small>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="text-center p-3 bg-light rounded">
                                <i className="bi bi-currency-dollar text-warning mb-2 d-block" style={{fontSize: '1.5rem'}}></i>
                                <h6 className="mb-1">{concert.price}</h6>
                                <small className="text-muted">Price Range</small>
                              </div>
                            </div>
                          </div>
                          
                          <div className="d-grid gap-2">
                            {concert.status === 'Sold Out' ? (
                              <button className="btn btn-outline-secondary" disabled>
                                <i className="bi bi-x-circle me-2"></i>Sold Out
                              </button>
                            ) : (
                              <button className="btn btn-warning">
                                <i className="bi bi-ticket-perforated me-2"></i>Get Tickets
                              </button>
                            )}
                            <button className="btn btn-outline-warning btn-sm">
                              <i className="bi bi-heart me-2"></i>Add to Wishlist
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Concert Alert Signup */}
                <div className="row mt-5">
                  <div className="col-12">
                    <div className="card bg-warning text-dark">
                      <div className="card-body text-center p-4">
                        <h4 className="card-title mb-3">
                          <i className="bi bi-bell me-2"></i>Never Miss a Show!
                        </h4>
                        <p className="card-text mb-4">
                          Get notified when {selectedArtist.name} announces new concerts in your area.
                        </p>
                        <div className="row g-3 justify-content-center">
                          <div className="col-md-6">
                            <input 
                              type="email" 
                              className="form-control" 
                              placeholder="Enter your email address"
                            />
                          </div>
                          <div className="col-md-3">
                            <button className="btn btn-dark w-100">
                              <i className="bi bi-envelope me-2"></i>Subscribe
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <ReviewsSection artistId={selectedArtist.id} artistName={selectedArtist.name} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Get Featured as Artist Section */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="card border-0 shadow-lg" style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)'
          }}>
            <div className="card-body text-white p-5">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <h3 className="card-title mb-3">
                    <i className="bi bi-star-fill text-warning me-2"></i>
                    Get Featured as an Artist
                  </h3>
                  <p className="card-text mb-4">
                    Are you a musician or band looking to reach a wider audience? Join our platform and get featured alongside legendary artists like {selectedArtist.name}. Showcase your music, connect with fans, and grow your following.
                  </p>
                  <div className="row g-3">
                    <div className="col-md-4">
                      <div className="text-center">
                        <i className="bi bi-music-note-beamed text-warning mb-2 d-block" style={{fontSize: '2rem'}}></i>
                        <h6>Upload Music</h6>
                        <small className="text-muted">Share your tracks</small>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="text-center">
                        <i className="bi bi-people text-warning mb-2 d-block" style={{fontSize: '2rem'}}></i>
                        <h6>Build Fanbase</h6>
                        <small className="text-muted">Connect with listeners</small>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="text-center">
                        <i className="bi bi-graph-up text-warning mb-2 d-block" style={{fontSize: '2rem'}}></i>
                        <h6>Grow Your Career</h6>
                        <small className="text-muted">Reach new heights</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 text-center">
                  <div className="p-4">
                    <i className="bi bi-mic text-warning mb-3 d-block" style={{fontSize: '4rem'}}></i>
                    <h5 className="mb-3">Ready to Get Started?</h5>
                    <Link to="/contact" className="btn btn-warning btn-lg mb-3 w-100">
                      <i className="bi bi-plus-circle me-2"></i>Apply Now
                    </Link>
                    <p className="small text-muted mb-0">
                      Free to join • No setup fees • Start earning today
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Artists */}
      <div className="row mt-5">
        <div className="col-12">
          <h3 className="mb-4">Related Artists</h3>
          <div className="row g-4">
            {artists
              .filter(artist => artist.id !== selectedArtist.id)
              .slice(0, 3)
              .map((artist) => (
                <div key={artist.id} className="col-md-4">
                  <div className="card h-100 shadow-sm">
                    <img 
                      src={artist.image} 
                      className="card-img-top" 
                      alt={artist.name}
                      style={{height: '200px', objectFit: 'cover'}}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{artist.name}</h5>
                      <p className="card-text flex-grow-1 text-muted">
                        {artist.bio.substring(0, 100)}...
                      </p>
                      <Link 
                        to={`/artist/${artist.id}`} 
                        className="btn btn-warning"
                      >
                        View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Back to Artists */}
      <div className="row mt-5">
        <div className="col-12 text-center">
          <Link to="/artists" className="btn btn-outline-warning btn-lg">
            <i className="bi bi-arrow-left me-2"></i>
            Back to All Artists
          </Link>
        </div>
      </div>
    </div>
  );
}
