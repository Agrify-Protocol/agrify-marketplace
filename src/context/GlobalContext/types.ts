import { Dispatch, ReactNode, SetStateAction } from "react";

export type GlobalContextType = {
  orderedAmount: number;
  setOrderedAmount: Dispatch<SetStateAction<number>>;
  orderTotal: string;
  subTotal: string;
};

export type GlobalContextProps = {
  children: ReactNode;
};
