"use client";

import CustomInput from "@/components/Common/CustomInput/CustomInput";
import { Button, FormControl } from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import { StoreFrontFormProps } from "./types";
import useObjectCheck from "@/hooks/useObjectCheck";
import { createPreorder } from "@/services/api/preorder";
import { useParams } from "next/navigation";
import {
  validateNumberInput,
  validatePhoneNumber,
} from "@/utils/validationSchema";

const StoreFrontForm = ({ setStep }: StoreFrontFormProps) => {
  const { id } = useParams();
  const initialState = {
    name: "",
    phoneNumber: "",
    amount: "",
    address: "",
  };
  const [data, setData] = useState(initialState);
  const updateData = (key: keyof typeof data, value: string | number) => {
    setData({ ...data, [key]: value });
  };
  const detailsFilled = useObjectCheck(data);

  const isPhoneValid = useMemo(() => {
    return validatePhoneNumber(data.phoneNumber);
  }, [data.phoneNumber]);

  const isAmountValid = useMemo(() => {
    return validateNumberInput(data.amount);
  }, [data.amount]);

  return (
    <FormControl
      mt={"3.502rem"}
      display={"grid"}
      gridTemplateColumns={"repeat(2, 1fr)"}
      gap={"2.5rem"}
    >
      <CustomInput
        label="Contact Name"
        placeholder="Enter Name"
        id="contact_name"
        type="text"
        value={data.name}
        changeFunc={(e) => updateData("name", e.currentTarget.value)}
      />
      <CustomInput
        label="Phone Number"
        placeholder="Enter Number"
        id="phone_number"
        type="text"
        value={data.phoneNumber}
        changeFunc={(e) => updateData("phoneNumber", e.currentTarget.value)}
        isInvalid={!isPhoneValid}
        errorMsg="Phone number must be valid"
      />
      <CustomInput
        label="Amount(In Kg)"
        placeholder="Enter size"
        id="amount"
        type="text"
        value={data.amount}
        changeFunc={(e) => updateData("amount", e.currentTarget.value)}
        isInvalid={!isAmountValid}
        errorMsg="Amount must be a number"
      />
      <CustomInput
        label="Delivery Location"
        placeholder="Enter location"
        id="location"
        type="text"
        value={data.address}
        changeFunc={(e) => updateData("address", e.currentTarget.value)}
      />
      <Button
        w={"11.375rem"}
        h={"2.688rem"}
        color={"white"}
        bgColor={"agrify_green"}
        borderRadius={"2rem"}
        fontWeight={500}
        type="submit"
        isDisabled={!detailsFilled}
        _hover={{
          bg: detailsFilled ? "#0ba842" : "white",
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          createPreorder(id as string, {
            ...data,
            amount: Number(data.amount),
          }).then(() => {
            setStep(2);
          });
        }}
      >
        Submit
      </Button>
    </FormControl>
  );
};

export default StoreFrontForm;
