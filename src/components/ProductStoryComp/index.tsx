"use client";

import { getProductStory } from "@/services/api/projects";
import {
  Flex,
  Divider,
  Box,
  Grid,
  Link,
  Button,
  useToast,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useEffect, useMemo } from "react";
import bg from "../../assets/passport-bg.png";
import arrow from "../../assets/arrow.svg";
import PageLoader from "../Common/PageLoader/PageLoader";
import { getProductCategoryTitle } from "@/utils/getProductCategoryTitle";

const ProductStoryComp = () => {
  const { id } = useParams();
  const toast = useToast();
  const [res, setRes] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const buttons = useMemo(() => {
    return {
      "View on Marketplace": res
        ? `/projects/category/${res?.listing?.name}/${res?.listing?._id}`
        : "#",
      "View On Chain": res?.chainLink ?? "#",
    };
  }, [res]);

  useEffect(() => {
    getProductStory(id, toast).then((response) => {
      if (response) {
        setRes(response);
      }
      setLoading(false);
    });
  }, [id]);

  return (
    <Box bg="white">
      <Grid
        alignItems="center"
        templateColumns={{ lg: "repeat(3, 1fr)" }}
        px="45px"
        bg="white"
        pt="40px"
        position="sticky"
        boxShadow={{
          base: "0px 0px 50px 50px white",
          md: "",
          lg: "0px 0px 50px 50px white",
        }}
        top="0"
      >
        <Box display={{ base: "none", lg: "block" }}>
          <Image src="/icons/logo.svg" alt="logo icon" width="90" height="30" />
        </Box>
        <Box
          bg="#EBEBEB"
          w="fit-content"
          mx="auto"
          px="24px"
          rounded="32px"
          display="flex"
          alignItems="center"
          gap="10px"
          py={{ base: "4px", lg: "8px" }}
        >
          <Box bg="agrify_green" w="10px" h="10px" rounded="100%" />

          <Text textAlign="center" fontSize="14px" color="black">
            Traceability Certificate
          </Text>
        </Box>
        <Box />
      </Grid>
      <Box
        bg={`url('${bg.src}')`}
        boxShadow={{
          lg: "inset 0px 0px 50px 70px white",
        }}
        px={{ base: "16px", md: "22px", lg: 0 }}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        display="flex"
        justifyContent="center"
        alignItems="center"
        my={{ base: "48px", md: "68px", lg: 0 }}
        py={{ base: "100px", md: "20px", lg: 0 }}
        minH="90vh"
      >
        {loading ? (
          <PageLoader />
        ) : res?.listing ? (
          <Box
            width={{ base: "100%", sm: "90%", md: "457px" }}
            rounded="16px"
            bg="white"
            overflow="hidden"
            my={{ base: "48px", lg: "80px" }}
          >
            <Box height="169px" overflow="hidden">
              <Image
                src={res?.listing?.product?.coverImage}
                alt="produce cover img"
                width={1000}
                height={1000}
              />
            </Box>
            <Box
              px={{ base: "12px", md: "8px" }}
              py={{ base: "12px", md: "16px" }}
            >
              <Box px="8px">
                <Box mb={{ base: "12px", md: "16px" }}>
                  <Text
                    as="h1"
                    fontWeight="600"
                    fontSize={{ base: "16px", md: "18px" }}
                    mb="4px"
                  >
                    {getProductCategoryTitle(res?.listing?.name)}
                  </Text>
                  <Text
                    fontWeight="500"
                    fontSize={{ base: "11px", md: "12px" }}
                  >
                    By{" "}
                    <Link href="#">
                      <Text as="span" color="agrify_green">
                        @
                        {`${res?.listing?.farmer?.firstname} ${res?.listing?.farmer?.lastname}`}
                      </Text>
                    </Link>
                  </Text>
                </Box>
                <Box mb={{ base: "24px", md: "32px" }}>
                  <Text
                    fontWeight="500"
                    color="black"
                    mb="8px"
                    fontSize={{ base: "13px", md: "14px" }}
                  >
                    Produce Story
                  </Text>
                  <Text fontSize={{ base: "13px", md: "14px" }}>
                    {res?.narrative}
                  </Text>
                </Box>
                <Box>
                  <Text
                    fontWeight="500"
                    fontSize={{ base: "13px", md: "14px" }}
                    color="black"
                    mb="8px"
                  >
                    Techniques
                  </Text>
                  <Flex gap="8px" flexWrap="wrap">
                    {res?.practices?.map((item: string) => (
                      <Box
                        key={item}
                        color="#A0A9B4"
                        bg="#F2F4F7"
                        rounded="4px"
                        fontSize="12px"
                        px="6px"
                        py="3px"
                        textTransform="capitalize"
                      >
                        {item}
                      </Box>
                    ))}
                  </Flex>
                </Box>
              </Box>
            </Box>
            <Divider pb="8px" />
            <Box px="8px" py="8px" display="flex" gap="6px">
              {Object.entries(buttons).map(([title, link]) => (
                <Link
                  key={title}
                  href={link}
                  style={{ flex: 1 }}
                  target={
                    title.toLowerCase().includes("chain") ? "_blank" : "_self"
                  }
                >
                  <Button
                    px="12px"
                    py="16.5px"
                    display="flex"
                    w="100%"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Text color="black" fontSize={{ base: "13px", md: "14px" }}>
                      {title}
                    </Text>
                    <Image src={arrow} alt="arrow icon" />
                  </Button>
                </Link>
              ))}
            </Box>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default ProductStoryComp;
