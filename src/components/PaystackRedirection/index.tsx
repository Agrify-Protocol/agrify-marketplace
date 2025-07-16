import { Box, Flex, Text, Button } from "@chakra-ui/react";
import check from "../../assets/icon-park-solid_check-one.svg";
import error from "../../assets/error.svg";
import Image from "next/image";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";
import { getSingleProject } from "@/services/api/projects";
import { getPurchasesByReference } from "@/services/api/purchases";
import { useState, useEffect } from "react";
import { PaystackRedirectionProps } from "./types";
import PageLoader from "../Common/PageLoader/PageLoader";
import BackButton from "../Common/BackButton/BackButton";
import Link from "next/link";

const PaystackRedirection = ({ type }: PaystackRedirectionProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const trxref = searchParams.get("trxref");
  const reference = searchParams.get("reference");
  const params = useParams();
  const { chosenProject, setChosenProject } = useGlobalContext(); //orderedAmount
  const [purchasedTonnes, setPurchasedTonnes] = useState(0);
  const [isRedirect, setIsRedirect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!chosenProject) {
      if (trxref && reference) {
        setIsRedirect(true);
        setIsLoading(true);
        getPurchasesByReference(trxref).then((response) => {
          if (response) {
            const tx = response[0];
            setPurchasedTonnes(tx.tonnes);
            getSingleProject(tx.projectId).then((response) => {
              setChosenProject(response);
            });
          }
        });
        setIsLoading(false);
      }
    }
  }, [params, trxref, reference]);

  const getTonnesString = (value: number) => {
    return `${value} kg of ITEM`;
  };

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
              {!isRedirect
                ? type === "success"
                  ? "Invoice Generated!"
                  : "Purchase Failed :("
                : "Purchase Completed!"}
            </Text>
            <Text
              fontSize={{ lg: "1.125rem" }}
              fontWeight={450}
              mt={{ base: "21px", lg: "1.708rem" }}
              mb={{ base: "33px", lg: "2.661rem" }}
            >
              {type === "success"
                ? `You have successfully purchased ${getTonnesString(
                    isRedirect ? +purchasedTonnes.toLocaleString() : 0 //+orderedAmount.toLocaleString()
                  )}`
                : `Unfortunately, the purchase of ${getTonnesString(
                    isRedirect ? +purchasedTonnes.toLocaleString() : 0 //+orderedAmount.toLocaleString()
                  )} could not be completed.`}
              {type === "error" ? (
                <Text as="span" display="block">
                  Please try again.
                </Text>
              ) : null}
            </Text>
            <Box
              w={"15.952rem"}
              maxH={"14.944rem"}
              overflow={"hidden"}
              mx={"auto"}
              borderRadius={"0.449rem"}
              position={"relative"}
              mb={"3.288rem"}
            >
              <Image
                src={
                  chosenProject?.coverImage! ||
                  chosenProject?.farms[0].farmImages[0].image!
                }
                alt=""
                width={255.23}
                height={239.1}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <Box
                position={"absolute"}
                inset={0}
                bgColor={"rgba(0,0,0,0.4)"}
                p={"1.329rem 1.098rem"}
              >
                <Text
                  bgColor={"agrify_lavender"}
                  fontSize={"0.545rem"}
                  p={"0.149rem 0.483rem"}
                  w={"fit-content"}
                  color={"black"}
                  borderRadius={"0.425rem"}
                >
                  4+ SDG Impact
                </Text>
              </Box>
            </Box>

            <Text
              fontWeight={450}
              color={"black"}
              fontSize={{ base: "16px", lg: "1.5rem" }}
              mb={"2.648rem"}
            >
              {chosenProject?.title}
            </Text>

            <Flex flexDir="column" alignItems="center" gap="27px">
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
                onClick={() =>
                  router.push(
                    `/projects/category/${chosenProject?.category}/${
                      chosenProject?._id
                    }?id=${type === "success" ? "my purchases" : "overview"}`
                  )
                }
              >
                {type === "success" ? "View Purchase" : "Back to Project"}
              </Button>
              <Link href="#" target="_blank">
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
            </Flex>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default PaystackRedirection;
