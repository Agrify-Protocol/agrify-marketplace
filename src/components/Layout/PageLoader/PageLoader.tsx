import { Flex } from "@chakra-ui/react";
import React from "react";
import Spinner from "../Spinner/Spinner";

const PageLoader = () => {
  return (
    <Flex minH={"50vh"} alignItems={"center"} justifyContent={"center"}>
      <Spinner />
    </Flex>
  );
};

export default PageLoader;
