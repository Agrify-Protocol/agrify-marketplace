import { Flex, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface SearchProps {
  text: string;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ text, search, setSearch }: SearchProps) => {
  const [tempSearch, setTempSearch] = useState(search);

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearch(tempSearch);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [tempSearch]);

  return (
    <Flex
      mb={{ base: "32px", sm: "40px", md: "47px" }}
      flexDir={{ base: "column", sm: "row" }}
      gap={{ base: "1rem", sm: "0" }}
      justifyContent="space-between"
      alignItems={{ base: "flex-start", sm: "center" }}
    >
      <Text fontSize={{ base: "18px", sm: "20px" }} color="black">
        {text}
      </Text>
      <Input
        placeholder="Search"
        rounded="32px"
        border="none"
        bg="white"
        focusBorderColor="gray_2"
        _placeholder={{ color: "#B2B2B2" }}
        maxW={{ base: "100%", sm: "400px" }}
        value={tempSearch}
        onChange={(e) => setTempSearch(e.target.value)}
      />
    </Flex>
  );
};

export default Search;
