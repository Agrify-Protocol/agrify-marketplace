"use client";

import Button from "@/components/Common/Button";
import PurchaseComp from "@/components/PurchasePageComponents";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";
import { Box, Text, Flex, Divider, useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { convertUsdToXrpRate } from "@/services/api/profile";
import { motion } from "framer-motion";
import { LoaderCircle } from "lucide-react";
import SectionItem from "@/components/PaymentPageComponents/OrderSummary/SectionItem";

const Purchase = () => {
  const { chosenProject } = useGlobalContext();
  const router = useRouter();
  const [totalInXrp, setTotalinXrp] = useState(null);
  const toast = useToast();

  useEffect(() => {
    if (!chosenProject) {
      router.push("/home/traceable-produce");
    } else {
      const totalPrice = chosenProject?.totalPrice ?? 0;
      convertUsdToXrpRate(totalPrice + 1.46, toast).then((res) => {
        if (res) {
          setTotalinXrp(res?.price);
        }
      });
    }
  }, [chosenProject, router, toast]);

  return (
    <PurchaseComp
      caption={`Secure your high-quality
        ${chosenProject?.name
          ?.toLowerCase()
          ?.split("_")
          .join(" ")} directly from
        local farmers.`}
    >
      <Text
        fontWeight={500}
        fontSize={{ base: "24px", lg: "1.5rem" }}
        color="main_black_1"
        mb={{ base: "1.5rem", lg: "2.5rem" }}
      >
        Order Details
      </Text>

      {Object.entries({
        Price: `${(chosenProject?.pricePerKg ?? 0).toLocaleString()}/kg`,
        "Batch Size": (chosenProject?.batchSize ?? 0).toLocaleString(),
      }).map(([label, value]) => (
        <SectionItem key={label} label={label} value={value} />
      ))}

      <Divider borderBottom="1px dashed" borderColor="gray_2" my="24px" />

      <SectionItem label="VAT" value="$1.46" />

      <Divider borderBottom="1px dashed" borderColor="gray_2" my="24px" />

      <SectionItem
        label="Total (USD)"
        value={`${((chosenProject?.totalPrice ?? 0) + 1.46).toLocaleString()}`}
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
            onClick={() => router.push("/payment?method=crypto")}
            isDisabled={!totalInXrp}
          >
            Pay with Crypto
          </Button>
        </Box>
      </Flex>
    </PurchaseComp>
  );
};

export default Purchase;
