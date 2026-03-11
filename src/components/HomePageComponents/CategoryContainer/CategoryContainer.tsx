"use client";

import { Box, Button, Grid, Text } from "@chakra-ui/react";
import React from "react";
import Category from "../Category/Category";
import PageLoader from "@/components/Common/PageLoader/PageLoader";
import EmptyText from "@/components/Common/EmptyText/EmptyText";
import { useCategories } from "@/hooks/queries/useHomeQueries";

const CategoryContainer = ({ search }: { search: string }) => {
  const { data, isLoading, isError, refetch } = useCategories(search);
  const categories: any[] = data?.products ?? [];

  if (isLoading) return <PageLoader />;

  if (isError) {
    return (
      <Box textAlign="center" mt="48px">
        <Text mb="16px" color="red.500">
          Failed to load categories. Please try again.
        </Text>
        <Button variant="outline" size="sm" onClick={() => refetch()}>
          Retry
        </Button>
      </Box>
    );
  }

  return (
    <>
      {categories.length ? (
        <Grid
          mt="3.5rem"
          gridTemplateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          rowGap={10}
          columnGap={{ base: 6, md: 6 }}
        >
          {categories.map((category) => (
            <Category key={category?.productId} category={category} />
          ))}
        </Grid>
      ) : (
        <EmptyText />
      )}
    </>
  );
};

export default CategoryContainer;
