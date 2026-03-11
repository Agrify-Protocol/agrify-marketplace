/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Suisse } from "../fonts";
import { GlobalContextProvider } from "@/context/GlobalContext/GlobalContext";
import { AuthContextProvider } from "@/context/AuthContext/AuthContext";
import Navbar from "@/components/Common/Navbar/Navbar";
import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agrify Marketplace",
  description:
    "Agrify Marketplace focuses on regenerative farming and carbon offsetting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/logo.svg" type="image/svg+xml" />
      </head>
      <body className={`${Suisse.className} ${inter.className}`}>
        <ErrorBoundary>
          <GlobalContextProvider>
            <AuthContextProvider>
              <Providers>
                <Navbar />
                {children}
              </Providers>
            </AuthContextProvider>
          </GlobalContextProvider>
        </ErrorBoundary>
        {/* LinkedIn Insight Tag */}
        <Script id="linkedin-partner" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "8796730";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </Script>

        <Script
          id="linkedin-insight"
          strategy="afterInteractive"
          src="https://snap.licdn.com/li.lms-analytics/insight.min.js"
        />

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=8796730&fmt=gif"
          />
        </noscript>
      </body>
    </html>
  );
}
