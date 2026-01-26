"use client";

import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
// import pfp from "../../../assets/agrify_pfp.svg";
// import Image from "next/image";
import { ProfileModalProps } from "./types";
import { useRouter } from "next/navigation";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { resetAuthCookies } from "@/app/lib/actions";
import { useAuthContext } from "@/context/AuthContext/AuthContext";

const ProfileModal = ({ setShowModal, isLoggedIn }: ProfileModalProps) => {
  const { setUser, user, setAccessToken } = useAuthContext();
  const router = useRouter();
  const modalRef = useRef(null);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSignout = () => {
    resetAuthCookies().then(() => {
      setUser(null);
      setAccessToken("");
      localStorage.removeItem("access_token");
      closeModal();
      router.push("/auth/login");
    });
  };

  useOutsideClick(modalRef, setShowModal, "profile_modal");

  const getActions = () => {
    switch (isLoggedIn) {
      case true:
        return [];
      // return [
      //   { title: "Settings", action: closeModal },
      //   { title: "Help Center", action: closeModal },
      // ];
      default:
        return [
          { title: "Sign In", action: () => router.push("/auth/login") },
          { title: "Sign Up", action: () => router.push("/auth/signup") },
        ];
    }
  };

  return (
    <Box
      position="absolute"
      right={{ base: "1rem", lg: "2.625rem" }}
      top={{
        base: "4.25rem",
        lg: "calc(1rem + 4rem)",
      }}
      bgColor={"white"}
      py={"0.75rem"}
      borderRadius={"1rem"}
      zIndex={1}
      ref={modalRef}
      className="profile_modal"
      boxShadow={"0 3px 10px rgba(0,0,0,0.125)"}
      borderBottom={"1px solid rgba(0, 0, 0, 0.05)"}
    >
      {isLoggedIn && (
        <Flex p={"0.5rem 1rem"} gap={"0.75rem"} alignItems={"center"}>
          <Avatar name={`${user?.firstname} ${user?.lastname}`} size="sm" />
          <Box>
            <Text fontWeight={500} color={"#282828"}>
              {user?.firstname}
            </Text>
            <Text fontSize={"0.75rem"}>{user?.email}</Text>
          </Box>
        </Flex>
      )}
      <Box py={"0.5rem"}>
        {getActions().map((item, idx) => (
          <Button
            key={`${item.title}-${idx}`}
            w={"100%"}
            p={"0.625rem 1rem"}
            justifyContent={"normal"}
            mb={idx !== getActions().length - 1 ? "0.5rem" : "0"}
            bg="transparent"
            _hover={{ bg: "transparent" }}
            onClick={item.action}
          >
            {item.title}
          </Button>
        ))}
      </Box>
      {isLoggedIn && (
        <Button
          w={"100%"}
          p={"0.625rem 1rem"}
          justifyContent={"normal"}
          bg="transparent"
          _hover={{ bg: "transparent" }}
          color={"#EC1B1B"}
          mt={"0.5rem"}
          onClick={handleSignout}
          borderTop={"1px solid rgba(0, 0, 0, 0.05)"}
        >
          Sign Out
        </Button>
      )}
    </Box>
  );
};

export default ProfileModal;
