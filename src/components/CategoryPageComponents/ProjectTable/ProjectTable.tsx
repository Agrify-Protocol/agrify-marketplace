import { Box, Flex, Grid } from "@chakra-ui/react";
import { ProjectTableProps } from "./types";
import ProjectTableRow from "../ProjectTableRow/ProjectTableRow";

const ProjectTable = ({ projects, carbon_credits, type }: ProjectTableProps) => {
  return (
    <Box
      my={{ base: "32px", lg: "3rem" }}
      p={{ base: "32px 16px", lg: "2rem 1.5rem" }}
      bgColor={"white"}
      borderRadius={"1.5rem"}
    >
      <Grid
        gridTemplateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
        color={"rgba(0,0,0,0.5)"}
        p={{ base: "14px 0", lg: "1rem 2.813rem" }}
      >
        <Box>
          <Flex gap={"0.5rem"}>
            Project State{" "}
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              w={"1.5rem"}
              fontSize={"0.75rem"}
              borderRadius={"0.75rem"}
              p={"0.125rem 0.5rem"}
              bgColor={"rgba(166, 166, 166, 0.1)"}
            >
              {projects.length}
            </Box>
          </Flex>
        </Box>
        <Box textAlign={"center"} display={{ base: "none", lg: "block" }}>
          Country
        </Box>
        <Box textAlign={"center"} display={{ base: "none", lg: "block" }}>
          No of Farms
        </Box>
        <Box textAlign={"right"}>Available Credits</Box>
      </Grid>

      <Box mt={{ base: "12px", lg: 0 }}>
        {projects.map((project) => {
          return (
            <ProjectTableRow
              key={project.projectID}
              type={type}
              project={project}
              total_carbon_credits={carbon_credits}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default ProjectTable;
