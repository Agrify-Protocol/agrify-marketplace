import { Box, Flex, Grid } from "@chakra-ui/react";
import { ProjectTableProps } from "./types";
import ProjectTableRow from "../ProjectTableRow/ProjectTableRow";

const ProjectTable = ({ projects, carbon_credits }: ProjectTableProps) => {
  return (
    <Box
      my={"3rem"}
      p={"2rem 1.5rem"}
      bgColor={"white"}
      borderRadius={"1.5rem"}
    >
      <Grid
        gridTemplateColumns={"repeat(4, 1fr)"}
        color={"rgba(0,0,0,0.5)"}
        p={"1rem 2.813rem"}
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
        <Box textAlign={"center"}>Country</Box>
        <Box textAlign={"center"}>No of Farms</Box>
        <Box textAlign={"right"}>Available Credits</Box>
      </Grid>

      <Box>
        {projects.map((project) => {
          return (
            <ProjectTableRow
              key={project.projectID}
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
