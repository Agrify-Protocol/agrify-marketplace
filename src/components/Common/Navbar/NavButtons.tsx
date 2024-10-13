import { Box } from "@chakra-ui/react";
import { NavButtonsProps } from "./types";

const NavButtons = ({ route, pathName, ...rest }: NavButtonsProps) => {
  return (
    <Box {...rest}>
      {[
        {
          title: "Projects",
          link: "/projects",
          base: ["/projects", "/farm", "/payment"],
        },
        {
          title: "My Profile",
          link: "/profile?id=overview",
          base: ["/profile"],
        },
      ].map((item) => (
        <Box
          as="button"
          key={item.link}
          onClick={() => route.push(item.link)}
          background={
            item.base.some((base) => pathName.includes(base))
              ? "#EEEEEE"
              : "transparent"
          }
          borderRadius="1.905rem"
          padding="5.71px 11.43px 5.71px 11.43px"
          transition="all 0.25s ease-in-out"
          fontWeight="450"
          textColor={
            item.base.some((base) => pathName.includes(base))
              ? "black"
              : "#A6A6A6"
          }
        >
          {item.title}
        </Box>
      ))}
    </Box>
  );
};

export default NavButtons;
