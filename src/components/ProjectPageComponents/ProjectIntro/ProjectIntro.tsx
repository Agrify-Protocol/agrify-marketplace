"use client";
import { Box, Button, ButtonProps, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import backgroundImage from "../../../assets/gradient-background.png";
import ProjectIntroItem from "../ProjectIntroItem/ProjectIntroItem";
import { useProjectPageContext } from "@/context/ProjectsPageContext/ProjectsPageContext";
import { getCreditPeriod } from "@/utils/getCreditPeriod";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";

interface BuyCarbonCreditBtn extends ButtonProps {
  onClick: () => void;
}

const BuyCarbonCreditBtn = ({ onClick, ...rest }: BuyCarbonCreditBtn) => {
  return (
    <Button
      bgColor={"agrify_green"}
      color={"white"}
      borderRadius={"2rem"}
      px={"2.5rem"}
      py={"0.75rem"}
      fontWeight={400}
      lineHeight={"1.2rem"}
      onClick={onClick}
      _hover={{
        bg: "#0ba842",
      }}
      {...rest}
    >
      Buy farm produce
    </Button>
  );
};

const ProjectIntro = () => {
  const router = useRouter();
  const { project } = useProjectPageContext();
  const { setChosenProject } = useGlobalContext();

  if (!project) {
    return null;
  }

  const section = [
    { title: "Location", content: project?.location },
    { title: "Price", content: `$${project?.projectToken?.price}/kg` },
    {
      title: "Available Produce",
      content: `${project?.projectToken?.availableTonnes.toLocaleString()}kg`,
    },
    { title: "Harvest Period", content: getCreditPeriod(project!) },
    { title: "Contract Type", content: project?.contractType },
  ];

  return (
    <Box
      mt={{ base: "18px", lg: "2.5rem" }}
      width={"100%"}
      bgImg={backgroundImage.src}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      borderRadius={"1.429rem"}
      px={{ base: "29px", lg: "2.813rem" }}
      py={{ base: "41px", lg: "4.063rem" }}
    >
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        borderBottom={{ base: "1px solid rgba(0, 0, 0, 0.1)", lg: "none" }}
        paddingBottom={{ base: "16px", lg: 0 }}
      >
        <Text
          color={"rgba(0,0,0,0.9)"}
          fontSize={{ base: "24px", lg: "2rem" }}
          fontWeight={500}
          lineHeight={{ lg: "2.4rem" }}
        >
          {project?.title}
        </Text>
        <BuyCarbonCreditBtn
          onClick={() => {
            setChosenProject(project);
            router.push("/purchase");
          }}
          display={{ base: "none", lg: "block" }}
        />
      </Flex>

      <Grid
        border={{ lg: "1px" }}
        borderColor={{ lg: "rgba(0,0,0,0.1)" }}
        borderX={{ lg: "transparent" }}
        mt={{ base: "16px", lg: "3rem" }}
        px={{ lg: ".5rem" }}
        gap={{ base: "24px", lg: 0 }}
        gridTemplateColumns={{ lg: `repeat(5, 1fr)` }}
      >
        {section.map((item, index) => (
          <ProjectIntroItem
            key={item.title}
            title={item.title}
            content={item.content}
            padding_x={index !== 0 ? "1.358rem" : ""}
            paddingBottom="16px"
            borderBottom={{ base: "1px solid rgba(0, 0, 0, 0.1)", lg: "none" }}
            hideBorder={index === section.length - 1}
          />
        ))}
      </Grid>
      <BuyCarbonCreditBtn
        onClick={() => {
          setChosenProject(project);
          router.push("/purchase");
        }}
        display={{ base: "block", lg: "none" }}
        mt="32px"
        width="100%"
      />
    </Box>
  );
};

export default ProjectIntro;
