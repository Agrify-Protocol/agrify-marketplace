import { keyframes } from "@chakra-ui/react";

const spin = keyframes`  
  from {transform: rotate(0deg);}   
  to {transform: rotate(360deg)} 
`;

export const spinAnimation = `${spin} infinite 2s linear`;
