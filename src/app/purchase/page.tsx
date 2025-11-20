import PurchaseComp from "@/components/PurchasePageComponents";

import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

const Purchase = () => {
  const { chosenProject } = useGlobalContext();
  const router = useRouter();

  return (
    <PurchaseComp
      caption={`Secure your high-quality
        ${chosenProject?.name
          ?.toLowerCase()
          ?.split("_")
          .join(" ")} directly from
        local farmers.`}
    >
      <Box borderBottom={"1px dashed"} borderColor={"gray_2"}>
        <Text
          fontWeight={500}
          fontSize={{ base: "24px", lg: "1.5rem" }}
          color={"main_black_1"}
          mb={"2.5rem"}
        >
          Order Details
        </Text>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          mb={"1rem"}
        >
          <Text fontSize={{ base: "14px", lg: "1.125rem" }}>Price</Text>
          <Text
            fontSize={{ base: "14px", lg: "1.125rem" }}
            fontWeight={500}
            color={"main_black_1"}
          >
            ${chosenProject?.pricePerKg?.toLocaleString()}/kg
          </Text>
        </Flex>

        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          mb={"1rem"}
        >
          <Text fontSize={{ base: "14px", lg: "1.125rem" }}>Batch Size</Text>
          <Text
            fontSize={{ base: "14px", lg: "1.125rem" }}
            fontWeight={500}
            color={"main_black_1"}
          >
            {chosenProject?.batchSize?.toLocaleString()}
          </Text>
        </Flex>
      </Box>

      <Box mt={"2.5rem"}>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          mb={"1rem"}
        >
          <Text fontSize={{ base: "14px", lg: "1.125rem" }}>Total Price</Text>
          <Text
            fontSize={{ base: "14px", lg: "1.125rem" }}
            fontWeight={450}
            color={"rgba(1, 19, 8, 0.7)"}
          >
            ${chosenProject?.totalPrice?.toLocaleString()}
          </Text>
        </Flex>

        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Text fontSize={{ base: "14px", lg: "1.125rem" }}>VAT</Text>
          <Text
            fontSize={{ base: "14px", lg: "1.125rem" }}
            fontWeight={450}
            color={"rgba(1, 19, 8, 0.7)"}
          >
            $1.46
          </Text>
        </Flex>
      </Box>

      <Button
        w={"100%"}
        h={"3.5rem"}
        mt={"3rem"}
        bgColor={"agrify_green"}
        fontWeight={500}
        color={"white"}
        borderRadius={"2.119rem"}
        _hover={{
          bg: "#0ba842",
        }}
        fontSize={{ base: "14px", lg: "1.125rem" }}
        onClick={() => router.push("/payment")}
      >
        Continue Purchase
      </Button>
    </PurchaseComp>
  );
};

export default Purchase;
