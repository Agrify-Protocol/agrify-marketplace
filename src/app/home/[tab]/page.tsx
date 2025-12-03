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
    getCarbonCredits(toast).then((response) => {
      if (response) {
        setProduce(response?.data);
      }
      setIsLoading(false);
    });
  }, []);

  return (
    <Box p="100px 40px 40px">
      <BackButton />
      <Text as="h1" fontWeight={500} fontSize="32px" mb="40px">
        Buy {tab === "organic-produce" ? "Organic Produce" : "Climate Arts"}
      </Text>
      <Box>
        <Text color="black" mb="32px">
          Trending Produce
        </Text>
        {tab === "organic-produce" && <CategoryContainer search="" />}
        {tab === "climate-arts" &&
          (isLoading ? (
            <PageLoader />
          ) : (
            <Box bg="white" px="32px" py="40px" rounded="32px">
              <Grid
                gridTemplateColumns={{
                  base: "1fr",
                  sm: "repeat(2, 1fr)",
                  lg: "repeat(3, 1fr)",
                }}
                rowGap={10}
                columnGap={{ base: 6, md: 6 }}
              >
                {produce?.map((item: Record<string, any>) => (
                  <Link key={item?.id} href={`/home/climate-arts/${item?.id}`}>
                    <ContainerWithDarkenedBg
                      bg={item?.images[0]?.url}
                      opacity={0.7}
                    >
                      <Flex
                        flexDirection="column"
                        px="32px"
                        height="250px"
                        justifyContent="space-between"
                      >
                        <Text
                          bg="#DAD7FE"
                          width="fit-content"
                          px="2"
                          rounded="6.19px"
                          fontSize="14px"
                          color="black"
                          mt="-10px"
                        >
                          {item?.coBenefits?.length}+ SDG Impact
                        </Text>
                        <Text color="white" fontWeight="500" fontSize="24px">
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
