import { Text } from "@chakra-ui/react";
import { Info } from "lucide-react";
import Link from "next/link";

const KYCRedirect = ({
  status,
}: {
  status: "none" | "pending" | "approved" | "rejected" | undefined;
}) => {
  if (["approved", undefined].includes(status)) return null;

  const getTextColor = () => {
    switch (status) {
      case "pending":
        return "orange";
      case "rejected":
        return "red";
      default:
        return "black";
    }
  };
  return (
    <Text
      fontSize={{ base: "12px", md: "14px" }}
      color={getTextColor()}
      mb="16px"
      display="flex"
      alignItems="center"
      gap="8px"
    >
      <Info />
      {status === "none" && (
        <Text as="span" color={getTextColor()}>
          Please complete your KYC to proceed with the purchase.{" "}
          <Link
            href="/kyc"
            style={{
              fontWeight: 500,
              textDecoration: "underline",
            }}
          >
            Complete KYC
          </Link>
        </Text>
      )}
      {status === "pending" && (
        <Text color={getTextColor()}>Your KYC is under review.</Text>
      )}
      {status === "rejected" && (
        <Text color={getTextColor()}>
          Your KYC was rejected.{" "}
          <Link
            href="/kyc"
            style={{ fontWeight: 500, textDecoration: "underline" }}
          >
            Complete KYC
          </Link>
        </Text>
      )}
    </Text>
  );
};

export default KYCRedirect;
