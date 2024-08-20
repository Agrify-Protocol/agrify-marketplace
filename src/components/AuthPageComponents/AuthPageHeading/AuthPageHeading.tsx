import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { AuthPageHeadingProps } from "./types";
import { Inter_Display } from "@/fonts";
import Image from "next/image";
import agrify_icon from "../../../assets/agrify_icon.svg";
import Link from "next/link";

const AuthPageHeading = ({
  main_heading,
  sub_heading,
}: AuthPageHeadingProps) => {
  return (
    <Box fontFamily={Inter_Display.style.fontFamily} textAlign={"center"}>
      <Link href="/login" style={{ width: "fit-content" }}>
        <Image src={agrify_icon} alt="" style={{ width: "fit-content", margin: "auto" }} />
      </Link>
      <Text
        fontWeight={500}
        fontSize={"2rem"}
        lineHeight={"38.4px"}
        mt={"3rem"}
        color={"main_black_1"}
      >
        {main_heading}
      </Text>
      <Text mt={"1rem"}>{sub_heading}</Text>
    </Box>
  );
};

export default AuthPageHeading;
