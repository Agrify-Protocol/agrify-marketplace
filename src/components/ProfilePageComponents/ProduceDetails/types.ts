import { User } from "@/context/AuthContext/types";
import React from "react";

export interface ProduceDetailsProps {
  details: any;
  btns: React.ReactNode;
  user: User | null;
}

export interface HighlightItemProps {
  title: string;
  value: string;
}
