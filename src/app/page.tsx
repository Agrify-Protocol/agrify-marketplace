"use client";

import ProjectsContainer from "@/components/ProjectPageComponents/ProjectsContainer/ProjectsContainer";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { loginResponse } = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    if (!loginResponse) {
      router.push("/login");
    }
  }, [loginResponse]);

  return (
    <Box px={"2.625rem"} py={"6.963rem"}>
      <Heading fontWeight={500} fontSize={"1.5rem"} mb={"1rem"}>
        Hello, {loginResponse?.user.firstname}
      </Heading>
      <Text mb={"2.348rem"}>
        Here are projects that suits your carbon offset goals
      </Text>
      <ProjectsContainer />
    </Box>
  );
}
