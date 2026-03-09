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
import { useState } from "react";
import Slider from "@/components/FarmPageComponents/Slider/Slider";
import { useParams, useRouter } from "next/navigation";
import PageLoader from "@/components/Common/PageLoader/PageLoader";
import ContainerWithDarkenedBg from "@/components/ContainerWithDarkenedBg";
import Pill from "@/components/CarbonCredits/Pill";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import { useCarbonCreditById } from "@/hooks/queries/useHomeQueries";

const CarbonCreditPurchaseDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const router = useRouter();
  const { user, fetchingUser } = useAuthContext();

  const {
    data,
    isLoading,
    isError,
    refetch,
  } = useCarbonCreditById(!!user ? (params.id as string) : undefined);

  const details = data?.data;

  if (fetchingUser || isLoading) {
    return <PageLoader />;
  }

  if (isError) {
    return (
      <Box
        mt={{ base: "32px", md: "76px" }}
        mb="40px"
        mx={{ base: "16px", md: "40px" }}
        textAlign="center"
      >
        <Text mb="16px" color="red.500">
          Failed to load project details. Please try again.
        </Text>
        <Button variant="outline" size="sm" onClick={() => refetch()}>
          Retry
        </Button>
      </Box>
    );
  }

  if (!details) {
    return (
      <Box
        mt={{ base: "32px", md: "76px" }}
        mb="40px"
        mx={{ base: "16px", md: "40px" }}
        textAlign="center"
      >
        <Text mb="16px">Project not found.</Text>
        <Button variant="outline" size="sm" onClick={() => router.back()}>
          Go Back
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Box
        mt={{ base: "32px", md: "76px" }}
        mb="40px"
        mx={{ base: "16px", md: "40px" }}
      >
        <BackButton />

        <Box
          bg="white"
          rounded="15.24px"
          p={{ base: "24px", md: "60px" }}
          mt="24px"
        >
          <Flex
            gap={{ base: "24px", md: "54px" }}
            flexDir={{ base: "column", md: "row" }}
          >
            <ContainerWithDarkenedBg
              bg={details.images[0]?.url}
              opacity={0.2}
            >
              <Box
                width={{ base: "100%", md: "533.3333129882812px" }}
                height={{ base: "240px", md: "612.3809814453125px" }}
              />
            </ContainerWithDarkenedBg>

            <Box maxW={{ base: "100%", md: "647.512451171875px" }}>
              <Text
                fontSize={{ base: "24px", md: "32px" }}
                fontWeight={500}
                color="black"
              >
                {details.projectName}
              </Text>

              <Divider my="40px" />

              <Box>
                <Text color="black" fontSize="14px" mb="12px">
                  Project Description
                </Text>
                <Text fontWeight="300" color="black">
                  {details.projectDescription}
                </Text>
              </Box>

              <Divider my="40px" />

              <Grid
                gridTemplateColumns={{
                  base: "1fr",
                  md: "repeat(2, 1fr)",
                }}
                columnGap={{ base: "0", md: "100px" }}
                rowGap="20px"
              >
                {Object.entries({
                  Location: details.location,
                  "Project Details": details.projectName,
                  Type: <Pill status={details.type} />,
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
                  <Link
                    href={details.chainLink ?? ""}
                    style={{ display: "flex", gap: "6px" }}
                  >
                    <Text color="black" textDecor="underline">
                      View XRP Ledger
                    </Text>
                    <Image src={link} alt="link icon" />
                  </Link>
                </Box>
              </Grid>
            </Box>
          </Flex>

          <Flex mt="50px" mb="76px" flexDir="column" gap="16px">
            <Text fontWeight={450} fontSize="18px" color="black">
              Additional Resources
            </Text>

            {details.additionalResources?.map(
              (resource: Record<string, any>) => (
                <Link
                  key={resource?.id}
                  href={resource?.link}
                  target="_blank"
                >
                  <Flex
                    color="black"
                    alignItems="center"
                    justifyContent="space-between"
                    gap="6px"
                    width={{ base: "100%", md: "500px" }}
                  >
                    <Text as="span">{resource?.name}</Text>
                    <Image src={link} alt="link icon" />
                  </Flex>
                </Link>
              ),
            )}
          </Flex>
        </Box>
      </Box>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        isCentered
        size={{ base: "full", md: "3xl" }}
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
