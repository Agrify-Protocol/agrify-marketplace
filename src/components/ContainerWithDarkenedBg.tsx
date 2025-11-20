import { Box } from "@chakra-ui/react";

const ContainerWithDarkenedBg = ({
  bg,
  opacity = 0.5,
  children,
}: {
  bg: { src: string };
  opacity?: number;
  children: React.ReactNode;
}) => {
  return (
    <Box
      py="38px"
      position="relative"
      rounded="16px"
      overflow="hidden"
      role="group"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bgImage={`linear-gradient(rgba(0,0,0,${opacity}), rgba(0,0,0,${opacity})), url(${bg.src})`}
        bgSize="cover"
        bgPos="center"
        zIndex="0"
        transition="transform 0.5s ease"
        _groupHover={{ transform: "scale(1.1)" }}
      />
      <Box position="relative" zIndex="1">
        {children}
      </Box>
    </Box>
  );
};

export default ContainerWithDarkenedBg;
