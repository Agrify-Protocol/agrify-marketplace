"use client";

import { Box, Button, Flex, Skeleton, Text } from "@chakra-ui/react";
import left from "../../../assets/arrow_left.svg";
import right from "../../../assets/arrow_right.svg";
import Image from "next/image";
import { NavigateBtnProps, SliderProps } from "./types";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    setIsImageLoaded(false);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images?.length ? 0 : prevIndex + 1,
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images?.length - 1 : prevIndex - 1,
    );
  };

  return (
    <Flex
      gap={{ base: "32px", lg: "3.375rem" }}
      alignItems={"center"}
      flexDir={{ base: "column", lg: "row" }}
      justifyContent={"center"}
    >
      <NavigateBtn
        onClick={handlePrevious}
        isDisabled={currentIndex === 0 || images?.length <= 0}
        src={left}
        display={{ base: "none", lg: "block" }}
      />

      <Box
        w={{ base: "100%", md: "50%", lg: "500px" }}
        h={{ base: "342px", lg: "500px" }}
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
            {images?.length > 0 ? (
              <>
                {!isImageLoaded && (
                  <Skeleton
                    position="absolute"
                    inset={0}
                    height="100%"
                    width="100%"
                    startColor="gray_3"
                    endColor="gray.200"
                  />
                )}
                <Image
                  src={
                    images
                      ? (images[currentIndex]?.image ?? images[currentIndex])
                      : ""
                  }
                  alt=""
                  fill
                  onLoad={() => setIsImageLoaded(true)}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    opacity: isImageLoaded ? 1 : 0,
                    transition: "opacity 0.3s ease",
                  }}
                />
              </>
            ) : (
              <Flex
                alignItems="center"
                h={{ base: "342px", lg: "500px" }}
                justifyContent="center"
                bg="gray_3"
              >
                <Text>No images available</Text>
              </Flex>
            )}
          </motion.div>
        </AnimatePresence>
      </Box>

      <NavigateBtn
        onClick={handleNext}
        isDisabled={currentIndex === images?.length - 1 || images?.length <= 0}
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
          isDisabled={currentIndex === images?.length - 1}
          src={right}
          display={{ base: "block", lg: "none" }}
        />
      </Box>
    </Flex>
  );
};

export default Slider;
