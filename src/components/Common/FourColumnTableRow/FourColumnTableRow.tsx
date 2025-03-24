import { Grid, Text } from "@chakra-ui/react";
import { FourColumnTableRowProps } from "./types";
import { readableDate } from "@/utils/parseData";

const FourColumnTableRow = ({
  transaction,
  talbeBody,
  clickHandler,
  handleProduceClick,
}: FourColumnTableRowProps) => {
  const statusColor: { [x: string]: { [x: string]: string } } = {
    pending: { bg: "rgba(245, 203, 37, 0.05)", color: "rgba(245, 203, 37, 1)" },
    confirmed: { bg: "rgba(12, 193, 76, 0.05)", color: "rgba(12, 193, 76, 1)" },
  };

  const statusBgColor = transaction ? statusColor[transaction?.status].bg : "";
  const statusTextColor = transaction
    ? statusColor[transaction?.status].color
    : "";

  const handleClick = () => {
    transaction
      ? clickHandler?.({
          type: transaction?.purchaseType ?? "",
          txID: transaction
            ? transaction?.invoiceId
              ? transaction?.invoiceId
              : transaction?._id
            : "",
        })
      : null;
    handleProduceClick ? handleProduceClick() : null;
  };

  return (
    <Grid
      gridTemplateColumns={{ lg: "2fr 1fr 1fr 1fr" }}
      mb={"1.5rem"}
      py={{ lg: "1.25rem" }}
      alignItems={"center"}
      onClick={handleClick}
      gap={{ base: "50px", lg: "0px" }}
      cursor="pointer"
    >
      {transaction ? (
        <>
          <Text fontWeight={450} color={"black"} pl={"1.25rem"}>
            {transaction?.purchaseType == "invoice"
              ? "Generated Invoice"
              : "Card Payment"}
          </Text>
          <Text
            textTransform={"capitalize"}
            bgColor={statusBgColor}
            color={statusTextColor}
            w={"fit-content"}
            p={"0.5rem 1rem"}
            borderRadius={"1.89rem"}
            fontSize={"0.875rem"}
            display={{ base: "none", lg: "block" }}
          >
            {transaction?.status}
          </Text>
          <Text color={"black"} display={{ base: "none", lg: "block" }}>
            {transaction?.tonnes}
          </Text>
          <Text
            color={"black"}
            display={{ base: "none", lg: "block" }}
            style={{ textWrap: "nowrap" }}
          >
            {readableDate(String(transaction?.createdAt))}
          </Text>
        </>
      ) : null}
      {talbeBody ? talbeBody : null}
    </Grid>
  );
};

export default FourColumnTableRow;
