"use client";

import { Box, Grid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { purchases } from "./constants";
import FourColumnTableRow from "@/components/Layout/FourColumnTableRow/FourColumnTableRow";
import ReceiptModal from "@/components/Layout/ReceiptModal/ReceiptModal";
import { ReceiptType, TransactionModalType } from "./types";
import { useScreenFreeze } from "@/hooks/useScreenFreeze";
import InvoiceModal from "@/components/Layout/InvoiceModal/InvoiceModal";
import { parseDate } from "@/utils/parseData";

const Purchases = () => {
  const [showTxDetails, setShowTxDetails] =
    useState<TransactionModalType | null>(null);

  const updateTxDetails = (data: TransactionModalType) => {
    setShowTxDetails(data);
  };

  const invoice_data = {
    clientName: "invoiceData.client_name",
    paymentDueDate: "2024-08-07",
    phoneNumber: "1234-567-8910",
    projectId: "66s57ds37wtjs",
    projectName: "The title here",
    quantity: 23,
    amount: "3000",
    totalAmount: 3004,
    invoiceNo: `INV${Math.floor(Math.random() * 5000)}`,
    address: "Konoha",
    contactNo: "123-456-7890",
    issuedOn: parseDate(new Date()),
  };

  useScreenFreeze(showTxDetails != null);

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

      {purchases.map((purchase) => {
        return (
          <FourColumnTableRow
            key={purchase.id}
            name={purchase.payment_type}
            payment_status={purchase.status}
            location_or_tonnes={purchase.tonnes}
            date={purchase.date}
            clickHandler={updateTxDetails}
          />
        );
      })}

      {showTxDetails && showTxDetails.type == "receipt" && (
        <ReceiptModal
          tonnes={(showTxDetails.data as ReceiptType).tonnes}
          amount={(showTxDetails.data as ReceiptType).amount}
          date_time={(showTxDetails.data as ReceiptType).date_time}
          reference_code={(showTxDetails.data as ReceiptType).reference_code}
          closeModal={() => setShowTxDetails(null)}
        />
      )}

      {showTxDetails && showTxDetails.type == "invoice" && (
        <InvoiceModal
          invoice_data={invoice_data}
          closeModal={() => setShowTxDetails(null)}
        />
      )}
    </Box>
  );
};

export default Purchases;
