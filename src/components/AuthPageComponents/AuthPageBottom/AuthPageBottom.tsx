import { Inter_Display } from "@/fonts";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { AuthPageBottomProps } from "./types";

const AuthPageBottom = ({ line_1, line_2 }: AuthPageBottomProps) => {
  return (
    <Box
      textAlign={"center"}
      fontFamily={Inter_Display.style.fontFamily}
      display="flex"
      gap="4"
      flexDir="column"
    >
      <Text>
        {line_1.question}{" "}
        <Text as="span" color={"#0CC14C"}>
          <Link href={line_1.route}>{line_1.link_text}</Link>
        </Text>
      </Text>
      <Text>
        {line_2.question}{" "}
        <Text as="span" color={"#0CC14C"}>
          <Link href={line_2.route}>{line_2.link_text}</Link>
        </Text>
      </Text>
    </Box>
  );
};

export default AuthPageBottom;
