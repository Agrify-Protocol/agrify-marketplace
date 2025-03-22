import { Box, Flex, Text } from "@chakra-ui/react";
import basket from "../../../assets/basket.svg";
import leaf from "../../../assets/leaf.svg";
import Image from "next/image";
import { CategoryBannerProps } from "./types";

const CategoryBanner = ({
  name,
  carbon_credits,
  image,
}: CategoryBannerProps) => {
  return (
    <Flex
      bgColor={"white"}
      borderRadius={"1.5rem"}
      gap={{ base: "51px", lg: 0 }}
      p={{ base: "59px 21px", lg: "3.313rem 2.938rem" }}
      alignItems={{ lg: "center" }}
      flexDir={{ base: "column", lg: "row" }}
      justifyContent={"space-between"}
    >
      <Box>
        <Flex alignItems={"center"} gap={"0.375rem"} fontSize={"0.875rem"}>
          <Image src={basket} alt="" />
          Produce Collection
        </Flex>
        <Text fontSize={"2rem"} color={"black"} textTransform={"capitalize"}>
          {name} Farms
        </Text>
        <Flex
          alignItems={"center"}
          gap={"0.375rem"}
          fontSize={"0.875rem"}
          color={"#8D8D8D"}
        >
          <Image src={leaf} alt="" />
          Total available produce: {carbon_credits.toLocaleString()}
        </Flex>
      </Box>
      <Box width={120} height={120} margin={{ base: "0 auto", lg: "0" }}>
        <Image
          src={image}
          alt={`${name} icon`}
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    </Flex>
  );
};

export default CategoryBanner;
