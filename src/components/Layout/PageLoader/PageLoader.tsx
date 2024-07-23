import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { LoaderCircle } from "lucide-react";
import React from "react";

const PageLoader = () => {
  return (
    <Flex minH={"50vh"} alignItems={"center"} justifyContent={"center"}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <LoaderCircle size={50} color="#0CC14C" />
      </motion.div>
    </Flex>
  );
};

export default PageLoader;
