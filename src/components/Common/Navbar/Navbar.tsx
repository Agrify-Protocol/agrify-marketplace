"use client";

import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../../../assets/agrify_logo.svg";
import profile_pic from "../../../assets/agrify_pfp.svg";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ProfileModal from "../../Layout/ProfileModal/ProfileModal";

const Navbar = () => {
  const pathName = usePathname();

  const baseRoutes = [
    "/category",
    "/farm",
    "/profile",
    "/project",
    "/purchase",
  ];

  const isProfilePage = pathName.startsWith("/profile");
  const isCurrentRouteValid =
    baseRoutes.some((route) => pathName.startsWith(route)) || pathName === "/";

  const [showModal, setShowModal] = useState(false);

  if (!isCurrentRouteValid) {
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
      position={"sticky"}
      top={0}
      zIndex={10}
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
          href={"/profile?id=overview"}
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

      <Flex
        gap={"0.5rem"}
        alignItems={"center"}
        cursor={"pointer"}
        className="profile_modal"
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        <Image className="profile_modal" src={profile_pic} alt="" />
        <ChevronDown className="profile_modal" />
      </Flex>

      {showModal && <ProfileModal setShowModal={setShowModal} />}
    </Box>
  );
};

export default Navbar;
