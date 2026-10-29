'use client'
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import React, { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
useEffect(() => {
  const originalUrl =
    window.location.pathname + window.location.search + window.location.hash;
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
