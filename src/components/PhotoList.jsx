import PhotoCard from "./PhotoCard";

export default function PhotoList({ photos }) {
  return (
    <div className="img-grid">
      {photos.map((photo) => {
        return <PhotoCard key={photo.id} photo={photo} />;
      })}
    </div>
  );
}
