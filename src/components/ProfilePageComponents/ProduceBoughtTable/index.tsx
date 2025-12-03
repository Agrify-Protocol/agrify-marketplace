"use client";

import FourColumnTableRow from "@/components/Common/FourColumnTableRow/FourColumnTableRow";
import Spinner from "@/components/Common/Spinner/Spinner";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import { getOrders } from "@/services/api/profile";
import { formatSnakeCaseTitle } from "@/utils/formatSnakeCaseTitle";
import getStatusProps from "@/utils/getStatusProps";
import { readableDate } from "@/utils/parseData";
import { Flex, Grid, Box, Text, useToast } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProduceBoughtTable = () => {
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>([]);
  const toast = useToast();

  useEffect(() => {
    if (user) {
      setIsLoading(true);
      getOrders(toast)
        .then((response) => {
          if (response) {
            setData(response?.orders ?? []);
            setIsLoading(false);
          }
        })
        .catch(() => setData([]));
    }
  }, [user]);

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
      ) : data?.length >= 1 ? (
        <>
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
          <Box>
            {data?.map((order: any, idx: number) => {
              return (
                <Link
                  key={`${order?.orderId}-${idx}`}
                  href={`/profile/organic-produce/produce-details/${order?.orderId}`}
                >
                  <FourColumnTableRow
                    talbeBody={
                      <>
                        <Text
                          fontWeight={450}
                          color={"black"}
                          pl={"1.25rem"}
                          textTransform="capitalize"
                        >
                          {formatSnakeCaseTitle(order?.listing?.name) ?? "N/A"}
                        </Text>
                        <Text
                          textTransform={"capitalize"}
                          bgColor={getStatusProps(order?.deliveryStatus).bg}
                          color={getStatusProps(order?.deliveryStatus).text}
                          w={"fit-content"}
                          p={"0.5rem 1rem"}
                          borderRadius={"1.89rem"}
                          fontSize={"0.875rem"}
                          display={{ base: "none", lg: "block" }}
                        >
                          {formatSnakeCaseTitle(order?.deliveryStatus)}
                        </Text>
                        <Text
                          color={"black"}
                          display={{ base: "none", lg: "block" }}
                        >
                          {order?.listing?.batchSize?.toLocaleString()}
                        </Text>
                        <Text
                          color={"black"}
                          display={{ base: "none", lg: "block" }}
                          style={{ textWrap: "nowrap" }}
                        >
                          {readableDate(String(order?.createdAt))}
                        </Text>
                      </>
                    }
                  />
                </Link>
              );
            })}
          </Box>
        </>
      ) : (
        <Text textAlign={"center"}>No produce bought in this project</Text>
      )}
    </Box>
  );
};

export default ProduceBoughtTable;
