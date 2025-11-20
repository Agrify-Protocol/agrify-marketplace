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
    <TableContainer bg="white" mt="24px" rounded="24px" p="24px">
      <ChakraTable variant="unstyled">
        <Thead bg="#F5F5F566" rounded="24px">
          <Tr>
            {thead.map((head) => (
              <Th key={head}>{head}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>{children}</Tbody>
      </ChakraTable>
    </TableContainer>
  );
};

export default Table;
