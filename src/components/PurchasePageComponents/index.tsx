import { Box } from "@chakra-ui/react";
import BackButton from "../Common/BackButton/BackButton";
import PurchaseHeading from "./PurchaseHeading/PurchaseHeading";

const PurchaseComp = ({
  caption,
  name,
  children,
}: {
  caption?: string;
  name?: string;
  children: React.ReactNode;
}) => {
  return (
    <Box px={{ base: "24px", lg: "2.5rem" }}>
      <Box mt={{ base: "39px", lg: "4rem" }}>
        <BackButton />
      </Box>

      <Box
        my={{ base: "32px", lg: "40px" }}
        mx={"auto"}
        w={{ lg: "38.648rem" }}
      >
        <PurchaseHeading name={name} caption={caption} />
        <Box
          bgColor={"white"}
          borderRadius={"1rem"}
          px={{ base: "20px", lg: "2rem" }}
          py={{ base: "20px", lg: "2.813rem" }}
          mt={"3rem"}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default PurchaseComp;
