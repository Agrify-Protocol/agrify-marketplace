import { Box } from "@chakra-ui/react";
import BackButton from "../Common/BackButton/BackButton";
import PurchaseBody from "./PurchaseBody/PurchaseBody";
import PurchaseHeading from "./PurchaseHeading/PurchaseHeading";

const PurchaseComp = ({
  caption,
  children,
}: {
  caption?: string;
  children: React.ReactNode;
}) => {
  return (
    <Box px={{ base: "24px", lg: "2.5rem" }}>
      <Box mt={{ base: "39px", lg: "4rem" }}>
        <BackButton />
      </Box>

      <Box
        my={{ base: "32px", lg: "7.688rem" }}
        mx={"auto"}
        w={{ lg: "38.648rem" }}
      >
        <PurchaseHeading caption={caption} />
        <PurchaseBody>{children}</PurchaseBody>
      </Box>
    </Box>
  );
};

export default PurchaseComp;
