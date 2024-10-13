import { ButtonProps } from "@chakra-ui/react";

export interface AuthPageSubmitBtnProps extends ButtonProps {
  detailsFilled?: boolean;
  isLoading: boolean;
  text: string;
  isDisabled: boolean;
  onClickFunc: () => void;
  type?: "button" | "submit"
};
