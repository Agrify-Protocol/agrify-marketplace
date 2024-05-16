"use client";

import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import logo from "../../../assets/agrify_logo.svg";
import profile_pic from "../../../assets/agrify_pfp.svg";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathName = usePathname();
  const nullRoutes: { [x: string]: boolean } = {
    "/login": true,
    "/payment": true,
  };

  const isProfilePage = pathName == "/profile";

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
      px={"2.625rem"}
    >
      <Link href={"/"}>
        <Image src={logo} alt="" />
      </Link>

      <Flex gap={"1rem"} justifyContent={"center"} w={"calc(100%/3)"}>
        <Link
          href={"/"}
          style={{
            backgroundColor: !isProfilePage ? "#EEEEEE" : "transparent",
            borderRadius: "1.905rem",
            padding: "5.71px 11.43px 5.71px 11.43px",
            transition: "all 0.25s ease-in-out",
          }}
        >
          Projects
        </Link>
        <Link
          href={"/profile"}
          style={{
            backgroundColor: isProfilePage ? "#EEEEEE" : "transparent",
            borderRadius: "1.905rem",
            padding: "5.71px 11.43px 5.71px 11.43px",
            transition: "all 0.25s ease-in-out",
          }}
        >
          My Profile
        </Link>
      </Flex>

      <Flex gap={"0.5rem"} alignItems={"center"}>
        <Image src={profile_pic} alt="" />
        <ChevronDown />
      </Flex>
    </Box>
  );
};

export default Navbar;
