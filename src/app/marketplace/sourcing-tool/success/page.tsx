import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

const Success = () => {
  return (
    <Flex justify="center" align="center" minH="70vh">
      <Box width="558px" textAlign="center">
        <Text as="h1" fontWeight="450" fontSize="32px" mb="16px">
          Request Received
        </Text>
        <Text>
          Thank you! we have received your order. We would get to back to you in
          72hours on all you need to get started
        </Text>
        <Link href="/marketplace">
          <Button
            mt="40px"
            width="100%"
            fontWeight="450"
            bg="white"
            padding="18px"
            rounded="24px"
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
