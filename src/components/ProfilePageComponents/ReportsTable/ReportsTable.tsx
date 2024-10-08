"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ReportRow from "../ReportRow/ReportRow";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import { getReports } from "@/services/api/profile";
import { getReportTime } from "@/utils/reportTime";
import { readableDate } from "@/utils/parseData";
import Spinner from "@/components/Layout/Spinner/Spinner";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";

const ReportsTable = () => {
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);
  const { reports, setReports } = useGlobalContext();

  useEffect(() => {
    if (user) {
      setIsLoading(true);
      getReports().then((response) => {
        if (response) {
          setReports(response);
          setIsLoading(false);
        }
      });
    }
  }, [user]);

  return (
    <Box>
      {isLoading ? (
        <Flex
          h={"fit-content"}
          minW={"calc(100vw - (2.75rem * 2))"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Spinner />
        </Flex>
      ) : reports.length < 1 ? (
        <Text textAlign={"center"}>No reports found</Text>
      ) : (
        <>
          <Box
            bgColor={"#F5F5F5"}
            borderRadius={"1.5rem"}
            px={"1.25rem"}
            py={"0.375rem"}
            mb={"1.5rem"}
            color={"rgba(0,0,0,0.4)"}
            display={{ base: "block", lg: "none" }}
          >
            <Text>Name</Text>
          </Box>
          <Box display="flex" flexDirection="column" gap={5}>
            {reports.map((report) => {
              return (
                <ReportRow
                  key={report._id}
                  id={report._id}
                  name={report.reportName}
                  creation_time={getReportTime(report.createdAt.toString())}
                  creation_date={readableDate(report.createdAt.toString())}
                />
              );
            })}
          </Box>
        </>
      )}
    </Box>
  );
};

export default ReportsTable;
