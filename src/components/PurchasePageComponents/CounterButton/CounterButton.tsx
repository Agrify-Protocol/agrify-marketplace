"use client";

import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { Minus, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CounterButton = () => {
  const router = useRouter();
  let { orderedAmount, setOrderedAmount, chosenProject } = useGlobalContext();
  type CounterAction = "inc" | "dec";

  const updateCounter = (action: CounterAction) => {
    if (action == "inc") {
      setOrderedAmount(orderedAmount + 1);
    } else {
      if (
        orderedAmount >=
        (chosenProject?.projectToken.minimumPurchaseTonnes as number)
      ) {
        setOrderedAmount(orderedAmount - 1);
      }
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
          onChange={(e) => setOrderedAmount(Number(e.target.value))}
          border={"none"}
          fontSize={"1.5rem"}
          px={0}
          w={"45%"}
          _focus={{ ring: "none" }}
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
