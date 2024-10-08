import { BoxProps, Flex } from "@chakra-ui/react";
import Image from "next/image";
import no_poverty from "../../../assets/E_SDG_PRINT-01 1.svg";
import clean from "../../../assets/E_SDG_PRINT-06 1.svg";

export default function Stickers({ ...rest }: BoxProps) {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      gap={"0.25rem"}
      color={"white"}
      bgColor={"gray_2"}
      w={"6.237rem"}
      borderRadius={"2.357rem"}
      py={"0.362rem"}
      fontWeight={500}
      {...rest}
    >
      <Image src={no_poverty} alt="" />
      <Image src={clean} alt="" />
      +3
    </Flex>
  );
}
