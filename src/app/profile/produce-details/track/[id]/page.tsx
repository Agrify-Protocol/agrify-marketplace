"use client";

import {
  Box,
  Button,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import OrderProgress from "./OrderProgress";
import InputSteps from "./InputSteps";
import { useEffect, useState } from "react";
import check from "../../../../../assets/icon-park-solid_check-one.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const TrackOrder = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (step === 5) {
      setIsOpen(true);
    }
  }, [step]);

  return (
    <>
      <Box display="flex">
        <OrderProgress step={step} />
        <InputSteps step={step} setStep={setStep} />
        {step >= 2 && step < 5 ? (
          <Button
            position="absolute"
            bottom={8}
            right={8}
            onClick={() => setStep((prev) => prev + 1)}
          >
            Next
          </Button>
        ) : null}
      </Box>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        closeOnOverlayClick={false}
        isCentered
      >
        <ModalOverlay />
        <ModalContent
          minW="700px"
          display="flex"
          flexDir="column"
          alignItems="center"
          gap="30px"
          pt="50px"
          pb="30px"
        >
          <Box>
            <Image src={check} alt="check icon" width="25" height="25" />
          </Box>
          <Box
            width="255px"
            height="239px"
            borderRadius="8.9px"
            position="relative"
            overflow="hidden"
          >
            <Image
              src="https://res.cloudinary.com/isaacoduh/image/upload/v1742657336/occfki5q560pxn5chkzc.jpg"
              alt="check icon"
              width={255}
              height={239}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              bg="rgba(0, 0, 0, 0.4)"
              zIndex="1"
            />
          </Box>
          <Box>
            <Text fontSize="24px" fontWeight="500">
              Delivery Completed:{" "}
              <Text as="span" color="black">
                Cassava
              </Text>
            </Text>
          </Box>
          <Button
            border={"1px solid transparent"}
            color="white"
            bgColor={"main_black_1"}
            borderRadius={"2rem"}
            _hover={{
              bg: "#404040",
            }}
            width="fit-content"
            onClick={() => {
              setIsOpen(false);
              router.push("/profile?id=produce%20bought");
            }}
          >
            Continue
          </Button>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TrackOrder;
