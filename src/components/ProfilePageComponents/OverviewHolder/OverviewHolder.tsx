"use client";

import { Flex, Grid, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { overviews } from "./constants";
import OverviewBox from "../OverviewBox/OverviewBox";
import { getOverview } from "@/services/api/profile";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import { OverviewType } from "./types";
import Spinner from "@/components/Common/Spinner/Spinner";

const OverviewHolder = () => {
  const { user } = useAuthContext();
  const [overview, setOverview] = useState<OverviewType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    if (user) {
      setIsLoading(true);
      getOverview(toast).then((response) => {
        console.log("response", response);
        if (response) {
          setOverview(response.data);
          setIsLoading(false);
        }
      });
    }
  }, [user]);

  console.log("user", user);

  return (
    <Grid
      gridTemplateColumns={{ lg: "repeat(2, 1fr)" }}
      gap={{ base: "13px", lg: "5.956rem" }}
      rowGap={{ base: "13px", lg: "2.888rem" }}
    >
      {isLoading && !overview ? (
        <Flex
          h={"fit-content"}
          minW={{ lg: "calc(100vw - (2.75rem * 2))" }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Spinner />
        </Flex>
      ) : (
        <>
          <OverviewBox
            title={overviews[0].title}
            heading={`${overview?.totalTonnes}`}
            content={overviews[0].content}
          />
          <OverviewBox
            title={overviews[1].title}
            heading={`${overview?.totalProjectsFunded}`}
            content={overviews[1].content}
          />
          <OverviewBox
            title={overviews[2].title}
            heading={`${overview?.totalAmount}`}
            content={overviews[2].content}
          />
        </>
      )}
    </Grid>
  );
};

export default OverviewHolder;
