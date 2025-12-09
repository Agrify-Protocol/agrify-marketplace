import {
  TableContainer,
  Thead,
  Table as ChakraTable,
  Tr,
  Th,
  Tbody,
} from "@chakra-ui/react";
import React from "react";

const Table = ({
  thead,
  children,
}: {
  thead: string[];
  children: React.ReactNode;
}) => {
  return (
    <TableContainer
      bg="white"
      mt="24px"
      rounded="24px"
      p={{ base: "16px", md: "24px" }}
      overflowX="auto"
      whiteSpace="nowrap"
    >
      <ChakraTable variant="unstyled" size={{ base: "sm", md: "md" }}>
        <Thead bg="#F5F5F566" rounded="24px">
          <Tr>
            {thead.map((head) => (
              <Th
                key={head}
                fontSize={{ base: "13px", md: "15px" }}
                fontWeight={500}
                py={{ base: "10px", md: "14px" }}
              >
                {head}
              </Th>
            ))}
          </Tr>
        </Thead>

        <Tbody>{children}</Tbody>
      </ChakraTable>
    </TableContainer>
  );
};

export default Table;
