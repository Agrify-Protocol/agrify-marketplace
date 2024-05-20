import { Box, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { purchases } from "./constants";
import FourColumnTableRow from "@/components/Layout/FourColumnTableRow/FourColumnTableRow";

const Purchases = () => {
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
          />
        );
      })}
    </Box>
  );
};

export default Purchases;
