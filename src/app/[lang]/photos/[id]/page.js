import PhotoDetails from "@/components/PhotoDetails";

export default function photoDetailsPage({ params: { id, lang } }) {
  return <PhotoDetails id={id} lang={lang} />;
}
