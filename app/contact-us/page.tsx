"use client";

import { useState } from "react";
import { submitContact } from "./actions";

export default function ContactUsPage() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(formData: FormData) {
    try {
      setStatus("loading");
      await submitContact(formData);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-10 bg-background text-foreground">
      {/* HEADER */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Contact Us
        </h1>
        <p className="mt-2 text-sm text-muted-foreground max-w-xl">
          Have a question, feedback, or issue? Send us a message and we’ll get
          back to you.
        </p>
      </header>

      {/* FORM CARD */}
      <section className="rounded-xl border border-border bg-card p-6">
        {status === "success" ? (
          <SuccessState />
        ) : (
          <form action={handleSubmit} className="space-y-5">
            <Field label="Name">
              <input
                name="name"
                required
                placeholder="Your full name"
                className="input"
              />
            </Field>

            <Field label="Email">
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="input"
              />
            </Field>

            <Field label="Subject">
              <input
                name="subject"
                required
                placeholder="What is this about?"
                className="input"
              />
            </Field>

            <Field label="Message">
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Write your message here…"
                className="input resize-none"
              />
            </Field>

            {status === "error" && (
              <p className="text-sm text-destructive">
                Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-md bg-primary text-primary-foreground py-2 text-sm font-semibold hover:opacity-90 transition"
            >
              {status === "loading" ? "Sending…" : "Send Message"}
            </button>
          </form>
        )}
      </section>

      {/* FOOT NOTE */}
      <p className="mt-6 text-xs text-muted-foreground text-center">
        Your IP address and browser details may be recorded for security and
        abuse prevention.
      </p>
    </main>
  );
}

/* ---------------- UI Helpers ---------------- */

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium">{label}</label>
      {children}
    </div>
  );
}

function SuccessState() {
  return (
    <div className="text-center py-10 space-y-3">
      <h2 className="text-xl font-semibold">Message Sent</h2>
      <p className="text-sm text-muted-foreground">
        Thank you for contacting us. We’ll respond as soon as possible.
      </p>
    </div>
  );
}
