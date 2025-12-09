"use client";

import { useSearchParams } from "next/navigation";
import CustomInput from "@/components/Common/CustomInput/CustomInput";
import CountryModal from "@/components/CountryModal";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormLabel,
  Select,
  Text,
} from "@chakra-ui/react";
import "./index.css";
import useSourcingToolLogic from "./useSourcingToolLogic";

const SourcingTool = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const {
    form,
    handleChangeInput,
    validatedInfo,
    setForm,
    setIsModalOpen,
    selectedCountry,
    fields,
    isDisabled,
    handleCreateProductRequest,
    isLoading,
    isModalOpen,
    setSelectedCountry,
  } = useSourcingToolLogic(id);

  const getInputErrorMessage = (id: string) => {
    const isValid = validatedInfo[id] === false && form[id] !== "";
    switch (true) {
      case isValid && ["sizeTons", "phoneNumber"].includes(id):
        return "Input must be a number";
      case isValid && id === "email":
        return "Email must be valid";
      case isValid && id === "name":
        return "Name must be valid";
      default:
        return "";
    }
  };

  const displayInputByType = (
    id: string,
    type: string,
    details: Record<string, any>
  ) => {
    switch (type) {
      case "text":
      case "email":
        return (
          <CustomInput
            key={id}
            id={id}
            placeholder={`Enter ${details.label.toLowerCase()}`}
            label={details.label}
            type={details.type}
            value={form[id]}
            changeFunc={handleChangeInput}
            isInvalid={validatedInfo[id] === false && form[id] !== ""}
            errorMsg={getInputErrorMessage(id)}
          />
        );
      case "radio":
        return (
          <Box key={id}>
            <FormLabel fontWeight={400} mb="16px">
              {details.label}
            </FormLabel>
            <Flex flexDir="column" gap="12px">
              {details.options.map((option: Record<string, any>) => (
                <Checkbox
                  colorScheme="green"
                  key={option.value}
                  value={option.value}
                  onChange={(e) => {
                    const { checked, value } = e.target;
                    setForm((prev) => ({
                      ...prev,
                      [id]: prev[id]
                        ? checked
                          ? [...prev[id], value]
                          : prev[id].filter((each: string) => each !== value)
                        : [value],
                    }));
                  }}
                >
                  {option.label}
                </Checkbox>
              ))}
            </Flex>
          </Box>
        );
      case "select":
        return (
          <Box key={id}>
            <FormLabel fontWeight={400} mb="16px">
              {details.label}
            </FormLabel>
            <Select
              variant="outline"
              placeholder={`Enter ${details.label.toLowerCase()}`}
              id={id}
              focusBorderColor="gray_2"
              h={{ base: "3rem", md: "3.5rem" }}
              borderColor="gray_2"
              borderRadius={"1rem"}
              bg={"white"}
              value={form[id]}
              onChange={handleChangeInput}
              color={"#0f0f0fb3"}
              fontSize={{ base: "0.8rem", md: "0.875rem" }}
            >
              {details.options.map((option: string) => (
                <option key={option} id={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </Box>
        );
      case "tel":
        return (
          <Box key={id}>
            <FormLabel
              fontWeight={400}
              fontSize={{ base: "14px", md: "15px" }}
              mb="8px"
            >
              {details.label}
            </FormLabel>
            <Box
              display="flex"
              alignItems="center"
              boxSizing="border-box"
              rounded="16px"
              border={`1px solid ${
                validatedInfo[id] === false && form[id] !== ""
                  ? "red"
                  : "#0f0f0f26"
              }`}
              h={{ base: "3rem", md: "3.5rem" }}
              bg={"white"}
              transition="all 0.1s ease-in-out"
              padding={2}
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                style={{
                  fontSize: "20px",
                  outline: "none",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: "16px",
                  cursor: "pointer",
                }}
              >
                {selectedCountry.flag}
                <Text fontSize={{ base: "12px", md: "14px" }}>
                  {`${selectedCountry.idd.root}${selectedCountry.idd.suffixes}`}
                </Text>
              </button>
              <input
                id={id}
                name={id}
                value={form[id]}
                placeholder={`Enter ${details.label.toLowerCase()}`}
                className="tel-input"
                onChange={handleChangeInput}
              />
            </Box>
            <Text color="red" fontSize="12px">
              {getInputErrorMessage(id)}
            </Text>
          </Box>
        );
      default:
        break;
    }
  };

  return (
    <Box
      width={{ base: "100%", md: "558px" }}
      px={{ base: "16px", md: "0" }}
      margin={{ base: "32px auto", md: "72px auto" }}
    >
      <Text
        as="h1"
        fontWeight="450"
        fontSize={{ base: "24px", md: "32px" }}
        textAlign="center"
        mb={{ base: "24px", md: "40px" }}
      >
        What produce are you interested in?
      </Text>
      <Flex flexDir="column" gap={{ base: "16px", md: "24px" }}>
        {Object.entries(fields).map(([id, details]) =>
          displayInputByType(id, details.type, details)
        )}
      </Flex>
      <Button
        w={"100%"}
        h={{ base: "3rem", md: "3.5rem" }}
        borderRadius={{ base: "1rem", md: "1.5rem" }}
        bgColor={isDisabled ? "gray_3" : "agrify_green"}
        fontWeight={500}
        color="white"
        transition={"all 0.25s ease-in-out"}
        onClick={handleCreateProductRequest}
        isLoading={isLoading}
        disabled={isDisabled}
        cursor={isDisabled ? "not-allowed" : "pointer"}
        _hover={{
          bg: isDisabled ? "gray_3" : "#0ba842",
        }}
        mt={{ base: "24px", md: "40px" }}
      >
        Request
      </Button>
      <CountryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        title="Select a country"
        name="country_code"
      />
    </Box>
  );
};

export default SourcingTool;
