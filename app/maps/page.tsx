import type { Metadata } from "next";
import MapPageView from "@/app/maps/MapPageView";

export const metadata: Metadata = {
  title: "Map Location Viewer | Latitude & Longitude to Map",
  description: "Enter latitude and longitude to view the exact location on an interactive map.",
  // ... keep your existing keywords and openGraph
};

export default function MapsPage() {
  return <MapPageView />;
}