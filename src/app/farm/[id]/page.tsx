import FarmDetail from "@/components/FarmPageComponents/FarmDetail/FarmDetail";
import Slider from "@/components/FarmPageComponents/Slider/Slider";
import BackButton from "@/components/Layout/BackButton/BackButton";
import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import { farm_detail, farm_images } from "./constants";

const FarmPage = () => {
  return (
    <Box my={"4rem"} px={"2.625rem"}>
      <BackButton />
      <Grid mt={"3rem"} gridTemplateColumns={"3fr 2fr"} gap={"6.5rem"}>
        <Slider images={farm_images} />
        <FarmDetail detail={farm_detail} />
      </Grid>
    </Box>
  );
};

export default FarmPage;
