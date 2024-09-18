"use client";

import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { Minus, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const CounterButton = () => {
  const router = useRouter();
  let { orderedAmount, setOrderedAmount, chosenProject } = useGlobalContext();

  type CounterAction = "inc" | "dec";

  const updateCounter = (action: CounterAction) => {
    if (action == "inc") {
      setOrderedAmount((prev) => +prev + 1);
    } else {
      if (
        +orderedAmount >
          (chosenProject?.projectToken.minimumPurchaseTonnes as number) &&
        +orderedAmount >= 0
      ) {
        setOrderedAmount((prev) => +prev - 1);
      }
    }
  };

  const handleChange = (e: { target: { value: string } }) => {
    if (e.target.value !== "0" && !e.target.value.includes("-")) {
      setOrderedAmount(e.target.value);
    }
  };

  useEffect(() => {
    if (!chosenProject) {
      router.push("/");
    }
  }, [chosenProject]);

  return (
    <Flex
      w={"16.75rem"}
      h={"2.847rem"}
      alignItems={"stretch"}
      justifyContent={"space-between"}
      border={"1px solid black"}
      borderRadius={"1.5rem"}
      overflow={"hidden"}
    >
      <Button
        h={"100%"}
        w={"19%"}
        borderRight={"1px solid black"}
        borderRadius={0}
        bg={"transparent"}
        onClick={() => updateCounter("dec")}
      >
        <Minus />
      </Button>

      <Flex
        w={"62%"}
        h={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Input
          value={orderedAmount}
          onChange={handleChange}
          border={"none"}
          fontSize={"1.5rem"}
          px={0}
          w={"45%"}
          _focus={{ ring: "none" }}
          onBlur={() => {
            orderedAmount === ""
              ? setOrderedAmount(
                  chosenProject?.projectToken.minimumPurchaseTonnes ?? 0
                )
              : null;
          }}
          type="number"
        />
        <Text textAlign={"center"} fontSize={"1.5rem"} color={"black"}>
          t/C02e
        </Text>
      </Flex>

      <Button
        h={"100%"}
        w={"19%"}
        borderLeft={"1px solid black"}
        borderRadius={0}
        bg={"transparent"}
        onClick={() => updateCounter("inc")}
      >
        <Plus />
      </Button>
    </Flex>
  );
};

export default CounterButton;
