import ViewSectionButton from "@/components/Layout/ViewSectionButton/ViewSectionButton";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Storefront = () => {
  return (
    <Box minH={"30rem"}>
      <Box
        my={"1.5rem"}
        p={"1.5rem"}
        bgColor={"white"}
        w={"70.375rem"}
        borderRadius={"1rem"}
      >
        <Text
          fontWeight={"500"}
          fontSize={"1.5rem"}
          lineHeight={"2.1rem"}
          mb={"1.5rem"}
          color={"main_black_2"}
        >
          Organic Produce Market
        </Text>
        <ViewSectionButton text="Go to Produce Market" bgColor="gray_3" />
      </Box>
    </Box>
  );
};

export default Storefront;
