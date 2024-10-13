"use client";

import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../../../assets/agrify_logo.svg";
import profile_pic from "../../../assets/agrify_pfp.svg";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NavButtons from "./NavButtons";
import ProfileModal from "../ProfileModal/ProfileModal";

const Navbar = () => {
  const pathName = usePathname();
  const route = useRouter();
  const routesWithNav = ["/farm", "/profile", "/projects"];
  const isAuthPage = pathName.startsWith("/auth");
  const [showModal, setShowModal] = useState(false);

  return (
    <Box
      bgColor={"white"}
      minH={"4.762rem"}
      flexDir="column"
      display={
        isAuthPage || !routesWithNav.some((item) => pathName.includes(item))
          ? "none"
          : "flex"
      }
      justifyContent={"space-between"}
      p={{ base: "25px", lg: "25px 2.625rem" }}
      position={"sticky"}
      top={0}
      gap="25px"
      zIndex={10}
    >
      <Box
        display="flex"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Link href={"/"}>
          <Image src={logo} alt="" />
        </Link>
        <NavButtons
          route={route}
          pathName={pathName}
          display={{ base: "none", lg: "block" }}
        />
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
      <NavButtons
        route={route}
        pathName={pathName}
        display={{ base: "block", lg: "none" }}
      />
    </Box>
  );
};

export default Navbar;
