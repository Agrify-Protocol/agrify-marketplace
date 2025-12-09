"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../../public/icons/logo-black.svg";
import { useState } from "react";
import CustomInput from "@/components/Common/CustomInput/CustomInput";
import CustomSelect from "@/components/Common/CustomSelect";
import countries from "@/components/PaymentPageComponents/DeliveryDetails/countries.json";
import CustomTextArea from "@/components/Common/CustomTextArea";
import {
  DocumentUpload,
  PreviewItem,
} from "@/components/Common/DocumentUpload";
import Button from "@/components/Common/Button";

const KYC = () => {
  const [details, setDetails] = useState({
    businessName: "",
    country: "",
    state: "",
    tradingAddress: "",
    businessDescription: "",
  });

  const [loading, setLoading] = useState(false);
  const [businessProof, setBusinessProof] = useState<File[]>([]);
  const [previews, setPreviews] = useState<PreviewItem[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { id, value } = e.target;
    setDetails((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <Box pb={5}>
      <Flex
        as="nav"
        py={5}
        justifyContent="center"
        position="sticky"
        bg="#F5F5F5"
        top={0}
        zIndex={10}
      >
        <Image src={logo} alt="agrify logo black theme" />
      </Flex>

      <Box
        as="main"
        maxW="558px"
        mx="auto"
        mt={{ base: 10, md: 16 }}
        px={{ base: 4, md: 0 }}
      >
        <Box textAlign="center">
          <Text fontWeight={500} fontSize="24px" color="black">
            Customer Details
          </Text>
          <Text mt="16px" mb="32px">
            Enter your project details
          </Text>
        </Box>

        <Box as="form" display="flex" flexDirection="column" gap="16px">
          <CustomInput
            type="text"
            value={details.businessName}
            changeFunc={handleInputChange}
            label="Business Name"
            placeholder="Enter your business name"
            id="businessName"
          />

          <CustomSelect
            value={details.country}
            changeFunc={handleInputChange}
            label="Country"
            placeholder="Select your country"
            id="country"
            options={countries.map((country) => ({
              label: country.name,
              value: country.name,
            }))}
          />

          <CustomSelect
            value={details.state}
            changeFunc={handleInputChange}
            label="State"
            placeholder="Select your state"
            id="state"
            options={
              countries
                .find((country) => country.name === details.country)
                ?.states.map((state) => ({
                  label: state.name,
                  value: state.name,
                })) ?? []
            }
          />

          <CustomInput
            type="text"
            value={details.tradingAddress}
            changeFunc={handleInputChange}
            label="Trading Address"
            placeholder="Enter your trading address"
            id="tradingAddress"
          />

          <CustomTextArea
            value={details.businessDescription}
            changeFunc={handleInputChange}
            label="Business Description"
            placeholder="Enter your business description"
            id="businessDescription"
          />

          <DocumentUpload
            title="Upload Proof of Business Ownership"
            setFiles={setBusinessProof}
            previews={previews}
            setPreviews={setPreviews}
          />

          <Button
            mt="32px"
            // disabled={
            //   Object.values(details).some((value) => value === "") || loading
            // }
            isLoading={loading}
            onClick={() => console.log({ ...details, businessProof })}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default KYC;
