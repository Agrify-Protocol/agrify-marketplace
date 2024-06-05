import { Project } from "@/context/GlobalContext/types";
import { StaticImageData } from "next/image";

export type ProjectProps = {
  project: Project;
  isGalleryItem?: boolean;
  handleGalleryClick?: (
    image: string | StaticImageData,
    metadata: string
  ) => void;
};
