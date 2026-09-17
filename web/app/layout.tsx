import "@fontsource-variable/inter";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Tourvia — Curated Expeditions",
  description: "Curated luxury expeditions for travelers who go beyond the map.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}