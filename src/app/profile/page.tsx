"use client";

import Pill from "@/components/CarbonCredits/Pill";
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
  const [isLoading, setIsLoading] = useState(false);
  const [organicProduceList, setOrganicProduceList] = useState<any>([]);
  const [carbonCreditList, setCarbonCreditList] = useState<any>([]);
  const toast = useToast();

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      try {
        setIsLoading(true);

        const [ordersResponse, carbonResponse] = await Promise.all([
          getOrders(toast),
          getCarbonCreditPurchaseHistory(toast),
        ]);

        setOrganicProduceList(ordersResponse?.orders ?? []);
        setCarbonCreditList(carbonResponse?.data ?? []);
      } catch {
        setOrganicProduceList([]);
        setCarbonCreditList([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [user]);

  return (
    <Box w="100%" pb={{ base: "4rem", lg: "6rem" }}>
      {/* Header */}
      <Box
        width="fit-content"
        mx="auto"
        textAlign="center"
        mt={{ base: "48px", md: "64px" }}
        mb={{ base: "32px", md: "40px" }}
        px={{ base: "16px", md: 0 }}
      >
        <Avatar
          name={`${user?.firstname ?? ""} ${user?.lastname ?? ""}`}
          mb="21px"
          size={{ base: "md", md: "lg" }}
        />

        <Text
          fontSize={{ base: "22px", md: "27px" }}
          color="black"
          fontWeight={450}
        >
          {`${user?.firstname ?? ""} ${user?.lastname ?? ""}`}
        </Text>

        <Text fontSize={{ base: "14px", md: "15px" }}>
          Here’s order history
        </Text>
      </Box>

      {/* Main Content */}
      <Box px={{ base: "20px", md: "32px", lg: "40px" }}>
        <SectionTabs
          sections={["Traceable Produce", "Climate Art"]}
          currentSection={tabId}
          type="my profile"
        />

        {isLoading ? (
          <PageLoader />
        ) : [tabId === "climate art" ? carbonCreditList : organicProduceList]
            ?.length <= 0 ? (
          <Box width="100%" textAlign="center" mt="64px">
            <Text>
              {tabId === "climate art"
                ? "No art orders found."
                : "No traceable produce orders found."}
            </Text>
          </Box>
        ) : (
          <Table
            thead={
              tabId === "climate art"
                ? ["Name", "Type", "Amount", "Date"]
                : ["Name", "Status", "Size", "Date"]
            }
          >
            {tabId === "climate art"
              ? carbonCreditList?.map(
                  (item: Record<string, string | null | number>) => (
                    <Tr
                      key={item.id}
                      cursor="pointer"
                      _hover={{ bg: "#F5F5F566" }}
                      onClick={() =>
                        router.push(`/profile/climate-art/${item.id}`)
                      }
                    >
                      <Td>{item.projectName}</Td>
                      <Td>
                        <Pill status={item.type as string} />
                      </Td>
                      <Td isNumeric>
                        {item.purchasedTonnes?.toLocaleString()}
                      </Td>
                      <Td>{readableDate(String(item.purchasedAt))}</Td>
                    </Tr>
                  ),
                )
              : organicProduceList?.map((order: any, idx: number) => (
                  <Tr
                    cursor="pointer"
                    _hover={{ bg: "#F5F5F566" }}
                    key={`${order?.orderId}-${idx}`}
                    onClick={() =>
                      router.push(
                        `/profile/traceable-produce/produce-details/${order?.orderId}`,
                      )
                    }
                  >
                    <Td fontSize={{ base: "14px", md: "15px" }}>
                      {formatSnakeCaseTitle(order?.listing?.name) ?? "N/A"}
                    </Td>

                    <Td>
                      <Text
                        textTransform="capitalize"
                        bgColor={getStatusProps(order?.deliveryStatus).bg}
                        color={getStatusProps(order?.deliveryStatus).text}
                        w="fit-content"
                        p="0.5rem 1rem"
                        borderRadius="1.89rem"
                        fontSize="0.875rem"
                      >
                        {formatSnakeCaseTitle(order?.deliveryStatus)}
                      </Text>
                    </Td>

                    <Td>
                      {order?.listing?.batchSize?.toLocaleString() ?? "N/A"}
                    </Td>

                    <Td>{readableDate(String(order?.createdAt))}</Td>
                  </Tr>
                ))}
          </Table>
        )}
      </Box>
    </Box>
  );
};

export default Profile;
