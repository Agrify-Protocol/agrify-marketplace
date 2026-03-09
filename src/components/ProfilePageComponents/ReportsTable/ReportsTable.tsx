"use client";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ReportRow from "../ReportRow/ReportRow";
import { getReportTime } from "@/utils/reportTime";
import { readableDate } from "@/utils/parseData";
import Spinner from "@/components/Common/Spinner/Spinner";
import { useReports } from "@/hooks/queries/useProfileQueries";

const ReportsTable = () => {
  const { data: reports, isLoading, isError, refetch } = useReports();
  const reportList = reports ?? [];

  return (
    <Box>
      {isLoading ? (
        <Flex
          h={"fit-content"}
          w={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Spinner />
        </Flex>
      ) : isError ? (
        <Box textAlign="center" mt="32px">
          <Text mb="16px" color="red.500">
            Failed to load reports. Please try again.
          </Text>
          <Button variant="outline" size="sm" onClick={() => refetch()}>
            Retry
          </Button>
        </Box>
      ) : reportList.length < 1 ? (
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
            {reportList.map((report: any) => (
              <ReportRow
                key={report._id}
                id={report._id}
                name={report.reportName}
                creation_time={getReportTime(report.createdAt.toString())}
                creation_date={readableDate(report.createdAt.toString())}
              />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default ReportsTable;
