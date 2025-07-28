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
          gridGap="2rem"
          gridTemplateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(auto-fill, minmax(23.063rem, 1fr))",
          }}
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
