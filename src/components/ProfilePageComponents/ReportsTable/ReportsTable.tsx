"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ReportRow from "../ReportRow/ReportRow";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import { getReports } from "@/services/api/profile";
import { ReportType } from "./types";
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
      {isLoading && reports.length < 1 && (
        <Flex
          h={"fit-content"}
          minW={"calc(100vw - (2.75rem * 2))"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Spinner />
        </Flex>
      )}
      {!isLoading && reports.length < 1 && (
        <Text textAlign={"center"}>No reports found</Text>
      )}
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
    </Box>
  );
};

export default ReportsTable;
