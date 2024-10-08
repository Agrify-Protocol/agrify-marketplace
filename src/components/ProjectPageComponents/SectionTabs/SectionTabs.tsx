"use client";

import { Box, Button, Flex, Select } from "@chakra-ui/react";
import React from "react";
import { SectionTabProps } from "./types";
import { usePathname, useRouter } from "next/navigation";

const SectionTabs = ({
  sections,
  currentSection,
  id,
  type,
}: SectionTabProps) => {
  const router = useRouter();
  const pathname = usePathname();

  console.log('currentSection', currentSection)
  return (
    <Box marginTop={{ base: "40px", lg: 0 }}>
      <Flex
        mt={"4rem"}
        borderBottom={"1px solid rgba(0,0,0,0.1)"}
        alignItems={"center"}
        gap={"0.714rem"}
        display={{ base: "none", lg: "flex" }}
      >
        {sections.map((section) => {
          const isCurrent = currentSection === section.toLowerCase();
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
                onClick={() =>
                  router.push(
                    type === "my profile"
                      ? `/profile?id=${section.toLocaleLowerCase()}`
                      : `${pathname}?id=${section.toLocaleLowerCase()}`
                  )
                }
              >
                {section}
              </Button>
            </Box>
          );
        })}
      </Flex>
      <Select
        outline="none"
        rounded="30.48px"
        colorScheme="gray"
        bg="rgba(238, 238, 238, 1)"
        display={{ base: "block", lg: "none" }}
        onChange={(e) =>
          router.push(`${pathname}?id=${e.target.value.toLocaleLowerCase()}`)
        }
      >
        {sections.map((item) => (
          <option
            value={item}
            id={item}
            key={item}
            selected={currentSection === item.toLocaleLowerCase()}
          >
            {item}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default SectionTabs;
