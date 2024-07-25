import { Box, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { fundedProjects } from "./constants";
import FourColumnTableRow from "../../Layout/FourColumnTableRow/FourColumnTableRow";
import { Transaction } from "@/components/ProjectPageComponents/Purchases/types";

const FundedTable = () => {
  return (
    <Box>
      <Grid
        bgColor={"#F5F5F5"}
        gridTemplateColumns={"2fr 1fr 1fr 1fr"}
        borderRadius={"1.5rem"}
        px={"1.25rem"}
        py={"0.375rem"}
        mb={"1.5rem"}
        color={"rgba(0,0,0,0.4)"}
      >
        <Text>Name</Text>
        <Text>Payment</Text>
        <Text>Location</Text>
        <Text>Start Date</Text>
      </Grid>

      {fundedProjects.map((project) => {
        return (
          <FourColumnTableRow
            key={project.id}
            transaction={{} as Transaction}
          />
        );
      })}
    </Box>
  );
};

export default FundedTable;
