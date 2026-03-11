import { Dispatch, ReactNode, SetStateAction } from "react";
import { UseToastOptions } from "@chakra-ui/react";

export interface Project {
  _id: string;
  title: string;
  coverImage: string;
  tags: string[];
}

export type GlobalContextProps = {
  children: ReactNode;
};

export type GlobalContextType = {
  // chosenProject holds either a CarbonCredit or a ProduceListing depending on context —
  // needs discriminated union once both shapes are fully typed
  chosenProject: any | null;
  setChosenProject: Dispatch<SetStateAction<any | null>>;
  toast: (options: UseToastOptions) => void;
  pendingSourcingForm: Record<string, any> | null;
  setPendingSourcingForm: Dispatch<SetStateAction<Record<string, any> | null>>;
};
