import { FarmImage } from "@/app/farm/[id]/types";
import { ButtonProps } from "@chakra-ui/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type SliderProps = {
  images: FarmImage[];
};

export interface NavigateBtnProps extends ButtonProps {
  onClick: () => void;
  isDisabled: boolean;
  src: string | StaticImport;
}