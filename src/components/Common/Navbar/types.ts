import { BoxProps } from "@chakra-ui/react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export interface NavButtonsProps extends BoxProps {
  route: AppRouterInstance;
  pathName: string;
  user: boolean;
}
