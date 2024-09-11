"use client";

import { createContext, useContext, useState } from "react";
import { ProfileContextProps, ProfileContextType } from "./types";
import { profileSections } from "./constants";
import { useSearchParams } from "next/navigation";

const ProfileContext = createContext({} as ProfileContextType);

export const ProfileContextProvider = ({ children }: ProfileContextProps) => {
  const searchParams = useSearchParams();
  const tabId = searchParams.get("id");

  return (
    <ProfileContext.Provider value={{ tabId }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileContext = () => {
  return useContext(ProfileContext);
};
