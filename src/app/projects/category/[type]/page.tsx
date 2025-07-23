"use client";

import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getListingsByCategories } from "@/services/api/projects";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import PageLoader from "@/components/Common/PageLoader/PageLoader";
import BackButton from "@/components/Common/BackButton/BackButton";
import EmptyText from "@/components/Common/EmptyText/EmptyText";
import Search from "@/components/Common/Search/Search";
import location from "../../../../assets/location.svg";
import Link from "next/link";
import Image from "next/image";
import { getProductCategoryTitle } from "@/utils/getProductCategoryTitle";

const CategoryPage = () => {
  const { type } = useParams();
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);
  const [categoryData, setCategoryData] = useState<any>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getListingsByCategories(type as string).then((response) => {
      setCategoryData(response);
      setIsLoading(false);
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    });
  }, [type, user]);

  return (
    <Box
      my={{ base: "40px", lg: "3.215rem" }}
      px={{ base: "24px", lg: "2.625rem" }}
    >
      <BackButton />
      <Box>
        <Box mt="30px" mb="40px">
          <Search
            text={`${getProductCategoryTitle(type as string)} Market`}
            search={search}
            setSearch={setSearch}
          />
        </Box>

        {isLoading ? (
          <PageLoader />
        ) : categoryData?.activeProducts?.length ? (
          <Grid
            gridTemplateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            rowGap={10}
            columnGap={{ base: 6, lg: 0 }}
          >
            {categoryData?.activeProducts?.map((item: any, idx: number) => (
              <Link
                key={item?._id}
                href={`/projects/category/${type}/${item?._id}`}
                style={{
                  textDecoration: "none",
                }}
              >
                <Box
                  display="flex"
                  justifySelf={{
                    base: "stretch",
                    lg:
                      idx % 3 === 0
                        ? "start"
                        : idx % 3 === 1
                        ? "center"
                        : "end",
                  }}
                >
                  <Box
                    w={{ base: "100%", lg: "389.7px" }}
                    maxW="100%"
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
                      bgImage={`url(${item?.images[0]?.image})`}
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
                              {item?.name?.split("_").join(" ")}
                            </Text>
                            <Flex alignItems="center" gap="4px">
                              <Image
                                src={location.src}
                                alt="location icon"
                                width={14}
                                height={14}
                              />
                              <Text fontSize={{ base: "12px", lg: "14px" }}>
                                Kaduna, Nigeria //REPLACE
                              </Text>
                            </Flex>
                          </Box>
                          <Text
                            fontSize={{
                              base: "16px",
                              sm: "18px",
                              lg: "20px",
                            }}
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
