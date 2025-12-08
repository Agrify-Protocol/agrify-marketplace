"use client";

import PageLoader from "@/components/Common/PageLoader/PageLoader";
import Table from "@/components/Common/Table";
import SectionTabs from "@/components/ProjectPageComponents/SectionTabs/SectionTabs";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import {
  getCarbonCreditPurchaseHistory,
  getOrders,
} from "@/services/api/profile";
import { formatSnakeCaseTitle } from "@/utils/formatSnakeCaseTitle";
import getStatusProps from "@/utils/getStatusProps";
import { readableDate } from "@/utils/parseData";
import { Avatar, Box, Td, Text, Tr, useToast } from "@chakra-ui/react";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Profile = () => {
  const searchParams = useSearchParams();
  const tabId = searchParams.get("id");
  const router = useRouter();
  const { user } = useAuthContext();

  const [isLoading, setIsLoading] = useState(true);
  const [organicProduceList, setOrganicProduceList] = useState<any>([]);
  const [carbonCreditList, setCarbonCreditList] = useState<any>([]);
  const toast = useToast();

  useEffect(() => {
    if (user) {
      setIsLoading(true);
      getOrders(toast)
        .then((response) => {
          if (response) {
            setOrganicProduceList(response?.orders ?? []);
            setIsLoading(false);
          }
        })
        .catch(() => setOrganicProduceList([]));

      getCarbonCreditPurchaseHistory(toast)
        .then((response) => {
          if (response) {
            setCarbonCreditList(response?.orders ?? []);
            setIsLoading(false);
          }
        })
        .catch(() => setCarbonCreditList([]));
    }
  }, [user]);

  return (
    <Box>
      <Box width="fit-content" mx="auto" textAlign="center" mt="64px" mb="40px">
        <Avatar
          name={`${user?.firstname ?? ""} ${user?.lastname ?? ""}`}
          mb="21px"
          size="lg"
        />
        <Text fontSize="27px" color="black" fontWeight={450}>
          {`${user?.firstname ?? ""} ${user?.lastname ?? ""}`}
        </Text>
        {/* <Text>Joined 14th March 2025</Text> */}
        <Text>Here’s order history</Text>
      </Box>
      <Box px="40px">
        <SectionTabs
          sections={["Organic Produce", "Climate Arts"]}
          currentSection={tabId}
          type="my profile"
        />
        {isLoading ? (
          <PageLoader />
        ) : (
          <>
            {tabId === "climate arts" ? (
              carbonCreditList?.length > 0 ? (
                <Table thead={["Name", "Type", "Amount", "Date"]}>
                  <Tr
                    cursor="pointer"
                    _hover={{ bg: "#F5F5F566" }}
                    onClick={() =>
                      router.push(
                        `/profile/climate-arts/6933a5483aceb8bc3d8eaf31`
                      )
                    }
                  >
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td>millimetres (mm)</Td>
                    <Td isNumeric>25.4</Td>
                  </Tr>
                </Table>
              ) : (
                <Box width="100%" textAlign="center" mt="64px">
                  <p>No climate arts orders found.</p>
                </Box>
              )
            ) : organicProduceList?.length > 0 ? (
              <Table thead={["Name", "Status", "Size", "Date"]}>
                {organicProduceList?.map((order: any, idx: number) => (
                  <Tr
                    cursor="pointer"
                    _hover={{ bg: "#F5F5F566" }}
                    key={`${order?.orderId}-${idx}`}
                    onClick={() =>
                      router.push(
                        `/profile/organic-produce/produce-details/${order?.orderId}`
                      )
                    }
                  >
                    <Td>
                      {formatSnakeCaseTitle(order?.listing?.name) ?? "N/A"}
                    </Td>
                    <Td>
                      <Text
                        textTransform={"capitalize"}
                        bgColor={getStatusProps(order?.deliveryStatus).bg}
                        color={getStatusProps(order?.deliveryStatus).text}
                        w={"fit-content"}
                        p={"0.5rem 1rem"}
                        borderRadius={"1.89rem"}
                        fontSize={"0.875rem"}
                      >
                        {formatSnakeCaseTitle(order?.deliveryStatus)}
                      </Text>
                    </Td>
                    <Td>{order?.listing?.batchSize?.toLocaleString()}</Td>
                    <Td>{readableDate(String(order?.createdAt))}</Td>
                  </Tr>
                ))}
              </Table>
            ) : (
              <Box width="100%" textAlign="center" mt="64px">
                <p>No organic produce orders found.</p>
              </Box>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default Profile;
