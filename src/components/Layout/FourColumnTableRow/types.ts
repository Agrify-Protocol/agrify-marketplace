import {
  Transaction,
  TransactionModalType,
} from "@/components/ProjectPageComponents/Purchases/types";

export type FourColumnTableRowProps = {
  transaction: Transaction;
  clickHandler?: (data: TransactionModalType) => void;
};
