"use client";

import { Box } from "@chakra-ui/react";
import React from "react";
import OverviewHolder from "../OverviewHolder/OverviewHolder";
import { useProfileContext } from "@/context/ProfileContext/ProfileContext";
import { profileSections } from "@/context/ProfileContext/constants";
import FundedTable from "../FundedTable/FundedTable";
import ReportsTable from "../ReportsTable/ReportsTable";

const ContentParent = () => {
  const { currentSection } = useProfileContext();
  return (
    <Box
      p={"2.814rem 2.893rem"}
      bgColor={"white"}
      borderRadius={"0.963rem"}
      my={"1.5rem"}
    >
      {currentSection == profileSections[0] && <OverviewHolder />}
      {currentSection == profileSections[1] && <FundedTable />}
      {currentSection == profileSections[2] && <ReportsTable />}
    </Box>
  );
};

export default ContentParent;
