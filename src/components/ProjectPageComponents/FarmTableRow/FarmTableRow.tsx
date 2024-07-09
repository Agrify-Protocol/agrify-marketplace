import { useRouter } from "next/navigation";
import { FarmTableRowProps } from "./types";
import { Flex, Grid, Text } from "@chakra-ui/react";
import Image from "next/image";

const FarmTableRow = ({ farm, isLast }: FarmTableRowProps) => {
  const router = useRouter();
  return (
    <Grid
      gridTemplateColumns={"8fr 2fr"}
      p={"2rem 1rem"}
      alignItems={"center"}
      border={"1px solid transparent"}
      borderBottomColor={isLast ? "" : "rgba(0, 0, 0, 0.05)"}
      cursor={"pointer"}
      onClick={() => router.push(`/farm/${farm.id}`)}
    >
      <Flex alignItems={"center"} gap={"0.5rem"}>
        <Image src={farm.image} alt="" />
        <Text color={"black"}>{farm.name}</Text>
      </Flex>

      <Text color={"black"}>{farm.location}</Text>
    </Grid>
  );
};

export default FarmTableRow;
