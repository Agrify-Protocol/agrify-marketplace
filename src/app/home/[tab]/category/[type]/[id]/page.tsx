"use client";

import React, { useEffect, useMemo, useState } from "react";
import { ProjectPageProvider } from "@/context/ProjectsPageContext/ProjectsPageContext";
import ProduceDetails from "@/components/ProfilePageComponents/ProduceDetails/page";
import Link from "next/link";
import { Box, Button, useToast } from "@chakra-ui/react";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";
import { useParams, useRouter } from "next/navigation";
import { getListingsById } from "@/services/api/projects";
import PageLoader from "@/components/Common/PageLoader/PageLoader";
import { formatSnakeCaseTitle } from "@/utils/formatSnakeCaseTitle";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import KYCRedirect from "@/components/KYC/Redirect";

const ProjectPage = () => {
  const { setChosenProject } = useGlobalContext();
  const { id } = useParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>([]);
  const { user, accessToken } = useAuthContext();
  const toast = useToast();

  const isLoggedIn = !!accessToken;

  useEffect(() => {
    getListingsById(id as string, toast).then((response) => {
      if (response) {
        setData(response);
      }
      setIsLoading(false);
    });
  }, [id, isLoggedIn]);

  if (!data?._id) return;

  return (
    <ProjectPageProvider>
      {isLoading ? (
        <PageLoader />
      ) : (
        <ProduceDetails
          user={isLoggedIn}
          details={data}
          btns={
            <>
              {!!isLoggedIn ? (
                <>
                  <Box>
                    <Button
                      borderRadius="2rem"
                      px={{ base: "1.5rem", md: "2.5rem" }}
                      py={{ base: "12px", md: "14px" }}
                      fontSize={{ base: "14px", md: "16px" }}
                      fontWeight={400}
                      mb="10px"
                      mt={{ base: "24px", md: "32px" }}
                      width="100%"
                      bg="agrify_green"
                      _hover={{ bg: "#0ba842" }}
                      color="white"
                      isDisabled={user?.kycStatus !== "approved"}
                      onClick={() => {
                        setChosenProject(data);
                        router.push("/purchase");
                      }}
                    >
                      Buy {formatSnakeCaseTitle(data?.product?.name)}
                    </Button>
                    {user?.kycStatus && (
                      <KYCRedirect status={user?.kycStatus} />
                    )}
                  </Box>
                  <Link href={`/product-story/${data?._id}`} target="_blank">
                    <Button
                      bgColor="transparent"
                      color="#282828"
                      borderRadius="2rem"
                      px={{ base: "1.5rem", md: "2.5rem" }}
                      py={{ base: "12px", md: "14px" }}
                      fontSize={{ base: "14px", md: "16px" }}
                      fontWeight={400}
                      mb={{ base: "32px", md: "48px" }}
                      border="1px solid #282828"
                      _hover={{ bg: "rgba(40, 40, 40, .1)" }}
                      width="100%"
                    >
                      View Product Story
                    </Button>
                  </Link>
                </>
              ) : (
                <Link
                  href={`/auth/login?category=${data?.name}&id=${data?._id}`}
                >
                  <Button
                    borderRadius="2rem"
                    px={{ base: "1.5rem", md: "2.5rem" }}
                    py={{ base: "12px", md: "14px" }}
                    fontSize={{ base: "14px", md: "16px" }}
                    fontWeight={400}
                    mb={{ base: "32px", md: "48px" }}
                    mt={{ base: "24px", md: "32px" }}
                    width="100%"
                    bg="agrify_green"
                    _hover={{ bg: "#0ba842" }}
                    color="white"
                  >
                    Sign In to Continue
                  </Button>
                </Link>
              )}
            </>
          }
        />
      )}
    </ProjectPageProvider>
  );
};

export default ProjectPage;
