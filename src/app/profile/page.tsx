"use client";

import Table from "@/components/Common/Table";
import SectionTabs from "@/components/ProjectPageComponents/SectionTabs/SectionTabs";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import { Avatar, Box, Td, Text, Tr } from "@chakra-ui/react";
import { useSearchParams, useRouter } from "next/navigation";

const Profile = () => {
  const searchParams = useSearchParams();
  const tabId = searchParams.get("id");
  const router = useRouter();
  const { user } = useAuthContext();

  return (
    <Box>
      <Box width="fit-content" mx="auto" textAlign="center" mt="64px" mb="40px">
        <Avatar
          name={`${user?.firstname} ${user?.lastname}`}
          mb="21px"
          size="lg"
        />
        <Text fontSize="27px" color="black" fontWeight={450}>
          {`${user?.firstname} ${user?.lastname}`}
        </Text>
        <Text>Joined 14th March 2025</Text>
        <Text>Here’s order history</Text>
      </Box>
      <Box px="40px">
        <SectionTabs
          sections={["Organic Produce", "Carbon Credits"]}
          currentSection={tabId}
          type="my profile"
        />
        <Table thead={["Name", "Type", "Amount", "Date"]}>
          <Tr
            cursor="pointer"
            _hover={{ bg: "#F5F5F566" }}
            onClick={() => router.push(`/profile/carbon-credits/id123`)}
          >
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
        </Table>
      </Box>
    </Box>
  );
};

export default Profile;
