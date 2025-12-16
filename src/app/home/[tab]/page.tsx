"use client";

import ContainerWithDarkenedBg from "@/components/ContainerWithDarkenedBg";
import CategoryContainer from "@/components/HomePageComponents/CategoryContainer/CategoryContainer";
import { Box, Flex, Grid, Text, useToast } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import BackButton from "@/components/Common/BackButton/BackButton";
import { getCarbonCredits } from "@/services/api/projects";
import PageLoader from "@/components/Common/PageLoader/PageLoader";

const HomeTab = () => {
  const { tab } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [produce, setProduce] = useState<Record<string, any>>({});
  const toast = useToast();

  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
    getCarbonCredits(toast).then((response) => {
      if (response) {
        setProduce(response?.data);
      }
      setIsLoading(false);
    });
  }, [toast]);

  return (
    <Box
      p={{
        base: "40px 20px",
        md: "60px 30px",
        lg: "100px 40px 40px",
      }}
    >
      <BackButton />

      <Text
        as="h1"
        fontWeight={500}
        fontSize={{ base: "24px", md: "28px", lg: "32px" }}
        mb={{ base: "24px", md: "32px", lg: "40px" }}
      >
        Buy {tab === "organic-produce" ? "Organic Produce" : "Climate Arts"}
      </Text>

      <Box>
        <Text
          color="black"
          mb={{ base: "20px", md: "28px", lg: "32px" }}
          fontSize={{ base: "16px", md: "18px" }}
        >
          Trending Produce
        </Text>

        {tab === "organic-produce" && <CategoryContainer search="" />}

        {tab === "climate-arts" &&
          (isLoading ? (
            <PageLoader />
          ) : (
            <Box
              bg="white"
              px={{ base: "20px", md: "28px", lg: "32px" }}
              py={{ base: "28px", md: "36px", lg: "40px" }}
              rounded="32px"
            >
              <Grid
                gridTemplateColumns={{
                  base: "1fr",
                  sm: "repeat(2, 1fr)",
                  lg: "repeat(3, 1fr)",
                }}
                rowGap={{ base: 6, md: 8, lg: 10 }}
                columnGap={{ base: 4, md: 6 }}
              >
                {produce?.map((item: Record<string, any>) => (
                  <Link
                    key={item?.id}
                    href={`/home/climate-arts/${item?.id}`}
                    style={{ width: "100%" }}
                  >
                    <ContainerWithDarkenedBg
                      bg={item?.images?.[0]?.url}
                      opacity={0.2}
                    >
                      <Flex
                        flexDirection="column"
                        px={{ base: "20px", md: "24px", lg: "32px" }}
                        height={{ base: "200px", md: "230px", lg: "250px" }}
                        justifyContent="space-between"
                      >
                        <Text
                          bg="#DAD7FE"
                          width="fit-content"
                          px="2"
                          rounded="6.19px"
                          fontSize={{ base: "12px", md: "14px" }}
                          color="black"
                          mt="-10px"
                        >
                          {item?.coBenefits?.length}+ SDG Impact
                        </Text>

                        <Text
                          color="white"
                          fontWeight="500"
                          fontSize={{ base: "18px", md: "20px", lg: "24px" }}
                        >
                          {item?.projectName}
                        </Text>
                      </Flex>
                    </ContainerWithDarkenedBg>
                  </Link>
                ))}
              </Grid>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default HomeTab;
