import { TransactionModalType } from "@/components/ProjectPageComponents/Purchases/types";

export type FourColumnTableRowProps = {
  name: string;
  payment_status: string;
  location_or_tonnes: string;
  date: string;
  clickHandler?: (data: TransactionModalType) => void;
};
