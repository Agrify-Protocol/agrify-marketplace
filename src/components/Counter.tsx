import { Box, Button, Flex, Text } from "@chakra-ui/react";

const Counter = ({
  minValue,
  value,
  valueSetterFn,
  unit,
  total,
}: {
  minValue?: number;
  value: number;
  valueSetterFn: React.Dispatch<React.SetStateAction<number>>;
  unit: string;
  total: number;
}) => {
  return (
    <Box
      border="1.5px solid black"
      rounded="24px"
      width="fit-content"
      display="flex"
      alignItems="center"
      overflow="hidden"
    >
      <Button
        fontSize="24px"
        bgColor="transparent"
        disabled={value <= (minValue || 1)}
        cursor={value <= (minValue || 1) ? "not-allowed" : "pointer"}
        px="14px"
        rounded="0px"
        onClick={() =>
          valueSetterFn((prev) => (prev > (minValue || 1) ? prev - 1 : prev))
        }
      >
        -
      </Button>
      <Flex justifyContent="center" width="160px">
        <Text
          borderX="1.5px solid black"
          px="1rem"
          fontSize="24px"
          color="black"
          width="100%"
          textAlign="center"
        >
          {value} {unit}
        </Text>
      </Flex>

      <Button
        fontSize="24px"
        bgColor="transparent"
        disabled={value >= total}
        cursor={value >= total ? "not-allowed" : "pointer"}
        px="14px"
        rounded="0px"
        onClick={() =>
          valueSetterFn((prev) => (prev < total ? prev + 1 : prev))
        }
      >
        +
      </Button>
    </Box>
  );
};

export default Counter;
