"use client";

import CustomInput from "@/components/Common/CustomInput/CustomInput";
import { Button, FormControl } from "@chakra-ui/react";
import React, { useState } from "react";
import { StoreFrontFormProps } from "./types";
import useObjectCheck from "@/hooks/useObjectCheck";
import { createPreorder, PreorderPayload } from "@/services/api/preorder";
import { useParams } from "next/navigation";

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
        type="number"
        value={data.phoneNumber}
        changeFunc={(e) => updateData("phoneNumber", e.currentTarget.value)}
      />
      <CustomInput
        label="Amount(In Kg)"
        placeholder="Enter size"
        id="amount"
        type="number"
        value={data.amount}
        changeFunc={(e) => updateData("amount", e.currentTarget.value)}
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
