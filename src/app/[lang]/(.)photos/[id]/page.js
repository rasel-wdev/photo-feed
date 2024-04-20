import ModalPhotoDetails from "@/components/ModalPhotoDetails";
import PhotoDetails from "@/components/PhotoDetails";

export default function PhotoModal({ params: { id, lang } }) {
  return (
    <ModalPhotoDetails>
      <PhotoDetails id={id} lang={lang} />
    </ModalPhotoDetails>
  );
}
