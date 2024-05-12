"use client";

import { Button } from "@chakra-ui/react";
import { ChevronRight } from "lucide-react";
import React from "react";
import { ViewSolutionButtonProps } from "./types";
import { useProjectPageContext } from "@/context/ProjectsPageContext/ProjectsPageContext";

const ViewSectionButton = ({
  text,
  section,
  bgColor,
}: ViewSolutionButtonProps) => {
  const { setCurrentSection } = useProjectPageContext();
  return (
    <Button
      mt={"1.209rem"}
      fontWeight={400}
      bgColor={bgColor ? bgColor : "white"}
      color={"secondary_foreground"}
      rightIcon={<ChevronRight />}
      onClick={() => {
        section && setCurrentSection(section);
      }}
    >
      {text}
    </Button>
  );
};

export default ViewSectionButton;
