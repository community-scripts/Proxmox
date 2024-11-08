'use client'
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import React, { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Proxmox VE Helper-Scripts",
//   generator: "Next.js",
//   applicationName: "Proxmox VE Helper-Scripts",
//   referrer: "origin-when-cross-origin",
//   keywords: [
//     "Proxmox VE",
//     "Helper-Scripts",
//     "tteck",
//     "helper",
//     "scripts",
//     "proxmox",
//     "VE",
//   ],
//   authors: { name: "Bram Suurd" },
//   creator: "Bram Suurd",
//   publisher: "Bram Suurd",
//   description:
//     "A Front-end for the Proxmox VE Helper-Scripts (Community) Repository. Featuring over 200+ scripts to help you manage your Proxmox VE environment.",
//   favicon: "/app/favicon.ico",
//   formatDetection: {
//     email: false,
//     address: false,
//     telephone: false,
//   },
//   metadataBase: new URL("https://community-scripts.github.io/Proxmox/"),
//   openGraph: {
//     title: "Proxmox VE Helper-Scripts",
//     description:
//       "A Front-end for the Proxmox VE Helper-Scripts (Community) Repository. Featuring over 200+ scripts to help you manage your Proxmox VE environment.",
//     url: "/defaultimg.png",
//     images: [
//       {
//         url: "https://community-scripts.github.io/Proxmox/defaultimg.png",
//       },
//     ],
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const originalUrl = window.location.pathname;
    const newBaseUrl = "https://community-scripts.github.io/ProxmoxVE";

    const newUrl = originalUrl.replace(/^\/Proxmox/, newBaseUrl) || "/";

    if (newUrl !== window.location.href) {
      window.location.href = newUrl;
    }
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Page Redirection</title>
      </head>
      <body className={inter.className}>
        <p>
          If you are not redirected automatically, follow this{" "}
          <a href="https://community-scripts.github.io/ProxmoxVE">link to example</a>.
        </p>
        {children}
      </body>
    </html>
  );
}
