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

const ReportsTable = () => {
  const { user } = useAuthContext();
  const [reports, setReports] = useState<ReportType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
      {reports.map((report) => {
        return (
          <ReportRow
            key={report._id}
            name={report.reportName}
            creation_time={getReportTime(report.createdAt.toString())}
            creation_date={readableDate(report.createdAt.toString())}
          />
        );
      })}
    </Box>
  );
};

export default ReportsTable;
