import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import seal from "../../../assets/seal.svg";
import { FarmDetailProps, HighlightItemProps } from "./types";
import Image from "next/image";

const FarmDetail = ({ detail }: FarmDetailProps) => {
  return (
    <Box
      pl={{ lg: "1rem" }}
      px={{ base: "16px", lg: 0 }}
      border={{ base: "1px solid transparent", lg: "none" }}
      display="flex"
      flexDir="column"
      gap={{ base: "37px", lg: "3.125rem" }}
      borderLeftColor={"rgba(0, 0, 0, 0.05)"}
    >
      <Text fontSize={{ base: "24px", lg: "2rem" }} color={"black"}>
        {detail.name}
      </Text>

      <Box>
        <Flex alignItems={"center"} gap={"0.5rem"}>
          Farm Score
        </Flex>

        <Box w={"4.5rem"} h={"4.5rem"} position={"relative"}>
          <Text
            fontSize={"1.5rem"}
            fontWeight={500}
            color={"black"}
            position={"absolute"}
            left={0}
            right={0}
            top={"1rem"}
            textAlign={"center"}
          >
            {detail?.farmSuggestion?.FarmScore?.toLocaleString() ?? "N/A"}
          </Text>
          <Image
            style={{ position: "absolute", bottom: "0" }}
            src={seal}
            alt=""
          />
        </Box>
      </Box>

      <Text color={"black"}>{detail.description}</Text>

      <Box>
        <Text color={"black"} fontSize={"1.125rem"} mb={"1rem"}>
          Highlights
        </Text>
        <HighlightItem title="Location" value={detail.address} />
        <HighlightItem
          title="Cultivation Type"
          value={detail.cultivationType}
        />
        <HighlightItem
          title="Available Carbon"
          value={detail.availableTonnes.toLocaleString()}
        />
      </Box>
    </Box>
  );
};

export default FarmDetail;

const HighlightItem = ({ title, value }: HighlightItemProps) => {
  return (
    <Grid
      gridTemplateColumns={"2fr 3fr"}
      alignItems={"center"}
      py={"1.089rem"}
      border={"1px solid transparent"}
      borderBottomColor={"rgba(0, 0, 0, 0.05)"}
    >
      <Text fontSize={"0.875rem"} color={"black"}>
        {title}
      </Text>
      <Text color={"black"}>{value}</Text>
    </Grid>
  );
};
