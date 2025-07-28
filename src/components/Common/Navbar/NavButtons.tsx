import { Box } from "@chakra-ui/react";
import { NavButtonsProps } from "./types";
import { useAuthContext } from "@/context/AuthContext/AuthContext";

const NavButtons = ({ route, pathName, user, ...rest }: NavButtonsProps) => {
  const navMenu = [
    {
      title: "Marketplace",
      link: "/projects",
      base: ["/projects", "/farm", "/payment"],
    },
    {
      title: "My Profile",
      link: "/profile?id=overview",
      base: ["/profile"],
    },
  ];
  return (
    <Box {...rest}>
      {navMenu.slice(0, user ? navMenu.length : 1).map((item) => (
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
