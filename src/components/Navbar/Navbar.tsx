"use client";

import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/agrify_logo.svg";
import profile_pic from "../../assets/agrify_pfp.svg";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const nullRoutes: { [x: string]: boolean } = { "/login": true };

  if (nullRoutes[pathName]) {
    return null;
  }

  return (
    <Box
      as="nav"
      bgColor={"white"}
      h={"4.762rem"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      px={"1.131rem"}
    >
      <Image src={logo} alt="" />

      <Flex gap={"1rem"} justifyContent={"center"} w={"calc(100%/3)"}>
        <Button
          p={"5.71px 11.43px 5.71px 11.43px"}
          borderRadius={"1.905rem"}
          bgColor={"#EEEEEE"}
        >
          Projects
        </Button>
        <Button>My Profile</Button>
      </Flex>

      <Flex gap={"0.5rem"} alignItems={"center"}>
        <Image src={profile_pic} alt="" />
        <ChevronDown />
      </Flex>
    </Box>
  );
};

export default Navbar;
