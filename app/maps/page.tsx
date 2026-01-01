import type { Metadata } from "next";
import MapClient from "@/components/MapClient";

export const metadata: Metadata = {
  title: "Map Location Viewer | Latitude & Longitude to Map",
  description:
    "Enter latitude and longitude to view the exact location on an interactive map. Fast, accurate, and privacy-friendly map tool.",
  keywords: [
    "latitude longitude map",
    "map location viewer",
    "coordinates to map",
    "lat long finder",
    "openstreetmap viewer",
  ],
  openGraph: {
    title: "Map Location Viewer",
    description:
      "View any location on the map using latitude and longitude coordinates.",
    type: "website",
  },
};

export default function MapsPage() {
  return (
    <main className="relative z-10 max-w-6xl mx-auto px-4 py-10 bg-background text-foreground">
      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Map Location Viewer
        </h1>
        <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
          Enter latitude and longitude to instantly view the exact position on
          an interactive map powered by OpenStreetMap.
        </p>
      </header>

      {/* Client Map */}
      <MapClient />

      {/* Footer note */}
      <p className="mt-10 text-center text-xs text-muted-foreground">
        Coordinates are shown exactly as entered. Map data © OpenStreetMap
        contributors.
      </p>
    </main>
  );
}
