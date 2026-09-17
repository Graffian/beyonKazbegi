import type { Metadata } from "next";

import HomePage from "@/app/components/home-page";

export const metadata: Metadata = {
  title: "Georgia — Curated Expeditions",
  description: "Curated luxury expeditions for travelers who go beyond the map with Georgia.",
};

export default function Page() {
  return <HomePage />;
}