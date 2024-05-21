import { Dispatch, ReactNode, SetStateAction } from "react";

export type GlobalContextType = {
  orderedAmount: number;
  setOrderedAmount: Dispatch<SetStateAction<number>>;
  orderTotal: number;
  subTotal: string;
};

export type GlobalContextProps = {
  children: ReactNode;
};
