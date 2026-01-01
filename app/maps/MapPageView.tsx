"use client";

import dynamic from "next/dynamic";

// Dynamically import the Leaflet component
const MapClient = dynamic(() => import("@/components/MapClient"), {
  ssr: false,
  loading: () => <div className="h-96 w-full bg-muted rounded-lg animate-pulse flex items-center justify-center">Loading Map...</div>,
});

export default function MapPageView() {
  return (
    <main className="relative z-10 max-w-6xl mx-auto px-4 py-10 bg-background text-foreground">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Map Location Viewer
        </h1>
        <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
          Enter latitude and longitude to instantly view the exact position on
          an interactive map powered by OpenStreetMap.
        </p>
      </header>

      <MapClient />

      <p className="mt-10 text-center text-xs text-muted-foreground">
        Coordinates are shown exactly as entered. Map data © OpenStreetMap contributors.
      </p>
    </main>
  );
}