"use client";

import BackButton from "@/components/Common/BackButton/BackButton";
import Slider from "@/components/FarmPageComponents/Slider/Slider";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import link from "@/assets/link.svg";
import Link from "next/link";
import ContainerWithDarkenedBg from "@/components/ContainerWithDarkenedBg";
import { useParams, useRouter } from "next/navigation";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";

const SingleCarbonCredit = () => {
  const { id } = useParams();
  const router = useRouter();
  const { setChosenProject } = useGlobalContext();

  return (
    <Box
      px={{ base: 3, sm: 4, md: 6, lg: 10 }}
      pt={{ base: 3, sm: 4, md: 6, lg: 10 }}
    >
      <BackButton />

      <Flex
        direction={{ base: "column", lg: "row" }}
        px={{ base: "14px", lg: 0 }}
        gap={{ base: 4, sm: 5, md: 6, lg: 0 }}
      >
        <Box flexShrink={0} w={{ base: "100%", lg: "auto" }}>
          <Box
            w="100%"
            borderRadius={{ base: "8px", md: "10px", lg: "0" }}
            overflow="hidden"
          >
            <Slider
              images={[
                {
                  image:
                    "https://res.cloudinary.com/isaacoduh/image/upload/v1752502528/wfnk0dw8kj04sqdxqyod.webp",
                },
              ]}
            />
          </Box>
        </Box>

        <Flex
          maxH={{ base: "none", lg: "75vh" }}
          pl={{ base: 0, lg: "1rem" }}
          px={{ base: 0, md: "8px", lg: 0 }}
          pr={{ base: 0, lg: "32px" }}
          pb={{ base: 4, md: 6, lg: 10 }}
          border={{ base: "1px solid transparent", lg: "none" }}
          flexDir="column"
          maxW={{ base: "100%", md: "640px", lg: "500px" }}
          mx={{ base: 0, md: "auto" }}
          borderLeftColor={{ lg: "rgba(0, 0, 0, 0.05)" }}
          overflowY={{ base: "visible", lg: "scroll" }}
          mt={{ base: 4, md: 5, lg: 0 }}
        >
          <Text
            fontWeight={500}
            fontSize="32px"
            color="black"
            wordBreak="break-word"
          >
            Agrify x Releaf Biochar
          </Text>
          <Flex gap="48px" mt="40px" mb="32px">
            {Object.entries({
              Pricing: "$255/tonne",
              "Available Tonnes": "63 tc02e",
            }).map(([key, value]) => (
              <Box key={key}>
                <Text fontSize="14px">{key}</Text>
                <Text color="black" fontWeight={500} fontSize={24}>
                  {value}
                </Text>
              </Box>
            ))}
          </Flex>

          <Flex direction="column" gap="48px">
            <Button
              borderRadius="2rem"
              px={{ base: "1.5rem", md: "2.5rem" }}
              py={{ base: "12px", md: "14px" }}
              fontSize={{ base: "14px", md: "16px" }}
              fontWeight={400}
              width="100%"
              bg="agrify_green"
              _hover={{ bg: "#0ba842" }}
              color="white"
              onClick={() => {
                setChosenProject({
                  _id: "carbon-credit-1",
                  name: "Agrify x Releaf Biochar",
                  product: { name: "carbon_credits" },
                });
                router.push(`/home/carbon-credits/${id}/purchase`);
              }}
            >
              Buy Carbon Credits
            </Button>

            {/* about */}
            <Box>
              <Text fontWeight={500} fontSize="20px" mb="16px" color="black">
                About
              </Text>
              <Text fontWeight={600} color="black">
                Project Details
              </Text>
              <Text>
                Releaf's site in Cross River, Nigeria, is the region's largest
                nut shell waste producer. This shell waste comes from the palm
                nuts these farmers produce & which Releaf processes. Annually,
                it has access to 100,000T of but shell waste from smallholder
                farmers in the surrounding area. Currently, it is processing
                2,500T/year with room to exponentially grow current volumes.
                Through pyrolysis, the shell waste is converted into biochar,
                which is then mixed with organic animal waste & then reapplied
                to the same farmers the nuts came from in a fully circular
                process. This process sequesters carbon in the soil for hundreds
                of years while meaningfully improving the soil's ability to
                absorb water & nutrients, improving the yields of the farmers by
                ~15%.
              </Text>
            </Box>

            {/* highlight */}
            <Box>
              <Text fontWeight={500} fontSize="20px" mb="16px" color="black">
                Highlights
              </Text>
              {Object.entries({
                "Project Developer": "Agrify Tech & Releaf",
                Type: (
                  <Text as="span" color="#B274C9">
                    Removal Pre-Credits
                  </Text>
                ),
                Status: (
                  <Text as="span" color="green">
                    Verified
                  </Text>
                ),
                "Project Id": "RIV-2024-PROJ-82",
                Verification: "Carbon Check (India) Private Limited",
                Methodology: (
                  <Link href="#" target="_blank">
                    <Text
                      as="span"
                      display="flex"
                      alignItems="center"
                      gap="4px"
                    >
                      Biomass carbon removal and storage
                      <Image
                        src={link}
                        alt="link icon"
                        style={{ display: "inline" }}
                      />
                    </Text>
                  </Link>
                ),
              }).map(([key, value]) => (
                <Box
                  display="grid"
                  gridTemplateColumns={{ base: "1fr", sm: "40% 60%" }}
                  key={key}
                  alignItems="center"
                  py="12px"
                  mb="16px"
                  fontSize="14px"
                  borderBottom="1px solid rgba(0, 0, 0, 0.05)"
                >
                  <Text color="#565656" mb={{ base: "4px", sm: "0" }}>
                    {key}
                  </Text>
                  {typeof value === "string" ? (
                    <Text color="#000000">{value}</Text>
                  ) : (
                    value
                  )}
                </Box>
              ))}
            </Box>

            {/* map */}
            <Box>
              <Text fontWeight={500} fontSize="20px" mb="16px" color="black">
                Map
              </Text>
              <Box width="100%" height="188px" bgColor="gray" />
            </Box>
            {/* benefits */}
            <Box>
              <Text fontWeight={500} fontSize="20px" mb="16px" color="black">
                Co Benefits
              </Text>
              <Flex alignItems="center" gap="24px">
                <Box width="64px" height="64px" bgColor="gray" />
                <Box>
                  <Text color="black" mb="8px" fontSize="18px">
                    No Poverty
                  </Text>
                  <Text color="black">
                    Achieve gender equality and empower all women and girls
                  </Text>
                </Box>
              </Flex>
            </Box>

            {/* images */}
            <Box>
              <Text fontWeight={500} fontSize="20px" mb="16px" color="black">
                Images
              </Text>
              <Flex flexDirection="column" gap="16px">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <ContainerWithDarkenedBg
                    bg={{
                      src: "https://res.cloudinary.com/isaacoduh/image/upload/v1752502528/wfnk0dw8kj04sqdxqyod.webp",
                    }}
                    key={idx}
                    opacity={0.4}
                  >
                    <Box height="320px" />
                  </ContainerWithDarkenedBg>
                ))}
              </Flex>
            </Box>

            {/* additional resources */}
            <Box>
              <Text fontWeight={500} fontSize="20px" mb="16px" color="black">
                Additional Resources
              </Text>
              <Flex flexDirection="column" gap="16px">
                {Object.entries({
                  "Project Design Documentation": "#",
                  "Agrify Tecnologies": "#",
                }).map(([key, value]) => (
                  <Link href={value} target="_blank" key={key}>
                    <Text
                      as="span"
                      display="flex"
                      alignItems="center"
                      gap="4px"
                    >
                      {key}
                      <Image
                        src={link}
                        alt="link icon"
                        style={{ display: "inline" }}
                      />
                    </Text>
                  </Link>
                ))}
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SingleCarbonCredit;
