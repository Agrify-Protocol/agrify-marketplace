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
});

export { theme };
