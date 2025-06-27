"use client";

import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getCategories } from "@/services/api/projects";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import PageLoader from "@/components/Common/PageLoader/PageLoader";
import BackButton from "@/components/Common/BackButton/BackButton";
import EmptyText from "@/components/Common/EmptyText/EmptyText";
import Search from "@/components/Common/Search/Search";
import bg from "../../../../assets/hero-bg.png";
import location from "../../../../assets/location.svg";
import Link from "next/link";
import Image from "next/image";

const CategoryPage = () => {
  const { type } = useParams();
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);
  const [categoryData, setCategoryData] = useState<any>([]);
  useEffect(() => {
    if (user) {
      getCategories(type as string).then((response) => {
        setCategoryData(response);
        setIsLoading(false);
      });
    }
  }, [type, user]);

  const mock = categoryData?.data?.map((data: any) => ({
    ...data,
    name: "Cashew Nuts",
    kg: "$20/kg",
    location: "Kaduna, Nigeria",
  }));

  // const mock = Array.from({ length: 3 }, () => ({
  //   name: "Cashew Nuts",
  //   kg: "$20/kg",
  //   location: "Kaduna, Nigeria",
  // }));

  return (
    <Box
      my={{ base: "40px", lg: "3.215rem" }}
      px={{ base: "24px", lg: "2.625rem" }}
    >
      <BackButton />
      <Box>
        <Box mt="30px" mb="40px">
          <Search text="Cashew Nut Market" />
        </Box>
        {isLoading ? (
          <PageLoader />
        ) : categoryData ? (
          <Grid gridTemplateColumns="repeat(3, 1fr)" rowGap={10}>
            {mock?.map((item: any, idx: number) => (
              <Link
                key={item.id}
                href={`/projects/category/${type}/${item.projectID}?id=overview`}
              >
                <Box
                  display="flex"
                  justifySelf={
                    idx % 3 === 0 ? "start" : idx % 3 === 1 ? "center" : "end"
                  }
                >
                  <Box
                    w="389.6978454589844px"
                    h="365.076416015625px"
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
                      bgImage={`url(${bg.src})`}
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
                      <Text
                        bg="#DAD7FE"
                        rounded="6.19px"
                        w="fit-content"
                        px="10px"
                        color="black"
                        fontSize="14px"
                      >
                        4+ SDG Impact
                      </Text>

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
                              fontSize="20px"
                              color="white"
                              fontWeight="medium"
                            >
                              {item.name}
                            </Text>
                            <Flex alignItems="center" gap="4px">
                              <Image
                                src={location.src}
                                alt="location icon"
                                width={14}
                                height={14}
                              />
                              <Text fontSize="14px">{item.location}</Text>
                            </Flex>
                          </Box>
                          <Text
                            fontSize="20px"
                            color="white"
                            fontWeight="medium"
                          >
                            {item.kg}
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
