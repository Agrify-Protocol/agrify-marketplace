import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { NavButtonsProps } from "./types";
import { ChevronDown } from "lucide-react";

const NavButtons = ({ route, pathName, user, ...rest }: NavButtonsProps) => {
  const navMenu = [
    {
      title: "Home",
      link: "/home",
      base: ["/home", "/farm", "/payment"],
      children: [
        // { title: "Climate Arts", link: "/home/climate-arts" },
        { title: "Organic Produce", link: "/home/organic-produce" },
      ],
    },
    {
      title: "My Profile",
      link: "/profile?id=organic produce",
      base: ["/profile"],
    },
  ];

  const getMenuTitle = () => {
    if (pathName.includes("/home")) {
      switch (true) {
        case pathName.includes("climate-arts"):
          return "Climate Arts";
        case pathName.includes("organic-produce") ||
          pathName.includes("category"):
          return "Organic Produce";
        default:
          return "Home";
      }
    }
    return "Home";
  };

  return (
    <Box {...rest}>
      {navMenu.slice(0, user ? navMenu.length : 1).map((item) =>
        item.children ? (
          <Menu key={item.link}>
            <MenuButton
              bg={
                item.base.some((base) => pathName.includes(base))
                  ? "#EEEEEE"
                  : "transparent"
              }
              borderRadius="1.905rem"
              padding="5.71px 11.43px 5.71px 11.43px"
              transition="all 0.25s ease-in-out"
            >
              <Flex alignItems="center" gap="8px">
                <Text
                  fontWeight="450"
                  textColor={
                    item.base.some((base) => pathName.includes(base))
                      ? "black"
                      : "#A6A6A6"
                  }
                  display="inline-block"
                >
                  {getMenuTitle()}
                </Text>
                <ChevronDown size={"16px"} />
              </Flex>
            </MenuButton>
            <MenuList>
              <MenuItem key={item.title} onClick={() => route.push(item.link)}>
                {item.title}
              </MenuItem>
              {item.children.map((child) => (
                <MenuItem
                  key={child.title}
                  onClick={() => route.push(child.link)}
                >
                  {child.title}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ) : (
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
        )
      )}
    </Box>
  );
};

export default NavButtons;
