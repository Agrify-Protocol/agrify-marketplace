import { Grid } from "@chakra-ui/react";
import React from "react";
import { categories } from "./constants";
import Category from "../Category/Category";

const CategoryContainer = () => {
  return (
    <Grid
      gap={"4.75rem"}
      mt={"3.5rem"}
      gridTemplateColumns={"repeat(auto-fill, minmax(23.063rem, 1fr))"}
    >
      {categories.map((category) => {
        return <Category key={category.id} category={category} />;
      })}
    </Grid>
  );
};

export default CategoryContainer;
