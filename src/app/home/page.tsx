"use client";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import carbonCreditbg from "@/assets/carbon-credit-bg.png";
import organicProducebg from "@/assets/hero-bg.png";
import corn from "@/assets/corn.svg";
import coin from "@/assets/green-coin.svg";
import ContainerWithDarkenedBg from "@/components/ContainerWithDarkenedBg";
import { useAuthContext } from "@/context/AuthContext/AuthContext";

export default function Home() {
  const { user } = useAuthContext();
  const actions = [
    {
      id: "climate-art",
      title: "Buy Climate Art",
      icon: coin,
      bg: carbonCreditbg,
      description:
        "Offset your emissions with tokenised climate art representing tonnes of carbon captured from regenertative agriculture.",
    },
    {
      id: "traceable-produce",
      title: "Buy Traceable Produce",
      icon: corn,
      bg: organicProducebg,
      description:
        "Buy sustainbly grown produce that can be traced right to the farmer and the farming practices used while growing.",
    },
  ];

  return (
    <Box
      px={{ base: "20px", sm: "25px", md: "35px", lg: "2.625rem" }}
      py={{ base: "32px", sm: "39px", md: "50px", lg: "6.963rem" }}
      minH={{ base: "auto", md: "85dvh" }}
      display="flex"
      alignItems={{ base: "flex-start", md: "center" }}
      justifyContent="center"
    >
      {/* <Box mb="70px">
        <Text fontWeight={500} fontSize="32px" color="black" mb={4}>
          Hello{user && `, ${user.firstname}`}
        </Text>
        <Text maxW="1135px">
          Welcome to Agrify, where you can meet your net zero goals by
          offsetting your emissions through green coins or insetting by
          purchasing sustainably grown produce{" "}
        </Text>
      </Box> */}
      <Flex gap="50px" flexDir={{ base: "column", md: "row" }} align="stretch">
        {actions.map((action) => (
          <Box
            key={action.id}
            width={{ base: "100%", md: "50%" }}
            height="auto"
            display="flex"
          >
            <ContainerWithDarkenedBg bg={action.bg} opacity={0.7}>
              <Flex
                height="100%"
                flexDir="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                px={{ base: "3", sm: "4" }}
              >
                <Image
                  src={action.icon}
                  alt={`${action.title} icon`}
                  style={{ marginBottom: "10px" }}
                  width={40}
                  height={40}
                />
                <Text
                  color="white"
                  fontSize={{ base: "20px", sm: "24px", md: "32px" }}
                  fontWeight="600"
                  mb="12px"
                >
                  {action.title}
                </Text>
                <Text
                  color="white"
                  fontSize={{ base: "14px", sm: "15px", md: "16px" }}
                  maxW={{ base: "100%", sm: "90%", md: "70%" }}
                  mx="auto"
                  mb="35px"
                >
                  {action.description}
                </Text>
                <Link href={`/home/${action.id}`}>
                  <Button rounded="32px" fontWeight="400" px="40px" py="12px">
                    Explore
                  </Button>
                </Link>
              </Flex>
            </ContainerWithDarkenedBg>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
