import './ArtistDetails.css';

export default function ArtistBio({ bio }) {
    return (
        <div className="artist-bio col-sm-12 col-sx-12 col-md-5 col-lg-5 col-xl-5 position-absolute bottom-0 end-0" >     
        <p className='truncate-bio'>{bio}</p> 
        <button type="button">Read More</button> 
      </div>
  
    );
  }