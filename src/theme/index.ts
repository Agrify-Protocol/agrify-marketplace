import { Suisse } from "../fonts";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#F5F5F5",
      },
      p: {
        color: "#A6A6A6",
      },
      fonts: {
        body: Suisse.style.fontFamily,
        heading: Suisse.style.fontFamily,
      },
    },
  },
  colors: {
    agrify_green: "#0CC14C",
    agrify_lavender: "#DAD7FE",
    gray_1: "#A6A6A6",
    gray_2: "rgba(15, 15, 15, 0.15)",
    gray_3: "#EEEEEE",
    main_black: "#0F0F0F",
    main_black_1: "#282828",
    main_black_2: "#0F0F0F",
    secondary_foreground: "#565656",
  },
});

export { theme };
