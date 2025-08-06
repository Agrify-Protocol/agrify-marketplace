"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import seal from "../../../assets/seal.svg";
import Image from "next/image";
import { ProduceDetailsProps } from "./types";
import Slider from "@/components/FarmPageComponents/Slider/Slider";
import Subsections from "./Subsections";
import BackButton from "@/components/Common/BackButton/BackButton";
import { usePathname } from "next/navigation";
import { formatSnakeCaseTitle } from "@/utils/formatSnakeCaseTitle";

const ProduceDetails = ({ details, btns }: ProduceDetailsProps) => {
  const pathname = usePathname();

  const detailsByUrl = (path: string) => {
    if (path.includes("produce-details")) {
      return {
        images: details?.listing?.farm?.farmImages,
        farmName: details?.listing?.farm?.name,
        productName: details?.listing?.product?.name,
        price: `${details?.listing?.totalPrice?.toLocaleString()}`,
        farmScore: details?.listing?.farm?.farmSuggestion?.FarmScore,
        subsection: {
          desc: "",
          images: details?.listing?.farm?.farmImages,
          items: [
            {
              title: "Farmer",
              value: `${details?.listing?.farmer?.firstname ?? ""} ${
                details?.listing?.farmer?.lastname ?? ""
              }`,
            },
            {
              title: "Location",
              value: `${details?.listing?.farm?.state}, ${details?.listing?.farm?.country}`,
            },
            {
              title: "Cultivation Type",
              value: details?.listing?.farm?.cultivationType ?? "",
            },
            {
              title: "Escrow Amount",
              value: details?.escrowAmount?.toLocaleString(),
            },
            {
              title: "Delivery Address",
              value: `${details?.deliveryAddress?.address}, ${details?.deliveryAddress?.state}, ${details?.deliveryAddress?.country}`,
            },
            {
              title: "Phone Number",
              value: details?.deliveryAddress?.phoneNumber,
            },
          ],
        },
      };
    }
    return {
      images: details?.images,
      farmName: `${details?.farmer?.firstname ?? ""} ${
        details?.farmer?.lastname ?? ""
      }'s Farm`,
      productName: details?.product?.name,
      price: `${details?.pricePerKg?.toLocaleString()}`,
      farmScore: details?.farm?.farmSuggestion?.FarmScore,
      subsection: {
        desc: details?.description,
        images: details?.images,
        items: [
          {
            title: "Farmer",
            value: `${details?.farmer?.firstname ?? ""} ${
              details?.farmer?.lastname ?? ""
            }`,
          },
          {
            title: "Location",
            value: `${details?.farm?.state}, ${details?.farm?.country}`,
          },
          {
            title: "Cultivation Type",
            value: details?.farm?.cultivationType ?? "",
          },
          {
            title: "Batch Size",
            value: details?.batchSize?.toLocaleString(),
          },
        ],
      },
    };
  };

  return (
    <Box px={{ base: 4, lg: 10 }} pt={{ base: 4, lg: 10 }}>
      <BackButton />
      <Flex direction={{ base: "column", lg: "row" }}>
        <Box flexShrink={0}>
          <Slider images={detailsByUrl(pathname).images} />
        </Box>
        <Flex
          maxH={{ base: "none", lg: "75vh" }}
          pl={{ lg: "1rem" }}
          px={{ base: "16px", lg: 0 }}
          pr={{ base: 0, lg: "32px" }}
          pb={{ base: 4, lg: 10 }}
          border={{ base: "1px solid transparent", lg: "none" }}
          flexDir="column"
          maxW="500px"
          mx="auto"
          borderLeftColor={{ lg: "rgba(0, 0, 0, 0.05)" }}
          overflowY={{ base: "visible", lg: "scroll" }}
          mt={{ base: 6, lg: 0 }}
        >
          <Text fontSize={{ base: "14px", lg: "18px" }} color={"black"}>
            {detailsByUrl(pathname).farmName}
          </Text>
          <Text
            fontSize={{ base: "24px", lg: "32px" }}
            color={"black"}
            textTransform="capitalize"
            mb={{ base: "15px", lg: "25px" }}
          >
            {formatSnakeCaseTitle(detailsByUrl(pathname).productName)}
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
            <br />${detailsByUrl(pathname).price}
          </Text>

          <Box>
            <Text
              color={"black"}
              mb={{ base: "0", lg: "40px" }}
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
                fontSize={{ base: "14px", lg: "18px" }}
                color={"black"}
                position={"absolute"}
                left={0}
                right={0}
                top={"1rem"}
                textAlign={"center"}
              >
                {detailsByUrl(pathname).farmScore}
              </Text>
              <Image
                style={{ position: "absolute", bottom: "10px" }}
                src={seal}
                alt="seal icon"
              />
            </Box>
          </Box>

          <Flex py={"0.75rem"} flexDir="column" width="100%">
            {btns}
          </Flex>

          <Subsections details={detailsByUrl(pathname).subsection} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProduceDetails;
