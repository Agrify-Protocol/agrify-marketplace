"use client";

import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { Transaction } from "@/components/ProjectPageComponents/Purchases/types";
import Spinner from "@/components/Common/Spinner/Spinner";
import FourColumnTableRow from "@/components/Common/FourColumnTableRow/FourColumnTableRow";
import { useAllPurchases } from "@/hooks/queries/useProfileQueries";

const FundedTable = () => {
  const { data: transactions, isLoading, isError, refetch } = useAllPurchases();
  const items: Transaction[] = transactions ?? [];

  return (
    <Box>
      {isLoading ? (
        <Flex
          h={"fit-content"}
          w={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Spinner />
        </Flex>
      ) : isError ? (
        <Box textAlign="center" mt="32px">
          <Text mb="16px" color="red.500">
            Failed to load funded projects. Please try again.
          </Text>
          <Button variant="outline" size="sm" onClick={() => refetch()}>
            Retry
          </Button>
        </Box>
      ) : items.length === 0 ? (
        <Text textAlign={"center"}>
          No project funded found for this project
        </Text>
      ) : (
        <>
          {items.map((transaction) => (
            <>
              <Grid
                bgColor={"#F5F5F5"}
                gridTemplateColumns={"2fr 1fr 1fr 1fr"}
                borderRadius={"1.5rem"}
                px={"1.25rem"}
                py={"0.375rem"}
                mb={"1.5rem"}
                color={"rgba(0,0,0,0.4)"}
                key={`header-${transaction._id}`}
              >
                <Text>Name</Text>
                <Text display={{ base: "none", lg: "block" }}>Payment</Text>
                <Text display={{ base: "none", lg: "block" }}>Location</Text>
                <Text display={{ base: "none", lg: "block" }}>Start Date</Text>
              </Grid>
              <FourColumnTableRow
                key={transaction._id}
                transaction={transaction}
              />
            </>
          ))}
        </>
      )}
    </Box>
  );
};

export default FundedTable;
