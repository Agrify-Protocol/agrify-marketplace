"use client";

import { createContext, useContext, useState } from "react";
import { ProfileContextProps, ProfileContextType } from "./types";
import { profileSections } from "./constants";

const ProfileContext = createContext({} as ProfileContextType);

export const ProfileContextProvider = ({ children }: ProfileContextProps) => {
  const [currentSection, setCurrentSection] = useState(profileSections[0]);

  return (
    <ProfileContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileContext = () => {
  return useContext(ProfileContext);
};
