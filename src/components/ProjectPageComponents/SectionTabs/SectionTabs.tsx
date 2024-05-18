"use client";

import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { SectionTabProps } from "./types";

const SectionTabs = ({
  sections,
  currentSection,
  setCurrentSection,
}: SectionTabProps) => {
  return (
    <Flex
      mt={"4rem"}
      borderBottom={"1px solid rgba(0,0,0,0.1)"}
      alignItems={"center"}
      gap={"0.714rem"}
    >
      {sections.map((section) => {
        const isCurrent = currentSection === section;
        return (
          <Box
            key={section}
            pb={"0.509rem"}
            borderBottom={"1px"}
            borderBottomColor={isCurrent ? "agrify_green" : "transparent"}
          >
            <Button
              fontWeight={450}
              borderRadius={"1.905rem"}
              color={isCurrent ? "main_black_1" : "gray_1"}
              bg={isCurrent ? "gray_3" : "transparent"}
              onClick={() => setCurrentSection(section)}
            >
              {section}
            </Button>
          </Box>
        );
      })}
    </Flex>
  );
};

export default SectionTabs;
