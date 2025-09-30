import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  Box,
  UnorderedList,
  ListItem,
  Text,
} from "@chakra-ui/react";
import countryList from "./countryList.json";
import React, { useEffect, useState } from "react";

interface CountryModalProp {
  isOpen: boolean;
  onClose: () => void;
  selectedCountry: any;
  setSelectedCountry: React.Dispatch<React.SetStateAction<any>>;
  title: string;
  name: string;
}

const CountryModal = ({
  isOpen,
  onClose,
  selectedCountry,
  setSelectedCountry,
  title,
  name,
}: CountryModalProp) => {
  const [searchValue, setSearchValue] = useState("");
  const [allCountries, setAllCountries] = useState(
    countryList?.sort((a, b) => a?.name?.common?.localeCompare(b?.name?.common))
  );

  useEffect(() => {
    const search = (searchValue: string) => {
      if (searchValue.trim() === "") {
        setAllCountries(countryList);
      } else {
        const filteredCountries = countryList.filter((country) =>
          country?.name?.common
            ?.toLowerCase()
            .includes(searchValue.toLowerCase())
        );
        setAllCountries(filteredCountries);
      }
    };
    if (searchValue) {
      search(searchValue);
    } else {
      setAllCountries(countryList);
    }
  }, [searchValue]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
        setSearchValue("");
      }}
      isCentered
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <Input
              width="100%"
              _placeholder={{
                textColor: name === "country_code" ? "black" : "#A6A6A6",
                fontSize: name === "farm_location" ? "14px" : "",
              }}
              focusBorderColor="#C8C8C8"
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              placeholder={`${
                name === "country_code"
                  ? `${selectedCountry?.flag} ${selectedCountry?.name?.common}`
                  : "Search by country name"
              }`}
            />
            <Box width="100%" my={4}>
              {allCountries.length ? (
                <UnorderedList
                  styleType="none"
                  maxHeight="300px"
                  overflow="scroll"
                  m={0}
                  transition="all 0.3s ease-in-out"
                  transitionDelay="0.3s"
                >
                  {allCountries.map((each) => (
                    <ListItem
                      key={each?.name?.common}
                      py={2}
                      px={1}
                      cursor="pointer"
                      backgroundColor={
                        each?.name?.common === selectedCountry?.name?.common
                          ? "#ebebeb"
                          : "transparent"
                      }
                      onClick={() => {
                        setSelectedCountry(each);
                        setSearchValue("");
                        onClose();
                      }}
                      _hover={{ backgroundColor: "#f3f3f3" }}
                    >{`${each?.flag}${" "}${" "}${
                      each?.name?.common
                    }`}</ListItem>
                  ))}
                </UnorderedList>
              ) : (
                <Box width="fit-content" mx="auto">
                  <Text textAlign="center">Nothing to display</Text>
                </Box>
              )}
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CountryModal;
