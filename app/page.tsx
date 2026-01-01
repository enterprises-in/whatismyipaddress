"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
// Removed unused import: import MapsPage from "./maps/page";

// FIX: Import MapClient dynamically with ssr: false to prevent window errors
const MapClient = dynamic(() => import("@/components/MapClient"), {
  ssr: false,
  loading: () => (
    <div className="h-96 w-full bg-muted rounded-lg animate-pulse" />
  ),
});

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);

  const [ip, setIp] = useState("—");
  const [ipVersion, setIpVersion] = useState("—");
  const [isp, setISP] = useState("—");
  const [asn, setASN] = useState("—");

  const [city, setCity] = useState("—");
  const [region, setRegion] = useState("—");
  const [country, setCountry] = useState("—");
  const [countryCode, setCountryCode] = useState("—");
  const [postal, setPostal] = useState("—");

  const [lat, setLat] = useState<number | null>(null);
  const [lng, setLng] = useState<number | null>(null);
  const [timezone, setTimezone] = useState("—");
  const [localTime, setLocalTime] = useState("—");

  useEffect(() => {
    fetchIP();
  }, []);

  const fetchIP = async () => {
    try {
      setLoading(true);

      const ipRes = await fetch("https://api.ipify.org?format=json");
      const { ip } = await ipRes.json();

      setIp(ip);
      setIpVersion(ip.includes(":") ? "IPv6" : "IPv4");

      const meta = await fetch(`https://ipapi.co/${ip}/json/`).then((r) =>
        r.json()
      );

      setISP(meta?.org || "—");
      setASN(meta?.asn || "—");

      setCity(meta?.city || "—");
      setRegion(meta?.region || "—");
      setCountry(meta?.country_name || "—");
      setCountryCode(meta?.country_code || "—");
      setPostal(meta?.postal || "—");

      setLat(meta?.latitude ?? null);
      setLng(meta?.longitude ?? null);
      setTimezone(meta?.timezone || "—");

      if (meta?.timezone) {
        setLocalTime(
          new Date().toLocaleString("en-IN", {
            timeZone: meta.timezone,
            dateStyle: "medium",
            timeStyle: "short",
          })
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const copy = (v: string) => navigator.clipboard.writeText(v);

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 bg-background text-foreground">
      {/* TOP CARD */}
      <section className="rounded-xl border border-border bg-card p-6 mb-8">
        {loading ? (
          <SkeletonTop />
        ) : (
          <>
            <p className="text-sm text-muted-foreground font-mono">
              YOUR PUBLIC IP
            </p>
            <h1 className="font-mono text-4xl md:text-5xl mt-2">{ip}</h1>

            <div className="flex flex-wrap gap-3 mt-4">
              <button
                onClick={() => copy(ip)}
                className="px-4 py-2 rounded-md border border-border bg-muted hover:bg-accent text-sm font-mono"
              >
                COPY IP
              </button>

              <span className="px-3 py-1 rounded-full text-xs border border-border">
                {ipVersion}
              </span>
            </div>
          </>
        )}
      </section>

      {/* MAIN GRID */}
      {loading ? (
        <SkeletonGrid />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Section title="Network Information">
              <Row label="ISP" value={isp} />
              <Row label="ASN" value={asn} />
              <Row label="IP Version" value={ipVersion} />
            </Section>

            <Section title="Location Information">
              <Row label="City" value={city} />
              <Row label="State / Region" value={region} />
              <Row label="Country" value={`${country} (${countryCode})`} />
              <Row label="ZIP Code" value={postal} />
            </Section>

            <Section title="Geographical Coordinates">
              <Row
                label="Latitude"
                value={lat?.toString() ?? "—"}
                onCopy={lat ? () => copy(lat.toString()) : undefined}
              />
              <Row
                label="Longitude"
                value={lng?.toString() ?? "—"}
                onCopy={lng ? () => copy(lng.toString()) : undefined}
              />
            </Section>

            <Section title="Time Information">
              <Row label="Time Zone" value={timezone} />
              <Row label="Local Time" value={localTime} />
            </Section>
          </div>

          {/* ADVANCED INFO */}
          <section className="mt-8 rounded-xl border border-border bg-card">
            <button
              onClick={() => setExpanded(!expanded)}
              className="w-full px-6 py-4 flex justify-between items-center text-sm font-medium hover:bg-muted"
            >
              Advanced Information
              <span className="text-xs text-muted-foreground">
                {expanded ? "Hide" : "Show"}
              </span>
            </button>

            {expanded && (
              <div className="px-6 pb-6 space-y-3">
                <Row label="Country Code" value={countryCode} />
                <Row label="Postal Code" value={postal} />
                <Row label="Latitude" value={lat?.toString() ?? "—"} />
                <Row label="Longitude" value={lng?.toString() ?? "—"} />
                <Row label="Timezone" value={timezone} />
              </div>
            )}
          </section>
        </>
      )}

      <p className="text-xs text-muted-foreground mt-8 text-center">
        Data is approximate and based on public IP intelligence.
      </p>

      <section className="mt-15">
        <MapClient />
      </section>
    </main>
  );
}

/* ---------------- Skeletons ---------------- */

function SkeletonTop() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-4 w-32 bg-muted rounded" />
      <div className="h-10 w-64 bg-muted rounded" />
      <div className="h-8 w-40 bg-muted rounded" />
    </div>
  );
}

function SkeletonGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-pulse">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="rounded-xl border border-border bg-card p-5 space-y-3"
        >
          <div className="h-4 w-40 bg-muted rounded" />
          <div className="h-3 w-full bg-muted rounded" />
          <div className="h-3 w-3/4 bg-muted rounded" />
          <div className="h-3 w-2/3 bg-muted rounded" />
        </div>
      ))}
    </div>
  );
}

/* ---------------- UI Helpers ---------------- */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-border bg-card p-5">
      <h2 className="text-sm font-semibold mb-4">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function Row({
  label,
  value,
  onCopy,
}: {
  label: string;
  value: string;
  onCopy?: () => void;
}) {
  return (
    <div className="flex justify-between items-center gap-3 border-b border-border pb-2">
      <span className="text-sm text-muted-foreground">{label}</span>
      <div className="flex items-center gap-2">
        <span className="font-mono text-sm">{value}</span>
        {onCopy && (
          <button
            onClick={onCopy}
            className="text-xs px-2 py-0.5 border border-border rounded hover:bg-muted"
          >
            COPY
          </button>
        )}
      </div>
    </div>
  );
}
