"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const revealLinks = [
    ["Home", "/"],
    ["Maps", "/maps"],
    ["Docs", "/docs"],
    ["Contact", "/contact-us"],
    ["Donate", "/donate"],
  ];

  return (
    <header className="bg-background text-foreground border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* LEFT LOGO */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight hover:opacity-90"
        >
          Whatismyipaddress
        </Link>

        {/* DESKTOP CENTER */}
        <div className="hidden md:flex items-center gap-6">
          {/* SEARCH */}
          <div className="flex items-center gap-2 rounded-md border border-input bg-background px-3 py-1.5">
            <FaSearch className="text-muted-foreground text-sm" />
            <input
              type="text"
              placeholder="Enter your IP address"
              className="w-44 bg-transparent text-sm outline-none text-foreground placeholder:text-muted-foreground"
            />
          </div>

          {/* NAV */}
          <nav className="flex gap-6 text-sm font-medium">
            {revealLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* RIGHT ACTION (DESKTOP) */}
        <div className="hidden md:block">
          <Link
            href="#"
            onClick={() => alert("Coming soon")}
            className="rounded-md px-4 py-1.5 text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition"
          >
            Login
          </Link>
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden p-2 rounded-md border border-border hover:bg-muted transition"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 space-y-4">
            {/* SEARCH */}
            <div className="flex items-center gap-2 rounded-md border border-input bg-background px-3 py-2">
              <FaSearch className="text-muted-foreground text-sm" />
              <input
                type="text"
                placeholder="Enter your IP address"
                className="w-full bg-transparent text-sm outline-none text-foreground placeholder:text-muted-foreground"
              />
            </div>

            {/* LINKS */}
            <nav className="flex flex-col gap-3 text-sm font-medium">
              {revealLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* LOGIN */}
            <Link
              href="#"
              onClick={() => {
                setOpen(false);
                alert("Coming soon");
              }}
              className="block text-center rounded-md px-4 py-2 text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
