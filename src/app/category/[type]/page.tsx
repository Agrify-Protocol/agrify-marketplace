"use client";

import CategoryBanner from "@/components/CategoryPageComponents/CategoryBanner/CategoryBanner";
import ProjectTable from "@/components/CategoryPageComponents/ProjectTable/ProjectTable";
import { Box, Flex } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { categoryImages } from "@/components/HomePageComponents/CategoryContainer/constants";
import { useEffect, useState } from "react";
import { getCategories } from "@/services/api/projects";
import { CategoryData } from "./types";
import { LoaderCircle } from "lucide-react";
import { useAuthContext } from "@/context/AuthContext/AuthContext";

const CategoryPage = () => {
  const { type } = useParams();
  const { user } = useAuthContext();
  const [categoryData, setCategoryData] = useState<CategoryData | null>(null);

  useEffect(() => {
    if (user) {
      getCategories(type as string).then((response) => {
        setCategoryData(response);
      });
    }
  }, [type, user]);

  if (!categoryData) {
    return (
      <Flex minH={"50vh"} alignItems={"center"} justifyContent={"center"}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <LoaderCircle size={50} color="#0CC14C" />
        </motion.div>
      </Flex>
    );
  }

  return (
    <Box mt={"3.215rem"} px={"2.625rem"}>
      <CategoryBanner
        name={type as string}
        carbon_credits={categoryData?.["Total Available Credits"]}
        image={categoryImages[type as keyof typeof categoryImages]}
      />
      <ProjectTable
        carbon_credits={categoryData["Total Available Credits"]}
        projects={categoryData.data}
      />
    </Box>
  );
};

export default CategoryPage;
