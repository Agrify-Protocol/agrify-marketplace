import CustomInput from "@/components/Common/CustomInput/CustomInput";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { Inter_Display } from "@/fonts";

const DeliveryDetails = () => {
  const chosenOption = 1;
  const form = [
    {
      label: "Address 1",
      type: "input",
      placeHolder: "Enter Address",
      id: "address",
    },
    {
      label: "Country",
      type: "select",
      placeHolder: "Select Country",
      id: "country",
      options: ["Nigeria", "ghana"],
    },
    {
      label: "State",
      type: "select",
      placeHolder: "Select State",
      id: "state",
      options: ["Nigeria", "ghana"],
    },
    {
      label: "Postal Code",
      type: "input",
      placeHolder: "Enter Postal Code",
      id: "postal",
    },
    {
      label: "Phone Number",
      type: "input",
      placeHolder: "Enter Phone Number",
      id: "phone",
    },
  ];

  return (
    <Box px="75px">
      <Text fontSize="24px" color="black">
        Enter Delivery Details
      </Text>
      <FormControl mt="32px" display="flex" flexDir="column" gap="16px">
        {form.map((input) =>
          input.type === "input" ? (
            <CustomInput
              type="text"
              label={input.label}
              value=""
              changeFunc={() => null}
              placeholder={input.placeHolder}
              id={input.id}
            />
          ) : (
            <Box>
              <Text
                color="black"
                fontFamily={Inter_Display.style.fontFamily}
                fontWeight={400}
                mb="8px"
              >
                {input.label}
              </Text>
              <Select
                placeholder="Select option"
                focusBorderColor="gray_2"
                h={"3.5rem"}
                borderColor="gray_2"
                borderRadius={"1rem"}
                bg={"white"}
                _placeholder={{ color: "gray_1", fontSize: "0.875rem" }}
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Box>
          )
        )}
      </FormControl>
      <Button
        w={"100%"}
        h={"3.5rem"}
        borderRadius={"1.5rem"}
        bgColor={chosenOption > 0 ? "agrify_green" : "gray_3"}
        fontWeight={500}
        color={chosenOption > 0 ? "white" : "unset"}
        transition={"all 0.25s ease-in-out"}
        onClick={() => null}
        disabled={!chosenOption}
        cursor={chosenOption ? "pointer" : "not-allowed"}
        _hover={{
          bg: chosenOption ? "#0ba842" : "gray_3",
        }}
        mt="48px"
      >
        Continue
      </Button>
    </Box>
  );
};

export default DeliveryDetails;
