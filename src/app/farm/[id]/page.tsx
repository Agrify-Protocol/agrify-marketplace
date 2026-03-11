"use client";

import FarmDetail from "@/components/FarmPageComponents/FarmDetail/FarmDetail";
import Slider from "@/components/FarmPageComponents/Slider/Slider";
import { Box, Button, Grid, Text } from "@chakra-ui/react";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import PageLoader from "@/components/Common/PageLoader/PageLoader";
import BackButton from "@/components/Common/BackButton/BackButton";
import { useFarm } from "@/hooks/queries/useOrderQueries";

const FarmPage = ({ params }: { params: { id: string } }) => {
  const { user, fetchingUser } = useAuthContext();

  const {
    data: farm,
    isLoading,
    isError,
    refetch,
  } = useFarm(params.id, !!user);

  if (fetchingUser || isLoading) {
    return <PageLoader />;
  }

  if (isError) {
    return (
      <Box
        my={{ base: "25px", lg: "4rem" }}
        px={{ base: "25px", lg: "2.625rem" }}
        textAlign="center"
        mt="64px"
      >
        <Text mb="16px" color="red.500">
          Failed to load farm details. Please try again.
        </Text>
        <Button variant="outline" size="sm" onClick={() => refetch()}>
          Retry
        </Button>
      </Box>
    );
  }

  if (!farm) {
    return (
      <Box
        my={{ base: "25px", lg: "4rem" }}
        px={{ base: "25px", lg: "2.625rem" }}
        textAlign="center"
        mt="64px"
      >
        <Text mb="16px">Farm not found.</Text>
        <Button variant="outline" size="sm" onClick={() => refetch()}>
          Go Back
        </Button>
      </Box>
    );
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
        <Slider images={farm.farmImages} />
        <FarmDetail detail={farm} />
      </Grid>
    </Box>
  );
};

export default FarmPage;
