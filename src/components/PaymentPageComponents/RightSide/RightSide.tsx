import { usePaymentContext } from "@/context/PaymentContext/PaymentContext";
import { Box } from "@chakra-ui/react";
import React from "react";
import PaymentOption from "../PaymentOption/PaymentOption";
import InvoiceForm from "../InvoiceForm/InvoiceForm";
import Invoice from "../Invoice/Invoice";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";
import { parseDate } from "@/utils/parseData";

const RightSide = () => {
  const { paymentStage, invoiceData } = usePaymentContext();
  const { orderTotal, chosenProject, orderedAmount, subTotal } =
    useGlobalContext();
  const invoice_data = {
    clientName: invoiceData.client_name,
    paymentDueDate: invoiceData.due_date,
    phoneNumber: invoiceData.phone_number,
    projectId: chosenProject?._id,
    projectName: chosenProject?.title,
    quantity: +orderedAmount,
    amount: subTotal,
    totalAmount: orderTotal,
    invoiceNo: `INV${Math.floor(Math.random() * 5000)}`,
    address: chosenProject?.location,
    contactNo: invoiceData.phone_number,
    issuedOn: parseDate(new Date()),
  };
  return (
    <Box flexBasis={"50%"} minH={"100vh"} bgColor={"white"}>
      {paymentStage === 1 && <PaymentOption />}
      {paymentStage === 2 && <InvoiceForm />}
      {paymentStage === 3 && <Invoice invoice_data={invoice_data} />}
    </Box>
  );
};

export default RightSide;
