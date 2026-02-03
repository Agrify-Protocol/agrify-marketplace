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
  const searchParams = useSearchParams();
  const toast = useToast();
  const { user } = useAuthContext();

  const id = searchParams.get("id");
  const tab = searchParams.get("tab");

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Record<string, any>>({});

  useEffect(() => {
    if (!user || !id) return;

    setIsLoading(true);

    if (tab === "traceable produce") {
      getProduceDetails(id, toast).then((response) => {
        if (response) setData(response);
        setIsLoading(false);
      });
    }

    if (tab === "climate art") {
      getCarbonCreditById(toast, id).then((response) => {
        if (response) setData(response);
        setIsLoading(false);
      });
    }

    localStorage.removeItem("selected_climate_art");
  }, [user, id, tab, toast]);

  const produceString = useMemo(() => {
    return data?.listing
      ? `${data?.listing?.batchSize} kg of ${formatSnakeCaseTitle(
          data?.listing?.product?.name,
        )}`
      : "climate art";
  }, [data]);

  if (isLoading) return <PageLoader />;

  return (
    <Box
      mt={{ base: "16px", sm: "32px", lg: "4rem" }}
      mb={{ base: "16px", lg: "2rem" }}
      px={{ base: "18px", sm: "24px", lg: "2.625rem" }}
    >
      <BackButton customFunction={() => router.push("/home")} />

      {(data?.listing || data?.data) && (
        <Box
          w="100%"
          bg="white"
          mt={{ base: "32px", lg: "48px" }}
          borderRadius="12px"
          border={{ lg: "1px solid rgba(169, 169, 169, 0.3)" }}
          py={{ base: "40px", sm: "50px", lg: "70px" }}
          textAlign="center"
        >
          {/* STATUS INDICATOR */}
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
            {type === "pending" ? (
              <Box
                w={{ base: "28px", sm: "36px" }}
                h={{ base: "28px", sm: "36px" }}
                bg="#F6C344"
                borderRadius="50%"
              />
            ) : (
              <Image
                src={type === "success" ? check : error}
                alt="Status icon"
              />
            )}
          </Flex>

          {/* TITLE */}
          <Text
            fontSize={{ base: "20px", sm: "22px", lg: "1.5rem" }}
            fontWeight={600}
            color="#011308"
          >
            {type === "success" && "Purchase Completed"}
            {type === "error" && "Purchase Failed"}
            {type === "pending" && "Payment Pending"}
          </Text>

          {/* MESSAGE */}
          <Text
            fontSize={{ base: "15px", sm: "16px", lg: "18px" }}
            maxW="520px"
            mx="auto"
            fontWeight={400}
            mt={{ base: "16px", lg: "20px" }}
            mb={{ base: "24px", lg: "32px" }}
            px={{ base: "8px", sm: "0" }}
          >
            {type === "success" &&
              `You have successfully purchased ${produceString}.`}

            {type === "error" &&
              `Unfortunately, the purchase of ${produceString} could not be completed. Please try again.`}

            {type === "pending" &&
              `Your payment is currently being processed. You can track the order status from your orders page. The status will update automatically once payment is confirmed.`}
          </Text>

          {/* ORDER IMAGE (RESTORED) */}
          {(data?.listing?.images?.[0]?.image ??
          data?.data?.images?.[0]?.url) ? (
            <Box
              width="100%"
              maxW="280px"
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
                alt="Order image"
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                }}
              />
            </Box>
          ) : (
            <Flex
              alignItems="center"
              h={{ base: "242px", lg: "200px" }}
              width="100%"
              maxW="280px"
              mx="auto"
              overflow="hidden"
              borderRadius="10px"
              mb={{ base: "28px", lg: "40px" }}
              justifyContent="center"
              bg="gray_3"
            >
              <Text>No images available</Text>
            </Flex>
          )}
          {/* ACTION BUTTON */}
          <Flex flexDir="column" alignItems="center" gap="20px">
            <Link
              href={
                type === "success"
                  ? data?.orderId
                    ? `/profile/traceable-produce/produce-details/${data?.orderId}`
                    : `/profile/climate-art/${data?.data?.id}`
                  : type === "pending"
                    ? `/profile?id=${tab}`
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
                {type === "success" && "View Purchase"}
                {type === "pending" && "View Orders"}
                {type === "error" && "Back to Home"}
              </Button>
            </Link>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default PaystackRedirection;
