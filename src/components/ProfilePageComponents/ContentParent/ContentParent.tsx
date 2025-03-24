"use client";

import { Box } from "@chakra-ui/react";
import React from "react";
import OverviewHolder from "../OverviewHolder/OverviewHolder";
import { useProfileContext } from "@/context/ProfileContext/ProfileContext";
import ReportsTable from "../ReportsTable/ReportsTable";
import FundedTable from "../FundedTable/FundedTable";
import ProduceBoughtTable from "../ProduceBoughtTable";

const ContentParent = () => {
  const { tabId } = useProfileContext();
  const currentBody = () => {
    switch (tabId) {
      case "overview":
        return <OverviewHolder />;
      case "project funded":
        return <FundedTable />;
      case "reports generated":
        return <ReportsTable />;
      case "produce bought":
        return <ProduceBoughtTable />;
      default:
        return <OverviewHolder />;
    }
  };
  return (
    <Box
      p={{ base: "27px 10px", lg: "2.814rem 2.893rem" }}
      bgColor={"white"}
      borderRadius={"0.963rem"}
      my={"1.5rem"}
    >
      {currentBody()}
    </Box>
  );
};

export default ContentParent;
