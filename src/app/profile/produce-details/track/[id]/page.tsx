"use client";

import {
  Box,
  Button,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useToast,
} from "@chakra-ui/react";
import OrderProgress from "./OrderProgress";
import { useEffect, useMemo, useState } from "react";
import check from "../../../../../assets/icon-park-solid_check-one.svg";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import { getProduceDetails } from "@/services/api/profile";
import PageLoader from "@/components/Common/PageLoader/PageLoader";
import CompleteOrder from "./CompleteOrder";

const TrackOrder = () => {
  const [reload, setReload] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>({});
  const params = useParams();
  const { user } = useAuthContext();
  const toast = useToast();

  useEffect(() => {
    if (user) {
      getProduceDetails(params.id, toast).then((response) => {
        if (response) {
          setData(response);
          setIsLoading(false);
        }
      });
    }
  }, [user, reload]);

  const status = [!!data?.acceptedAt, !!data?.shippedAt, !!data?.deliveredAt];

  const step = useMemo(() => {
    return status.findLastIndex((item) => item === true);
  }, [data]);

  return (
    <>
      <Box display="flex" h="100vh">
        {isLoading ? (
          <PageLoader />
        ) : (
          <>
            <OrderProgress data={data} status={status} step={step} />
            <CompleteOrder
              step={step}
              reload={reload}
              setReload={setReload}
              setIsOpen={setIsOpen}
            />
          </>
        )}
      </Box>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        closeOnOverlayClick={false}
        isCentered
      >
        <ModalOverlay />
        <ModalContent
          minW="700px"
          display="flex"
          flexDir="column"
          alignItems="center"
          gap="30px"
          pt="50px"
          pb="30px"
        >
          <Box>
            <Image src={check} alt="check icon" width="25" height="25" />
          </Box>
          <Box
            width="255px"
            height="239px"
            borderRadius="8.9px"
            position="relative"
            overflow="hidden"
          >
            <Image
              src="https://res.cloudinary.com/isaacoduh/image/upload/v1742657336/occfki5q560pxn5chkzc.jpg"
              alt="check icon"
              width={255}
              height={239}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              bg="rgba(0, 0, 0, 0.4)"
              zIndex="1"
            />
          </Box>
          <Box>
            <Text fontSize="24px" fontWeight="500">
              Delivery Completed:{" "}
              <Text as="span" color="black">
                Cassava
              </Text>
            </Text>
          </Box>
          <Button
            border={"1px solid transparent"}
            color="white"
            bgColor={"main_black_1"}
            borderRadius={"2rem"}
            _hover={{
              bg: "#404040",
            }}
            width="fit-content"
            onClick={() => {
              setIsOpen(false);
              router.push("/profile?id=produce%20bought");
            }}
          >
            Continue
          </Button>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TrackOrder;
