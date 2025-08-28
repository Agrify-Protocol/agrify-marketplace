"use client";

import { spinAnimation } from "@/components/AuthPageComponents/AuthPageSubmitButton/helpers";
import { completeOrder } from "@/services/api/profile";
import { Box, Button, Text, useToast } from "@chakra-ui/react";
import { LoaderCircle } from "lucide-react";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";

const CompleteOrder = ({
  data,
  status,
  step,
  reload,
  setReload,
  setIsOpen,
}: {
  data: Record<string, any>;
  status: boolean[];
  step: number;
  reload: boolean;
  setReload: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const toast = useToast();

  const handleCompleteOrder = () => {
    setIsLoading(true);
    completeOrder(params.id as string, toast).then((res) => {
      if (res) {
        setIsOpen(true);
        setReload(!reload);
      }
      setIsLoading(false);
    });
  };

  const isDisabled = useMemo(() => {
    return step !== status.length - 1 || data?.deliveryStatus === "completed";
  }, [step, status, data]);

  return (
    <Box
      w={{ base: "100%", lg: "50%" }}
      h={{ lg: "100vh" }}
      px={{ base: 4, md: 8, lg: "75px" }}
      pt={{ base: 6, md: 10, lg: "130px" }}
      pb={{ base: 6, lg: 0 }}
      background="white"
      pos="relative"
    >
      <Box maxW={{ base: "600px", lg: "auto" }} mx={{ base: "auto", lg: "0" }}>
        <Text fontSize="24px" fontWeight="450" color="black" mb="16px">
          Confirm Delivery
        </Text>
        <Text mb={{ base: "18px", md: "26px" }}>
          Confirm delivery of your package.
        </Text>
        <Button
          bgColor={!isDisabled ? "#0CC14C" : "#EEEEEE"}
          color={!isDisabled ? "white" : "#282828"}
          borderRadius="24px"
          mt={{ base: "28px", md: "36px", lg: "48px" }}
          py="20px"
          width="100%"
          fontWeight={500}
          _hover={{
            bg: !isDisabled && "#0ba842",
          }}
          onClick={handleCompleteOrder}
          isDisabled={isDisabled}
          rightIcon={
            isLoading ? (
              <Box animation={spinAnimation}>
                <LoaderCircle
                  opacity={0.4}
                  style={{
                    display: "block",
                    marginLeft: "auto",
                  }}
                />
              </Box>
            ) : undefined
          }
        >
          Complete Order
        </Button>
      </Box>

      {isDisabled && (
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(255,255,255,0.8)"
          zIndex="10"
          // Allow interaction on lg only (original behavior). On mobile, keep as is.
          pointerEvents="none"
        />
      )}
    </Box>
  );
};

export default CompleteOrder;
