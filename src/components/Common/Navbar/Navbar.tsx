"use client";

import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../../../assets/agrify_logo.svg";
import profile_pic from "../../../assets/agrify_pfp.svg";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ProfileModal from "../../Layout/ProfileModal/ProfileModal";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const route = useRouter();

  const baseRoutes = [
    "/category",
    "/farm",
    "/profile",
    "/project",
    "/purchase",
    "/projects",
  ];

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
        <Box display={{ base: "none", lg: "block" }}>
          {[
            { title: "Projects", link: "/projects", base: "/projects" },
            {
              title: "My Profile",
              link: "/profile?id=overview",
              base: "/profile",
            },
          ].map((item) => (
            <Button
              key={item.link}
              onClick={() => route.push(item.link)}
              background={
                pathName.includes(item.base) ? "#EEEEEE" : "transparent"
              }
              borderRadius="1.905rem"
              padding="5.71px 11.43px 5.71px 11.43px"
              transition="all 0.25s ease-in-out"
              fontWeight="450"
              textColor={pathName.includes(item.base) ? "black" : "#A6A6A6"}
            >
              {item.title}
            </Button>
          ))}
        </Box>
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
      <Box display={{ base: "block", lg: "none" }}>
        {[
          { title: "Projects", link: "/projects", base: "/projects" },
          {
            title: "My Profile",
            link: "/profile?id=overview",
            base: "/profile",
          },
        ].map((item) => (
          <Button
            key={item.link}
            onClick={() => route.push(item.link)}
            background={
              pathName.includes(item.base) ? "#EEEEEE" : "transparent"
            }
            borderRadius="1.905rem"
            padding="5.71px 11.43px 5.71px 11.43px"
            transition="all 0.25s ease-in-out"
            fontWeight="450"
            textColor={pathName.includes(item.base) ? "black" : "#A6A6A6"}
          >
            {item.title}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Navbar;
