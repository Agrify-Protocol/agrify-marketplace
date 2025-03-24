"use client";

import ProduceDetails from "@/components/ProfilePageComponents/ProduceDetails/page";
import { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import Spinner from "@/components/Common/Spinner/Spinner";
import { getProduceDetails } from "@/services/api/profile";
import { useParams } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext/AuthContext";

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
        <ProduceDetails details={data} />
      )}
    </>
  );
};

export default Details;
