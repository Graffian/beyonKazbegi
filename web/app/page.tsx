import type { Metadata } from "next";

import HomePage from "@/app/components/home-page";

export const metadata: Metadata = {
  title: "Tourvia — Curated Expeditions",
  description: "Curated luxury expeditions for travelers who go beyond the map.",
};

export default function Page() {
  return <HomePage />;
}