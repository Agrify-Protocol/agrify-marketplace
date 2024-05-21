"use client";

import { Box, Grid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { purchases } from "./constants";
import FourColumnTableRow from "@/components/Layout/FourColumnTableRow/FourColumnTableRow";
import ReceiptModal from "@/components/Layout/ReceiptModal/ReceiptModal";
import { InvoiceDataType, ReceiptType, TransactionModalType } from "./types";
import { useScreenFreeze } from "@/hooks/useScreenFreeze";
import InvoiceModal from "@/components/Layout/InvoiceModal/InvoiceModal";
import { InvoiceData } from "@/context/PaymentContext/classes";

const Purchases = () => {
  const [showTxDetails, setShowTxDetails] =
    useState<TransactionModalType | null>(null);

  const updateTxDetails = (data: TransactionModalType) => {
    setShowTxDetails(data);
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
          invoice_data={
            new InvoiceData(
              (showTxDetails.data as InvoiceDataType).client_name,
              (showTxDetails.data as InvoiceDataType).number,
              (showTxDetails.data as InvoiceDataType).due_date
            )
          }
          order_total={(showTxDetails.data as InvoiceDataType).amount}
          tonnes={(showTxDetails.data as InvoiceDataType).tonnes}
          closeModal={() => setShowTxDetails(null)}
        />
      )}
    </Box>
  );
};

export default Purchases;
