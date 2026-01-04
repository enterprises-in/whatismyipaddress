"use client";

import Image from "next/image";
import { useState } from "react";

/* ---------------- SUPPORT LINK ---------------- */
const BMC_LINK = "https://buymeacoffee.com/developer.vikki";

/* ---------------- MOCK SUPPORTERS ---------------- */
const SUPPORTERS = Array.from({ length: 15 }).map((_, i) => ({
  rank: i + 1,
  name: `Supporter ${i + 1}`,
  date: new Date(Date.now() - i * 86400000).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }),
}));

const PAGE_SIZE = 5;

export default function DonatePage() {
  const [page, setPage] = useState(1);
  const [copied, setCopied] = useState(false);

  const start = (page - 1) * PAGE_SIZE;
  const paginated = SUPPORTERS.slice(start, start + PAGE_SIZE);

  const copyLink = async () => {
    await navigator.clipboard.writeText(BMC_LINK);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-12 space-y-8 bg-background text-foreground">
      {/* ---------- CREATOR / SUPPORT CARD ---------- */}
      <section className="rounded-2xl border border-border bg-card p-6 text-center space-y-4">
        <h1 className="text-2xl font-semibold">Support WhatIsMyIPAddress</h1>

        <p className="text-sm text-muted-foreground">
          If this project helps you, consider supporting us on Buy Me a Coffee.
          Your support keeps this tool free, fast, and privacy-friendly.
        </p>

        {/* LINK BOX */}
        <div className="rounded-xl border border-border bg-background p-4 text-sm flex items-center justify-between gap-3">
          <a
            href={BMC_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="truncate font-medium text-green-600 hover:underline"
          >
            {BMC_LINK}
          </a>

          <button
            onClick={copyLink}
            className="px-3 py-1 rounded-md border border-border text-xs hover:bg-muted"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        <p className="text-xs text-muted-foreground">
          Open this link on desktop or scan the QR code on your phone.
        </p>
      </section>

      {/* ---------- QR CODE SECTION ---------- */}
      <section className="rounded-2xl border border-border bg-card p-6 text-center space-y-4">
        <h2 className="text-lg font-semibold">Scan to Support</h2>

        <div className="flex justify-center">
          {/* Place QR in /public/bmc-qr.png */}
          <Image
            src="/bmc-qr.png"
            alt="Buy Me a Coffee QR Code"
            width={220}
            height={220}
            priority
          />
        </div>

        <p className="text-xs text-muted-foreground">
          Scan using your phone camera to open Buy Me a Coffee.
        </p>
      </section>

      {/* ---------- SUPPORTERS BOARD ---------- */}
    </main>
  );
}

// <section className="rounded-2xl border border-border bg-card p-6 space-y-4">
//         <div className="flex items-center justify-between">
//           <h2 className="text-lg font-semibold">☕ Recent Supporters</h2>
//           <span className="text-xs text-muted-foreground">
//             Via Buy Me a Coffee
//           </span>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full text-sm">
//             <thead>
//               <tr className="border-b border-border text-muted-foreground">
//                 <th className="text-left py-2">Rank</th>
//                 <th className="text-left py-2">Name</th>
//                 <th className="text-right py-2">Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {paginated.map((s) => (
//                 <tr
//                   key={s.rank}
//                   className="border-b border-border last:border-none"
//                 >
//                   <td className="py-3 font-mono">#{s.rank}</td>
//                   <td className="py-3">{s.name}</td>
//                   <td className="py-3 text-right text-muted-foreground">
//                     {s.date}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className="flex justify-between items-center text-sm">
//           <button
//             onClick={() => setPage((p) => Math.max(1, p - 1))}
//             disabled={page === 1}
//             className="px-3 py-1 rounded-md border border-border disabled:opacity-50"
//           >
//             Previous
//           </button>

//           <span className="text-muted-foreground">
//             Page {page} of {Math.ceil(SUPPORTERS.length / PAGE_SIZE)}
//           </span>

//           <button
//             onClick={() =>
//               setPage((p) =>
//                 start + PAGE_SIZE < SUPPORTERS.length ? p + 1 : p
//               )
//             }
//             disabled={start + PAGE_SIZE >= SUPPORTERS.length}
//             className="px-3 py-1 rounded-md border border-border disabled:opacity-50"
//           >
//             Next
//           </button>
//         </div>
//       </section>
