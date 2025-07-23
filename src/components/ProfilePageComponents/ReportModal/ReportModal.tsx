"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { ReportModalProps } from "./types";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { Inter_Display } from "@/fonts";
import { createReport, getReports } from "@/services/api/profile";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";

const ReportModal = ({ setShowModal }: ReportModalProps) => {
  const modalRef = useRef(null);
  const [reportName, setReportName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setReports } = useGlobalContext();
  const toast = useToast();

  const closeModal = () => {
    setIsLoading(true);
    createReport({ reportName }, toast).then((res) => {
      if (res) {
        getReports(toast).then((response) => {
          if (response) {
            setReports(response);
            setIsLoading(false);
            setShowModal(false);
          }
        });
      }
    });
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
          <FormLabel fontFamily={Inter_Display.style.fontFamily}>
            Report Name
          </FormLabel>
          <Input
            placeholder="Enter name"
            w={"100%"}
            h={"3.5rem"}
            focusBorderColor="gray_2"
            fontFamily={Inter_Display.style.fontFamily}
            borderRadius={"1rem"}
            mb={"3rem"}
            value={reportName}
            onChange={(e) => setReportName(e.target.value)}
          />

          <Button
            h={"3.5rem"}
            bgColor={"agrify_green"}
            isDisabled={reportName === ""}
            color={"white"}
            w={"100%"}
            isLoading={isLoading}
            borderRadius={"2.119rem"}
            fontWeight={500}
            onClick={closeModal}
            _hover={{
              bg: "#0ba842",
            }}
          >
            Generate
          </Button>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default ReportModal;
