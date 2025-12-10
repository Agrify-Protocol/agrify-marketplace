"use client";

import ProduceDetails from "@/components/ProfilePageComponents/ProduceDetails/page";
import { useEffect, useMemo, useState } from "react";
import { Button, Flex, useToast } from "@chakra-ui/react";
import Spinner from "@/components/Common/Spinner/Spinner";
import { getProduceDetails } from "@/services/api/profile";
import { useParams } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import Link from "next/link";

const Details = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>({});
  const [txHash, setTxHash] = useState(null);
  const params = useParams();
  const { user, accessToken } = useAuthContext();
  const toast = useToast();

  const isLoggedIn = useMemo(() => !!accessToken, [accessToken]);

  useEffect(() => {
    if (user) {
      getProduceDetails(params.id, toast).then((response) => {
        if (response) {
          setData(response);
        }
        setIsLoading(false);
      });
    }
  }, [user]);

  if (!data?.orderId) return;

  return (
    <>
      {isLoading ? (
        <Flex
          h="80vh"
          w={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Spinner />
        </Flex>
      ) : (
        <ProduceDetails
          user={isLoggedIn}
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
                  href={`/profile/organic-produce/produce-details/track/${data?.orderId}`}
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
      )}
    </>
  );
};

export default Details;
