"use client";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import pfp from "../../../assets/agrify_pfp.svg";
import Image from "next/image";
import { ProfileModalProps } from "./types";
import { useRouter } from "next/navigation";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { resetAuthCookies } from "@/app/lib/actions";
import { useAuthContext } from "@/context/AuthContext/AuthContext";

const ProfileModal = ({ setShowModal }: ProfileModalProps) => {
  const { setUser, user } = useAuthContext();
  const router = useRouter();
  const modalRef = useRef(null);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSignout = () => {
    resetAuthCookies().then(() => {
      setUser(null);
      localStorage.removeItem("access_token");
      closeModal();
      router.push("/auth/login");
    });
  };

  useOutsideClick(modalRef, setShowModal, "profile_modal");

  return (
    <Box
      position={"absolute"}
      right={"2.625rem"}
      top={"calc(1.903rem + 4.762rem)"}
      bgColor={"white"}
      py={"0.75rem"}
      borderRadius={"1rem"}
      zIndex={1}
      ref={modalRef}
      className="profile_modal"
      boxShadow={"0 3px 10px rgba(0,0,0,0.125)"}
    >
      <Flex p={"0.5rem 1rem"} gap={"0.75rem"} alignItems={"center"}>
        <Box w={"3.5rem"} h={"3.5rem"}>
          <Image
            src={pfp}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box>
          <Text fontWeight={500} color={"#282828"}>
            {user?.firstname}
          </Text>
          <Text fontSize={"0.75rem"}>{user?.email}</Text>
        </Box>
      </Flex>

      <Box borderY={"1px solid rgba(0, 0, 0, 0.05)"} py={"0.5rem"}>
        <Button
          w={"100%"}
          p={"0.625rem 1rem"}
          justifyContent={"normal"}
          mb={"0.5rem"}
          bg="transparent"
          _hover={{ bg: "transparent" }}
          onClick={closeModal}
        >
          Settings
        </Button>
        <Button
          w={"100%"}
          p={"0.625rem 1rem"}
          justifyContent={"normal"}
          bg="transparent"
          _hover={{ bg: "transparent" }}
          onClick={closeModal}
        >
          Help Center
        </Button>
      </Box>
      <Button
        w={"100%"}
        p={"0.625rem 1rem"}
        justifyContent={"normal"}
        bg="transparent"
        _hover={{ bg: "transparent" }}
        color={"#EC1B1B"}
        mt={"0.5rem"}
        onClick={handleSignout}
      >
        Sign Out
      </Button>
    </Box>
  );
};

export default ProfileModal;
