import { Flex } from "@chakra-ui/react";
import React from "react";
import Spinner from "../Spinner/Spinner";

const PageLoader = () => {
  return (
    <Flex
      minH={"50vh"}
      alignItems={"center"}
      justifyContent={"center"}
      minW={"calc(100vw - (2.75rem * 2))"}
    >
      <Spinner />
    </Flex>
  );
};

export default PageLoader;
