import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import check from "../../../assets/icon-park-solid_check-one.svg";

const CompleteRequest = () => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      flexDir={"column"}
      py={"3rem"}
    >
      <Image src={check} alt="" />
      <Text
        fontSize={{ base: "24px", lg: "1.5rem" }}
        fontWeight={500}
        color={"black"}
        mt={"3.799rem"}
        mb={"1.5rem"}
      >
        Request Received!
      </Text>
      <Text
        color={"rgba(15, 15, 15, 0.7)"}
        textAlign={"center"}
        w={{ lg: "27.563rem" }}
      >
        You have successfully requested for a produce! We would reach out to you
        shortly with more details and how to proceed with the next steps{" "}
      </Text>
    </Flex>
  );
};

export default CompleteRequest;
