import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Suisse } from "../fonts";
import { GlobalContextProvider } from "@/context/GlobalContext/GlobalContext";
import { AuthContextProvider } from "@/context/AuthContext/AuthContext";
import Navbar from "@/components/Common/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agrify Marketplace",
  description: "Agrify Marketplace focuses on regenerative farming and carbon offsetting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GlobalContextProvider>
      <AuthContextProvider>
        <html lang="en">
          <head>
            <link rel="icon" href="/icons/logo.svg" type="image/svg+xml" />
          </head>
          <body className={`${Suisse.className} ${inter.className}`}>
            <Providers>
              <Navbar />
              {children}
            </Providers>
          </body>
        </html>
      </AuthContextProvider>
    </GlobalContextProvider>
  );
}
