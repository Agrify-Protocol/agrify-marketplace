import { spinAnimation } from "@/components/AuthPageComponents/AuthPageSubmitButton/helpers";
import { completeOrder } from "@/services/api/profile";
import { Box, Button, Text, useToast } from "@chakra-ui/react";
import { LoaderCircle } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

const CompleteOrder = ({
  status,
  step,
  reload,
  setReload,
  setIsOpen,
}: {
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

  return (
    <Box w="50%" px="75px" pt="130px" background="white" pos="relative">
      <Box
      // display={step >= 2 ? "none" : "block"}
      >
        <Text fontSize="24px" fontWeight="450" color="black" mb="30px">
          Confirm Delivery
        </Text>
        <Text mb="26px">Confirm delivery of your package.</Text>
        <Button
          bgColor={step === status.length - 1 ? "#0CC14C" : "#EEEEEE"}
          color={step === status.length - 1 ? "white" : "#282828"}
          borderRadius="24px"
          mt="48px"
          py="20px"
          width="100%"
          fontWeight={500}
          _hover={{
            bg: step === status.length - 1 && "#0ba842",
          }}
          onClick={handleCompleteOrder}
          isDisabled={step !== status.length - 1}
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
      {step !== status.length - 1 && (
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(255,255,255,0.8)"
          zIndex="10"
        />
      )}
    </Box>
  );
};

export default CompleteOrder;
