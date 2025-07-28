import React from "react";

export interface ProduceDetailsProps {
  details: any;
  btns: React.ReactNode;
  user?: boolean;
}

export interface HighlightItemProps {
  title: string;
  value: string;
}
