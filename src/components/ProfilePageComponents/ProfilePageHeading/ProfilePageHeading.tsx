"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useScreenFreeze } from "@/hooks/useScreenFreeze";

const ProfilePageHeading = () => {
  const [showModal, _setShowModal] = useState(false);
  useScreenFreeze(showModal);
  return (
    <Flex w={"100%"} alignItems={"start"} justifyContent={"space-between"}>
      <Box>
        <Text
          fontSize={"0.75rem"}
          p={"0.241rem 0.421rem"}
          bgColor={"#CBF35F"}
          width={"fit-content"}
          color={"#202020"}
          borderRadius={"0.722rem"}
        >
          Reporting
        </Text>

        <Box mt={"1.444rem"}>
          <Text
            fontSize={{ base: "20px", lg: "1.5rem" }}
            fontWeight={450}
            color={"main_black_1"}
          >
            Sustainability Profile Overview
          </Text>
          <Text>Here’s your carbon profile insights</Text>
        </Box>
      </Box>

      {/* <Button
        w={"8.938rem"}
        bgColor={"main_black_1"}
        _hover={{
          bg: "#404040"
        }}
        color={"white"}
        borderRadius={"0.5rem"}
        fontWeight={400}
        onClick={() => setShowModal(true)}
      >
        Generate Report
      </Button>
      {showModal && <ReportModal setShowModal={setShowModal} />} */}
    </Flex>
  );
};

export default ProfilePageHeading;
