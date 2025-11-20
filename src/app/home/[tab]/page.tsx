"use client";

import ContainerWithDarkenedBg from "@/components/ContainerWithDarkenedBg";
import CategoryContainer from "@/components/HomePageComponents/CategoryContainer/CategoryContainer";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useState } from "react";
import bg from "@/assets/hero-bg.png";
import Link from "next/link";
import BackButton from "@/components/Common/BackButton/BackButton";

const HomeTab = () => {
  const { tab } = useParams();
  const [search, setSearch] = useState("");

  return (
    <Box p="100px 40px 40px">
      <BackButton />
      <Text as="h1" fontWeight={500} fontSize="32px" mb="40px">
        Buy {tab === "organic-produce" ? "Organic Produce" : "Carbon Credits"}
      </Text>
      <Box>
        <Text color="black" mb="32px">
          Trending Produce
        </Text>
        {tab === "organic-produce" && <CategoryContainer search={search} />}
        {tab === "carbon-credits" && (
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
              {Array.from({ length: 3 }).map((_, index) => (
                <Link key={index} href={`/home/carbon-credits/${index + 1}`}>
                  <ContainerWithDarkenedBg bg={bg} opacity={0.7}>
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
                        4+ SDG Impact
                      </Text>
                      <Text color="white" fontWeight="500" fontSize="24px">
                        Agrify x Releaf Biochar
                      </Text>
                    </Flex>
                  </ContainerWithDarkenedBg>
                </Link>
              ))}
            </Grid>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomeTab;
