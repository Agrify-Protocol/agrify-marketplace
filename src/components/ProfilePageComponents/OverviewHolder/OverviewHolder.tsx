import { Grid } from "@chakra-ui/react";
import React from "react";
import { overviews } from "./constants";
import OverviewBox from "../OverviewBox/OverviewBox";

const OverviewHolder = () => {
  return (
    <Grid
      gridTemplateColumns={"repeat(2, 1fr)"}
      gap={"5.956rem"}
      rowGap={"2.888rem"}
    >
      {overviews.map((overview) => {
        return (
          <OverviewBox
            key={overview.title}
            title={overview.title}
            heading={overview.heading}
            content={overview.content}
          />
        );
      })}
    </Grid>
  );
};

export default OverviewHolder;
