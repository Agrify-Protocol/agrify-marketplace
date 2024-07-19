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
      p={"3.313rem 2.938rem"}
      alignItems={"center"}
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
          Total available credits: {carbon_credits.toLocaleString()} tco2e
        </Flex>
      </Box>

      <Image src={image} alt="" width={120} height={120} />
    </Flex>
  );
};

export default CategoryBanner;
