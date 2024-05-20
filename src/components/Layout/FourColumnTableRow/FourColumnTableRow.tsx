import { Grid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FourColumnTableRowProps } from "./types";
import ReceiptModal from "../ReceiptModal/ReceiptModal";

const FourColumnTableRow = ({
  name,
  payment_status,
  location_or_tonnes,
  date,
}: FourColumnTableRowProps) => {
  const statusColor: { [x: string]: { [x: string]: string } } = {
    pending: { bg: "rgba(245, 203, 37, 0.05)", color: "rgba(245, 203, 37, 1)" },
    confirmed: { bg: "rgba(12, 193, 76, 0.05)", color: "rgba(12, 193, 76, 1)" },
  };

  const statusBgColor = statusColor[payment_status].bg;
  const statusTextColor = statusColor[payment_status].color;

  const [showTxDetails, setShowTxDetails] = useState(false);

  return (
    <Grid
      gridTemplateColumns={"2fr 1fr 1fr 1fr"}
      mb={"1.5rem"}
      py={"1.25rem"}
      alignItems={"center"}
      cursor={"pointer"}
      onClick={() => setShowTxDetails(true)}
    >
      <Text fontWeight={450} color={"black"} pl={"1.25rem"}>
        {name}
      </Text>
      <Text
        textTransform={"capitalize"}
        bgColor={statusBgColor}
        color={statusTextColor}
        w={"fit-content"}
        p={"0.5rem 1rem"}
        borderRadius={"1.89rem"}
        fontSize={"0.875rem"}
      >
        {payment_status}
      </Text>
      <Text color={"black"}>{location_or_tonnes}</Text>
      <Text color={"black"}>{date}</Text>
      {showTxDetails && (
        <ReceiptModal
          tonnes={50}
          amount={502.64}
          date_time="12:00 March 14, 2024"
          reference_code="AGT88349990924"
          closeModal={() => setShowTxDetails(false)}
        />
      )}
    </Grid>
  );
};

export default FourColumnTableRow;
