import {
  Box,
  Button,
  FormControl,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Inter_Display } from "@/fonts";
import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import countries from "./countries.json";
import { createOrder } from "@/services/api/profile";
import { validateLength, validatePhoneNumber } from "@/utils/validationSchema";
import CustomInput from "@/components/Common/CustomInput/CustomInput";

const DeliveryDetails = ({ chosenProject }: { chosenProject: any }) => {
  const router = useRouter();
  const toast = useToast();
  const requiredFields = [
    "address",
    "country",
    "state",
    "postalCode",
    "phoneNumber",
  ];

  const [payload, setPayload] = useState<Record<string, string | number>>({
    listingID: "",
    address: "",
    country: "",
    state: "",
    postalCode: "",
    phoneNumber: "",
    fee: 0,
    VAT: 1.46,
    expireAfter: 5, //5 days,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState<Record<string, boolean>>({
    address: false,
    postalCode: false,
    phoneNumber: false,
  });

  const isFormValid = useMemo(() => {
    return (
      requiredFields.every((field) => payload[field] !== "") &&
      Object.values(isValid).every((value) => value === true)
    );
  }, [payload]);

  const state = useMemo(() => {
    return countries.filter((country) => country.name === payload.country)[0]
      ?.states;
  }, [payload.country]);

  const form = [
    {
      label: "Address",
      type: "input",
      placeHolder: "Enter Address",
      id: "address",
    },
    {
      label: "Country",
      type: "select",
      placeHolder: "Select Country",
      id: "country",
      options: countries,
    },
    {
      label: "State",
      type: "select",
      placeHolder: "Select State",
      id: "state",
      options: state,
    },
    {
      label: "Postal Code",
      type: "input",
      placeHolder: "Enter Postal Code",
      id: "postalCode",
    },
    {
      label: "Phone Number",
      type: "input",
      placeHolder: "Enter Phone Number",
      id: "phoneNumber",
    },
  ];

  const minLengths: Record<string, number> = {
    address: 5,
    postalCode: 3,
    phoneNumber: 7,
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;

    setPayload((prev) => ({ ...prev, [id]: value }));

    if (["address", "postalCode", "phoneNumber"].includes(id)) {
      setIsValid((prev) => ({
        ...prev,
        [id]:
          id === "phoneNumber"
            ? validatePhoneNumber(value)
            : validateLength(value, minLengths[id]),
      }));
    }
  };

  const searchParams = useSearchParams();
  const method = searchParams.get("method");

  const handleCreateOrder = () => {
    setIsLoading(true);
    createOrder({ ...payload, paymentMethod: method as string }, toast).then(
      (res) => {
        if (res) {
          toast({
            title: "Successful!",
            description: "Redirecting to payment... Please don’t refresh.",
            status: "success",
            position: "top-right",
            duration: null,
            isClosable: false,
          });

          router.push(res?.paymentURL);
        }
        setIsLoading(false);
      }
    );
  };

  useEffect(() => {
    if (!chosenProject) {
      router.push("/home");
    }
    setPayload((prev) => ({
      ...prev,
      listingID: chosenProject?._id || "",
    }));
  }, [chosenProject]);

  const getInputErrorMsg = (input: Record<string, any>) => {
    if (!minLengths[input.id]) return "";
    if (input.id === "phoneNumber") {
      return "Phone number must be valid";
    } else {
      return `${input.label} must be at least ${
        minLengths[input.id]
      } characters long`;
    }
  };

  return (
    <Box
      px="75px"
      mb={{ base: "2rem", lg: 0 }}
      pl={{ base: "1.5rem", md: "2rem" }}
      pr={{ base: "1.5rem", md: "2rem" }}
    >
      <Text fontSize="24px" color="black">
        Enter Delivery Details
      </Text>
      <FormControl mt="32px" display="flex" flexDir="column" gap="16px">
        {form.map((input) =>
          input.type === "input" ? (
            <CustomInput
              type="text"
              label={input.label}
              value={payload[input.id]}
              changeFunc={handleChange}
              isInvalid={!isValid[input.id]}
              placeholder={input.placeHolder}
              errorMsg={getInputErrorMsg(input)}
              id={input.id}
              key={input.id}
            />
          ) : (
            <Box key={input.id}>
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
                id={input.id}
                value={payload[input.id]}
                onChange={handleChange}
                _placeholder={{ color: "gray_1", fontSize: "0.875rem" }}
              >
                {input.options?.map((item) => (
                  <option value={item.name} key={item.name}>
                    {item.name}
                  </option>
                ))}
              </Select>
            </Box>
          )
        )}
      </FormControl>
      <Button
        w={"100%"}
        h={"3.5rem"}
        borderRadius={"1.5rem"}
        bgColor={isFormValid ? "agrify_green" : "gray_3"}
        fontWeight={500}
        color={isFormValid ? "white" : "unset"}
        transition={"all 0.25s ease-in-out"}
        onClick={handleCreateOrder}
        isLoading={isLoading}
        disabled={isFormValid}
        cursor={isFormValid ? "pointer" : "not-allowed"}
        _hover={{
          bg: isFormValid ? "#0ba842" : "gray_3",
        }}
        mt="48px"
      >
        Continue
      </Button>
    </Box>
  );
};

export default DeliveryDetails;
