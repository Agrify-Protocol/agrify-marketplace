"use client";

import { theme } from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname.includes("/product-story")) {
      document.body.style.background = "white";
    } else {
      document.body.style.background = "#F5F5F5";
    }

    return () => {
      document.body.style.background = "";
    };
  }, [pathname]);
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
