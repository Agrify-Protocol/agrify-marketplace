"use client";

import { theme } from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            retry: 1,
          },
        },
      }),
  );

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

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </QueryClientProvider>
  );
}
