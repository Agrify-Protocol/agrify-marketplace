"use client";

import { Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Category from "../Category/Category";
import { getCategories } from "@/services/api/projects";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import PageLoader from "@/components/Layout/PageLoader/PageLoader";

const CategoryContainer = () => {
  const { user } = useAuthContext();
  const { categories, setCategories } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setIsLoading(true);
      getCategories().then((response) => {
        if (response) {
          setCategories(response.data);
          setIsLoading(false);
        }
      });
    }
  }, [user]);

  return (
    <Grid
      gap={{ base: "48px", lg: "4.75rem" }}
      mt={"3.5rem"}
      gridTemplateColumns={{ md: "repeat(auto-fill, minmax(23.063rem, 1fr))" }}
    >
      {isLoading ? (
        <PageLoader />
      ) : (
        <>
          {categories.map((category) => {
            return <Category key={category.category} category={category} />;
          })}
        </>
      )}
    </Grid>
  );
};

export default CategoryContainer;
