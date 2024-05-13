import { Dispatch, ReactNode, SetStateAction } from "react";

export type PaymentContextType = {
  paymentStage: number;
  setPaymentStage: Dispatch<SetStateAction<number>>;
};

export type PaymentContextProps = {
  children: ReactNode;
};
