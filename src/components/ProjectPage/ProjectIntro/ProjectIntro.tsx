import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { ProjectIntroProps } from "./type";
import backgroundImage from "../../../assets/gradient-background.png";
import ProjectIntroItem from "../ProjectIntroItem/ProjectIntroItem";

const ProjectIntro = ({ projectOverview }: ProjectIntroProps) => {
  return (
    <Box
      mt={"2.5rem"}
      width={"100%"}
      bgImg={backgroundImage.src}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      borderRadius={"1.429rem"}
      px={"2.813rem"}
      py={"4.063rem"}
    >
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Text
          color={"rgba(0,0,0,0.9)"}
          fontSize={"2rem"}
          fontWeight={500}
          lineHeight={"2.4rem"}
        >
          {projectOverview.name}
        </Text>
        <Button
          bgColor={"agrify_green"}
          color={"white"}
          borderRadius={"2rem"}
          px={"2.5rem"}
          py={"0.75rem"}
          fontWeight={400}
          lineHeight={"1.2rem"}
        >
          Buy Carbon Credits
        </Button>
      </Flex>

      <Grid
        border={"1px"}
        borderColor={"rgba(0,0,0,0.1)"}
        borderX={"transparent"}
        mt={"3rem"}
        px={"2.875rem"}
        gridTemplateColumns={"1fr 1fr 1fr 1.25fr"}
      >
        <ProjectIntroItem title="Location" content={projectOverview.location} />
        <ProjectIntroItem
          title="Price"
          content={projectOverview.price}
          padding_x="1.358rem"
        />
        <ProjectIntroItem
          title="Total Credits"
          content={projectOverview.total_credits}
          padding_x="1.358rem"
        />
        <ProjectIntroItem
          title="Crediting Period"
          content={projectOverview.crediting_period}
          padding_x="1.358rem"
          hideBorder
        />
      </Grid>
    </Box>
  );
};

export default ProjectIntro;
