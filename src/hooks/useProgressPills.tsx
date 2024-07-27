"use client";

import { useLayoutEffect, useState } from "react";

type UseProgressPillsType = {
  pillContainerRef: React.MutableRefObject<null>;
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
      let pillCount = 0;
      const container = pillContainerRef.current as HTMLDivElement;
      const containerClientWidth = container.clientWidth;
      const displayablePills = Math.floor(
        containerClientWidth / (pillWidthInPx + gapBetweenPillsInPx)
      );
      pillCount = displayablePills;

      const initialPillData: PillsData = Array.from(
        { length: pillCount },
        (_, index) => {
          return { id: index + 1, isFilled: false };
        }
      );

      const availablePercentage = Math.ceil(
        (available_carbon / total_carbon) * 100
      );

      const numberOfPillsToFill = Math.ceil(
        (availablePercentage / 100) * pillCount
      );

      const updatedPillsData = initialPillData.map((object) => {
        if (object.id <= numberOfPillsToFill) {
          return { ...object, isFilled: true };
        } else return { ...object, isFilled: false };
      });

      setPills(updatedPillsData);
    }
  };

  useLayoutEffect(() => {
    calculatePills();
    window.addEventListener("resize", calculatePills);
  }, [pillContainerRef, available_carbon, total_carbon]);

  return pills;
};

export default useProgressPills;
