import {
  Transaction,
  TransactionModalType,
} from "@/components/ProjectPageComponents/Purchases/types";
import React from "react";

export type FourColumnTableRowProps = {
  transaction?: Transaction;
  talbeBody?: React.ReactNode;
  clickHandler?: (data: TransactionModalType) => void;
  handleProduceClick?: () => void;
};
