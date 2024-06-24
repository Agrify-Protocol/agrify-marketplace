import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Suisse } from "../fonts";
import Navbar from "@/components/Common/Navbar/Navbar";
import { GlobalContextProvider } from "@/context/GlobalContext/GlobalContext";
import Head from "next/head";
import { AuthContextProvider } from "@/context/AuthContext/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agrify Carbon",
  description: "Generated by create next app",
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
            <Navbar />
            <Providers>{children}</Providers>
          </body>
        </html>
      </AuthContextProvider>
    </GlobalContextProvider>
  );
}
