import { Text } from "@chakra-ui/react";

const Pill = ({ status }: { status: string }) => {
  function getStatusColors() {
    switch (status) {
      case "pre-credits":
      case "pre-issuance":
        return { text: "#B274C9", bg: "#B274C91A" };

      case "ongoing":
      case "pending":
        return { text: "#FFCE04", bg: "#FFCE041A" };

      case "removal":
      case "avoidance":
        return { text: "#D64545", bg: "#D645451A" };

      case "validated":
      case "verified":
      case "created":
      case "minted":
      case "purchased":
        return { text: "#3CB371", bg: "#3CB3711A" };

      default:
        return { text: "text-black", bg: "#0000001A" };
    }
  }
  return (
    <Text
      as="span"
      color={getStatusColors().text}
      bg={getStatusColors().bg}
      px={3}
      py={2}
      rounded="8px"
      w="fit-content"
      fontSize="14px"
      textTransform="capitalize"
    >
      {status}
    </Text>
  );
};

export default Pill;
