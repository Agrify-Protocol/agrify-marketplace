"use client";

import FourColumnTableRow from "@/components/Common/FourColumnTableRow/FourColumnTableRow";
import PageLoader from "@/components/Common/PageLoader/PageLoader";
import { formatSnakeCaseTitle } from "@/utils/formatSnakeCaseTitle";
import getStatusProps from "@/utils/getStatusProps";
import { readableDate } from "@/utils/parseData";
import { Box, Button, Grid, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useOrders } from "@/hooks/queries/useProfileQueries";

const ProduceBoughtTable = () => {
  const { data, isLoading, isError, refetch } = useOrders();
  const orders: any[] = data?.orders ?? [];

  if (isLoading) return <PageLoader />;

  if (isError) {
    return (
      <Box textAlign="center" mt="32px">
        <Text mb="16px" color="red.500">
          Failed to load orders. Please try again.
        </Text>
        <Button variant="outline" size="sm" onClick={() => refetch()}>
          Retry
        </Button>
      </Box>
    );
  }

  if (orders.length === 0) {
    return (
      <Text textAlign="center" mt="32px">
        No produce bought in this project
      </Text>
    );
  }

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
        <Text display={{ base: "none", lg: "block" }}>Status</Text>
        <Text display={{ base: "none", lg: "block" }}>Size</Text>
        <Text display={{ base: "none", lg: "block" }}>Date</Text>
      </Grid>
      <Box>
        {orders.map((order: any, idx: number) => (
          <Link
            key={`${order?.orderId}-${idx}`}
            href={`/profile/traceable-produce/produce-details/${order?.orderId}`}
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
        ))}
      </Box>
    </Box>
  );
};

export default ProduceBoughtTable;
