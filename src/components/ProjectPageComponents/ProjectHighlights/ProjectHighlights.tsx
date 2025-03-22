import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { CircleDollarSign, LocateFixed, ReceiptText } from "lucide-react";
import React from "react";
import { HighlightBoxProps, ProjectHighlightProps } from "./types";

const ProjectHighlights = ({ highlights }: ProjectHighlightProps) => {
  const highlightsSection = [
    {
      title: "Direct Sourcing",
      content: "Purchase cassava straight from community farms",
      icon: CircleDollarSign,
    },
    {
      title: "Quality Assurance:",
      content: "Farmers follow best practices to deliver premium cassava",
      icon: LocateFixed,
    },
    {
      title: "Local Impact",
      content: "Your purchases boost income for smallholder farmers.",
      icon: LocateFixed,
    },
    {
      title: "Scalable Supply",
      content: "Easily adjust volumes to meet your demand.",
      icon: ReceiptText,
    },
  ];
  return (
    <Box mt={{ base: "32px", lg: "2.5rem" }}>
      <Flex
        alignItems={"center"}
        gap={"0.75rem"}
        display={{ base: "none", lg: "flex" }}
      >
        <Text>Highlights</Text>
        {/* <CircleAlert size={"0.875rem"} color="rgba(1, 19, 8, 0.5)" /> */}
      </Flex>
      <Grid
        gridTemplateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(4, 1fr)" }}
        bg={"white"}
        borderRadius={"1rem"}
        overflow={"hidden"}
        mt={"1rem"}
      >
        {highlightsSection.map((item, index) => (
          <HighlightBox
            title={item.title}
            content={item.content}
            Icon={item.icon}
            key={item.title}
            hideBorder={index === highlightsSection.length - 1}
          />
        ))}
      </Grid>
      {/* <ViewSectionButton text="View Insights" section={projectSections[2]} /> */}
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
      // alignItems={"center"}
      // justifyContent={"center"}
      flexDir={"column"}
      p={"1.5rem"}
      borderRight={"1px"}
      borderRightStyle={{ base: "none", lg: hideBorder ? "unset" : "dashed" }}
      borderBottom={"1px"}
      borderBottomStyle="dashed"
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
        // textAlign={"center"}
        fontWeight={450}
      >
        {content}
      </Text>
    </Flex>
  );
};
