"use client";

import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Transaction } from "@/components/ProjectPageComponents/Purchases/types";
import { getAllPurchases } from "@/services/api/purchases";
import Spinner from "@/components/Common/Spinner/Spinner";
import FourColumnTableRow from "@/components/Common/FourColumnTableRow/FourColumnTableRow";
import { useAuthContext } from "@/context/AuthContext/AuthContext";

const FundedTable = () => {
  const { user } = useAuthContext();
  const [transactions, setTransations] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (user) {
      setIsLoading(true);
      getAllPurchases().then((response) => {
        setTransations(response);
        setIsLoading(false);
      });
    }
  }, [user]);
  return (
    <Box>
      <Grid
        bgColor={"#F5F5F5"}
        gridTemplateColumns={"2fr 1fr 1fr 1fr"}
        borderRadius={"1.5rem"}
        px={"1.25rem"}
        py={"0.375rem"}
        mb={"1.5rem"}
        color={"rgba(0,0,0,0.4)"}
      >
        <Text>Name</Text>
        <Text display={{ base: "none", lg: "block" }}>Payment</Text>
        <Text display={{ base: "none", lg: "block" }}>Location</Text>
        <Text display={{ base: "none", lg: "block" }}>Start Date</Text>
      </Grid>

      <>
        {isLoading ? (
          <Flex
            h={"fit-content"}
            w={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Spinner />
          </Flex>
        ) : transactions?.length < 1 ? (
          <Text textAlign={"center"} color={"black"}>
            No purchases found for this project
          </Text>
        ) : (
          <>
            {transactions?.map((transaction) => {
              return (
                <FourColumnTableRow
                  key={transaction._id}
                  transaction={transaction}
                />
              );
            })}
          </>
        )}
      </>
    </Box>
  );
};

export default FundedTable;
