"use client";

import Button from "@/components/Common/Button";
import PurchaseComp from "@/components/PurchasePageComponents";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";
import { purchaseCarbonCredits } from "@/services/api/profile";
import { Text, Flex, Divider, useToast, Box } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SectionItem = ({
  label,
  value,
}: {
  label: string;
  value: string | number | React.ReactNode;
}) => {
  return (
    <Flex
      key={label}
      alignItems="center"
      justifyContent="space-between"
      mb={{ base: "0.75rem", lg: "1rem" }}
      flexWrap="wrap"
      gap={{ base: "4px", sm: 0 }}
    >
      <Text fontSize={{ base: "14px", lg: "1.125rem" }}>{label}</Text>
      {["string", "number"].includes(typeof value) ? (
        <Text
          fontSize={{ base: "14px", lg: "1.125rem" }}
          fontWeight={450}
          color="rgba(1, 19, 8, 0.7)"
        >
          {value}
        </Text>
      ) : (
        value
      )}
    </Flex>
  );
};

const CarbonCreditPurchase = () => {
  const { chosenProject: details } = useGlobalContext();
  const [quantity, setQuantity] = useState(details?.minimumPurchase || 1);
  const [isLoading, setIsLoading] = useState<"card" | "crypto" | null>(null);
  const { user } = useAuthContext();
  const toast = useToast();
  const router = useRouter();
  const pathname = usePathname();

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
      toast
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
      router.push("/home/climate-arts");
    }
  }, [details, router]);

  return (
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
        Price: `$${details?.pricePerTonne?.toLocaleString()}`,
      }).map(([label, value]) => (
        <SectionItem key={label} label={label} value={value} />
      ))}

      <Divider borderBottom="1px dashed" borderColor="gray_2" my="24px" />

      <SectionItem
        label="Tonnes to be retired"
        value={`${details?.availableTonnes?.toLocaleString()} tCO₂e`}
      />

      <Divider borderBottom="1px dashed" borderColor="gray_2" my="24px" />

      {Object.entries({ "Payment fee": "$0", VAT: "$1.46" }).map(
        ([label, value]) => (
          <SectionItem key={label} label={label} value={value} />
        )
      )}

      <Flex
        gap={{ base: "0.75rem", lg: "1rem" }}
        mt={{ base: "2rem", lg: "3rem" }}
        direction={{ base: "column", sm: "row" }}
      >
        <Button
          border="2px solid #0CC14C"
          bg="transparent"
          color="#0CC14C"
          _hover={{ bg: "#e7fdef" }}
          width={{ base: "100%", sm: "auto" }}
          isLoading={isLoading === "card"}
          isDisabled={isLoading !== null}
          onClick={() => handlePurchaseCarbonCredit("card")}
        >
          Pay with Card
        </Button>

        <Button
          width={{ base: "100%", sm: "auto" }}
          isLoading={isLoading === "crypto"}
          isDisabled={isLoading !== null}
          onClick={() => handlePurchaseCarbonCredit("crypto")}
        >
          Pay with Crypto
        </Button>
      </Flex>
    </PurchaseComp>
  );
};

export default CarbonCreditPurchase;
