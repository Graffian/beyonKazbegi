import type { Metadata } from "next";

import DestinationPage from "@/app/components/destination-page";

export const metadata: Metadata = {
  title: "Destination — Georgia",
  description: "Explore Georgia's curated destinations and remote escapes.",
};

export default function Page() {
  return <DestinationPage />;
}