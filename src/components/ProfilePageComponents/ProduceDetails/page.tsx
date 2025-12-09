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
        images: details?.listing.images,
        farmName: details?.listing?.farm?.name,
        productName: details?.listing?.product?.name,
        price: `${details?.listing?.totalPrice?.toLocaleString()}`,
        farmScore: details?.listing?.farm?.farmSuggestion?.FarmScore,
        subsection: {
          desc: "",
          images: details?.listing.images,
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
      farmName: details?.farm?.name,
      productName: details?.product?.name,
      price: `${details?.pricePerKg?.toLocaleString()}/kg`,
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
            value: `${details?.batchSize?.toLocaleString()}kg`,
          },
        ],
      },
    };
  };

  return (
    <Box
      px={{ base: 3, sm: 4, md: 6, lg: 10 }}
      pt={{ base: 3, sm: 4, md: 6, lg: 10 }}
    >
      <BackButton />

      <Flex
        direction={{ base: "column", lg: "row" }}
        gap={{ base: 4, sm: 5, md: 6, lg: 0 }}
        px={{ base: "14px", lg: 0 }}
        mt={{ base: 4, lg: 0 }}
      >
        {/* Left Section - Slider */}
        <Box flexShrink={0} w={{ base: "100%", lg: "auto" }}>
          <Box
            w="100%"
            borderRadius={{ base: "8px", md: "10px", lg: "0" }}
            overflow="hidden"
          >
            <Slider images={detailsByUrl(pathname).images} />
          </Box>
        </Box>

        {/* Right Section */}
        <Flex
          maxH={{ base: "none", lg: "75vh" }}
          pl={{ base: 0, lg: "1rem" }}
          px={{ base: 0, md: "8px", lg: 0 }}
          pr={{ base: 0, lg: "32px" }}
          pb={{ base: 4, md: 6, lg: 10 }}
          flexDir="column"
          maxW={{ base: "100%", md: "640px", lg: "500px" }}
          mx={{ base: 0, md: "auto" }}
          borderLeftColor={{ lg: "rgba(0, 0, 0, 0.05)" }}
          overflowY={{ base: "visible", lg: "scroll" }}
          mt={{ base: 4, md: 5, lg: 0 }}
        >
          {/* Farm Name */}
          <Text
            fontSize={{ base: "13px", sm: "14px", md: "16px", lg: "18px" }}
            color="black"
            wordBreak="break-word"
          >
            {detailsByUrl(pathname).farmName}
          </Text>

          {/* Product Name */}
          <Text
            fontSize={{ base: "22px", sm: "24px", md: "28px", lg: "32px" }}
            color="black"
            textTransform="capitalize"
            mb={{ base: "12px", sm: "15px", md: "20px", lg: "25px" }}
            lineHeight={{ base: "1.25", md: "1.3", lg: "1.3" }}
            wordBreak="break-word"
          >
            {formatSnakeCaseTitle(detailsByUrl(pathname).productName)}
          </Text>

          {/* Price */}
          <Text
            fontSize={{ base: "16px", md: "18px", lg: "24px" }}
            color="black"
            mb={{ base: "18px", sm: "22px", md: "26px", lg: "32px" }}
            lineHeight={{ base: "28px", md: "32px", lg: "35px" }}
          >
            <Text as="span" fontSize={{ base: "12px", md: "14px" }}>
              Price
            </Text>
            <br />${detailsByUrl(pathname).price}
          </Text>

          {/* Farm Score */}
          <Box>
            <Text
              color="black"
              mb={{ base: "6px", md: "10px", lg: "40px" }}
              fontSize={{ base: "12px", md: "13px", lg: "14px" }}
            >
              Farm Score
            </Text>

            <Box
              w={{ base: "3.25rem", md: "3.75rem", lg: "4.5rem" }}
              h={{ base: "3.25rem", md: "3.75rem", lg: "4.5rem" }}
              position="relative"
              mt={{ base: 0, lg: -12 }}
            >
              <Text
                fontSize={{ base: "12px", md: "14px", lg: "18px" }}
                color="black"
                position="absolute"
                left={0}
                right={0}
                top={{ base: "0.7rem", md: "0.85rem", lg: "1rem" }}
                textAlign="center"
              >
                {detailsByUrl(pathname).farmScore}
              </Text>
              <Image
                style={{ position: "absolute", bottom: "8px" }}
                src={seal}
                alt="seal icon"
              />
            </Box>
          </Box>

          {/* Buttons */}
          <Flex
            py={{ base: "0.5rem", md: "0.75rem" }}
            flexDir="column"
            width="100%"
            gap={{ base: 2, md: 3 }}
          >
            {btns}
          </Flex>

          {/* Subsections */}
          <Subsections details={detailsByUrl(pathname).subsection} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProduceDetails;
