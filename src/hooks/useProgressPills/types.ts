import React from "react";

export type UseProgressPillsType = {
  pillContainerRef: React.MutableRefObject<HTMLDivElement | null>;
  available_carbon: number;
  total_carbon: number;
  pillWidthInPx: number;
  gapBetweenPillsInPx: number;
};

export type PillsData = {
  id: number;
  isFilled: boolean;
}[];
