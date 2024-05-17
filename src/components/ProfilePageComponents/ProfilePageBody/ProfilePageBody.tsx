"use client";

import SectionTabs from "@/components/ProjectPageComponents/SectionTabs/SectionTabs";
import { useProfileContext } from "@/context/ProfileContext/ProfileContext";
import { profileSections } from "@/context/ProfileContext/constants";
import { Box } from "@chakra-ui/react";
import React from "react";

const ProfilePageBody = () => {
  const { currentSection, setCurrentSection } = useProfileContext();
  return (
    <Box>
      <SectionTabs
        sections={profileSections}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
    </Box>
  );
};

export default ProfilePageBody;
