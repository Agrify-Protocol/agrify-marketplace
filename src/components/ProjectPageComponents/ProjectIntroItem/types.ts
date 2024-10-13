import { BoxProps } from "@chakra-ui/react";

export interface ProjectIntroItemProps extends BoxProps {
  title: string;
  content: string;
  padding_x?: string;
  hideBorder?: boolean;
}
