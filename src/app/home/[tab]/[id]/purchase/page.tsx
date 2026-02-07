"use client";

import Button from "@/components/Common/Button";
import PageLoader from "@/components/Common/PageLoader/PageLoader";
import SectionItem from "@/components/PaymentPageComponents/OrderSummary/SectionItem";
import PurchaseComp from "@/components/PurchasePageComponents";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";
import {
  convertUsdToXrpRate,
  purchaseCarbonCredits,
} from "@/services/api/profile";
import { Text, Flex, Divider, useToast, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CarbonCreditPurchase = () => {
  const { chosenProject } = useGlobalContext();
  const [isLoading, setIsLoading] = useState<"card" | "crypto" | null>(null);
  const { user } = useAuthContext();
  const toast = useToast();
  const router = useRouter();
  const [totalInXrp, setTotalinXrp] = useState(null);
  const [storedDetails, setStoredDetails] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("selected_climate_art");
      setStoredDetails(stored);
    }
  }, []);

  const details =
    chosenProject || (storedDetails ? JSON.parse(storedDetails) : null);

  const handlePurchaseCarbonCredit = (paymentMethod: "card" | "crypto") => {
    setIsLoading(paymentMethod);
    purchaseCarbonCredits(
      details.id,
      {
        tonnes: details.availableTonnes,
        buyerWalletAddress: user?.wallet?.accountID,
        paymentMethod,
        price: details.pricePerTonne,
        fee: 0,
        VAT: 1.46,
      },
      toast,
    ).then((res) => {
      if (res) {
        toast({
          title: "Successful!",
          description: "Redirecting to payment... Please don’t refresh.",
          status: "success",
          position: "top-right",
          duration: null,
          isClosable: false,
        });

        router.push(res?.paymentURL);
      }
      setIsLoading(null);
    });
  };

  useEffect(() => {
    if (!details) {
      router.push("/home/climate-art");
      return;
    }

    if (!user) {
      return;
    }

    if (user.kycStatus !== "approved") {
      toast({
        title: "KYC Verification Required",
        description: "Please complete KYC verification to proceed.",
        status: "warning",
        position: "top-right",
        duration: 5000,
        isClosable: true,
      });
      router.push("/home/climate-art");
    } else {
      const pricePerTonne = details.pricePerTonne ?? 0;
      convertUsdToXrpRate(pricePerTonne + 1.46, toast).then((res) => {
        if (res) {
          setTotalinXrp(res?.price);
        }
      });
    }
  }, [details, user, router, toast]);

  return !details ? (
    <PageLoader />
  ) : (
    <PurchaseComp name={details?.projectName}>
      <Text
        fontWeight={500}
        fontSize={{ base: "24px", lg: "1.5rem" }}
        color="main_black_1"
        mb={{ base: "1.75rem", lg: "2.5rem" }}
      >
        Transaction Details
      </Text>

      {Object.entries({
        Price: `${(details?.pricePerTonne ?? 0).toLocaleString()}`,
        "Tonnes to be retired": `${(details?.availableTonnes ?? 0).toLocaleString()} tCO₂e`,
      }).map(([label, value]) => (
        <SectionItem key={label} label={label} value={value} />
      ))}

      <Divider borderBottom="1px dashed" borderColor="gray_2" my="24px" />

      {Object.entries({ "Payment fee": "$0", VAT: "$1.46" }).map(
        ([label, value]) => (
          <SectionItem key={label} label={label} value={value} />
        ),
      )}

      <Divider borderBottom="1px dashed" borderColor="gray_2" my="24px" />

      <SectionItem
        label="Total (USD)"
        value={`${((details?.pricePerTonne ?? 0) + 1.46).toLocaleString()}`}
      />

      <SectionItem
        label="Equivalent in XRP"
        value={
          totalInXrp ? (
            [totalInXrp as number]?.toLocaleString()
          ) : (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <LoaderCircle size={20} color="#0CC14C" />
            </motion.div>
          )
        }
      />

      <Flex
        gap={{ base: "0.75rem", lg: "1rem" }}
        mt={{ base: "2rem", lg: "3rem" }}
        direction={{ base: "column", sm: "row" }}
      >
        <Box flex={1}>
          <Button
            width="100%"
            border="2px solid"
            borderColor="gray.300"
            bg="gray.50"
            color="gray.400"
            cursor="not-allowed"
            _hover={{ bg: "gray.50" }}
            isDisabled
          >
            Pay with Card
          </Button>

          <Text mt="4px" fontSize="xs" color="gray.400" textAlign="center">
            Coming soon
          </Text>
        </Box>

        <Box flex={1}>
          <Button
            isLoading={isLoading === "crypto"}
            isDisabled={isLoading !== null || !totalInXrp}
            onClick={() => handlePurchaseCarbonCredit("crypto")}
          >
            Pay with Crypto
          </Button>
        </Box>
      </Flex>
    </PurchaseComp>
  );
};

export default CarbonCreditPurchase;
