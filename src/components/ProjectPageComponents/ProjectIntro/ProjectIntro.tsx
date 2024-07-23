"use client";
import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import backgroundImage from "../../../assets/gradient-background.png";
import ProjectIntroItem from "../ProjectIntroItem/ProjectIntroItem";
import { useProjectPageContext } from "@/context/ProjectsPageContext/ProjectsPageContext";
import { getCreditPeriod } from "@/utils/getCreditPeriod";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";

const ProjectIntro = () => {
  const router = useRouter();
  const { project } = useProjectPageContext();
  const { setChosenProject } = useGlobalContext();

  if (!project) {
    return null;
  }

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
          {project?.title}
        </Text>
        <Button
          bgColor={"agrify_green"}
          color={"white"}
          borderRadius={"2rem"}
          px={"2.5rem"}
          py={"0.75rem"}
          fontWeight={400}
          lineHeight={"1.2rem"}
          onClick={() => {
            setChosenProject(project);
            router.push("/purchase");
          }}
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
        <ProjectIntroItem title="Location" content={project.location} />
        <ProjectIntroItem
          title="Price"
          content={`$${project.projectToken.price} /tc02e`}
          padding_x="1.358rem"
        />
        <ProjectIntroItem
          title="Total Credits"
          content={`${project.projectToken.totalTonnes} tons`}
          padding_x="1.358rem"
        />
        <ProjectIntroItem
          title="Crediting Period"
          content={getCreditPeriod(project!)}
          padding_x="1.358rem"
          hideBorder
        />
      </Grid>
    </Box>
  );
};

export default ProjectIntro;
