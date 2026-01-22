import { Box, Flex, Text, Button, useToast } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useMemo } from "react";
import { PaystackRedirectionProps } from "./types";
import PageLoader from "../Common/PageLoader/PageLoader";
import BackButton from "../Common/BackButton/BackButton";
import Link from "next/link";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import { getProduceDetails } from "@/services/api/profile";
import { formatSnakeCaseTitle } from "@/utils/formatSnakeCaseTitle";
import check from "../../assets/icon-park-solid_check-one.svg";
import error from "../../assets/error.svg";
import { getCarbonCreditById } from "@/services/api/projects";

const PaystackRedirection = ({ type }: PaystackRedirectionProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const tab = searchParams.get("tab");
  const { user } = useAuthContext();
  const toast = useToast();
  const [data, setData] = useState<Record<string, any>>({});

  useEffect(() => {
    if (user) {
      setIsLoading(true);
      if (tab === "organic produce") {
        getProduceDetails(id as string, toast).then((response) => {
          if (response) setData(response);
        });
      }
      if (tab === "Climate Art") {
        getCarbonCreditById(toast, id as string).then((response) => {
          if (response) setData(response);
        });
      }
      localStorage.removeItem("selected_climate_art");
      setIsLoading(false);
    }
  }, [user, id, tab]);

  const produceString = useMemo(() => {
    return data?.listing
      ? `${data?.listing?.batchSize} kg of ${formatSnakeCaseTitle(
          data?.listing?.product?.name,
        )}`
      : "climate art";
  }, [data]);

  return (
    <Box
      mt={{ base: "16px", sm: "32px", lg: "4rem" }}
      mb={{ base: "16px", lg: "2rem" }}
      px={{ base: "18px", sm: "24px", lg: "2.625rem" }}
    >
      {isLoading ? (
        <PageLoader />
      ) : (
        <Box>
          <BackButton customFunction={() => router.push("/home")} />

          {(data?.listing || data?.data) && (
            <Box
              w={"100%"}
              bg="white"
              mt={{ base: "32px", lg: "48px" }}
              borderRadius="12px"
              border={{ lg: "1px solid rgba(169, 169, 169, 0.3)" }}
              py={{ base: "40px", sm: "50px", lg: "70px" }}
              textAlign="center"
            >
              <Flex
                w={{ base: "70px", sm: "90px" }}
                h={{ base: "70px", sm: "90px" }}
                bg="#F5F6F8"
                alignItems="center"
                justifyContent="center"
                mx="auto"
                borderRadius="10px"
                mb={{ base: "20px", lg: "32px" }}
              >
                <Image
                  src={type === "success" ? check : error}
                  alt="Status icon"
                />
              </Flex>

              <Text
                fontSize={{ base: "20px", sm: "22px", lg: "1.5rem" }}
                fontWeight={600}
                color="#011308"
              >
                Purchase {type === "success" ? "Completed" : "Failed"}!
              </Text>

              <Text
                fontSize={{ base: "15px", sm: "16px", lg: "18px" }}
                maxW="480px"
                mx="auto"
                fontWeight={400}
                mt={{ base: "16px", lg: "20px" }}
                mb={{ base: "24px", lg: "32px" }}
                px={{ base: "8px", sm: "0" }}
              >
                {type === "success"
                  ? `You have successfully purchased ${produceString}.`
                  : `Unfortunately, the purchase of ${produceString} could not be completed. Please try again.`}
              </Text>

              <Box
                width="100%"
                maxW="280px"
                height="auto"
                mx="auto"
                overflow="hidden"
                borderRadius="10px"
                mb={{ base: "28px", lg: "40px" }}
              >
                <Image
                  src={
                    data?.listing?.images?.[0]?.image ??
                    data?.data?.images?.[0]?.url
                  }
                  width={280}
                  height={240}
                  alt="Cover image"
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                  }}
                />
              </Box>

              <Text
                fontWeight={500}
                color="black"
                fontSize={{ base: "16px", sm: "18px", lg: "1.5rem" }}
                mb={{ base: "20px", lg: "32px" }}
              >
                {formatSnakeCaseTitle(
                  data?.listing?.product?.name ?? data?.data?.projectName,
                )}
              </Text>

              <Flex flexDir="column" alignItems="center" gap="20px">
                <Link
                  href={
                    type === "success"
                      ? data?.orderId
                        ? `/profile/organic-produce/produce-details/${data?.orderId}`
                        : `/profile/climate-art/${data?.data?.id}`
                      : "/home"
                  }
                >
                  <Button
                    w="fit-content"
                    px={{ base: "24px", sm: "36px" }}
                    py="12px"
                    borderRadius="2rem"
                    fontSize={{ base: "14px", sm: "16px" }}
                    bg={type === "success" ? "main_black_1" : "white"}
                    color={type === "success" ? "white" : "main_black_1"}
                    border={
                      type === "success"
                        ? "1px solid transparent"
                        : "1px solid #282828"
                    }
                    _hover={{
                      bg: type === "success" ? "#404040" : "#f7f7f7",
                    }}
                  >
                    {type === "success" ? "View Purchase" : "Back to Projects"}
                  </Button>
                </Link>

                {type === "success" &&
                  (data?.txHash || data?.data?.chainLink) && (
                    <Link
                      href={data?.txHash ?? data?.data?.chainLink}
                      target="_blank"
                    >
                      <Button
                        bg="transparent"
                        color="#282828"
                        borderRadius="2rem"
                        px={{ base: "20px", sm: "32px" }}
                        py="12px"
                        fontWeight={400}
                        fontSize={{ base: "14px", sm: "16px" }}
                        border="1px solid #282828"
                        _hover={{
                          bg: "rgba(40, 40, 40, 0.1)",
                        }}
                      >
                        View on Block Explorer
                      </Button>
                    </Link>
                  )}
              </Flex>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default PaystackRedirection;
