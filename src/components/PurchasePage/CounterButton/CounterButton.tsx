"use client";

import { Button, Flex, Text } from "@chakra-ui/react";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const CounterButton = () => {
  let [counter, setCounter] = useState(1000);
  type CounterAction = "inc" | "dec";

  const updateCounter = (action: CounterAction) => {
    if (action == "inc") {
      setCounter(counter++);
    } else setCounter(counter--);
  };

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
        <Text textAlign={"center"} fontSize={"1.5rem"} color={"black"}>
          {counter} t/C02e
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
