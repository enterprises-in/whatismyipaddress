export default function Footer({ year = new Date().getFullYear() }) {
  return (
    <footer className="mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="rounded-lg p-6 border bg-card text-foreground border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* LEFT */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-md flex items-center justify-center bg-muted font-semibold">
              C
            </div>

            <div>
              <div className="text-xs text-muted-foreground">Coming Soon</div>

              <div className="mt-3 text-xs text-muted-foreground">
                <span>© {year} Coming Soon.</span>{" "}
                <span className="block md:inline">All rights reserved.</span>
              </div>
            </div>
          </div>

          {/* MIDDLE */}
          <nav
            aria-label="Footer navigation"
            className="flex gap-4 flex-wrap text-sm"
          >
            {[
              ["Privacy Policy", "/privacy"],
              ["Terms & Conditions", "/terms"],
              ["Docs", "/docs"],
              ["Contact Us", "/contact-us"],
              ["Donate", "/donate"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* RIGHT */}
          <div className="flex flex-col items-end gap-3">
            <div className="flex items-center gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/enterprises-in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-md hover:bg-muted transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <path d="M12 .5C5.73.5.98 5.25.98 11.52c0 4.58 2.98 8.46 7.12 9.83.52.1.71-.22.71-.5 0-.25-.01-1.05-.01-1.91-2.9.63-3.51-1.24-3.51-1.24-.48-1.22-1.17-1.55-1.17-1.55-.96-.66.07-.65.07-.65 1.06.08 1.62 1.1 1.62 1.1.94 1.62 2.46 1.15 3.06.88.09-.68.37-1.15.67-1.41-2.32-.26-4.75-1.16-4.75-5.17 0-1.14.4-2.07 1.06-2.8-.11-.26-.46-1.3.1-2.7 0 0 .86-.28 2.82 1.07A9.72 9.72 0 0112 6.8c.87.01 1.75.12 2.57.36 1.96-1.35 2.82-1.07 2.82-1.07.56 1.4.21 2.44.1 2.7.66.73 1.06 1.66 1.06 2.8 0 4.02-2.44 4.9-4.76 5.16.38.33.72.98.72 1.98 0 1.43-.01 2.58-.01 2.93 0 .28.19.61.72.5 4.14-1.37 7.12-5.25 7.12-9.83C23.02 5.25 18.27.5 12 .5z" />
                </svg>
              </a>
            </div>
            <div className="text-xs text-muted-foreground">
              Server status: <span className="font-mono text-primary">OK</span>
            </div>
          </div>
        </div>

        {/* LEGAL */}
        <div className="mt-4 text-center text-xs text-muted-foreground">
          By using this site you accept our terms and privacy policy. Use at
          your own responsibility.
        </div>
      </div>
    </footer>
  );
}
