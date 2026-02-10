import { Box, Text, Button, Flex, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

interface SignXamanProps {
  harsh: string;
}

const SignXaman: React.FC<SignXamanProps> = ({ harsh }) => {
  const router = useRouter();
  const handleXamanRedirect = () => {
    if (harsh) {
      router.push(`https://xaman.app/sign/${harsh}`);
    }
  };

  const truncateHash = (hash: string) => {
    if (hash.length <= 16) return hash;
    return `${hash.substring(0, 8)}...${hash.substring(hash.length - 8)}`;
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minH="100vh"
      bg="white"
      px={{ base: "18px", sm: "24px", lg: "2.625rem" }}
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        maxW="500px"
        mx="auto"
        p={{ base: "32px", sm: "40px" }}
        bg="white"
        borderRadius="24px"
        boxShadow="0 8px 32px rgba(0, 0, 0, 0.06)"
        border="1px solid"
        borderColor="gray_3"
      >
        <VStack spacing="20px" align="stretch" w="100%">
          <Text
            fontSize={{ base: "22px", sm: "26px" }}
            fontWeight="600"
            color="main_black"
            textAlign="center"
            lineHeight="1.3"
          >
            Complete Purchase
          </Text>

          <Text
            fontSize="15px"
            fontWeight="400"
            color="gray_1"
            textAlign="center"
            lineHeight="1.6"
          >
            Authorize the transfer of MPToken to complete your carbon credit
            purchase. This signature serves as your proof of ownership on the
            blockchain.
          </Text>

          {harsh && (
            <Box
              bg="gray_3"
              p="16px"
              borderRadius="12px"
              textAlign="center"
              border="1px solid"
              borderColor="#E0E0E0"
            >
              <Text
                fontSize="12px"
                fontWeight="500"
                color="gray_1"
                mb="8px"
                textTransform="uppercase"
                letterSpacing="0.5px"
              >
                Transaction Reference
              </Text>
              <Text
                fontFamily="monospace"
                fontSize="14px"
                fontWeight="500"
                color="main_black"
                wordBreak="break-all"
              >
                {truncateHash(harsh)}
              </Text>
            </Box>
          )}

          <VStack spacing="12px" pt="8px">
            <Button
              w="100%"
              h="52px"
              bg="agrify_green"
              color="white"
              fontSize="16px"
              fontWeight="600"
              borderRadius="2rem"
              _hover={{ bg: "#00A33E", transform: "translateY(-1px)" }}
              _active={{ bg: "#008F36", transform: "translateY(0)" }}
              transition="all 0.2s ease"
              onClick={handleXamanRedirect}
            >
              Authorize MPToken Transfer
            </Button>
          </VStack>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default SignXaman;
