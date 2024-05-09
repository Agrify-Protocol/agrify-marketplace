import ProjectsContainer from "@/components/ProjectsContainer/ProjectsContainer";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box px={"2.625rem"} py={"6.963rem"}>
      <Heading fontWeight={500} fontSize={"1.5rem"} mb={"1rem"}>
        Hello Agrify Technologies
      </Heading>
      <Text mb={"2.348rem"}>
        Here are projects that suits your carbon offset goals
      </Text>
      <ProjectsContainer />
    </Box>
  );
}
