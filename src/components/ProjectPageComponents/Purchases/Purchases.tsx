"use client";

import { Box, Grid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { purchases } from "./constants";
import FourColumnTableRow from "@/components/Layout/FourColumnTableRow/FourColumnTableRow";
import ReceiptModal from "@/components/Layout/ReceiptModal/ReceiptModal";
import { TransactionModalType } from "./types";

const Purchases = () => {
  const [showTxDetails, setShowTxDetails] =
    useState<TransactionModalType | null>(null);

  const updateTxDetails = (data: TransactionModalType) => {
    setShowTxDetails(data);
  };

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
          tonnes={showTxDetails.data.tonnes}
          amount={showTxDetails.data.amount}
          date_time={showTxDetails.data.date_time}
          reference_code={showTxDetails.data.reference_code}
          closeModal={() => setShowTxDetails(null)}
        />
      )}
    </Box>
  );
};

export default Purchases;
