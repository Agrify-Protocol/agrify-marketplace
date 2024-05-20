import { Grid, Text } from "@chakra-ui/react";
import { FourColumnTableRowProps } from "./types";

const FourColumnTableRow = ({
  name,
  payment_status,
  location_or_tonnes,
  date,
  clickHandler,
}: FourColumnTableRowProps) => {
  const statusColor: { [x: string]: { [x: string]: string } } = {
    pending: { bg: "rgba(245, 203, 37, 0.05)", color: "rgba(245, 203, 37, 1)" },
    confirmed: { bg: "rgba(12, 193, 76, 0.05)", color: "rgba(12, 193, 76, 1)" },
  };

  const statusBgColor = statusColor[payment_status].bg;
  const statusTextColor = statusColor[payment_status].color;

  const handleClick = () => {
    if (payment_status !== "pending") {
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
    }
  };

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
        {name}
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
        {payment_status}
      </Text>
      <Text color={"black"}>{location_or_tonnes}</Text>
      <Text color={"black"}>{date}</Text>
    </Grid>
  );
};

export default FourColumnTableRow;
