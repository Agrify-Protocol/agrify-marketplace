import { Flex, Text } from "@chakra-ui/react";

const SectionItem = ({
  label,
  value,
}: {
  label: string;
  value: string | number | React.ReactNode;
}) => {
  return (
    <Flex
      key={label}
      alignItems="center"
      justifyContent="space-between"
      mb={{ base: "0.75rem", lg: "1rem" }}
      flexWrap="wrap"
      gap={{ base: "4px", sm: 0 }}
    >
      <Text fontSize={{ base: "14px", lg: "1.125rem" }}>{label}</Text>
      {["string", "number"].includes(typeof value) ? (
        <Text
          fontSize={{ base: "14px", lg: "1.125rem" }}
          fontWeight={450}
          color="rgba(1, 19, 8, 0.7)"
        >
          {value}
        </Text>
      ) : (
        value
      )}
    </Flex>
  );
};

export default SectionItem;
