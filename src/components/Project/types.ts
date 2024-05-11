import { StaticImageData } from "next/image";

export type ProjectProps = {
  project: {
    id: string;
    image: string | StaticImageData;
    name: string;
    impact: string;
  };
  isGalleryItem?: boolean;
  handleGalleryClick?: (
    image: string | StaticImageData,
    metadata: string
  ) => void;
};
