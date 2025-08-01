"use client";

import BackButton from "@/components/Common/BackButton/BackButton";
import { Box, Text } from "@chakra-ui/react";
import bus from "../../../../../assets/bus.svg";
import Image from "next/image";
import { useMemo } from "react";
import Accepted from "@/assets/track/Accepted";
import Stroke from "@/assets/track/Stroke";
import Transit from "@/assets/track/Transit";
import Delivered from "@/assets/track/Delivered";
import { formatSnakeCaseTitle } from "@/utils/formatSnakeCaseTitle";
import { formatTimestampShort } from "@/utils/formatTimestampShort";

const OrderProgress = ({
  data,
  status,
  step,
}: {
  data: any;
  status: boolean[];
  step: number;
}) => {
  const progress = useMemo(() => {
    return [
      {
        key: "acceptedAt",
        title: "Order Accepted",
        icon: <Accepted status={!!data?.acceptedAt} />,
      },
      {
        key: "shippedAt",
        title: "Order in Transit",
        icon: <Transit status={!!data?.shippedAt} />,
      },
      {
        key: "deliveredAt",
        title: "Order Delivered",
        icon: <Delivered status={!!data?.deliveredAt} />,
      },
    ];
  }, [data]);

  return (
    <Box w="50%" alignSelf="center">
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
              {formatSnakeCaseTitle(data?.deliveryStatus)}
            </Text>
          </Box>
        </Box>
        <Box mt="50px">
          {progress.map((item, index) => (
            <Box display="flex" gap="8px" key={item.title}>
              <Box display="flex" flexDir="column" alignItems="center">
                <Box>{item.icon}</Box>
                {progress.length - 1 !== index ? (
                  <Box>
                    <Stroke status={!!data?.[item?.key]} />
                  </Box>
                ) : null}
              </Box>
              <Box>
                <Text
                  fontSize="18px"
                  fontWeight={!!data?.[item?.key] ? "500" : "400"}
                  color={!!data?.[item?.key] ? "black" : ""}
                >
                  {item.title}
                </Text>
                {!!data?.[item?.key] ? (
                  <Text
                    fontWeight={!!data?.[item?.key] ? "500" : "400"}
                    color="#A6A6A6"
                  >
                    {data?.[item?.key]
                      ? formatTimestampShort(data?.[item?.key])
                      : ""}
                  </Text>
                ) : null}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        height={step + 1 !== status.length ? `${80 - step * 5}%` : "0%"}
        bgGradient="linear(to-b, rgba(255,255,255,0), white)"
        pointerEvents="none"
        zIndex="1"
      />
    </Box>
  );
};

export default OrderProgress;
