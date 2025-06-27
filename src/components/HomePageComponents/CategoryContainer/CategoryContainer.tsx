"use client";

import { Grid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Category from "../Category/Category";
import { getCategories } from "@/services/api/projects";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import PageLoader from "@/components/Common/PageLoader/PageLoader";
import EmptyText from "@/components/Common/EmptyText/EmptyText";

const CategoryContainer = () => {
  const { user } = useAuthContext();
  const { categories, setCategories } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setIsLoading(true);
      getCategories().then((response) => {
        if (response) {
          setCategories(response?.data);
          setIsLoading(false);
        }
      });
    }
  }, [user]);

  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : categories?.length ? (
        <Grid
          gap={{ base: "2rem", md: "3rem", lg: "4.75rem" }}
          mt="3.5rem"
          gridTemplateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(auto-fill, minmax(23.063rem, 1fr))",
          }}
        >
          {categories.map((category) => (
            <Category key={category.category} category={category} />
          ))}
        </Grid>
      ) : (
        <EmptyText />
      )}
    </>
  );
};

export default CategoryContainer;
