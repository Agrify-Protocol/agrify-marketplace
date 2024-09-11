import { ReactNode } from "react";

export type ProfileContextType = {
  tabId: string | null;
};

export type ProfileContextProps = {
  children: ReactNode;
};
