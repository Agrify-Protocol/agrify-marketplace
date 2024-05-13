"use client";
import { useLayoutEffect, useState } from "react";

const useObjectCheck = (originalObject: { [x: string]: any }) => {
  const [detailsFilled, setDetailsFilled] = useState(false);

  useLayoutEffect(() => {
    const values = Object.values(originalObject);
    const fieldsAreFilled = values.every((value) => {
      return value != "";
    });
    setDetailsFilled(fieldsAreFilled);
  }, [originalObject]);

  return detailsFilled;
};

export default useObjectCheck;
