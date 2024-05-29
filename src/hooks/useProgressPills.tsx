"use client";

import { useLayoutEffect, useState } from "react";

type UseProgressPillsType = {
  pillContainerRef: React.MutableRefObject<null>;
  available_carbon: number;
  total_carbon: number;
};

type PillsData = {
  id: number;
  isFilled: boolean;
}[];

const useProgressPills = ({
  pillContainerRef,
  available_carbon,
  total_carbon,
}: UseProgressPillsType) => {
  const [pills, setPills] = useState<PillsData>([]);

  useLayoutEffect(() => {
    if (pillContainerRef.current) {
      let pillCount = 0;
      const container = pillContainerRef.current as HTMLDivElement;
      const containerClientWidth = container.clientWidth;
      const pillLengthInPx = 20;
      const gapBetweenPillsInPx = 4;
      const displayablePills = Math.floor(
        containerClientWidth / (pillLengthInPx + gapBetweenPillsInPx)
      );
      pillCount = displayablePills;

      const initialPillData: PillsData = [];
      for (let i = 0; i < pillCount; i++) {
        initialPillData.push({ id: i + 1, isFilled: false });
      }

      const availablePercentage = Math.ceil(
        (available_carbon / total_carbon) * 100
      );

      const numberOfPillsToFill = Math.ceil(
        (availablePercentage / 100) * pillCount
      );

      const updatedPillsData = initialPillData.map((object) => {
        if (object.id < numberOfPillsToFill) {
          return { ...object, isFilled: true };
        } else return { ...object, isFilled: false };
      });

      setPills(updatedPillsData);
    }
  }, [pillContainerRef, available_carbon, total_carbon]);

  return pills;
};

export default useProgressPills;
