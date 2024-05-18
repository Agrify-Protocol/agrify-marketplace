"use client";

import SectionTabs from "@/components/ProjectPageComponents/SectionTabs/SectionTabs";
import { useProfileContext } from "@/context/ProfileContext/ProfileContext";
import { profileSections } from "@/context/ProfileContext/constants";
import { Box } from "@chakra-ui/react";
import React from "react";
import ContentParent from "../ContentParent/ContentParent";

const ProfilePageBody = () => {
  const { currentSection, setCurrentSection } = useProfileContext();
  return (
    <Box>
      <SectionTabs
        sections={profileSections}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <ContentParent />
    </Box>
  );
};

export default ProfilePageBody;
