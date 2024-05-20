"use client";

import { useLayoutEffect } from "react";

export const useScreenFreeze = (state: boolean) => {
  useLayoutEffect(() => {
    if (state) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }
  }, [state]);
};
