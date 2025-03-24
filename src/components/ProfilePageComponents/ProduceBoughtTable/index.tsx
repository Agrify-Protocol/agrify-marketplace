"use client";

import FourColumnTableRow from "@/components/Common/FourColumnTableRow/FourColumnTableRow";
import Spinner from "@/components/Common/Spinner/Spinner";
import { getOrders } from "@/services/api/profile";
import { readableDate } from "@/utils/parseData";
import { Flex, Grid, Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProduceBoughtTable = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
      setIsLoading(true);
      getOrders().then((response) => {
        if (response) {
          setData(response?.orders);
          setIsLoading(false);
        }
      });
  }, []);

  const router = useRouter();
  const getStatusProps = (status: string) => {
    switch (status) {
      case "delivered":
        return {
          bg: "rgba(12, 193, 76, 0.05)",
          text: "rgba(12, 193, 76, 1)",
        };
      case "pending":
      case "created":
        return {
          bg: "rgba(245, 203, 37, 0.05)",
          text: "rgba(245, 203, 37, 1)",
        };
      default:
        return {
          bg: "rgba(175, 174, 169, 0.05)",
          text: "rgb(61, 61, 60)",
        };
    }
  };

  return (
    <Box>
      {data?.length >= 1 || isLoading ? (
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
          <Text display={{ base: "none", lg: "block" }}>Status</Text>
          <Text display={{ base: "none", lg: "block" }}>Size</Text>
          <Text display={{ base: "none", lg: "block" }}>Date</Text>
        </Grid>
      ) : null}

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
        ) : data?.length < 1 ? (
          <Text textAlign={"center"}>No produce bought in this project</Text>
        ) : (
          <>
            {data?.map((transaction: any, idx: number) => {
              return (
                <FourColumnTableRow
                  key={`${transaction?.projectID}-${idx}`}
                  handleProduceClick={() =>
                    router.push(
                      `/profile/produce-details/${transaction?.orderId}`
                    )
                  }
                  talbeBody={
                    <>
                      <Text
                        fontWeight={450}
                        color={"black"}
                        pl={"1.25rem"}
                        textTransform="capitalize"
                      >
                        {transaction?.project?.title ?? "N/A"}
                      </Text>
                      <Text
                        textTransform={"capitalize"}
                        bgColor={getStatusProps(transaction?.deliveryStatus).bg}
                        color={getStatusProps(transaction?.deliveryStatus).text}
                        w={"fit-content"}
                        p={"0.5rem 1rem"}
                        borderRadius={"1.89rem"}
                        fontSize={"0.875rem"}
                        display={{ base: "none", lg: "block" }}
                      >
                        {transaction?.deliveryStatus}
                      </Text>
                      <Text
                        color={"black"}
                        display={{ base: "none", lg: "block" }}
                      >
                        {transaction?.quantity.toLocaleString()}
                      </Text>
                      <Text
                        color={"black"}
                        display={{ base: "none", lg: "block" }}
                        style={{ textWrap: "nowrap" }}
                      >
                        {readableDate(String(transaction?.createdAt))}
                      </Text>
                    </>
                  }
                />
              );
            })}
          </>
        )}
      </>
    </Box>
  );
};

export default ProduceBoughtTable;
