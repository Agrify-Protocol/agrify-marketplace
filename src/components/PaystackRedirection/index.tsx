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

const PaystackRedirection = ({ type }: PaystackRedirectionProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { user } = useAuthContext();
  const toast = useToast();
  const [data, setData] = useState<Record<string, any>>({});

  useEffect(() => {
    if (user) {
      getProduceDetails(id as string, toast).then((response) => {
        if (response) {
          setData(response);
        }
        setIsLoading(false);
      });
    }
  }, [user, id]);

  const produceString = useMemo(() => {
    return `${data?.listing?.batchSize} batch(es) of ${formatSnakeCaseTitle(
      data?.listing?.product?.name
    )}`;
  }, [data]);

  return (
    <Box
      my={{ base: "24px", lg: "4rem" }}
      px={{ base: "36px", lg: "2.625rem" }}
    >
      {isLoading ? (
        <PageLoader />
      ) : (
        <Box>
          <BackButton customFunction={() => router.push("/projects")} />
          <Box
            w={"100%"}
            bgColor={{ lg: "white" }}
            mt="48px"
            borderRadius={"0.953rem"}
            border={{ lg: "0.95px solid rgba(169, 169, 169, 0.3)" }}
            py={{ base: "70px", lg: "5.238rem" }}
            textAlign={"center"}
            bg="#FFFFFF"
          >
            <Flex
              w={"6.191rem"}
              h={"6.191rem"}
              bgColor={"#F5F6F8"}
              alignItems={"center"}
              justifyContent={"center"}
              mx={"auto"}
              borderRadius={"0.476rem"}
              mb={{ lg: "2.444rem" }}
            >
              <Image src={type === "success" ? check : error} alt="" />
            </Flex>

            <Text
              fontSize={{ base: "18px", lg: "1.5rem" }}
              fontWeight={600}
              color={"#011308"}
            >
              {`Purchase ${type === "success" ? "Completed" : "Failed"}!`}
            </Text>
            <Text
              fontSize={{ lg: "1.125rem" }}
              maxW="458px"
              mx="auto"
              fontWeight={450}
              mt={{ base: "21px", lg: "1.708rem" }}
              mb={{ base: "33px", lg: "2.661rem" }}
            >
              {type === "success"
                ? `You have successfully purchased ${produceString}.`
                : `Unfortunately, the purchase of ${produceString} could not be completed. Please try again.`}
            </Text>
            <Box
              width={255.23}
              height={239.1}
              overflow={"hidden"}
              mx={"auto"}
              borderRadius={"0.449rem"}
              position={"relative"}
              mb={"3.288rem"}
            >
              <Image
                src={data?.listing?.farm?.farmImages[0]?.image}
                width={255.23}
                height={239.1}
                alt={`${formatSnakeCaseTitle(
                  data?.listing?.product?.name
                )} cover image`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <Box
                position={"absolute"}
                inset={0}
                bgColor={"rgba(0,0,0,0.4)"}
                p={"1.329rem 1.098rem"}
              />
            </Box>

            <Text
              fontWeight={450}
              color={"black"}
              fontSize={{ base: "16px", lg: "1.5rem" }}
              mb={"2.648rem"}
            >
              {formatSnakeCaseTitle(data?.listing?.product?.name)}
            </Text>

            <Flex flexDir="column" alignItems="center" gap="27px">
              <Link
                href={
                  type === "success"
                    ? "/profile?id=produce%20bought"
                    : "/projects"
                }
              >
                <Button
                  w="fit-content"
                  border={
                    type === "success"
                      ? "1px solid transparent"
                      : "1px solid #282828"
                  }
                  color={type === "success" ? "white" : "main_black_1"}
                  bgColor={type === "success" ? "main_black_1" : "white"}
                  borderRadius={"2rem"}
                  _hover={{
                    bg: type === "success" ? "#404040" : "#f2f2f2",
                  }}
                >
                  {type === "success" ? "View Purchase" : "Back to Project"}
                </Button>
              </Link>

              {data?.txHash ? (
                <Link href={data?.txHash} target="_blank">
                  <Button
                    bgColor="transparent"
                    color="#282828"
                    borderRadius={"2rem"}
                    px={"2.5rem"}
                    py="14px"
                    fontWeight={400}
                    mb="32px"
                    border="1px solid #282828"
                    _hover={{
                      bg: "rgba(40, 40, 40, .1)",
                    }}
                  >
                    View on Block Explorer
                  </Button>
                </Link>
              ) : null}
            </Flex>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default PaystackRedirection;
