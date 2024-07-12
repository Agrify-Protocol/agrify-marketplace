"use client";

import CustomInput from "@/components/Common/CustomInput/CustomInput";
import { Button, FormControl } from "@chakra-ui/react";
import React, { useState } from "react";
import { StoreFrontFormProps } from "./types";

const StoreFrontForm = ({ setStep }: StoreFrontFormProps) => {
  const initialState = {
    contact_name: "",
    phone_number: "",
    amount: "",
    location: "",
  };
  const [data, setData] = useState(initialState);
  const updateData = (key: keyof typeof data, value: string | number) => {
    setData({ ...data, [key]: value });
  };

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
        value={data.contact_name}
        changeFunc={(e) => updateData("contact_name", e.currentTarget.value)}
      />
      <CustomInput
        label="Phone Number"
        placeholder="Enter Number"
        id="phone_number"
        type="number"
        value={data.phone_number}
        changeFunc={(e) => updateData("phone_number", e.currentTarget.value)}
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
        value={data.location}
        changeFunc={(e) => updateData("location", e.currentTarget.value)}
      />
      <Button
        w={"11.375rem"}
        h={"2.688rem"}
        color={"white"}
        bgColor={"agrify_green"}
        borderRadius={"2rem"}
        fontWeight={500}
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          setStep(2);
        }}
      >
        Submit
      </Button>
    </FormControl>
  );
};

export default StoreFrontForm;
