"use client";

import { Box, BoxProps, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../../../assets/agrify_logo.svg";
import profile_pic from "../../../assets/agrify_pfp.svg";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ProfileModal from "../../Layout/ProfileModal/ProfileModal";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface NavButtonsProps extends BoxProps {
  route: AppRouterInstance;
  pathName: string;
}

const NavButtons = ({ route, pathName, ...rest }: NavButtonsProps) => {
  return (
    <Box {...rest}>
      {[
        {
          title: "Projects",
          link: "/projects",
          base: ["/projects", "/farm", "/payment"],
        },
        {
          title: "My Profile",
          link: "/profile?id=overview",
          base: ["/profile"],
        },
      ].map((item) => (
        <Box
          as="button"
          key={item.link}
          onClick={() => route.push(item.link)}
          background={
            item.base.some((base) => pathName.includes(base))
              ? "#EEEEEE"
              : "transparent"
          }
          borderRadius="1.905rem"
          padding="5.71px 11.43px 5.71px 11.43px"
          transition="all 0.25s ease-in-out"
          fontWeight="450"
          textColor={
            item.base.some((base) => pathName.includes(base))
              ? "black"
              : "#A6A6A6"
          }
        >
          {item.title}
        </Box>
      ))}
    </Box>
  );
};

const Navbar = () => {
  const pathName = usePathname();
  const route = useRouter();

  const isAuthPage = pathName.startsWith("/auth");
  const [showModal, setShowModal] = useState(false);

  return (
    <Box
      bgColor={"white"}
      minH={"4.762rem"}
      flexDir="column"
      display={isAuthPage ? "none" : "flex"}
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
