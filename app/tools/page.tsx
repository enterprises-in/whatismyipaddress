export default function ToolsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 bg-background text-foreground">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Tools
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Advanced network utilities are under development.
        </p>
      </header>

      {/* Card */}
      <section className="rounded-xl border border-border bg-card p-6 space-y-6">
        <p className="text-sm text-muted-foreground">
          We’re currently building a collection of useful tools to help you
          analyze and understand your network in more detail.
        </p>

        <div className="rounded-lg border border-border bg-background p-4 text-sm">
          🚧 This section is coming soon.
        </div>

        <p className="text-xs text-muted-foreground">
          Stay tuned — new tools will be released gradually.
        </p>
      </section>
    </main>
  );
}
