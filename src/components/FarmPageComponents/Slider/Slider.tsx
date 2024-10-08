"use client";

import { Box, Button, ButtonProps, Flex } from "@chakra-ui/react";
import left from "../../../assets/arrow_left.svg";
import right from "../../../assets/arrow_right.svg";
import Image from "next/image";
import { SliderProps } from "./types";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface NavigateBtnProps extends ButtonProps {
  onClick: () => void;
  isDisabled: boolean;
  src: string | StaticImport;
}

const NavigateBtn = ({
  onClick,
  isDisabled,
  src,
  ...rest
}: NavigateBtnProps) => {
  return (
    <Button
      w={"2.5rem"}
      h={"2.5rem"}
      boxSizing="border-box"
      borderRadius={"50%"}
      bgColor={"white"}
      p={"0.6875rem"}
      onClick={onClick}
      isDisabled={isDisabled}
      {...rest}
    >
      <Image src={src} alt="navigate button icon" />
    </Button>
  );
};

const Slider = ({ images }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Flex
      gap={{ base: "32px", lg: "3.375rem" }}
      alignItems={"center"}
      flexDir={{ base: "column", lg: "row" }}
    >
      <NavigateBtn
        onClick={handlePrevious}
        isDisabled={currentIndex === 0}
        src={left}
        display={{ base: "none", lg: "block" }}
      />

      <Box
        w={{ base: "100%", lg: "37.56rem" }}
        h={{ base: "342px", lg: "37.56rem" }}
        borderRadius={"1.89rem"}
        position={"relative"}
        overflow={"hidden"}
      >
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={images[currentIndex].image}
              alt=""
              fill
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </motion.div>
        </AnimatePresence>
      </Box>

      <NavigateBtn
        onClick={handleNext}
        isDisabled={currentIndex === images.length - 1}
        src={right}
        display={{ base: "none", lg: "block" }}
      />

      <Box display={{ base: "flex", lg: "block" }} gap="16px">
        <NavigateBtn
          onClick={handlePrevious}
          isDisabled={currentIndex === 0}
          src={left}
          display={{ base: "block", lg: "none" }}
        />
        <NavigateBtn
          onClick={handleNext}
          isDisabled={currentIndex === images.length - 1}
          src={right}
          display={{ base: "block", lg: "none" }}
        />
      </Box>
    </Flex>
  );
};

export default Slider;
