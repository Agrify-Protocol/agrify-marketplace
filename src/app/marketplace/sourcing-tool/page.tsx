"use client";

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
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import countryList from "@/components/CountryModal/countryList.json";
import "./index.css";
import { formatSnakeCaseTitle } from "@/utils/formatSnakeCaseTitle";

const SourcingTool = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [selectedCountry, setSelectedCountry] = useState<any>(countryList[0]);
  const [form, setForm] = useState<Record<string, any>>({
    name: id ? formatSnakeCaseTitle(id) : "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const FIELDS = {
    name: {
      label: "Produce Name",
      type: "text",
    },
    size: {
      label: "Size (in tons)",
      type: "text",
    },
    phone: {
      label: "Phone Number",
      type: "tel",
    },
    delivery: {
      label: "Delivery Location",
      type: "text",
    },
    budget: {
      label: "Annual produce purchase spend",
      type: "select",
      options: [
        { value: "<10000", label: "Less than $10,000" },
        { value: "10000-50000", label: "$10,000 – $50,000" },
        { value: "50001-100000", label: "$50,001 – $100,000" },
        { value: "100001-250000", label: "$100,001 – $250,000" },
        { value: "250001-500000", label: "$250,001 – $500,000" },
        { value: "500001-1000000", label: "$500,001 – $1,000,000" },
        { value: ">1000000", label: "Over $1,000,000" },
      ],
    },
    others: {
      label: "Do any of these matter to you? Select the ones that apply",
      type: "radio",
      options: [
        "Traceability of produce to the farm it came from",
        "Regenerative farming practices verified",
        "Lab-tested with compliance certificate",
        "Secured payment and delivery through escrow",
      ],
    },
  };

  const [accessToken, setAccessToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setAccessToken(token);
  }, []);

  const isLoggedIn = useMemo(() => !!accessToken, [accessToken]);

  const handleChangeInput = (e: any) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const isDisabled = ["name", "budget", "delivery", "phone", "size"].some(
    (key) => form[key] === "" || form[key] === undefined
  );

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
          />
        );
      case "radio":
        return (
          <Box key={id}>
            <FormLabel fontWeight={400} mb="16px">
              {details.label}
            </FormLabel>
            <Flex flexDir="column" gap="12px">
              {details.options.map((option: string) => (
                <Checkbox
                  colorScheme="green"
                  key={option}
                  value={option}
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
                  {option}
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
              {details.options.map((option: Record<string, any>) => (
                <option
                  key={option.value}
                  id={option.value}
                  value={option.value}
                >
                  {option.label}
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
              border="1px solid #0f0f0f26"
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
          </Box>
        );
      default:
        break;
    }
  };

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
        onClick={() => {
          if (!!isLoggedIn) {
            console.log(form);
          } else {
            localStorage.setItem("sourcing_tool_form", JSON.stringify(form));
            router.push(`/auth/login?sourcing-tool=${id}`);
          }
        }}
        isLoading={false}
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
