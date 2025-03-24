"use client";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import seal from "../../../assets/seal.svg";
import Image from "next/image";
import { ProduceDetailsProps } from "./types";
import Slider from "@/components/FarmPageComponents/Slider/Slider";
import Subsections from "./Subsections";
import { useRouter } from "next/navigation";
import BackButton from "@/components/Common/BackButton/BackButton";

const ProduceDetails = ({ details }: ProduceDetailsProps) => {
  const router = useRouter();
  return (
    <Box p={{ base: 4, lg: 10 }}>
      <BackButton />
      <Flex maxH="75vh">
        <Slider images={details?.project?.farms[0]?.farmImages} />
        <Box
          pl={{ lg: "1rem" }}
          px={{ base: "16px", lg: 0 }}
          pr={{ base: 0, lg: "32px" }}
          border={{ base: "1px solid transparent", lg: "none" }}
          display="flex"
          flexDir="column"
          width="100%"
          borderLeftColor={"rgba(0, 0, 0, 0.05)"}
          overflowY="scroll"
        >
          <Text fontSize={{ base: "14px", lg: "18px" }} color={"black"}>
            {details?.project?.title}
          </Text>
          <Text
            fontSize={{ base: "24px", lg: "32px" }}
            color={"black"}
            textTransform="capitalize"
            mb={{ base: "15px", lg: "25px" }}
          >
            {details?.project?.category}
          </Text>

          <Text
            fontSize={{ base: "18px", lg: "24px" }}
            color={"black"}
            mb={{ base: "25px", lg: "32px" }}
            lineHeight="35px"
          >
            <Text as="span" fontSize="14px">
              Price
            </Text>
            <br />${details?.price?.toLocaleString()}/kg
          </Text>
          <Box>
            <Text
              color={"black"}
              mb={{ base: "25px", lg: "40px" }}
              fontSize="14px"
            >
              Farm Score
            </Text>

            <Box
              w={"4.5rem"}
              h={"4.5rem"}
              position={"relative"}
              mt={{ base: 0, lg: -12 }}
            >
              <Text
                fontSize={{ base: "18px", lg: "24px" }}
                color={"black"}
                position={"absolute"}
                left={0}
                right={0}
                top={"1rem"}
                textAlign={"center"}
              >
                8.5
              </Text>
              <Image
                style={{ position: "absolute", bottom: "0" }}
                src={seal}
                alt=""
              />
            </Box>
          </Box>

          <Text color={"black"}>{details?.description}</Text>
          <Button
            bgColor="white"
            color="#282828"
            borderRadius={"2rem"}
            px={"2.5rem"}
            py={"0.75rem"}
            fontWeight={400}
            mt="32px"
            mb="32px"
            _hover={{
              bg: "white",
            }}
            onClick={() => window.open(details?.txHash ?? "", "_blank")}
          >
            View on Block Explorer
          </Button>
          <Button
            bgColor="transparent"
            color="#282828"
            borderRadius={"2rem"}
            px={"2.5rem"}
            py={"0.75rem"}
            fontWeight={400}
            mb="48px"
            border="1px solid #282828"
            _hover={{
              bg: "rgba(40, 40, 40, .1)",
            }}
            onClick={() =>
              router.push(`/profile/produce-details/track/${details?.orderId}`)
            }
          >
            Track Order
          </Button>
          <Subsections details={details} />
        </Box>
      </Flex>
    </Box>
  );
};

export default ProduceDetails;
