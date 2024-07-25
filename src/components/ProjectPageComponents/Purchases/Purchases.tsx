"use client";

import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { purchases } from "./constants";
import FourColumnTableRow from "@/components/Layout/FourColumnTableRow/FourColumnTableRow";
import ReceiptModal from "@/components/Layout/ReceiptModal/ReceiptModal";
import { ReceiptType, Transaction, TransactionModalType } from "./types";
import { useScreenFreeze } from "@/hooks/useScreenFreeze";
import InvoiceModal from "@/components/Layout/InvoiceModal/InvoiceModal";
import { parseDate } from "@/utils/parseData";
import { getPurchasesByProject } from "@/services/api/purchases";
import { useParams } from "next/navigation";
import Spinner from "@/components/Layout/Spinner/Spinner";

const Purchases = () => {
  const { id } = useParams();
  const [showTransaction, setShowTransaction] =
    useState<TransactionModalType | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPurchasesByProject(id as string).then((response) => {
      if (Array.isArray(response)) {
        setTransactions(response);
      } else setTransactions([]);
      setIsLoading(false);
    });
  }, []);

  const updateTxDetails = (data: TransactionModalType) => {
    setShowTransaction(data);
  };

  useScreenFreeze(showTransaction != null);

  return (
    <Box
      bgColor={"white"}
      py={"2rem"}
      px={"1.313rem"}
      my={"1.5rem"}
      borderRadius={"1.5rem"}
    >
      <Grid
        bgColor={"#F5F5F5"}
        gridTemplateColumns={"2fr 1fr 1fr 1fr"}
        borderRadius={"1.5rem"}
        px={"1.25rem"}
        py={"0.375rem"}
        mb={"1.5rem"}
        color={"rgba(0,0,0,0.4)"}
      >
        <Text>Payment Type</Text>
        <Text>Status</Text>
        <Text>Tonnes</Text>
        <Text>Date</Text>
      </Grid>

      <>
        {isLoading && (
          <Flex
            h={"fit-content"}
            w={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Spinner />
          </Flex>
        )}

        {!isLoading && transactions?.length < 1 && (
          <Text textAlign={"center"} color={"black"}>
            No purchases found for this project
          </Text>
        )}

        {transactions?.map((transaction) => {
          return (
            <FourColumnTableRow
              key={transaction._id}
              transaction={transaction}
              clickHandler={updateTxDetails}
            />
          );
        })}
      </>

      {showTransaction && showTransaction.type == "receipt" && (
        <ReceiptModal closeModal={() => setShowTransaction(null)} />
      )}

      {showTransaction && showTransaction.type == "invoice" && (
        <InvoiceModal
          txDetail={showTransaction}
          closeModal={() => setShowTransaction(null)}
        />
      )}
    </Box>
  );
};

export default Purchases;
