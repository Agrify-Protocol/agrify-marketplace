/* eslint-disable jsx-a11y/alt-text */
"use client";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import dynamic from "next/dynamic";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    color: "black",
    padding: "20px 40px",
  },
  title: {
    color: "#A6A6A6",
    fontWeight: 400,
    fontSize: "12px",
    letterSpacing: "1.5px",
    marginBottom: "8px",
  },
  value: {
    marginBottom: "40px",
    marginLeft: "10px",
  },
  image: {
    maxWidth: "100px",
    marginLeft: "-20px",
    marginBottom: "20px",
  },
  viewer: {
    width: typeof window !== "undefined" ? window.innerWidth : 800,
    height: typeof window !== "undefined" ? window.innerHeight : 600,
  },
});

const details =
  typeof window !== "undefined" ? localStorage.getItem("pdf_details") : null;
const parsedDetails = details ? JSON.parse(details) : {};

const parsedDetailsObj = [
  {
    title: "ID",
    value: parsedDetails?.id,
  },
  {
    title: "NAME",
    value: parsedDetails?.name,
  },
  {
    title: "CREATED AT",
    value: `${parsedDetails?.creation_date} at ${parsedDetails?.creation_time}`,
  },
];

const ViewGeneratedReport = () => {
  const PDFViewer = dynamic(
    () => import("@react-pdf/renderer").then((module) => module.PDFViewer),
    {
      ssr: false,
    }
  );
  return (
    <PDFViewer style={styles.viewer}>
      <Document title="Report Details">
        <Page size="A4" style={styles.page}>
          <View style={styles.image}>
            <Image
              src="https://media.licdn.com/dms/image/v2/C4D0BAQHkMmjNBYm3SA/company-logo_200_200/company-logo_200_200/0/1678098253417?e=1732752000&v=beta&t=BC1a1kY8Zg0bu3rnlCLRtgwuSpfcvBchMeFuQcKFuSU"
              cache={false}
            />
          </View>
          {parsedDetailsObj.map((item) => (
            <div key={item.title} style={{ marginLeft: "20px" }}>
              <View style={styles.title}>
                <Text>{item.title}</Text>
              </View>
              <View style={styles.value}>
                <Text>{item.value}</Text>
              </View>
            </div>
          ))}
        </Page>
      </Document>
    </PDFViewer>
  );
};
export default ViewGeneratedReport;
