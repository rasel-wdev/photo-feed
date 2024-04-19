import PhotoList from "@/components/PhotoList";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/photos");
  const photos = await response.json();

  return <PhotoList photos={photos} />;
}
