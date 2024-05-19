"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { ReportModalProps } from "./types";
import { useOutsideClick } from "@/hooks/useOutsideClick";

const ReportModal = ({ setShowModal }: ReportModalProps) => {
  const modalRef = useRef(null);
  const closeModal = () => {
    setShowModal(false);
  };

  useOutsideClick(modalRef, setShowModal, "report_modal");

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      bgColor={"rgba(0,0,0,0.4)"}
      inset={0}
      position={"fixed"}
      zIndex={1}
    >
      <Box
        bgColor={"white"}
        p={"2.813rem 1.5rem"}
        borderRadius={"1rem"}
        w={"37.875rem"}
        ref={modalRef}
        className="report_modal"
      >
        <Text
          fontWeight={500}
          fontSize={"1.5rem"}
          color={"main_black_1"}
          textAlign={"center"}
          mb={"4rem"}
        >
          Generate Report
        </Text>

        <FormControl>
          <FormLabel fontFamily={"__Inter_aaf875"}>Report Name</FormLabel>
          <Input
            placeholder="Enter name"
            w={"100%"}
            h={"3.5rem"}
            fontFamily={"__Inter_aaf875"}
            borderRadius={"1rem"}
            mb={"3rem"}
          />

          <Button
            h={"3.5rem"}
            bgColor={"agrify_green"}
            color={"white"}
            w={"100%"}
            borderRadius={"2.119rem"}
            fontWeight={500}
            onClick={closeModal}
          >
            Generate
          </Button>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default ReportModal;