import { Grid, Text } from "@chakra-ui/react";
import React from "react";
import { FundTableRowProps } from "./types";

const FundedTableRow = ({
  name,
  payment_status,
  location,
  start_date,
}: FundTableRowProps) => {
  const statusColor = {
    pending: { bg: "rgba(245, 203, 37, 0.05)", color: "rgba(245, 203, 37, 1)" },
    confirmed: { bg: "rgba(12, 193, 76, 0.05)", color: "rgba(12, 193, 76, 1)" },
  };

  const statusBgColor = statusColor[payment_status].bg;
  const statusTextColor = statusColor[payment_status].color;

  return (
    <Grid
      gridTemplateColumns={"2fr 1fr 1fr 1fr"}
      mb={"1.5rem"}
      py={"1.25rem"}
      alignItems={"center"}
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
      <Text color={"black"}>{location}</Text>
      <Text color={"black"}>{start_date}</Text>
    </Grid>
  );
};

export default FundedTableRow;
