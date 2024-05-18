import { Box } from "@chakra-ui/react";
import React from "react";
import { reports } from "./constants";
import ReportRow from "../ReportRow/ReportRow";

const ReportsTable = () => {
  return (
    <Box>
      {reports.map((report) => {
        return (
          <ReportRow
            key={report.id}
            name={report.name}
            creation_time={report.creation_time}
            creation_date={report.creation_date}
          />
        );
      })}
    </Box>
  );
};

export default ReportsTable;
