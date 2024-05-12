import { Box, Button, Text } from "@chakra-ui/react";
import { ChevronRight } from "lucide-react";
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
        <Button
          fontWeight={400}
          bgColor={"gray_3"}
          color={"secondary_foreground"}
          rightIcon={<ChevronRight />}
        >
          Go to Produce Market
        </Button>
      </Box>
    </Box>
  );
};

export default Storefront;
