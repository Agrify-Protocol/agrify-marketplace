import { StaticImageData } from "next/image";

export type FullGalleryImageProps = {
  metadata: string;
  image: string | StaticImageData;
  closeImage: () => void;
};
