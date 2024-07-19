"use client";

import { Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Category from "../Category/Category";
import { CategoryObject } from "./types";
import { getCategories } from "@/services/api/projects";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";
import { useAuthContext } from "@/context/AuthContext/AuthContext";

const CategoryContainer = () => {
  const { user } = useAuthContext();
  const { categories, setCategories } = useGlobalContext();
  useEffect(() => {
    if (user) {
      getCategories().then((response) => {
        if (response) {
          setCategories(response.data);
          console.log("Response:", response);
        }
      });
    }
  }, [user]);
  return (
    <Grid
      gap={"4.75rem"}
      mt={"3.5rem"}
      gridTemplateColumns={"repeat(auto-fill, minmax(23.063rem, 1fr))"}
    >
      {categories.map((category) => {
        return <Category key={category.category} category={category} />;
      })}
    </Grid>
  );
};

export default CategoryContainer;
