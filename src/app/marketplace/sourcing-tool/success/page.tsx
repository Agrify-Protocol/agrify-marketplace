import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

const Success = () => {
  return (
    <Flex justify="center" align="center" minH="70vh" px={{ base: 4, md: 0 }}>
      <Box width={{ base: "100%", md: "558px" }} textAlign="center">
        <Text
          as="h1"
          fontWeight="450"
          fontSize={{ base: "24px", md: "32px" }}
          mb={{ base: "12px", md: "16px" }}
        >
          Request Received
        </Text>
        <Text fontSize={{ base: "14px", md: "16px" }} lineHeight="taller">
          Thank you! We have received your order. We will get back to you within
          72 hours with all you need to get started.
        </Text>
        <Link href="/marketplace">
          <Button
            mt={{ base: "24px", md: "40px" }}
            width="100%"
            fontWeight="450"
            bg="white"
            padding={{ base: "14px", md: "18px" }}
            rounded={{ base: "16px", md: "24px" }}
            fontSize={{ base: "14px", md: "16px" }}
            _hover={{ bg: "gray.50" }}
          >
            Explore
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Success;
