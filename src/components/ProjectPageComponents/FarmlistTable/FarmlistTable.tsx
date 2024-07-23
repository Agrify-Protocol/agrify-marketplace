import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import target from "../../../assets/target.svg";
import Image from "next/image";
import FarmTableRow from "../FarmTableRow/FarmTableRow";
import { FarmListTableProps } from "./types";

const FarmlistTable = ({ farm_list }: FarmListTableProps) => {
  return (
    <Box mb={"4rem"}>
      <Text fontSize={"1.5rem"} fontWeight={500} mb={"2rem"} color={"black"}>
        Farm List
      </Text>
      <Grid
        gridTemplateColumns={"8fr 2fr"}
        color={"secondary_foreground"}
        p={"2rem 1rem"}
      >
        <Box>Farm</Box>
        <Box>
          <Flex alignItems={"center"} gap={"0.5rem"}>
            Location
            <Image src={target} alt="" />
          </Flex>
        </Box>
      </Grid>
      <Grid border={"1px solid rgba(0, 0, 0, 0.05)"} borderRadius={"1.099rem"}>
        {farm_list.map((farm, index) => {
          const isLast = index == farm_list.length - 1;
          return <FarmTableRow key={farm._id} farm={farm} isLast={isLast} />;
        })}
      </Grid>
    </Box>
  );
};

export default FarmlistTable;
