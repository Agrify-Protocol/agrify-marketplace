"use client";

import { Grid, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Category from "../Category/Category";
import { getCategories } from "@/services/api/projects";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";
import PageLoader from "@/components/Common/PageLoader/PageLoader";
import EmptyText from "@/components/Common/EmptyText/EmptyText";

const CategoryContainer = ({ search }: { search: string }) => {
  const { categories, setCategories } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    getCategories(toast, search).then((response) => {
      if (response) {
        setCategories(response?.products);
      }
      setIsLoading(false);
    });
  }, [search]);

  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : categories?.length ? (
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
          {categories?.map((category) => (
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
