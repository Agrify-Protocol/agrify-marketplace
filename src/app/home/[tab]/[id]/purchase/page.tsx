"use client";

import Counter from "@/components/Counter";
import PurchaseComp from "@/components/PurchasePageComponents";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import { purchaseCarbonCredits } from "@/services/api/profile";
import { Text, Flex, Button, Divider, useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
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
      alignItems={"center"}
      justifyContent={"space-between"}
      mb={"1rem"}
    >
      <Text fontSize={{ base: "14px", lg: "1.125rem" }}>{label}</Text>
      {["string", "number"].includes(typeof value) ? (
        <Text
          fontSize={{ base: "14px", lg: "1.125rem" }}
          fontWeight={450}
          color={"rgba(1, 19, 8, 0.7)"}
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
  const details = localStorage.getItem("selected_carbon_credit")
    ? JSON.parse(localStorage.getItem("selected_carbon_credit") || "{}")
    : null;

  const [quantity, setQuantity] = useState(details?.minimumPurchase || 1);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthContext();
  const toast = useToast();
  const router = useRouter();

  const handlePurchaseCarbonCredit = () => {
    setIsLoading(true);
    purchaseCarbonCredits(
      details.id,
      { tonnes: quantity, buyerWalletAddress: user?.wallet?.accountID },
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

        router.push("/profile?id=carbon%20credits");
        localStorage.removeItem("selected_carbon_credit");
      }
      setIsLoading(false);
    });
  };

  useEffect(() => {
    if (!details) {
      router.push("/home/climate-arts");
    }
  }, []);

  return (
    <PurchaseComp name={details?.projectName}>
      <Text
        fontWeight={500}
        fontSize={{ base: "24px", lg: "1.5rem" }}
        color={"main_black_1"}
        mb={"2.5rem"}
      >
        Transaction Details
      </Text>

      {Object.entries({
        Price: `$${details?.pricePerTonne?.toLocaleString()}`,
        // Amount: (
        //   <Counter
        //     minValue={details?.minimumPurchase}
        //     value={quantity}
        //     valueSetterFn={setQuantity}
        //     unit="tc02e"
        //     total={details?.availableTonnes}
        //   />
        // ),
      }).map(([label, value]) => (
        <SectionItem key={label} label={label} value={value} />
      ))}

      <Divider borderBottom={"1px dashed"} borderColor={"gray_2"} my="24px" />
      <SectionItem
        label="Tonnes to be retired"
        value={`${details?.availableTonnes?.toLocaleString()} tCO₂e`}
      />
      <Divider borderBottom={"1px dashed"} borderColor={"gray_2"} my="24px" />

      {Object.entries({ "Payment fee": "$0", VAT: "$1.46" }).map(
        ([label, value]) => (
          <SectionItem key={label} label={label} value={value} />
        )
      )}

      <Button
        w={"100%"}
        h={"3.5rem"}
        mt={"3rem"}
        bgColor={"agrify_green"}
        fontWeight={500}
        color={"white"}
        borderRadius={"2.119rem"}
        _hover={{
          bg: "#0ba842",
        }}
        fontSize={{ base: "14px", lg: "18px" }}
        isLoading={isLoading}
        onClick={handlePurchaseCarbonCredit}
      >
        Continue Purchase
      </Button>
    </PurchaseComp>
  );
};

export default CarbonCreditPurchase;
