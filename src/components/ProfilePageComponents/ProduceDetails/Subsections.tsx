import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import getStatusProps from "@/utils/getStatusProps";

const Subsections = ({ details }: { details: any }) => {
  return (
    <Box display="flex" flexDir="column" gap={{ base: "32px", lg: "48px" }}>
      {/* About Section */}
      <Box>
        <Text fontSize={{ base: "16px", lg: "18px" }} color="#000000" mb="12px">
          About
        </Text>
        <Text fontSize={{ base: "14px", lg: "16px" }} color="#0F0F0FB2">
          {details?.desc}
        </Text>
      </Box>

      {/* Details Section */}
      <Box>
        <Text fontSize={{ base: "16px", lg: "18px" }} color="#000000" mb="12px">
          Details
        </Text>
        {details.items.map((item: { title: string; value: string }) => (
          <Box
            display="grid"
            gridTemplateColumns={{ base: "1fr", sm: "40% 60%" }}
            key={item.title}
            alignItems="center"
            py="12px"
            mb="16px"
            borderBottom="1px solid rgba(0, 0, 0, 0.05)"
          >
            <Text fontSize="14px" color="#565656" mb={{ base: "4px", sm: "0" }}>
              {item.title}
            </Text>
            <Text fontSize="14px" color="#000000">
              {item.title === "Order Status" ? (
                <Text
                  textTransform={"capitalize"}
                  bgColor={getStatusProps(item.value).bg}
                  color={getStatusProps(item.value).text}
                  w={"fit-content"}
                  p={"0.5rem 1rem"}
                  borderRadius={"1.89rem"}
                  fontSize={"0.875rem"}
                >
                  {item.value}
                </Text>
              ) : (
                item.value
              )}
            </Text>
          </Box>
        ))}
      </Box>

      {/* Images Section */}
      <Box>
        <Text fontSize={{ base: "16px", lg: "18px" }} color="#000000" mb="12px">
          Images
        </Text>
        <Box
          display="flex"
          flexDir={{ base: "column", md: "row" }}
          gap="16px"
          flexWrap="wrap"
        >
          {details?.images?.map((item: any, idx: number) => (
            <Box
              borderRadius="16px"
              key={`${item._id}-${idx}`}
              w={{ base: "100%", sm: "100%", lg: "425px" }}
              h={{ base: "250px", sm: "300px", lg: "320px" }}
              overflow="hidden"
              position="relative"
              flexShrink={0}
            >
              <Image
                src={item.image}
                width={100}
                height={100}
                alt={`produce img ${idx + 1}`}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />

              <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                bg="rgba(0, 0, 0, 0.4)"
                zIndex="1"
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Subsections;
