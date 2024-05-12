import { Dispatch, ReactNode, SetStateAction } from "react";

export type GlobalContextType = {
  orderedAmount: number;
  setOrderedAmount: Dispatch<SetStateAction<number>>;
};

export type GlobalContextProps = {
  children: ReactNode;
};
