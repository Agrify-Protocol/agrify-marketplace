import { LucideProps } from "lucide-react";
import React, { ReactNode } from "react";

export type ProjectHighlightProps = {
  highlights: {
    price: number;
    location: string;
    crediting_period: string;
    contract_type: string;
  };
};

export type HighlightBoxProps = {
  title: string;
  content: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  hideBorder?: boolean;
};
