import { Box, Button, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { ReportRowProps } from "./types";
import Link from "next/link";

const ReportRow = ({
  id,
  name,
  creation_time,
  creation_date,
}: ReportRowProps) => {
  const details = {
    id,
    name,
    creation_time,
    creation_date,
  };
  return (
    <Grid gridTemplateColumns={{ lg: "3fr 1fr 1fr 1fr" }} alignItems={"center"}>
      <Box ml={{ lg: "4.287rem" }}>
        <Text
          fontSize={{ base: "16px", lg: "1.25rem" }}
          fontWeight={450}
          color={"main_black_1"}
        >
          {name}
        </Text>
        <Text fontSize={"0.875rem"} display={{ base: "none", lg: "block" }}>
          Name
        </Text>
      </Box>
      <Box display={{ base: "none", lg: "block" }}>
        <Text color={"black"}>{creation_time}</Text>
        <Text fontSize={"0.875rem"}>Creation Time</Text>
      </Box>
      <Box display={{ base: "none", lg: "block" }}>
        <Text color={"black"}>{creation_date}</Text>
        <Text fontSize={"0.875rem"}>Creation Date</Text>
      </Box>
      <Link
        href={`/profile/report?id=${id}`}
        target="_blank"
        onClick={() =>
          localStorage.setItem("pdf_details", JSON.stringify(details))
        }
      >
        <Button
          bgColor={"transparent"}
          ml={"auto"}
          color={"agrify_blue"}
          fontWeight={500}
          display={{ base: "none", lg: "block" }}
        >
          View
        </Button>
      </Link>
    </Grid>
  );
};

export default ReportRow;
