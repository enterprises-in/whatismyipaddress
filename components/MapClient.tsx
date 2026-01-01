"use client";

import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* Fix Leaflet default marker icons (run once) */
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function MapClient() {
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [error, setError] = useState("");

  const showLocation = () => {
    const latitude = parseFloat(lat);
    const longitude = parseFloat(lng);

    if (
      Number.isNaN(latitude) ||
      Number.isNaN(longitude) ||
      latitude < -90 ||
      latitude > 90 ||
      longitude < -180 ||
      longitude > 180
    ) {
      setError("Please enter valid latitude and longitude.");
      setPosition(null);
      return;
    }

    setError("");
    setPosition([latitude, longitude]);
  };

  return (
    <>
      {/* INPUT CARD */}
      <section className="rounded-xl border bg-card p-6 shadow-sm">
        <h2 className="mb-4 text-sm font-semibold tracking-wide">
          Enter Coordinates
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <input
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            placeholder="Latitude (e.g. 28.6139)"
            className="rounded-md border px-3 py-2 text-sm"
          />

          <input
            value={lng}
            onChange={(e) => setLng(e.target.value)}
            placeholder="Longitude (e.g. 77.2090)"
            className="rounded-md border px-3 py-2 text-sm"
          />

          <button
            onClick={showLocation}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Show on Map
          </button>
        </div>

        {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
      </section>

      {/* MAP */}
      {position && (
        <section className="mt-8 rounded-xl border bg-card p-4">
          <div className="mb-3 flex justify-between text-sm text-muted-foreground">
            <span>Latitude: {position[0]}</span>
            <span>Longitude: {position[1]}</span>
          </div>

          <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom
            className="h-105 w-full rounded-lg"
          >
            <TileLayer
              attribution="© OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                Latitude: {position[0]}
                <br />
                Longitude: {position[1]}
              </Popup>
            </Marker>
          </MapContainer>
        </section>
      )}
    </>
  );
}
