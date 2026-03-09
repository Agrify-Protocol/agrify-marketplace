import { Dispatch, ReactNode, SetStateAction } from "react";
import { UseToastOptions } from "@chakra-ui/react";
import { CarbonCredit } from "@/services/api/types";

export interface Project {
  _id: string;
  title: string;
  coverImage: string;
  tags: string[];
}

export type GlobalContextProps = {
  children: ReactNode;
};

export type SourcingForm = {
  produceName: string;
  sizeTons: string | number;
  fullname: string;
  phoneNumber: string;
  email: string;
  deliveryLocation: string;
  annualBudget: string;
  preferences: {
    traceability: boolean;
    regenerativePractices: boolean;
    escrowSecured: boolean;
    labTested: boolean;
  };
};

export type GlobalContextType = {
  chosenProject: CarbonCredit | null;
  setChosenProject: Dispatch<SetStateAction<CarbonCredit | null>>;
  toast: (options: UseToastOptions) => void;
  pendingSourcingForm: SourcingForm | null;
  setPendingSourcingForm: Dispatch<SetStateAction<SourcingForm | null>>;
};
