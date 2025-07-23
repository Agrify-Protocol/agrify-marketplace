"use client";

import ProduceDetails from "@/components/ProfilePageComponents/ProduceDetails/page";
import { useEffect, useState } from "react";
import { Button, Flex } from "@chakra-ui/react";
import Spinner from "@/components/Common/Spinner/Spinner";
import { getProduceDetails } from "@/services/api/profile";
import { useParams } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import Link from "next/link";

const Details = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>({});
  const params = useParams();
  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      getProduceDetails(params.id).then((response) => {
        if (response) {
          setData(response);
          setIsLoading(false);
        }
      });
    }
  }, [user]);

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
          user={user}
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
                  mt="32px"
                  mb="32px"
                  _hover={{
                    bg: "white",
                  }}
                  width="100%"
                >
                  View Product Story
                </Button>
              </Link>

              {data?.deliveryStatus !== "completed" && (
                <Link href={`/profile/produce-details/track/${data?.orderId}`}>
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
              )}
            </>
          }
        />
      )}
    </>
  );
};

export default Details;
