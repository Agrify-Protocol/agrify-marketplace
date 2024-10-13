import { Box, Grid, Text } from "@chakra-ui/react";
import pfp from "../../../assets/agrify_pfp.svg";
import React from "react";
import Image from "next/image";
import { IdTextProps } from "./types";

const InvoiceFooter = () => {
  return (
    <Box px={"1.25rem"} display={{ base: "none", lg: "block" }}>
      <Image src={pfp} alt="" />
      <Grid
        gridTemplateColumns={"repeat(3, 1fr)"}
        mt={"0.75rem"}
        fontSize={"0.625rem"}
        gap={"0.75rem"}
      >
        <Box>
          <Text fontSize={"0.875rem"} fontWeight={700} color={"main_black_1"}>
            Agrify Technologies Ltd
          </Text>
          <Text my={"0.5rem"}>Address / Contact Info</Text>
          <Text color={"#008FF8"}>email@company.com</Text>

          <IdTexts title="ID#1 Label" content="1234567890-123" />
          <IdTexts title="ID#2 Label" content="ABC-0987654321" />
        </Box>

        <Box>
          <Text fontWeight={600} color={"#121722"}>
            Payment Instructions
          </Text>
          <Text color={"#60737D"} mt={"0.5rem"}>
            Voluptas nisi aut. Est vitae dolore molestias porro praesentium.
            Tempore recusandae voluptatem necessitatibus corporis inventore
            neque magnam ut.
          </Text>
          <IdTexts title="ID#1 Label" content="1234567890-123" />
          <IdTexts title="ID#2 Label" content="ABC-0987654321" />
        </Box>

        <Box>
          <Text fontWeight={600} color={"#121722"}>
            Additional Notes
          </Text>
          <Text color={"#60737D"} mt={"0.5rem"}>
            Have a great day
          </Text>
        </Box>
      </Grid>
    </Box>
  );
};

export default InvoiceFooter;

const IdTexts = ({ title, content }: IdTextProps) => {
  return (
    <Box my={"0.5rem"}>
      <Text>{title}</Text>
      <Text color={"main_black_1"}>{content}</Text>
    </Box>
  );
};
