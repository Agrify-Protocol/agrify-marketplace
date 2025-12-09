"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../../../public/icons/logo-black.svg";
import check from "../../../assets/icon-park-solid_check-one.svg";
import Button from "@/components/Common/Button";
import { useRouter } from "next/navigation";
import BackButton from "@/components/Common/BackButton/BackButton";

const KYCCompleted = () => {
  const router = useRouter();

  return (
    <Box pb={5}>
      <Flex
        as="nav"
        py={5}
        justifyContent="center"
        position="sticky"
        bg="#F5F5F5"
        top={0}
        zIndex={10}
      >
        <Image src={logo} alt="agrify logo black theme" />
      </Flex>

      <Box as="main" mx={{ base: "20px", md: "40px" }} mt={{ base: 6, md: 0 }}>
        <BackButton />

        <Box
          bgColor={{ lg: "white" }}
          mt={{ base: "32px", lg: "48px" }}
          borderRadius="0.953rem"
          border={{ lg: "0.95px solid rgba(169, 169, 169, 0.3)" }}
          py={{ base: "60px", lg: "5.238rem" }}
          textAlign="center"
          bg="#FFFFFF"
        >
          <Flex
            w={{ base: "5rem", lg: "6.191rem" }}
            h={{ base: "5rem", lg: "6.191rem" }}
            bgColor="#F5F6F8"
            alignItems="center"
            justifyContent="center"
            mx="auto"
            borderRadius="0.476rem"
            mb={{ base: "28px", lg: "39px" }}
          >
            <Image src={check} alt="check icon type" />
          </Flex>

          <Text
            fontSize={{ base: "20px", lg: "24px" }}
            fontWeight={600}
            color="#011308"
          >
            Registration Complete!
          </Text>

          <Text
            fontSize={{ base: "1rem", lg: "1.125rem" }}
            mx="auto"
            fontWeight={450}
            mt="20px"
            mb={{ base: "60px", lg: "100px" }}
          >
            Your information has been received successfully
          </Text>

          <Box>
            <Text
              as="h1"
              fontWeight={450}
              fontSize={{ base: "36px", lg: "48px" }}
            >
              Welcome to Agrify!
            </Text>

            <Button
              maxW="200px"
              mt={{ base: 8, lg: 10 }}
              onClick={() => router.push("/home")}
            >
              Explore
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default KYCCompleted;
