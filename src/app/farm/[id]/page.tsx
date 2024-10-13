"use client";

import FarmDetail from "@/components/FarmPageComponents/FarmDetail/FarmDetail";
import Slider from "@/components/FarmPageComponents/Slider/Slider";
import BackButton from "@/components/Layout/BackButton/BackButton";
import { Box, Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getFarm } from "@/services/api/farm";
import { DetailedFarm } from "./types";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import PageLoader from "@/components/Layout/PageLoader/PageLoader";

const FarmPage = ({ params }: { params: { id: string } }) => {
  const { user } = useAuthContext();
  const [farm, setFarm] = useState<DetailedFarm | null>(null);

  useEffect(() => {
    if (user) {
      getFarm(params.id).then((response) => {
        setFarm(response);
      });
    }
  }, [params.id, user]);

  if (!farm) {
    return <PageLoader />;
  }

  return (
    <Box
      my={{ base: "25px", lg: "4rem" }}
      px={{ base: "25px", lg: "2.625rem" }}
    >
      <BackButton />
      <Grid
        mt={{ base: "24px", lg: "3rem" }}
        gridTemplateColumns={{ lg: "3fr 2fr" }}
        gap={{ base: "48px", lg: "6.5rem" }}
      >
        <Slider images={farm?.farmImages} />
        <FarmDetail detail={farm} />
      </Grid>
    </Box>
  );
};

export default FarmPage;
