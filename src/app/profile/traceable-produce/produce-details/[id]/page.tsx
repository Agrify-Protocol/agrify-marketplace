"use client";

import ProduceDetails from "@/components/ProfilePageComponents/ProduceDetails/page";
import { Button, Flex, Text } from "@chakra-ui/react";
import Spinner from "@/components/Common/Spinner/Spinner";
import { useParams, useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import Link from "next/link";
import { useProduceDetails } from "@/hooks/queries/useOrderQueries";

const Details = () => {
  const params = useParams();
  const router = useRouter();
  const { user, fetchingUser } = useAuthContext();

  const { data, isLoading, isError, refetch } = useProduceDetails(
    params.id as string,
    !!user,
  );

  if (fetchingUser || isLoading) {
    return (
      <Flex h="80vh" w="100%" alignItems="center" justifyContent="center">
        <Spinner />
      </Flex>
    );
  }

  if (isError) {
    return (
      <Flex
        h="80vh"
        w="100%"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        gap="16px"
      >
        <Text color="red.500">Failed to load order details. Please try again.</Text>
        <Button variant="outline" size="sm" onClick={() => refetch()}>
          Retry
        </Button>
      </Flex>
    );
  }

  if (!data?.orderId) {
    return (
      <Flex
        h="80vh"
        w="100%"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        gap="16px"
      >
        <Text>Order not found.</Text>
        <Button variant="outline" size="sm" onClick={() => router.back()}>
          Go Back
        </Button>
      </Flex>
    );
  }

  return (
    <ProduceDetails
      user={!!user}
      details={data}
      btns={
        <>
          <Link
            href={`/product-story/${data?.listing?._id}`}
            target="_blank"
          >
            <Button
              bgColor="white"
              color="#282828"
              borderRadius={"2rem"}
              px={"2.5rem"}
              py="14px"
              fontWeight={400}
              mb={{ base: "24px", md: "10px" }}
              mt={{ base: "24px", md: "32px" }}
              _hover={{
                bg: "white",
              }}
              width="100%"
            >
              View Product Story
            </Button>
          </Link>

          {data?.deliveryStatus !== "completed" ? (
            <Link
              href={`/profile/traceable-produce/produce-details/track/${data?.orderId}`}
            >
              <Button
                bgColor="transparent"
                color="#282828"
                borderRadius={"2rem"}
                px={"2.5rem"}
                py="14px"
                fontWeight={400}
                mb="48px"
                border="1px solid #282828"
                _hover={{
                  bg: "rgba(40, 40, 40, .1)",
                }}
                width="100%"
              >
                Track Order
              </Button>
            </Link>
          ) : (
            <>
              {data?.txHash ? (
                <Link href={data?.txHash} target="_blank">
                  <Button
                    bgColor="transparent"
                    width="100%"
                    color="#282828"
                    borderRadius={"2rem"}
                    px={"2.5rem"}
                    py="14px"
                    fontWeight={400}
                    mb="32px"
                    border="1px solid #282828"
                    _hover={{
                      bg: "rgba(40, 40, 40, .1)",
                    }}
                  >
                    View on Block Explorer
                  </Button>
                </Link>
              ) : null}
            </>
          )}
        </>
      }
    />
  );
};

export default Details;
