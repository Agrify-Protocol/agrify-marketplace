"use client";

import { Box, Flex, Grid, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Transaction, TransactionModalType } from "./types";
import { useScreenFreeze } from "@/hooks/useScreenFreeze";
import { getPurchasesByProject } from "@/services/api/purchases";
import { useParams } from "next/navigation";
import Spinner from "@/components/Common/Spinner/Spinner";
import FourColumnTableRow from "@/components/Common/FourColumnTableRow/FourColumnTableRow";
import ReceiptModal from "@/components/Common/ReceiptModal/ReceiptModal";
import InvoiceModal from "@/components/Common/InvoiceModal/InvoiceModal";

const Purchases = () => {
  const { id } = useParams();
  const [showTransaction, setShowTransaction] =
    useState<TransactionModalType | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  useEffect(() => {
    setIsLoading(true);
    getPurchasesByProject(id as string, toast).then((response) => {
      if (Array.isArray(response)) {
        setTransactions(response);
      } else setTransactions([]);
      setIsLoading(false);
    });
  }, []);

  const updateTxDetails = (data: TransactionModalType) => {
    setShowTransaction(data);
  };

  const selectedReceipt = transactions.find((tx) => {
    return tx._id == showTransaction?.txID;
  });

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
        gap={{ base: "50px", lg: "0px" }}
        // overflow={{ base: "scroll" }}
      >
        {["Payment Type", "Status", "Kg", "Date"].map((item) => (
          <Text
            style={{ textWrap: "nowrap" }}
            key={item}
            display={{
              base: item === "Payment Type" ? "block" : "none",
              lg: "block",
            }}
          >
            {item}
          </Text>
        ))}
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

        <Box overflow="scroll">
          {transactions?.map((transaction) => {
            return (
              <FourColumnTableRow
                key={transaction._id}
                transaction={transaction}
                clickHandler={updateTxDetails}
              />
            );
          })}
        </Box>
      </>

      {showTransaction && showTransaction.type == "card" && (
        <ReceiptModal
          txDetail={selectedReceipt}
          closeModal={() => setShowTransaction(null)}
        />
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
