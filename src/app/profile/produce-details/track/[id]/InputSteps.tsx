import CustomInput from "@/components/Common/CustomInput/CustomInput";
import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

const InputSteps = ({
  step,
  setStep,
}: {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [code, setCode] = useState("");
  return (
    <Box
      w="50%"
      display={step >= 2 ? "none" : "block"}
      px="75px"
      pt="100px"
      background="white"
      boxShadow="0px 15px 30px 0px #00000014"
    >
      <Text fontSize="24px" fontWeight="450" color="black" mb="30px">
        Confirm Delivery
      </Text>
      <Text mb="50px">
        Enter the code sent over to you to confirm delivery of your package.
      </Text>
      <CustomInput
        id="first_name"
        value={code}
        type="text"
        placeholder="Enter Verification Code"
        label="Enter Code"
        changeFunc={(e) => setCode(e.target.value)}
      />
      <Button
        bgColor={code.length > 6 ? "#0CC14C" : "#EEEEEE"}
        color={code.length > 6 ? "white" : "#282828"}
        borderRadius="24px"
        mt="48px"
        py="20px"
        width="100%"
        fontWeight={500}
        _hover={{
          bg: code.length > 6 && "#0ba842",
        }}
        onClick={() => {
          setCode("");
          setStep((prev) => prev + 1);
        }}
        isDisabled={code.length <= 6}
      >
        Complete Order
      </Button>
    </Box>
  );
};

export default InputSteps;
