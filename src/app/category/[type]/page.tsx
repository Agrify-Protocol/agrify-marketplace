"use client";

import CategoryBanner from "@/components/CategoryPageComponents/CategoryBanner/CategoryBanner";
import { categoryImages } from "@/components/CategoryPageComponents/CategoryBanner/constants";
import { Box } from "@chakra-ui/react";
import { useParams } from "next/navigation";

const CategoryPage = () => {
  const { type } = useParams();
  const categoryName = String(type).replace("_", " ");

  return (
    <Box mt={"3.215rem"} px={"2.625rem"}>
      <CategoryBanner
        name={categoryName}
        carbon_credits={200000}
        image={categoryImages[categoryName as keyof typeof categoryImages]}
      />
    </Box>
  );
};

export default CategoryPage;
