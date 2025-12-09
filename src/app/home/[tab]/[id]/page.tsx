"use client";

import BackButton from "@/components/Common/BackButton/BackButton";
import Slider from "@/components/FarmPageComponents/Slider/Slider";
import { Box, Button, Flex, Text, useToast } from "@chakra-ui/react";
import Image from "next/image";
import link from "@/assets/link.svg";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { getCarbonCreditById } from "@/services/api/projects";
import PageLoader from "@/components/Common/PageLoader/PageLoader";
import Pill from "@/components/CarbonCredits/Pill";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import KYCRedirect from "@/components/KYC/Redirect";

const SingleCarbonCredit = () => {
  const { id } = useParams();
  const { user } = useAuthContext();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [details, setDetails] = useState<Record<string, any>>({});
  const toast = useToast();

  useEffect(() => {
    getCarbonCreditById(toast, id as string).then((response) => {
      if (response) {
        setDetails(response?.data);
      }
      setIsLoading(false);
    });
  }, [id, toast]);

  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setAccessToken(token);
  }, []);

  const isLoggedIn = useMemo(() => !!accessToken, [accessToken]);

  const { setChosenProject } = useGlobalContext();

  return (
    <Box
      px={{ base: 3, sm: 4, md: 6, lg: 10 }}
      pt={{ base: 3, sm: 4, md: 6, lg: 10 }}
    >
      <BackButton />
      {isLoading ? (
        <PageLoader />
      ) : (
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
              <Slider images={details?.images?.map((item: any) => item?.url)} />
            </Box>
          </Box>

          <Flex
            maxH={{ base: "none", lg: "75vh" }}
            pl={{ base: 0, lg: "1rem" }}
            px={{ base: 0, md: "8px", lg: 0 }}
            pr={{ base: 0, lg: "32px" }}
            pb={{ base: 4, md: 6, lg: 10 }}
            flexDir="column"
            w={{ base: "100%", md: "640px", lg: "500px" }}
            mx={{ base: 0, md: "auto" }}
            borderLeftColor={{ lg: "rgba(0, 0, 0, 0.05)" }}
            overflowY={{ base: "visible", lg: "scroll" }}
            mt={{ base: 4, md: 5, lg: 0 }}
          >
            <Text
              fontWeight={500}
              fontSize={{ base: "24px", md: "28px", lg: "32px" }}
              color="black"
              wordBreak="break-word"
            >
              {details?.projectName}
            </Text>

            <Flex
              gap={{ base: "24px", md: "32px", lg: "48px" }}
              mt={{ base: "24px", md: "32px", lg: "40px" }}
              mb={{ base: "24px", md: "28px", lg: "32px" }}
              wrap={{ base: "wrap", lg: "nowrap" }}
            >
              {Object.entries({
                Pricing: `$${details?.pricePerTonne?.toLocaleString()}`,
                "Tonnes to be retired": `${details?.availableTonnes?.toLocaleString()} tc02e`,
              }).map(([key, value]) => (
                <Box key={key}>
                  <Text fontSize="14px">{key}</Text>
                  <Text
                    color="black"
                    fontWeight={500}
                    fontSize={{ base: 20, md: 22, lg: 24 }}
                  >
                    {value}
                  </Text>
                </Box>
              ))}
            </Flex>

            <Flex direction="column" gap="48px">
              <Box>
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
                  isDisabled={user?.kycStatus !== "approved"}
                  onClick={() => {
                    setChosenProject(details);
                    router.push(
                      isLoggedIn
                        ? `/home/climate-arts/${details?.id}/purchase`
                        : `/auth/login?redirect=carbon-credits&id=${details?.id}`
                    );
                  }}
                  mb={user?.kycStatus !== "approved" ? 2 : 0}
                >
                  {isLoggedIn
                    ? "Buy Climate Art"
                    : "Sign In to Buy Climate Art"}
                </Button>
                {user?.kycStatus && <KYCRedirect status={user?.kycStatus} />}
              </Box>

              {/* about */}
              <Box>
                <Text fontWeight={500} fontSize="20px" mb="16px" color="black">
                  About
                </Text>
                <Text fontWeight={600} color="black">
                  Project Details
                </Text>
                <Text>{details?.projectDescription}</Text>
              </Box>

              {/* highlight */}
              <Box>
                <Text fontWeight={500} fontSize="20px" mb="16px" color="black">
                  Highlights
                </Text>

                {Object.entries({
                  "Project Developer": details?.projectDeveloper,
                  Type: <Pill status={details?.type} />,
                  Status: <Pill status={details?.status} />,
                  "Project Id": details?.projectId,
                  Methodology: (
                    <Text
                      as="span"
                      display="flex"
                      alignItems="center"
                      gap="4px"
                    >
                      {details?.methodology ?? "-"}
                    </Text>
                  ),
                }).map(([key, value]) => (
                  <Box
                    display="grid"
                    gridTemplateColumns={{ base: "1fr", sm: "40% 60%" }}
                    key={key}
                    alignItems="center"
                    py="12px"
                    mb="16px"
                    fontSize={{ base: "13px", md: "14px" }}
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
              {/* <Box>
                <Text fontWeight={500} fontSize="20px" mb="16px" color="black">
                  Map
                </Text>
                <Box width="100%" height="188px" bgColor="gray" />
              </Box> */}

              {/* benefits */}
              <Box>
                <Text fontWeight={500} fontSize="20px" mb="16px" color="black">
                  SDG Impact
                </Text>
                <Flex flexDirection="column" gap="24px">
                  {details?.coBenefits?.map((cb: any) => (
                    <Flex alignItems="center" gap="24px" key={cb?.sdgNumber}>
                      <Box flexShrink={0}>
                        <Image
                          src={`/sdg/${cb?.sdgNumber}.png`}
                          alt={cb?.title}
                          width="64"
                          height="64"
                          style={{ flexShrink: 0 }}
                        />
                      </Box>
                      <Box>
                        <Text
                          color="black"
                          fontSize={{ base: "16px", md: "18px" }}
                        >
                          {cb?.title}
                        </Text>
                        <Text
                          color="black"
                          fontSize={{ base: "14px", md: "16px" }}
                        >
                          {cb?.description}
                        </Text>
                      </Box>
                    </Flex>
                  ))}
                </Flex>
              </Box>

              {/* images */}
              {/* <Box>
                <Text fontWeight={500} fontSize="20px" mb="16px" color="black">
                  Images
                </Text>
                <Flex flexDirection="column" gap="16px">
                  {details?.images?.map((image: Record<string, any>) => (
                    <ContainerWithDarkenedBg
                      bg={{
                        src: image?.url,
                      }}
                      key={image?._id}
                      opacity={0.4}
                    >
                      <Box height="320px" />
                    </ContainerWithDarkenedBg>
                  ))}
                </Flex>
              </Box> */}

              {/* additional resources */}
              {details?.additionalResources?.length > 0 && (
                <Box>
                  <Text
                    fontWeight={500}
                    fontSize="20px"
                    mb="16px"
                    color="black"
                  >
                    Additional Resources
                  </Text>
                  <Flex flexDirection="column" gap="16px">
                    {details?.additionalResources?.map(
                      (item: Record<string, any>) => (
                        <Link
                          href={item.link ?? ""}
                          target="_blank"
                          key={item.name}
                        >
                          <Text
                            as="span"
                            display="flex"
                            alignItems="center"
                            gap="4px"
                          >
                            {item.name}
                            <Image
                              src={link}
                              alt="link icon"
                              style={{ display: "inline" }}
                            />
                          </Text>
                        </Link>
                      )
                    )}
                  </Flex>
                </Box>
              )}
            </Flex>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default SingleCarbonCredit;
