import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

const Subsections = ({ details }: { details: any }) => {
  const detailsObj = [
    { title: "Farmer", value: details?.project?.farms[0]?.farmer?.firstname },
    { title: "Location", value: details?.project?.farms[0]?.address },
    { title: "Cultivation Type", value: details?.project?.farms[0]?.cultivationType },
    {
      title: "Available Quantity",
      value: details?.project?.farms[0]?.availableTonnes?.toLocaleString(),
    },
  ];
  return (
    <Box display="flex" flexDir="column" gap="48px">
      <Box>
        <Text fontSize="18px" color="#000000" mb="12px">
          About
        </Text>
        <Text color="#0F0F0FB2">{details?.project?.farms[0]?.description}</Text>
      </Box>
      <Box>
        <Text fontSize="18px" color="#000000" mb="12px">
          Details
        </Text>
        {detailsObj.map((item) => (
          <Box
            display="grid"
            gridTemplateColumns="40% 60%"
            key={item.title}
            py="12px"
            mb="16px"
            borderBottom={"1px solid rgba(0, 0, 0, 0.05)"}
          >
            <Text fontSize="14px" color="#565656">
              {item.title}
            </Text>
            <Text color="#000000">{item.value}</Text>
          </Box>
        ))}
      </Box>
      <Box>
        <Text fontSize="18px" color="#000000" mb="12px">
          Images
        </Text>
        <Box display="flex" flexDir="column" gap="16px">
          {details?.project?.farms[0]?.farmImages?.map((item: any, idx: number) => (
           <Box
           borderRadius="16px"
           key={item._id}
           maxW="425px"
           maxH="320px"
           overflow="hidden"
           position="relative" 
         >
           <Image
             src={item.image}
             width="100"
             height="100"
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
