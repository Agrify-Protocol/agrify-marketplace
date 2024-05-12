import { Box, Text } from "@chakra-ui/react";
import React from "react";

const ProjectDetails = () => {
  return (
    <Box
      border={"1.1px solid rgba(0,0,0,0.1)"}
      my={"1.5rem"}
      px={"2.748rem"}
      py={"2.954rem"}
      borderRadius={"1.099rem"}
    >
      <Text fontSize={"1.5rem"} fontWeight={450} color={"main_black_1"}>
        1. Project Description
      </Text>
      <Box mt={"2.859rem"}>
        <Box mb={"1.649rem"}>
          <Text>Title of Project</Text>
          <Text fontSize={"1.25rem"} color={"black"}>
            Oil Palm & Cocoa Agroforestry Project in Rivers State
          </Text>
        </Box>

        <Box mb={"1.649rem"}>
          <Text>Description</Text>
          <Text fontSize={"1.25rem"} color={"black"}>
            An Agroforestry project combining Oil Palm & Cocoa cultivation with
            carbon capture and community development in Rivers state, Nigeria
          </Text>
        </Box>

        <Box mb={"1.649rem"}>
          <Text>Mission</Text>
          <Text fontSize={"1.25rem"} color={"black"}>
            To increase the jobs in the
          </Text>
        </Box>

        <Box mb={"1.649rem"}>
          <Text>Location</Text>
          <Text fontSize={"1.25rem"} color={"black"}>
            Rivers State, Nigeria
          </Text>
        </Box>

        <Box mb={"1.649rem"}>
          <Text>Coordinates</Text>
          <Text fontSize={"1.25rem"} color={"black"}>
            8˚ 24’ 21 60” N. 7˚ 27’ 09.49” W
          </Text>
        </Box>

        <Box>
          <Text>Project Activity</Text>
          <Text fontSize={"1.25rem"} color={"black"}>
            Multi-Species Agroforrestry AGM001
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectDetails;
