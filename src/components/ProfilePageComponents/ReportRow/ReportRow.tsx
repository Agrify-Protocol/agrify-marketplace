import { Box, Button, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { ReportRowProps } from "./types";

const ReportRow = ({ name, creation_time, creation_date }: ReportRowProps) => {
  return (
    <Grid gridTemplateColumns={"3fr 1fr 1fr 1fr"} alignItems={"center"}>
      <Box ml={"4.287rem"}>
        <Text fontSize={"1.25rem"} fontWeight={450} color={"main_black_1"}>
          {name}
        </Text>
        <Text fontSize={"0.875rem"}>Name</Text>
      </Box>
      <Box>
        <Text color={"black"}>{creation_time}</Text>
        <Text fontSize={"0.875rem"}>Creation Time</Text>
      </Box>
      <Box>
        <Text color={"black"}>{creation_date}</Text>
        <Text fontSize={"0.875rem"}>Creation Date</Text>
      </Box>
      <Box>
        <Button
          bgColor={"transparent"}
          display={"block"}
          ml={"auto"}
          color={"agrify_blue"}
          fontWeight={500}
        >
          View
        </Button>
      </Box>
    </Grid>
  );
};

export default ReportRow;
