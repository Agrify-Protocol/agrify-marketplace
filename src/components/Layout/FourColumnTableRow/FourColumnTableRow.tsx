import { Grid, Text } from "@chakra-ui/react";
import { FourColumnTableRowProps } from "./types";
import { parseDate, readableDate } from "@/utils/parseData";

const FourColumnTableRow = ({
  transaction,
  clickHandler,
}: FourColumnTableRowProps) => {
  const statusColor: { [x: string]: { [x: string]: string } } = {
    pending: { bg: "rgba(245, 203, 37, 0.05)", color: "rgba(245, 203, 37, 1)" },
    confirmed: { bg: "rgba(12, 193, 76, 0.05)", color: "rgba(12, 193, 76, 1)" },
  };

  const statusBgColor = statusColor[transaction.status].bg;
  const statusTextColor = statusColor[transaction.status].color;

  const handleClick = () => {
    if (transaction.status !== "pending") {
      const data = {
        type: "receipt",
        data: {
          amount: 502.64,
          date_time: "12:00 March 14, 2024",
          reference_code: "AGT88349990924",
          tonnes: 50,
        },
      };
      clickHandler?.(data);
    } else {
      const data = {
        type: "invoice",
        data: {
          amount: 100001.46,
          client_name: "Client Name",
          number: "12345678",
          due_date: "December 22, 2024",
          tonnes: 1000,
        },
      };
      clickHandler?.(data);
    }
  };

  console.log({ gg: transaction.createdAt });

  return (
    <Grid
      gridTemplateColumns={"2fr 1fr 1fr 1fr"}
      mb={"1.5rem"}
      py={"1.25rem"}
      alignItems={"center"}
      cursor={"pointer"}
      onClick={handleClick}
    >
      <Text fontWeight={450} color={"black"} pl={"1.25rem"}>
        {transaction.purchaseType == "invoice"
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
      >
        {transaction.status}
      </Text>
      <Text color={"black"}>{transaction.tonnes}</Text>
      <Text color={"black"}>{readableDate(String(transaction.createdAt))}</Text>
    </Grid>
  );
};

export default FourColumnTableRow;
