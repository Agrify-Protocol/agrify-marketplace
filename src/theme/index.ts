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
    main_black: "#0F0F0F",
  },
});

export { theme };
