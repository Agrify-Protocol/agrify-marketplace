"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
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
    setAccessToken,
    FIELDS,
    isDisabled,
    handleCreateProductRequest,
    isLoading,
    isModalOpen,
    setSelectedCountry,
  } = useSourcingToolLogic(id);

  const displayInputByType = (
    id: string,
    type: string,
    details: Record<string, any>
  ) => {
    switch (type) {
      case "text":
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
            errorMsg={
              validatedInfo[id] === false && form[id] !== ""
                ? "Input must be a number"
                : ""
            }
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
              h={"3.5rem"}
              borderColor="gray_2"
              borderRadius={"1rem"}
              bg={"white"}
              value={form[id]}
              onChange={handleChangeInput}
              color={"#0f0f0fb3"}
              fontSize="0.875rem"
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
            <FormLabel fontWeight={400} fontSize="15px" mb="8px">
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
              h={"3.5rem"}
              bg={"white"}
              transition="all 0.1s ease-in-out"
              padding={2}
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                style={{
                  fontSize: "24px",
                  outline: "none",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: "16px",
                  cursor: "pointer",
                }}
              >
                {selectedCountry.flag}
                <Text fontSize="14px">{`${selectedCountry.idd.root}${selectedCountry.idd.suffixes}`}</Text>
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
            {validatedInfo[id] === false && form[id] !== "" ? (
              <Text color="red" fontSize="12px">
                Input must be a number
              </Text>
            ) : null}
          </Box>
        );
      default:
        break;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setAccessToken(token);
  }, []);

  return (
    <Box width="558px" margin="72px auto">
      <Text
        as="h1"
        fontWeight="450"
        fontSize="32px"
        textAlign="center"
        mb="40px"
      >
        What produce are you interested in?
      </Text>
      <Flex flexDir="column" gap="24px">
        {Object.entries(FIELDS).map(([id, details]) =>
          displayInputByType(id, details.type, details)
        )}
      </Flex>
      <Button
        w={"100%"}
        h={"3.5rem"}
        borderRadius={"1.5rem"}
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
        mt="40px"
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
