"use client";

import { useLayoutEffect, useState } from "react";

type UseProgressPillsType = {
  pillContainerRef: React.MutableRefObject<HTMLDivElement | null>;
  available_carbon: number;
  total_carbon: number;
  pillWidthInPx: number;
  gapBetweenPillsInPx: number;
};

type PillsData = {
  id: number;
  isFilled: boolean;
}[];

const useProgressPills = ({
  pillContainerRef,
  available_carbon,
  total_carbon,
  pillWidthInPx,
  gapBetweenPillsInPx,
}: UseProgressPillsType) => {
  const [pills, setPills] = useState<PillsData>([]);

  const calculatePills = () => {
    if (pillContainerRef.current) {
      const container = pillContainerRef.current;
      const containerClientWidth = container.clientWidth;
      const pillSpace = pillWidthInPx + gapBetweenPillsInPx;
      
      const pillCount = Math.max(
        Math.floor(containerClientWidth / pillSpace),
        1
      );

      const initialPillData: PillsData = Array.from(
        { length: pillCount },
        (_, index) => {
          return { id: index + 1, isFilled: false };
        }
      );

      const availablePercentage = (available_carbon / total_carbon) * 100;

      const numberOfPillsToFill = Math.ceil(
        (availablePercentage / 100) * pillCount
      );

      const updatedPillsData = initialPillData.map((pill) => ({
        ...pill,
        isFilled: pill.id <= numberOfPillsToFill,
      }));

      setPills(updatedPillsData);
    }
  };

  useLayoutEffect(() => {
    calculatePills();
    window.addEventListener("resize", calculatePills);

    return () => {
      window.removeEventListener("resize", calculatePills);
    };
  }, [pillContainerRef, available_carbon, total_carbon, pillWidthInPx, gapBetweenPillsInPx]);

  return pills;
};

export default useProgressPills;
