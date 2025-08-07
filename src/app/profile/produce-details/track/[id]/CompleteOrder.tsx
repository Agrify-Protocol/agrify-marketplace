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
    return step !== status.length - 1 || data?.deliveryStatus === "delivered";
  }, [step, status, data]);

  return (
    <Box w="50%" px="75px" pt="130px" background="white" pos="relative">
      <Box>
        <Text fontSize="24px" fontWeight="450" color="black" mb="30px">
          Confirm Delivery
        </Text>
        <Text mb="26px">Confirm delivery of your package.</Text>
        <Button
          bgColor={!isDisabled ? "#0CC14C" : "#EEEEEE"}
          color={!isDisabled ? "white" : "#282828"}
          borderRadius="24px"
          mt="48px"
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
        />
      )}
    </Box>
  );
};

export default CompleteOrder;
