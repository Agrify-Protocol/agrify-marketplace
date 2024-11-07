"use client";

import { Grid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Category from "../Category/Category";
import { getCategories } from "@/services/api/projects";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import PageLoader from "@/components/Common/PageLoader/PageLoader";

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
          gap={{ base: "48px", lg: "4.75rem" }}
          mt={"3.5rem"}
          gridTemplateColumns={{
            md: "repeat(auto-fill, minmax(23.063rem, 1fr))",
          }}
        >
          {categories.map((category) => (
            <Category key={category.category} category= {category} />
          ))}
        </Grid>
      ) : (
        <Text textAlign="center" w="100%" my="15vh">
          Oops! Nothing to display here :(
        </Text>
      )}
    </>
  );
};

export default CategoryContainer;
