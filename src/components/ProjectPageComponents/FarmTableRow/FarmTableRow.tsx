import { useRouter } from "next/navigation";
import { FarmTableRowProps } from "./types";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import Image from "next/image";
import profileImg from "../../../assets/agrify_pfp.svg";

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
      onClick={() => router.push(`/farm/${farm._id}`)}
    >
      <Flex alignItems={"center"} gap={"0.5rem"}>
        <Box
          w={"41px"}
          h={"41px"}
          borderRadius={"50%"}
          position={"relative"}
          overflow={"hidden"}
        >
          <Image src={farm.farmImages?.[0].image || profileImg} fill alt="" />
        </Box>

        <Text color={"black"}>{farm.name}</Text>
      </Flex>

      <Text color={"black"}>{`${farm.state}, ${farm.country}`}</Text>
    </Grid>
  );
};

export default FarmTableRow;
