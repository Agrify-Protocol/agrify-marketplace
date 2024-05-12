import { Dispatch, SetStateAction } from "react";

export type ProjectPageContextType = {
  currentSection: string;
  setCurrentSection: Dispatch<SetStateAction<string>>;
};
