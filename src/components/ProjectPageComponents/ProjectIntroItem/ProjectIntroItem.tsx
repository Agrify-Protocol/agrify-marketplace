import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { ProjectIntroItemProps } from "./types";

const ProjectIntroItem = ({
  title,
  content,
  padding_x,
  hideBorder,
  ...rest
}: ProjectIntroItemProps) => {
  return (
    <Flex
      borderRight={
        hideBorder ? "transparent" : { lg: "1px solid rgba(0,0,0,0.1)" }
      }
      py={{ lg: "1.813rem" }}
      px={padding_x ? { base: "0", lg: padding_x } : "unset"}
      pr={"0.5rem"}
      alignItems={"center"}
      gap={"0.75rem"}
      {...rest}
    >
      <Box>
        <Text fontSize={{ base: "14px", lg: "0.875rem" }}>{title}</Text>
        <Text
          fontSize={{ base: "20px", lg: "1.25rem" }}
          fontWeight={500}
          color={"main_black"}
        >
          {content}
        </Text>
      </Box>
      {/* <CircleAlert
        size={"0.875rem"}
        style={{ minWidth: "0.875rem", minHeight: "0.875rem" }}
        color="rgba(1, 19, 8, 0.5)"
      /> */}
    </Flex>
  );
};

export default ProjectIntroItem;
