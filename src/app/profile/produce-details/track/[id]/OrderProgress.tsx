"use client";

import BackButton from "@/components/Common/BackButton/BackButton";
import { Box, Text } from "@chakra-ui/react";
import bus from "../../../../../assets/bus.svg";
import Image from "next/image";
import { useMemo } from "react";
import Accepted from "@/assets/track/Accepted";
import Stroke from "@/assets/track/Stroke";
import Shipped from "@/assets/track/Shipped";
import Transit from "@/assets/track/Transit";
import Delivered from "@/assets/track/Delivered";
import Arrived from "@/assets/track/Arrived";

const OrderProgress = ({
  step,
}: {
  step: number;
}) => {
  const progress = useMemo(() => {
    return [
      { title: "Order Accepted", icon: <Accepted status={step >= 0} /> },
      {
        title: "Order Packaged and Shipped",
        icon: <Shipped status={step >= 1} />,
      },
      {
        title: "In transit to destination country",
        icon: <Transit status={step >= 2} />,
      },
      { title: "Order Arrived country", icon: <Arrived status={step >= 3} /> },
      {
        title: "In transit to delivery location",
        icon: <Transit status={step >= 4} />,
      },
      { title: "Order Delivered", icon: <Delivered status={step >= 5} /> },
    ];
  }, [step]);

  return (
    <Box w="50%">
      {/* display="flex" alignItems="center" */}
      <Box maxW="300px" margin="10px auto">
        <BackButton />
        <Box>
          <Text mb={2} mt="23px">
            Track Your Ordrer
          </Text>
          <Box display="flex" alignItems="center" gap="8px">
            <Image
              src={bus}
              alt="bus icon"
              style={{ height: "40px", width: "40px", objectFit: "cover" }}
            />
            <Text fontSize="24px" fontWeight="500" color="black">
              {step === 5 ? "Order Delivered" : "In Transit"}
            </Text>
          </Box>
        </Box>
        <Box mt="50px">
          {progress.map((item, index) => (
            <Box display="flex" gap="8px">
              <Box display="flex" flexDir="column" alignItems="center">
                <Box>{item.icon}</Box>
                {progress.length - 1 !== index ? (
                  <Box>
                    <Stroke status={step >= index} />
                  </Box>
                ) : null}
              </Box>
              <Box>
                <Text
                  fontSize="18px"
                  fontWeight={step >= index ? "500" : "400"}
                  color={step >= index ? "black" : ""}
                >
                  {item.title}
                </Text>
                {step >= index ? (
                  <Text
                    fontWeight={step >= index ? "500" : "400"}
                    color="#A6A6A6"
                  >
                    07:59:00
                  </Text>
                ) : null}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default OrderProgress;
