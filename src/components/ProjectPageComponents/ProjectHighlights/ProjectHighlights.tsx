import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import {
  CircleAlert,
  CircleDollarSign,
  LocateFixed,
  ReceiptText,
} from "lucide-react";
import React from "react";
import { HighlightBoxProps, ProjectHighlightProps } from "./types";
import ViewSectionButton from "@/components/Layout/ViewSectionButton/ViewSectionButton";
import { projectSections } from "@/context/ProjectsPageContext/constants";

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
          content={`$${highlights.price?.toLocaleString()}/tonne`}
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
      <ViewSectionButton text="View Insights" section={projectSections[2]} />
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
      <Text
        mt={"1rem"}
        color={"main_black_1"}
        textAlign={"center"}
        fontWeight={450}
      >
        {content}
      </Text>
    </Flex>
  );
};
