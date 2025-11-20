import ProfilePageBody from "@/components/ProfilePageComponents/ProfilePageBody/ProfilePageBody";
import ProfilePageHeading from "@/components/ProfilePageComponents/ProfilePageHeading/ProfilePageHeading";
import { ProfileContextProvider } from "@/context/ProfileContext/ProfileContext";
import { Box } from "@chakra-ui/react";
import React from "react";

const Profile = () => {
  return (
    <ProfileContextProvider>
      <Box p={{ base: "40px 24px", lg: "7.5rem 2.75rem" }}>
        <ProfilePageHeading />
        <ProfilePageBody />
      </Box>
    </ProfileContextProvider>
  );
};

export default Profile;
