import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import {
  ChevronRight,
  CircleAlert,
  CircleDollarSign,
  LocateFixed,
  ReceiptText,
} from "lucide-react";
import React from "react";
import { HighlightBoxProps, ProjectHighlightProps } from "./types";

const ProjectHighlights = ({ highlights }: ProjectHighlightProps) => {
  return (
    <Box mt={"2.5rem"}>
      <Flex alignItems={"center"} gap={"0.75rem"}>
        <Text>Highlights</Text>
        <CircleAlert size={"0.875rem"} color="rgba(1, 19, 8, 0.5)" />
      </Flex>
      <Grid
        gridTemplateColumns={"repeat(4, 1fr)"}
        bg={"white"}
        borderRadius={"1rem"}
        overflow={"hidden"}
        mt={"1rem"}
      >
        <HighlightBox
          title="Price"
          content={String(highlights.price)}
          Icon={CircleDollarSign}
        />
        <HighlightBox
          title="Location"
          content={highlights.location}
          Icon={LocateFixed}
        />
        <HighlightBox
          title="Crediting Period"
          content={highlights.crediting_period}
          Icon={LocateFixed}
        />
        <HighlightBox
          title="Contract Type"
          content={highlights.contract_type}
          Icon={ReceiptText}
          hideBorder
        />
      </Grid>
      <Button
        mt={"2.5rem"}
        fontWeight={400}
        bgColor={"white"}
        color={"secondary_foreground"}
        rightIcon={<ChevronRight />}
      >
        View Insights
      </Button>
    </Box>
  );
};

export default ProjectHighlights;

const HighlightBox = ({
  title,
  content,
  Icon,
  hideBorder,
}: HighlightBoxProps) => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      flexDir={"column"}
      py={"1.5rem"}
      borderRight={"1px"}
      borderRightStyle={hideBorder ? "unset" : "dashed"}
      borderRadius={"1rem"}
    >
      <Flex alignItems={"center"} gap={"0.375rem"}>
        <Icon size={"0.875rem"} color="#A6A6A6" />
        <Text color={"gray_1"} fontSize={"0.875rem"}>
          {title}
        </Text>
      </Flex>
      <Text mt={"1rem"} color={"main_black_1"}>
        {content}
      </Text>
    </Flex>
  );
};