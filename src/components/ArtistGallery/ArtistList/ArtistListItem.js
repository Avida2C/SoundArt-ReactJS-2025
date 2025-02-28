export default function ArtistListItem({ artist, isSelected, onClick }) {
  const itemStyle = {
    backgroundImage: `url(${artist.image})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      className={`artist-item ${isSelected ? "active" : ""}`}
      style={itemStyle}
      onClick={onClick}
    >
      <p>{artist.name}</p>
    </div>
  );
}
