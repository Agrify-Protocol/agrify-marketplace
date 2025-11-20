"use client";

import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import link from "@/assets/link.svg";
import BackButton from "@/components/Common/BackButton/BackButton";
import React, { useState } from "react";
import Slider from "@/components/FarmPageComponents/Slider/Slider";

const BoxWithClickableBtn = ({
  children,
  btnTitle,
  btnFn,
}: {
  children: React.ReactNode;
  btnTitle: string;
  btnFn: () => void;
}) => {
  return (
    <Box
      position="relative"
      width="590.8975219726562px"
      height="608.4241333007812px"
      overflow="hidden"
      rounded="15.24px"
    >
      {children}
      <Box bg="#FBFBFD" p="32px" position="absolute" left="0" bottom="0">
        <Button
          bg="white"
          border="1px solid rgba(0, 0, 0, 0.1)"
          px="10px"
          py="7px"
          fontSize="14px"
          color="#666666"
          onClick={btnFn}
        >
          {btnTitle}
        </Button>
      </Box>
    </Box>
  );
};

const CarbonCreditPurchaseDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Box mt="76px" mb="40px" mx="40px">
        <BackButton />
        <Box bg="white" rounded="15.24px" p="60px" mt="24px">
          <Flex gap="54px">
            <Box
              width="533.3333129882812px"
              height="612.3809814453125px"
              rounded="15.24px"
              bg="gray"
            />
            <Box maxW="647.512451171875px">
              <Text fontSize="32px" fontWeight={500} color="black">
                Agrify x Releaf Biochar
              </Text>
              <Divider my="40px" />
              <Box>
                <Text color="black" fontSize="14px" mb="12px">
                  Project Description
                </Text>
                <Text fontWeight="300" color="black">
                  The purpose of the project activity was substituting sulphur
                  hexafluoride (SF6), a high global warming potential (GWP) gas,
                  with a non-global warming sulphur dioxide (SO2) gas at RIMA
                  magnesium factory.
                </Text>
              </Box>
              <Divider my="40px" />
              <Grid
                gridTemplateColumns="repeat(2, 1fr)"
                columnGap="100px"
                rowGap="20px"
              >
                {Object.entries({
                  Location: "Port Harcourt , Nigeria",
                  "Crediting Period": "01 Dec 2023 - 31 Jan 2029",
                  Price: "$255.00/tC02e",
                  "Available Tonnes": "500 tCO2e",
                  Type: <Text color="#B274C9">Pre-Credits</Text>,
                }).map(([key, value]) => (
                  <Box key={key}>
                    <Text color="black" fontSize="14px" mb="12px">
                      {key}
                    </Text>
                    {typeof value === "string" ? (
                      <Text fontWeight={300} fontSize="16px" color="black">
                        {value}
                      </Text>
                    ) : (
                      value
                    )}
                  </Box>
                ))}
                <Box>
                  {Object.entries({
                    "View on marketplace": "#",
                    "View XRP Ledger": "#",
                  }).map(([key, value]) => (
                    <Link
                      href={key}
                      key={key}
                      style={{ display: "flex", gap: "6px" }}
                    >
                      <Text color="black" textDecor="underline">
                        {key}
                      </Text>
                      <Image src={link} alt="link icon" />
                    </Link>
                  ))}
                </Box>
              </Grid>
            </Box>
          </Flex>
          <Flex mt="50px" mb="76px" flexDir="column" gap="16px">
            <Text fontWeight={450} fontSize={"18px"} color={"black"}>
              Updates
            </Text>
            <Flex
              color={"black"}
              alignItems="center"
              justifyContent="space-between"
              gap="6px"
              width="500px"
            >
              <Text as="span">January 2026 Updates</Text>
              <Image src={link} alt="link icon" />
            </Flex>
          </Flex>
          <Flex justifyContent="space-between" gap="6px">
            <BoxWithClickableBtn
              btnTitle="View Project Reports"
              btnFn={() => null}
            >
              <Box bg="gray" width="100%" height="100%" />
            </BoxWithClickableBtn>
            <BoxWithClickableBtn
              btnTitle="View Project Photos"
              btnFn={() => setIsOpen(true)}
            >
              <Box bg="gray" width="100%" height="100%" />
            </BoxWithClickableBtn>
          </Flex>
        </Box>
      </Box>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        isCentered
        size="3xl"
      >
        <ModalOverlay />
        <ModalContent bgColor="transparent" shadow="none">
          <Box w="100%" mx="auto">
            <Slider
              images={[
                {
                  image:
                    "https://res.cloudinary.com/isaacoduh/image/upload/v1752502528/wfnk0dw8kj04sqdxqyod.webp",
                },
                {
                  image:
                    "https://res.cloudinary.com/isaacoduh/image/upload/v1752502528/wfnk0dw8kj04sqdxqyod.webp",
                },
                {
                  image:
                    "https://res.cloudinary.com/isaacoduh/image/upload/v1752502528/wfnk0dw8kj04sqdxqyod.webp",
                },
              ]}
            />
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CarbonCreditPurchaseDetails;
