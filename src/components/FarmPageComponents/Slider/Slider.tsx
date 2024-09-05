"use client";

import { Box, Button, Flex } from "@chakra-ui/react";
import left from "../../../assets/arrow_left.svg";
import right from "../../../assets/arrow_right.svg";
import Image from "next/image";
import { SliderProps } from "./types";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
    <Flex gap={"3.375rem"} alignItems={"center"}>
      <Button
        w={"2.5rem"}
        h={"2.5rem"}
        boxSizing="border-box"
        borderRadius={"50%"}
        bgColor={"white"}
        p={"0.6875rem"}
        onClick={handlePrevious}
        isDisabled={currentIndex === 0}
      >
        <Image src={left} alt="" />
      </Button>

      <Box
        w={"37.56rem"}
        h={"37.56rem"}
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
            <Image src={images[currentIndex].image} alt="" fill />
          </motion.div>
        </AnimatePresence>
      </Box>

      <Button
        w={"2.5rem"}
        h={"2.5rem"}
        borderRadius={"50%"}
        bgColor={"white"}
        p={"0.6875rem"}
        onClick={handleNext}
        isDisabled={currentIndex === images.length - 1}
      >
        <Image src={right} alt="" />
      </Button>
    </Flex>
  );
};

export default Slider;
