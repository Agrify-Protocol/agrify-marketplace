"use client";

import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import PageLoader from "@/components/Common/PageLoader/PageLoader";
import BackButton from "@/components/Common/BackButton/BackButton";
import EmptyText from "@/components/Common/EmptyText/EmptyText";
import location from "@/assets/location.svg";
import Link from "next/link";
import Image from "next/image";
import { formatSnakeCaseTitle } from "@/utils/formatSnakeCaseTitle";
import { useListingsByCategory } from "@/hooks/queries/useProjectQueries";
import { useEffect } from "react";
// import SourcingToolForm from "@/components/SourcingToolForm/SourcingToolForm";

const CategoryPage = () => {
  const { type } = useParams();
  const { data, isLoading, isError, refetch } = useListingsByCategory(type);

  useEffect(() => {
    if (data) {
      window.scroll({ top: 0, behavior: "smooth" });
    }
  }, [data]);

  return (
    <Box
      my={{ base: "40px", lg: "3.215rem" }}
      px={{ base: "24px", lg: "2.625rem" }}
    >
      <BackButton />

      <Box mt="40px">
        {/* mb="30px"  */}
        <Text fontSize={{ base: "18px", sm: "24px" }} mb="15px" color="black">
          {`${formatSnakeCaseTitle(type as string)} Market`}
        </Text>
        {/* <SourcingToolForm type={type as string} /> */}{" "}
        {isLoading ? (
          <PageLoader />
        ) : isError ? (
          <Box textAlign="center" my="15vh">
            <Text mb="16px" color="red.500">
              Failed to load listings. Please try again.
            </Text>
            <Button variant="outline" size="sm" onClick={() => refetch()}>
              Retry
            </Button>
          </Box>
        ) : data?.activeProducts?.length ? (
          <Grid
            gridTemplateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            rowGap={10}
            columnGap={{ base: 6, md: 6 }}
          >
            {data?.activeProducts?.map((item) => (
              <Link
                key={item?._id}
                href={`/home/traceable-produce/category/${type}/${item?._id}`}
                style={{ textDecoration: "none" }}
              >
                <Box display="flex" justifyContent="center">
                  <Box
                    w="full"
                    maxW="389.7px"
                    h="365.076px"
                    rounded="13.58px"
                    overflow="hidden"
                    position="relative"
                    role="group"
                  >
                    <Box
                      position="absolute"
                      top="0"
                      left="0"
                      right="0"
                      bottom="0"
                      bgImage={`url(${item?.farm?.farmImages[0]?.image})`}
                      bgSize="cover"
                      bgPos="center"
                      transition="transform 0.5s ease"
                      _groupHover={{ transform: "scale(1.1)" }}
                      zIndex={0}
                    />

                    <Box
                      position="absolute"
                      top="0"
                      left="0"
                      right="0"
                      bottom="0"
                      bg="rgba(0,0,0,0.5)"
                      zIndex={1}
                    />

                    <Box position="relative" zIndex={2} p="27px" height="100%">
                      <Box
                        position="absolute"
                        bottom="0"
                        left="0"
                        right="0"
                        height="120px"
                        bgGradient="linear(to-t, rgba(0,0,0,1), transparent)"
                        px="27px"
                        display="flex"
                        alignItems="flex-end"
                        pb="20px"
                        zIndex={2}
                      >
                        <Flex justifyContent="space-between" width="100%">
                          <Box>
                            <Text
                              fontSize={{
                                base: "16px",
                                sm: "18px",
                                lg: "20px",
                              }}
                              color="white"
                              fontWeight="medium"
                              textTransform="capitalize"
                            >
                              {item?.farm?.name ?? ""}
                            </Text>
                            <Flex alignItems="center" gap="4px">
                              <Image
                                src={location.src}
                                alt="location icon"
                                width={14}
                                height={14}
                              />
                              <Text fontSize={{ base: "12px", lg: "14px" }}>
                                {`${item?.farm?.state}, ${item?.farm?.country}`}
                              </Text>
                            </Flex>
                          </Box>
                          <Text
                            fontSize={{ base: "16px", sm: "18px", lg: "20px" }}
                            color="white"
                            fontWeight="medium"
                          >
                            ${item?.pricePerKg?.toLocaleString()}/kg
                          </Text>
                        </Flex>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Link>
            ))}
          </Grid>
        ) : (
          <EmptyText />
        )}
      </Box>
    </Box>
  );
};

export default CategoryPage;
