"use client";

import React, { useEffect, useMemo, useState } from "react";
import { ProjectPageProvider } from "@/context/ProjectsPageContext/ProjectsPageContext";
import ProduceDetails from "@/components/ProfilePageComponents/ProduceDetails/page";
import Link from "next/link";
import { Box, Button, Text, useToast } from "@chakra-ui/react";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";
import { useParams, useRouter } from "next/navigation";
import { getListingsById } from "@/services/api/projects";
import PageLoader from "@/components/Common/PageLoader/PageLoader";
import { formatSnakeCaseTitle } from "@/utils/formatSnakeCaseTitle";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import { Info } from "lucide-react";

export const KYCRedirect = ({
  status,
}: {
  status: "none" | "pending" | "approved" | "rejected" | undefined;
}) => {
  if (["approved", undefined].includes(status)) return null;

  const getTextColor = () => {
    switch (status) {
      case "pending":
        return "orange";
      case "rejected":
        return "red";
      default:
        return "black";
    }
  };
  return (
    <Text
      fontSize={{ base: "12px", md: "14px" }}
      color={getTextColor()}
      mb="16px"
      display="flex"
      alignItems="center"
      gap="8px"
    >
      <Info />
      {status === "none" && (
        <Text as="span" color={getTextColor()}>
          Please complete your KYC to proceed with the purchase.{" "}
          <Link
            href="/kyc"
            style={{
              fontWeight: 500,
              textDecoration: "underline",
            }}
          >
            Complete KYC
          </Link>
        </Text>
      )}
      {status === "pending" && (
        <Text color={getTextColor()}>Your KYC is under review.</Text>
      )}
      {status === "rejected" && (
        <Text color={getTextColor()}>Your KYC was rejected.</Text>
      )}
    </Text>
  );
};

const ProjectPage = () => {
  const { setChosenProject } = useGlobalContext();
  const { id } = useParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>([]);
  const { user } = useAuthContext();
  const toast = useToast();
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setAccessToken(token);
  }, []);

  const isLoggedIn = useMemo(() => !!accessToken, [accessToken]);

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
