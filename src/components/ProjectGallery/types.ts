import { StaticImageData } from "next/image";

export type ViewedProject = {
  image: string | StaticImageData;
  metadata: string;
};
