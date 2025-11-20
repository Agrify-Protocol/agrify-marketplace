"use client";

import Counter from "@/components/Counter";
import PurchaseComp from "@/components/PurchasePageComponents";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";
import { Text, Flex, Button, Divider } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
  const { chosenProject } = useGlobalContext();
  const router = useRouter();

  const [quantity, setQuantity] = useState(1);

  return (
    <PurchaseComp>
      <Text
        fontWeight={500}
        fontSize={{ base: "24px", lg: "1.5rem" }}
        color={"main_black_1"}
        mb={"2.5rem"}
      >
        Transaction Details
      </Text>

      {Object.entries({
        Price: "$0",
        Amount: (
          <Counter
            value={quantity}
            valueSetterFn={setQuantity}
            unit="tc02e"
            total={20}
          />
        ),
      }).map(([label, value]) => (
        <SectionItem key={label} label={label} value={value} />
      ))}

      <Divider borderBottom={"1px dashed"} borderColor={"gray_2"} my="24px" />
      <SectionItem label="Available Tonnes" value="63 tonnes" />
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
        onClick={() => console.log("Continue Purchase")}
      >
        Continue Purchase
      </Button>
    </PurchaseComp>
  );
};

export default CarbonCreditPurchase;
