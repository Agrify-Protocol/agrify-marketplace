import { useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { DatePickerProps } from "./types";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { Calendar } from "lucide-react";
import { parseDate } from "@/utils/parseData";
import { usePaymentContext } from "@/context/PaymentContext/PaymentContext";
import { Box, Button, Text } from "@chakra-ui/react";

const DatePicker = ({ updateDate }: DatePickerProps) => {
  const { invoiceData } = usePaymentContext();
  const [showCalendar, setShowCalendar] = useState(false);
  const [selected, setSelected] = useState<Date>();
  const calendarRef = useRef(null);

  useEffect(() => {
    if (selected) {
      const localeDate = parseDate(selected);
      updateDate(localeDate as unknown as Date);
      setShowCalendar(false);
    }
  }, [selected]);

  useOutsideClick(calendarRef, setShowCalendar, "can_click");

  return (
    <Box position={"relative"}>
      <Text>Due date</Text>
      <Button
        className="can_click"
        h={"3.5rem"}
        border={"1px solid"}
        _hover={{bg: "white"}}
        w={"100%"}
        p={"1rem"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        bgColor={"transparent"}
        borderColor={"gray_3"}
        borderRadius={"1rem"}
        fontWeight={"normal"}
        onClick={() => {
          setShowCalendar(!showCalendar);
        }}
      >
        {invoiceData.due_date as unknown as string}
        <Calendar className="can_click" />
      </Button>
      {showCalendar && (
        <div
          ref={calendarRef}
          className="bg-white dark:bg-secondary_dark shadow-md absolute top-[-23rem]"
        >
          <DayPicker mode="single" selected={selected} onSelect={setSelected} />
        </div>
      )}
    </Box>
  );
};

export default DatePicker;
