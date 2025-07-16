"use client";

import React, { useEffect, useState } from "react";
import { ProjectPageProvider } from "@/context/ProjectsPageContext/ProjectsPageContext";
import ProduceDetails from "@/components/ProfilePageComponents/ProduceDetails/page";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";
import { useParams, useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import { getListingsById } from "@/services/api/projects";
import PageLoader from "@/components/Common/PageLoader/PageLoader";
import { getProductCategoryTitle } from "@/utils/getProductCategoryTitle";

const ProjectPage = () => {
  const { setChosenProject } = useGlobalContext();
  const { user } = useAuthContext();
  const { id } = useParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    if (user) {
      getListingsById(id as string).then((response) => {
        setData(response);
        setIsLoading(false);
      });
    }
  }, [id, user]);

  return (
    <ProjectPageProvider>
      {isLoading ? (
        <PageLoader />
      ) : (
        <ProduceDetails
          details={data}
          btns={
            <>
              <Link href={`/product-story/${data?._id}`} target="_blank">
                <Button
                  bgColor="transparent"
                  color="#282828"
                  borderRadius="2rem"
                  px={{ base: "1.5rem", md: "2.5rem" }}
                  py={{ base: "12px", md: "14px" }}
                  fontSize={{ base: "14px", md: "16px" }}
                  fontWeight={400}
                  mb={{ base: "24px", md: "32px" }}
                  border="1px solid #282828"
                  _hover={{ bg: "rgba(40, 40, 40, .1)" }}
                  width="100%"
                  mt={{ base: "24px", md: "32px" }}
                >
                  View Product Story
                </Button>
              </Link>

              <Button
                borderRadius="2rem"
                px={{ base: "1.5rem", md: "2.5rem" }}
                py={{ base: "12px", md: "14px" }}
                fontSize={{ base: "14px", md: "16px" }}
                fontWeight={400}
                mb={{ base: "32px", md: "48px" }}
                width="100%"
                bg="agrify_green"
                _hover={{ bg: "#0ba842" }}
                color="white"
                onClick={() => {
                  setChosenProject(data);
                  router.push("/purchase");
                }}
              >
                Buy {getProductCategoryTitle(data?.product?.name)}
              </Button>
            </>
          }
        />
      )}
    </ProjectPageProvider>
  );
};

export default ProjectPage;
