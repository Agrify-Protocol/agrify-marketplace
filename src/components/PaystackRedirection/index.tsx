import { Box, Flex, Text, Button } from "@chakra-ui/react";
import BackButton from "../Layout/BackButton/BackButton";
import check from "../../assets/icon-park-solid_check-one.svg";
import error from "../../assets/error.svg";
import Image from "next/image";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";
import { getSingleProject } from "@/services/api/projects";
import { getPurchasesByReference } from "@/services/api/purchases";
import { useState, useEffect } from "react";

interface PaystackRedirectionProps {
  type: "success" | "error";
}

const PaystackRedirection = ({ type }: PaystackRedirectionProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const trxref = searchParams.get("trxref");
  const reference = searchParams.get("reference");

  const params = useParams();
  const { chosenProject, setChosenProject, orderedAmount } = useGlobalContext();
  const [purchasedTonnes, setPurchasedTonnes] = useState(0);
  const [isRedirect, setIsRedirect] = useState(false);

  useEffect(() => {
    if (!chosenProject) {
      if (trxref && reference) {
        setIsRedirect(true);
        getPurchasesByReference(trxref).then((response) => {
          if (response) {
            const tx = response[0];
            setPurchasedTonnes(tx.tonnes);
            getSingleProject(tx.projectId).then((response) => {
              setChosenProject(response);
            });
          }
        });
      }
    }
  }, [params, trxref, reference]);

  return (
    <Box my={"4rem"} px={"2.625rem"}>
      <BackButton />
      <Box
        w={"100%"}
        bgColor={"white"}
        mt={"3.028rem"}
        borderRadius={"0.953rem"}
        border="0.95px solid rgba(169, 169, 169, 0.3)"
        py={"5.238rem"}
        textAlign={"center"}
      >
        <Flex
          w={"6.191rem"}
          h={"6.191rem"}
          bgColor={"#F5F6F8"}
          alignItems={"center"}
          justifyContent={"center"}
          mx={"auto"}
          borderRadius={"0.476rem"}
          mb={"2.444rem"}
        >
          <Image src={type === "success" ? check : error} alt="" />
        </Flex>

        <Text fontSize={"1.5rem"} fontWeight={600} color={"#011308"}>
          {!isRedirect
            ? type === "success"
              ? "Purchase Completed!"
              : "Purchase Failed :("
            : "Invoice Generated!"}
        </Text>
        <Text
          fontSize={"1.125rem"}
          fontWeight={450}
          mt={"1.708rem"}
          mb={"2.661rem"}
        >
          {type === "success"
            ? ` You have successfully purchased ${
                isRedirect ? purchasedTonnes : orderedAmount.toLocaleString()
              } tones of C02`
            : `Unfortunately, the purchase of ${
                isRedirect ? purchasedTonnes : orderedAmount.toLocaleString()
              } tonnes of CO2 could not be completed.
              `}
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
          fontSize={"1.5rem"}
          mb={"2.648rem"}
        >
          {chosenProject?.title}
        </Text>

        <Button
          w={"11.375rem"}
          h={"2.688rem"}
          border={
            type === "success" ? "1px solid transparent" : "1px solid #282828"
          }
          color={type === "success" ? "white" : "main_black_1"}
          bgColor={type === "success" ? "main_black_1" : "white"}
          borderRadius={"2rem"}
          _hover={{
            bg: type === "success" ? "#404040" : "#f2f2f2",
          }}
          onClick={() =>
            router.push(
              `/project/${chosenProject?._id}?id=${
                type === "success" ? "overview" : "my purchases"
              }`
            )
          }
        >
          {type === "success" ? "View Purchase" : "Back to Project"}
        </Button>
      </Box>
    </Box>
  );
};

export default PaystackRedirection;
