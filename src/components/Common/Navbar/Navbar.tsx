"use client";

import { Avatar, Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import logo from "../../../assets/agrify_logo.svg";
import profile_pic from "../../../assets/agrify_pfp.svg";
import unautheticated_pic from "../../../assets/profile.svg";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NavButtons from "./NavButtons";
import ProfileModal from "../ProfileModal/ProfileModal";
import { useAuthContext } from "@/context/AuthContext/AuthContext";

const Navbar = () => {
  const pathName = usePathname();
  const route = useRouter();
  const routesWithNav = ["/farm", "/profile", "/home"];
  const isAuthPage = pathName.startsWith("/auth");
  const [showModal, setShowModal] = useState(false);
  const { user, accessToken } = useAuthContext();

  const isLoggedIn = !!user && !!accessToken;

  return (
    <Box
      bgColor={"white"}
      minH={"4.762rem"}
      flexDir="column"
      display={
        isAuthPage ||
        !routesWithNav.some((item) => pathName.includes(item)) ||
        pathName.includes("track")
          ? "none"
          : "flex"
      }
      justifyContent={"space-between"}
      p={{ base: "25px", lg: "25px 2.625rem" }}
      position={"sticky"}
      top={0}
      gap={{ base: "12px", lg: "25px" }}
      zIndex={10}
    >
      <Box
        display="flex"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Link href={"/home"}>
          <Image src={logo} alt="" />
        </Link>
        <NavButtons
          user={isLoggedIn}
          route={route}
          pathName={pathName}
          display={{ base: isLoggedIn ? "none" : "block", lg: "block" }}
        />
        {isLoggedIn ? (
          <>
            <Flex
              gap={"0.5rem"}
              alignItems={"center"}
              cursor={"pointer"}
              className="profile_modal"
              onClick={() => {
                setShowModal(!showModal);
              }}
            >
              <Avatar name={`${user?.firstname} ${user?.lastname}`} size="sm" />
              <ChevronDown className="profile_modal" />
            </Flex>
            {showModal && <ProfileModal setShowModal={setShowModal} />}
          </>
        ) : (
          <Box
            width="40px"
            height="40px"
            bg="gray_3"
            justifySelf="start"
            rounded="100%"
            display="flex"
            alignItems={"center"}
            justifyContent="center"
            flexShrink={0}
            flexGrow={0}
          >
            <Image
              src={unautheticated_pic}
              alt="unauthenticated user profile picture"
            />
          </Box>
        )}
      </Box>
      <NavButtons
        user={isLoggedIn}
        route={route}
        pathName={pathName}
        display={{ base: isLoggedIn ? "block" : "none", lg: "none" }}
      />
    </Box>
  );
};

export default Navbar;
