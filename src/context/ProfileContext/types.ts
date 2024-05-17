import { Dispatch, ReactNode, SetStateAction } from "react";

export type ProfileContextType = {
  currentSection: string;
  setCurrentSection: Dispatch<SetStateAction<string>>;
};

export type ProfileContextProps = {
  children: ReactNode;
};
